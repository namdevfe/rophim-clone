'use client'
import MovieCard from '@/components/movie-card'
import { ROUTES } from '@/constants/route'
import { cn } from '@/lib/utils'
import type { Movie } from '@/types/movie'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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
        <Swiper
          navigation
          grabCursor
          spaceBetween={16}
          modules={[Navigation]}
          slidesPerView={1}
          // slidesOffsetAfter={16}
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
          {movies.length > 0 &&
            movies.map((movie) => {
              const { _id } = movie || {}

              return (
                <SwiperSlide key={_id} className='w-auto max-w-full'>
                  <MovieCard data={movie || {}} />
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}

export default NewestMovieList
