interface PokemonSectionProps {
  title: string
}

export function PokemonSection({ title }: PokemonSectionProps) {
  return (
    <div className="mb-4 flex justify-center">
      <p className="text-pk-sub-1 font-bold text-pk-gray-dark">{title}</p>
    </div>
  )
}
