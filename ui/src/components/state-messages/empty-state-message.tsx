import { useNavigate } from 'react-router-dom'

import Psyduck from '../../assets/Psyduck.svg'

export function EmptyStateMessage() {
  const navigate = useNavigate()

  return (
    <div className="flex h-[185px] flex-col items-center justify-center gap-2">
      <img src={Psyduck} alt="" className="w-[70px]" />

      <span className="font-bold text-pk-gray-dark">
        Empty! <span className="font-normal">Nothing to see!</span>
      </span>

      <button
        className="items-center rounded-md bg-pk-type-normal p-2 font-bold text-pk-gray-white hover:opacity-60"
        onClick={() => navigate('/')}
      >
        Back to Dashboard
      </button>
    </div>
  )
}
