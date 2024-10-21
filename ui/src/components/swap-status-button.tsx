import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

import ColoredPokeball from '../assets/ColoredPokeball.png'
import { PokemonStatus } from '../common/types/pokemon'

interface SwapStatusButtonProps {
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

export function SwapStatusButton({ status }: SwapStatusButtonProps) {
  const [currentStatus, setCurrentStatus] = useState(status)

  const handleSwap = () => {
    setCurrentStatus((prev) => statusMap[prev].next)
  }

  return (
    <button className="p-2 pt-0" onClick={handleSwap}>
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
