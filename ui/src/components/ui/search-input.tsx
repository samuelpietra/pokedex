import { Search } from 'lucide-react'
import * as React from 'react'
import { cn } from 'src/utils'

export type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex w-full items-center rounded-xl border border-input bg-white pl-3 text-pk-body-2 ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2',
          className,
        )}
      >
        <Search className="mr-2 h-4 w-4 text-pk-primary" />

        <input
          type="search"
          className={cn(
            'w-full rounded-xl p-2 pl-0 pr-4 placeholder:text-pk-gray-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
SearchInput.displayName = 'SearchInput'

export { SearchInput }
