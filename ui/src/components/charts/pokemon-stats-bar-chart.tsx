import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts'

import { Pokemon } from '../../common/classes/Pokemon/Pokemon'
import { PokemonTypeName } from '../../common/types/pokemon'
import { ChartConfig, ChartContainer } from '../../components/ui/chart'
import { getChartData } from './common'

const chartConfig = {
  label: {
    color: 'hsl(var(--background))',
  },
} satisfies ChartConfig

interface PokemonStatsBarChartProps {
  primaryType: PokemonTypeName
  stats: Pokemon['stats']
}

export function PokemonStatsBarChart({
  primaryType,
  stats,
}: PokemonStatsBarChartProps) {
  const chartData = getChartData(stats)

  return (
    <ChartContainer
      config={chartConfig}
      className="-ml-5 w-[320px] lg:w-[400px] xl:w-[500px]"
    >
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <YAxis
          dataKey="attribute"
          type="category"
          tickLine={false}
          tickMargin={12}
        />

        <XAxis dataKey="points" type="number" hide />

        <Bar
          dataKey="points"
          fill={`hsl(var(--pk-type-${primaryType}))`}
          radius={4}
          background={{
            fill: `hsl(var(--pk-type-${primaryType}))`,
            fillOpacity: '20%',
            radius: 4,
          }}
          barSize={16}
        >
          <LabelList
            dataKey="points"
            position="left"
            offset={-32}
            fill="hsl(var(--pk-gray-white))"
            className="font-bold"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
