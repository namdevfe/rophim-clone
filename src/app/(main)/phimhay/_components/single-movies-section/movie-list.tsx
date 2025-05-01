'use client'
import MovieCardWithThumb from '@/components/movie-card-with-thumb'
import useSwiperInit from '@/hooks/use-swiper-init'
import { Movie } from '@/types/movie'
import { Swiper, SwiperSlide } from 'swiper/react'

interface MovieListProps {
  movies: Movie[]
}

const MovieList = ({ movies = [] }: MovieListProps) => {
  const { ref, isReady } = useSwiperInit<Movie[]>(movies)

  if (isReady) {
    return (
      <Swiper
        init={false}
        ref={ref}
        grabCursor
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          1024: {
            slidesPerView: 3
          },
          1600: {
            slidesPerView: 4
          }
        }}
      >
        {movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie._id}>
              <MovieCardWithThumb data={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    )
  }
}

export default MovieList
