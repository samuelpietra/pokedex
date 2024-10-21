import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

import { Pokemon } from '../../common/classes/Pokemon/Pokemon'
import { PokemonTypeName } from '../../common/types/pokemon'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../../components/ui/chart'
import { getChartData } from './common'

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

interface PokemonStatsRadarChartProps {
  primaryType: PokemonTypeName
  stats: Pokemon['stats']
}

export function PokemonStatsRadarChart({
  primaryType,
  stats,
}: PokemonStatsRadarChartProps) {
  const chartData = getChartData(stats)

  return (
    <ChartContainer
      config={chartConfig}
      className="w-[320px] lg:w-[400px] xl:w-[500px]"
    >
      <RadarChart data={chartData}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <PolarAngleAxis dataKey="attribute" />
        <PolarGrid strokeWidth={2} />
        <Radar
          dataKey="points"
          fill={`hsl(var(--pk-type-${primaryType}))`}
          fillOpacity={0.75}
        />
      </RadarChart>
    </ChartContainer>
  )
}
