import { useNavigate } from 'react-router-dom'

import Abra from '../../assets/Abra.png'

export function NotFoundStateMessage() {
  const navigate = useNavigate()

  return (
    <div className="flex h-[180px] flex-col items-center justify-center gap-2">
      <img src={Abra} alt="" className="w-[130px]" />

      <span className="font-bold text-pk-gray-dark">
        Not found! <span className="font-normal">Bye-bye!</span>
      </span>

      <button
        className="items-center rounded-md bg-pk-type-rock p-2 font-bold text-pk-gray-white hover:opacity-60"
        onClick={() => navigate('/')}
      >
        Back to Dashboard
      </button>
    </div>
  )
}
