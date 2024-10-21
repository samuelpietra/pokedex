import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts'

import { ChartConfig, ChartContainer } from '../../components/ui/chart'

const chartData = [
  { attribute: 'HP', points: 186 },
  { attribute: 'ATK', points: 305 },
  { attribute: 'DEF', points: 237 },
  { attribute: 'SATK', points: 73 },
  { attribute: 'SDEF', points: 209 },
  { attribute: 'SPD', points: 214 },
]

const chartConfig = {
  label: {
    color: 'hsl(var(--background))',
  },
} satisfies ChartConfig

export function PokemonStatsBarChart() {
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
          fill="hsl(var(--pk-type-grass))"
          radius={4}
          background={{
            fill: 'hsl(var(--pk-type-grass))',
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
