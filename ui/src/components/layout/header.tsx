import { Hash } from 'lucide-react'

import Pokeball from '../../assets/Pokeball.svg'
import { SearchInput } from '../ui/search-input'

export function Header() {
  return (
    <div className="p-3">
      <div className="mb-2 flex flex-row gap-4">
        <img alt="" className="h-6 w-6 text-pk-gray-white" src={Pokeball} />

        <h1 className="text-pk-headline font-bold text-pk-gray-white">
          Pokédex
        </h1>
      </div>

      <div className="flex flex-row items-center gap-4 sm:w-[300px]">
        <SearchInput placeholder="Search" />

        <button className="rounded-full bg-pk-gray-white p-2 hover:bg-pk-gray-background">
          <Hash className="h-4 w-4 text-pk-primary" />
          <span className="sr-only">Filter by</span>
        </button>
      </div>
    </div>
  )
}
