import { Hash } from 'lucide-react'

import Pokeball from '../../assets/Pokeball.svg'
import { SearchInput } from '../ui/search-input'

export function Header() {
  return (
    <div className="p-3">
      <div className="mb-2 flex flex-row gap-4">
        <img alt="" className="text-pk-gray-white h-6 w-6" src={Pokeball} />

        <h1 className="text-pk-headline text-pk-gray-white font-bold">
          Pokédex
        </h1>
      </div>

      <div className="flex flex-row items-center gap-4">
        <SearchInput placeholder="Search" />

        <button className="bg-pk-gray-white hover:bg-pk-gray-background rounded-full p-2">
          <Hash className="text-pk-primary h-4 w-4" />
          <span className="sr-only">Filter by</span>
        </button>
      </div>
    </div>
  )
}
