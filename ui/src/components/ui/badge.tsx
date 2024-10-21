import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from 'src/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-xl border px-2.5 py-0.5 text-pk-sub-3 font-bold text-pk-gray-white transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent',
  {
    variants: {
      variant: {
        bug: 'bg-pk-type-bug',
        dark: 'bg-pk-type-dark',
        dragon: 'bg-pk-type-dragon',
        electric: 'bg-pk-type-electric',
        fairy: 'bg-pk-type-fairy',
        fightning: 'bg-pk-type-fightning',
        fire: 'bg-pk-type-fire',
        flying: 'bg-pk-type-flying',
        ghost: 'bg-pk-type-ghost',
        normal: 'bg-pk-type-normal',
        grass: 'bg-pk-type-grass',
        ground: 'bg-pk-type-ground',
        ice: 'bg-pk-type-ice',
        poison: 'bg-pk-type-poison',
        psychic: 'bg-pk-type-psychic',
        rock: 'bg-pk-type-rock',
        steel: 'bg-pk-type-steel',
        water: 'bg-pk-type-water',
        unkown: 'bg-pk-gray-medium',
      },
    },
    defaultVariants: {
      variant: 'unkown',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
