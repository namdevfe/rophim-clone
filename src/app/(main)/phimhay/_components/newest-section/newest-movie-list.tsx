'use client'
import MovieCard from '@/components/movie-card'
import { ROUTES } from '@/constants/route'
import { cn } from '@/lib/utils'
import type { Movie } from '@/types/movie'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieSkeleton from '@/components/movie-skeleton'
import 'swiper/css'
import 'swiper/css/navigation'

interface NewestMovieListProps {
  slug: string
  title: string
  movies: Movie[]
  wrapperClassName?: string
  titleClassName?: string
}

const NewestMovieList = ({
  title = '',
  movies = [],
  slug = '',
  wrapperClassName = '',
  titleClassName = ''
}: NewestMovieListProps) => {
  const swiperRef = useRef<any>(null)
  const [isReady, setIsReady] = useState<boolean>(false)

  useEffect(() => {
    if (movies.length > 0) {
      const timeout = setTimeout(() => {
        setIsReady(true)
        if (swiperRef.current) {
          swiperRef.current.swiper.init()
        }
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [movies])

  return (
    <div
      className={cn(
        'newest-movie-list flex flex-col md:flex-row items-center gap-10 overflow-hidden',
        wrapperClassName
      )}
    >
      {/* Textbox */}
      <div className='w-full md:max-w-[200px] flex flex-row justify-between md:flex-col md:gap-6'>
        <h2
          className={cn(
            'bg-clip-text text-3xl font-bold text-transparent',
            titleClassName
          )}
        >
          {title}
        </h2>
        <Link
          href={ROUTES.MAIN.THE_LOAI.DETAIL(slug)}
          className='flex items-center gap-1 whitespace-nowrap transition-colors duration-300 hover:text-primaryCustom'
        >
          <span className='hidden xs:inline-block'>Xem toàn bộ</span>
          <ChevronRight size={18} />
        </Link>
      </div>

      {/* List movie */}
      <div className='w-full overflow-hidden'>
        {isReady ? (
          <Swiper
            ref={swiperRef}
            init={false}
            navigation
            grabCursor
            spaceBetween={16}
            modules={[Navigation]}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              },
              1600: {
                slidesPerView: 5
              }
            }}
          >
            {movies.map((movie) => {
              const { _id } = movie || {}

              return (
                <SwiperSlide key={_id} className='w-auto max-w-full'>
                  <MovieCard data={movie || {}} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        ) : (
          <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 min-[2560px]:grid-cols-5 gap-4'>
            {Array(3)
              .fill('')
              .map((_, index) => (
                <MovieSkeleton key={new Date().getTime() + index} />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default NewestMovieList
