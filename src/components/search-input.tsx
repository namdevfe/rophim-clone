'use client'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'

interface SearchInputProps {
  className?: string
}

const SearchInput = ({ className = '' }: SearchInputProps) => {
  return (
    <form
      className={cn(
        'relative flex items-center h-11 max-w-[368px] w-full text-white',
        className
      )}
    >
      <Search
        size={22}
        className='absolute z-10 left-4 top-2/4 -translate-y-2/4'
      />
      <Input
        className='h-full px-12 py-[6px] text-sm placeholder:text-white placeholder:text-xs border-transparent bg-[#ffffff14] focus:border-white'
        placeholder='Tìm kiếm phim, diễn viên'
      />
    </form>
  )
}

export default SearchInput
