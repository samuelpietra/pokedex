import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

import ColoredPokeball from '../assets/ColoredPokeball.png'
import { Pokemon } from '../common/classes/Pokemon/Pokemon'
import { PokemonStatus } from '../common/types/pokemon'
import useHttpStateful from '../hooks/useHttpStateful'

interface SwapStatusButtonProps {
  id: number
  onUpdateStatus: () => void
  status: PokemonStatus
}

const statusMap = {
  [PokemonStatus.Captured]: {
    label: 'Caught',
    icon: <img src={ColoredPokeball} alt="" className="h-4 w-4" />,
    next: PokemonStatus.Unknown,
  },
  [PokemonStatus.Seen]: {
    label: 'Seen',
    icon: <Eye className="h-4 w-4 text-pk-gray-dark" />,
    next: PokemonStatus.Captured,
  },
  [PokemonStatus.Unknown]: {
    label: 'Unknown',
    icon: <EyeOff className="h-4 w-4 text-pk-gray-dark" />,
    next: PokemonStatus.Seen,
  },
}

export function SwapStatusButton({
  id,
  onUpdateStatus,
  status,
}: SwapStatusButtonProps) {
  const [currentStatus, setCurrentStatus] = useState(status)

  const { isLoading: isUpdatingStatus, request: updateStatus } =
    useHttpStateful<Pokemon>('patch', 'v1/pokemons/:id')

  const handleSwap = async () => {
    const { error } = await updateStatus({
      urlParams: { id },
      body: { status: statusMap[currentStatus].next },
    })

    if (error) {
      return
    }

    setCurrentStatus((prev) => statusMap[prev].next)
    onUpdateStatus()
  }

  return (
    <button
      className="p-2 pt-0"
      disabled={isUpdatingStatus}
      onClick={handleSwap}
    >
      <div className="mb-2 flex flex-row items-center gap-2">
        {statusMap[currentStatus].icon}

        <p className="text-pk-body-2 text-pk-gray-dark">
          {statusMap[currentStatus].label}
        </p>
      </div>

      <p className="text-pk-body-3 text-pk-gray-medium">Status</p>
    </button>
  )
}
