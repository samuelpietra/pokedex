'use client'

import { TrendingUp } from 'lucide-react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../../components/ui/chart'

const chartData = [
  { attribute: 'HP', points: 186 },
  { attribute: 'ATK', points: 305 },
  { attribute: 'DEF', points: 237 },
  { attribute: 'SATK', points: 73 },
  { attribute: 'SDEF', points: 209 },
  { attribute: 'SPD', points: 214 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function PokemonStatsRadarChart() {
  return (
    <ChartContainer config={chartConfig} className="w-[320px]">
      <RadarChart data={chartData}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <PolarAngleAxis dataKey="attribute" />
        <PolarGrid strokeWidth={2} />
        <Radar
          dataKey="points"
          fill="hsl(var(--pk-type-grass))"
          fillOpacity={0.75}
        />
      </RadarChart>
    </ChartContainer>
  )
}
