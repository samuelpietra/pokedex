import { ArrowDown10, ArrowDownZA, ArrowUp01, ArrowUpAZ } from 'lucide-react'

import { Pokemon } from '../common/classes/Pokemon/Pokemon'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog'

interface SortDialogProps {
  onClose: () => void
  setItems: (items: Pokemon[] | ((prev: Pokemon[]) => Pokemon[])) => void
}

export function SortDialog({ onClose, setItems }: SortDialogProps) {
  const handleSort = (filter?: string) => {
    switch (filter) {
      case 'name_asc':
        setItems((prev) =>
          [...prev].sort((a, b) => a.name.localeCompare(b.name)),
        )
        break
      case 'name_desc':
        setItems((prev) =>
          [...prev].sort((a, b) => b.name.localeCompare(a.name)),
        )
        break
      case 'height_asc':
        setItems((prev) => [...prev].sort((a, b) => a.height - b.height))
        break
      case 'height_desc':
        setItems((prev) => [...prev].sort((a, b) => b.height - a.height))
        break
      case 'weight_asc':
        setItems((prev) => [...prev].sort((a, b) => a.weight - b.weight))
        break
      case 'weight_desc':
        setItems((prev) => [...prev].sort((a, b) => b.weight - a.weight))
        break
      case 'type_asc':
        setItems((prev) =>
          [...prev].sort((a, b) => a.types[0].localeCompare(b.types[0])),
        )
        break
      case 'type_desc':
        setItems((prev) =>
          [...prev].sort((a, b) => b.types[0].localeCompare(a.types[0])),
        )
        break
      default:
        setItems((prev) => [...prev].sort((a, b) => a.id - b.id))
        break
    }

    onClose()
  }

  return (
    <DialogContent className="w-[300px]">
      <DialogHeader>
        <DialogTitle>Sort by</DialogTitle>
      </DialogHeader>

      <h1 className="text-pk-body-1 font-bold text-pk-gray-dark">Name</h1>

      <Card className="flex justify-evenly p-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => handleSort('name_asc')}
          type="submit"
        >
          <ArrowUpAZ />
          ASC
        </Button>

        <Button size="sm" onClick={() => handleSort('name_desc')}>
          <ArrowDownZA />
          DESC
        </Button>
      </Card>

      <h1 className="text-pk-body-1 font-bold text-pk-gray-dark">Height</h1>

      <Card className="flex justify-evenly p-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => handleSort('height_asc')}
        >
          <ArrowUp01 />
          ASC
        </Button>

        <Button size="sm" onClick={() => handleSort('height_desc')}>
          <ArrowDown10 />
          DESC
        </Button>
      </Card>

      <h1 className="text-pk-body-1 font-bold text-pk-gray-dark">Weight</h1>

      <Card className="flex justify-evenly p-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => handleSort('weight_asc')}
        >
          <ArrowUp01 />
          ASC
        </Button>

        <Button size="sm" onClick={() => handleSort('weight_desc')}>
          <ArrowDown10 />
          DESC
        </Button>
      </Card>

      <h1 className="text-pk-body-1 font-bold text-pk-gray-dark">Type</h1>

      <Card className="flex justify-evenly p-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => handleSort('type_asc')}
        >
          <ArrowUpAZ />
          ASC
        </Button>

        <Button size="sm" onClick={() => handleSort('type_desc')}>
          <ArrowDownZA />
          DESC
        </Button>
      </Card>

      <Button
        className="mt-2"
        size="sm"
        variant="outline"
        onClick={() => handleSort(undefined)}
      >
        Clear
      </Button>
    </DialogContent>
  )
}
