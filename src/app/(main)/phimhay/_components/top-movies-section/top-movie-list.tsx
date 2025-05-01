'use client'

import MovieCard from '@/components/movie-card'
import useSwiperInit from '@/hooks/use-swiper-init'
import { Movie } from '@/types/movie'
import { Swiper, SwiperSlide } from 'swiper/react'

interface TopMovieListProps {
  movies: Movie[]
}

const TopMovieList = ({ movies = [] }: TopMovieListProps) => {
  const { ref, isReady } = useSwiperInit<Movie[]>(movies)

  if (isReady) {
    return (
      <div className='top-movie-list'>
        <Swiper
          init={false}
          ref={ref}
          grabCursor
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 4
            },
            1200: {
              slidesPerView: 5
            },
            1600: {
              slidesPerView: 6
            }
          }}
        >
          {movies.length > 0 &&
            movies.map((movie) => (
              <SwiperSlide key={movie._id}>
                <MovieCard
                  className='top-movie-card'
                  cardType='vertical'
                  isTopMovie
                  data={movie}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    )
  }
}

export default TopMovieList
