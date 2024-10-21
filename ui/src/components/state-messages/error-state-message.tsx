import Haunter from '../../assets/Haunter.png'

interface ErrorStateMessageProps {
  onRetry: () => void
}

export function ErrorStateMessage({ onRetry }: ErrorStateMessageProps) {
  return (
    <div className="flex h-[180px] flex-col items-center justify-center gap-2">
      <img src={Haunter} alt="" className="w-[100px]" />

      <span className="font-bold text-pk-gray-dark">
        Boo! <span className="font-normal">Haunted by error!</span>
      </span>

      <button
        className="rounded-md bg-pk-type-ghost p-2 font-bold text-pk-gray-white hover:opacity-60"
        onClick={onRetry}
      >
        Keep trying again
      </button>
    </div>
  )
}
