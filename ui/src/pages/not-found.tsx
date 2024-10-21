import { useNavigate } from 'react-router-dom'

import Snorlax from '../assets/Snorlax.jpg'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="bg-pk-not-found flex h-screen w-screen min-w-[400px] flex-col items-center justify-center">
      <img src={Snorlax} alt="" className="w-[400px]" />

      <h1 className="text-pk-head font-bold text-pk-gray-dark">404</h1>

      <span className="mb-6 font-bold text-pk-gray-dark">
        Oops!{' '}
        <span className="font-normal">
          A wild Snorlax has blocked your path!
        </span>
      </span>

      <button
        className="bg-pk-not-found-foreground rounded-md p-2 font-bold text-pk-gray-white hover:opacity-60"
        onClick={() => navigate('/')}
      >
        Back to Dashboard
      </button>
    </div>
  )
}
