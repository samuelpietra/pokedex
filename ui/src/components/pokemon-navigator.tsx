import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

export function PokemonNavigator() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  if (!id) return null

  const parsedId = Number(id)

  return (
    <div className="z-10 flex items-center justify-between px-[30px] sm:px-[130px] md:px-[200px] lg:px-[330px] xl:px-[430px]">
      <button
        onClick={() =>
          navigate(parsedId === 1 ? '/' : `/pokemons/${parsedId - 1}`)
        }
      >
        <ChevronLeft className="h-8 w-8 text-pk-gray-white" />
        <span className="sr-only">Previous Pokémon</span>
      </button>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parsedId}.png`}
        alt=""
        className="z-10 w-[200px]"
      />

      <button onClick={() => navigate(`/pokemons/${parsedId + 1}`)}>
        <ChevronRight className="h-8 w-8 text-pk-gray-white" />
        <span className="sr-only">Next Pokémon</span>
      </button>
    </div>
  )
}
