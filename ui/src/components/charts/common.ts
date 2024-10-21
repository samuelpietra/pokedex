import { Pokemon } from '../../common/classes/Pokemon/Pokemon'
import { PokemonStatName } from '../../common/types/pokemon'

const statsMap: Record<PokemonStatName, string> = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SATK',
  'special-defense': 'SDEF',
  speed: 'SPD',
}

const getChartData = (stats: Pokemon['stats']) =>
  stats.map(({ name, points }) => ({
    attribute: statsMap[name],
    points,
  }))

export { getChartData, statsMap }
