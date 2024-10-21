interface ContentProps {
  children: React.ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <div className="m-2 w-full flex-1 rounded-lg bg-pk-gray-white px-3 py-6">
      {children}
    </div>
  )
}
