interface ContentProps {
  children: React.ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <div className="bg-pk-gray-white m-2 flex-1 rounded-lg px-3 py-6">
      {children}
    </div>
  )
}
