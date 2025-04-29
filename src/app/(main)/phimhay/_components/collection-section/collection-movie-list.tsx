'use client'
import MovieCard from '@/components/movie-card'
import { Movie } from '@/types/movie'
import { Swiper, SwiperSlide } from 'swiper/react'

interface CollectionMovieListProps {
  movies: Movie[]
}

const CollectionMovieList = ({ movies = [] }: CollectionMovieListProps) => {
  return (
    <Swiper
      grabCursor
      spaceBetween={16}
      slidesPerView={2}
      breakpoints={{
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 8
        }
      }}
    >
      {movies.length > 0 &&
        movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <MovieCard cardType='vertical' data={movie} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default CollectionMovieList
