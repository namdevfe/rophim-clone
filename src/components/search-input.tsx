'use client'
import { Input } from '@/components/ui/input'
import { ROUTES } from '@/constants/route'
import { handleURLImage } from '@/lib/helper-function'
import { cn } from '@/lib/utils'
import { Movie } from '@/types/movie'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

interface SearchInputProps {
  className?: string
  searchResults?: Movie[]
  isLoading?: boolean
  onSubmit?: (value: { keyword: string }) => void
}

const SearchInput = ({
  className = '',
  searchResults = [],
  isLoading = false,
  onSubmit
}: SearchInputProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [keyword, setKeyword] = useState<string>('')
  const [isShowResults, setIsShowResults] = useState<boolean>(false)
  const typingTimeoutRef = useRef<any>(null)
  const searchInputRef = useRef<HTMLFormElement>(null)

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setKeyword(value)

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      onSubmit?.({ keyword: value })
    }, 300)
  }

  /** Clear keyword when pathname change */
  useEffect(() => {
    setKeyword('')
  }, [pathname])

  /** Close search results when click outside */
  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target as Node)
      ) {
        setIsShowResults(false)
      }
    }

    document.addEventListener('click', handleOutSideClick)

    return () => document.removeEventListener('click', handleOutSideClick)
  }, [])

  useEffect(() => {
    setIsShowResults(true)
  }, [searchResults.length])

  return (
    <form
      className={cn(
        'relative flex items-center h-11 max-w-[368px] w-full text-white',
        className
      )}
      ref={searchInputRef}
      onSubmit={(e) => e.preventDefault()}
    >
      <Search
        size={22}
        className='absolute z-10 left-4 top-2/4 -translate-y-2/4'
      />
      <Input
        className='h-full px-12 py-[6px] text-sm placeholder:text-white placeholder:text-xs border-transparent bg-[#ffffff14] focus:border-white'
        placeholder='Tìm kiếm phim'
        onChange={handleSearchChange}
        onClick={() => setIsShowResults(true)}
        value={keyword}
      />

      {!isLoading && searchResults.length > 0 && isShowResults && (
        <div className='flex flex-col gap-4 p-5 bg-[#0f111af2] backdrop-blur-lg absolute left-0 top-[calc(100%+8px)] w-full max-h-[500px] overflow-y-auto custom-scroll rounded-lg'>
          {searchResults.map((movie) => {
            const { slug, poster_url, name, origin_name } = movie || {}
            const fullPosterURL = handleURLImage(poster_url)

            return (
              <figure
                key={movie._id}
                className='movies-item flex items-center h-[120px]'
              >
                <div
                  className='flex items-center flex-1 bg-transparent transition-colors duration-300 hover:bg-[#ffffff05] rounded-lg overflow-hidden cursor-pointer'
                  onClick={() => router.push(ROUTES.MAIN.PHIM(slug))}
                >
                  {/* Thumb image */}
                  <Link
                    href={ROUTES.MAIN.PHIM(slug)}
                    className='relative flex flex-shrink-0 w-20 h-full rounded-lg overflow-hidden'
                  >
                    <Image
                      src={fullPosterURL}
                      alt={name}
                      title={name}
                      width={500}
                      height={400}
                      className='w-full h-full object-cover'
                    />
                  </Link>

                  {/* Content */}
                  <div className='py-[10px] px-4'>
                    <h3 className='xs:h-10 mb-[6px] text-sm text-white capitalize xs:truncate xs:line-clamp-2 xs:text-wrap xs:whitespace-normal transition-colors duration-300 hover:text-primaryCustom'>
                      <Link href={ROUTES.MAIN.PHIM(slug)} title={name}>
                        {name}
                      </Link>
                    </h3>
                    <p className='text-xs text-textBase capitalize xs:truncate xs:line-clamp-2 xs:text-wrap xs:whitespace-normal'>
                      {origin_name}
                    </p>
                  </div>
                </div>
              </figure>
            )
          })}
        </div>
      )}

      {!isLoading &&
        !!keyword &&
        searchResults.length === 0 &&
        isShowResults && (
          <div className='flex flex-col gap-4 p-5 bg-[#0f111af2] backdrop-blur-lg absolute left-0 top-[calc(100%+8px)] w-full max-h-[500px] overflow-y-auto custom-scroll rounded-lg'>
            <div className='text-center'>Không tìm thấy phim nào</div>
          </div>
        )}

      {isLoading && isShowResults && (
        <div className='flex flex-col gap-4 p-5 bg-[#0f111af2] backdrop-blur-lg absolute left-0 top-[calc(100%+8px)] w-full max-h-[500px] overflow-y-auto custom-scroll rounded-lg'>
          <div className='text-center'>Đang tìm kiếm...</div>
        </div>
      )}
    </form>
  )
}

export default SearchInput
