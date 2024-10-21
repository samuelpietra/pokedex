export function PokemonTimeline() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-3">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt=""
        className="w-[120px]"
      />

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
        alt=""
        className="w-[120px] grayscale filter"
      />

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
        alt=""
        className="w-[120px] grayscale filter"
      />
    </div>
  )
}
