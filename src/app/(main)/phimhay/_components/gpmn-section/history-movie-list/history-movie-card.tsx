'use client'
import { ROUTES } from '@/constants/route'
import { Movie } from '@/types/movie'
import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

interface HistoryMovieCardProps {
  slug: string
}

const HistoryMovieCard = ({ slug }: HistoryMovieCardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<Movie | undefined>()
  const { poster_url, name } = data || {}

  const getMovieDetails = useCallback(async () => {
    if (slug) {
      setIsLoading(true)
      try {
        const response = await fetch(`https://phimapi.com/phim/${slug}`)
        const result = await response.json()

        if (result?.movie) {
          setData(result.movie)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
  }, [slug])

  /** Get movie details by slug */
  useEffect(() => {
    getMovieDetails()
  }, [getMovieDetails])

  if (!isLoading && Object.keys(data || {}).length > 0) {
    return (
      <figure className='flex gap-4'>
        {/* Thumbnail */}
        {poster_url && (
          <Link
            href={ROUTES.MAIN.PHIM(slug)}
            className='flex flex-shrink-0 w-[56px] h-full border-2 border-solid border-white rounded-lg overflow-hidden shadow-md'
          >
            <Image
              src={poster_url || ''}
              alt={slug}
              title={name}
              width={100}
              height={100}
              quality={80}
              className='w-full h-full object-cover'
            />
          </Link>
        )}

        {/* Content */}
        <div className='flex flex-row items-center w-full xxs:w-auto gap-4 xxs:gap-0 xxs:items-start xxs:flex-col justify-between'>
          <h3 className='h-auto xxs:h-10 text-black text-sm font-medium xxs:truncate xxs:line-clamp-2 text-wrap xxs:whitespace-normal'>
            <Link href={ROUTES.MAIN.PHIM(slug)} title={name}>
              {name}
            </Link>
          </h3>

          <Link
            href={ROUTES.MAIN.PHIM(slug)}
            className='flex items-center gap-2 h-[30px] w-fit px-3 py-1 text-[#362814] text-xs font-medium border border-[#362814] rounded-md whitespace-nowrap'
          >
            <Play fill='#fd2400' strokeWidth={0} size={12} />
            <span>Xem phim</span>
          </Link>
        </div>
      </figure>
    )
  }
}

export default HistoryMovieCard
