import { Filter, Icon, icons, NotepadText, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import Pokeball from '../assets/Pokeball.svg'
import { SearchInput } from './ui/search-input'

interface PageHeaderProps {
  title: 'Collection' | 'Dashboard'
}

export function PageHeader({ title }: PageHeaderProps) {
  const navigate = useNavigate()

  const NavigateButton = () => {
    const isCollection = title === 'Collection'
    const LucideIcon = icons[isCollection ? 'NotepadText' : 'User']

    return (
      <button
        className="rounded-full bg-pk-gray-white p-2 hover:bg-pk-gray-background"
        onClick={() => navigate(isCollection ? '/' : '/collection')}
      >
        <LucideIcon className="h-4 w-4 text-pk-primary" />
        <span className="sr-only">
          {`Navigate to ${isCollection ? 'Dashboard' : 'Collection'}`}
        </span>
      </button>
    )
  }

  return (
    <div className="mb-6">
      <div className="mb-2 flex flex-row gap-4">
        <img alt="" className="h-6 w-6 text-pk-gray-white" src={Pokeball} />

        <h1 className="text-pk-headline font-bold text-pk-gray-white">
          {title}
        </h1>
      </div>

      <div className="flex flex-row items-center gap-4 sm:w-[350px]">
        <SearchInput placeholder="Search" />

        <button className="rounded-full bg-pk-gray-white p-2 hover:bg-pk-gray-background">
          <Filter className="h-4 w-4 text-pk-primary" />
          <span className="sr-only">Filter by</span>
        </button>

        {NavigateButton()}
      </div>
    </div>
  )
}
