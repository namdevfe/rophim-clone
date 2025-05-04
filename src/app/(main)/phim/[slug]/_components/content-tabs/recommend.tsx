import MovieCard from '@/components/movie-card'
import { Movie } from '@/types/movie'
import React from 'react'

interface RecommendProps {
  movies: Movie[]
}

const Recommend = ({ movies = [] }: RecommendProps) => {
  return (
    <div className='py-10'>
      <h2 className='mb-6 text-2xl first-letter:uppercase'>
        Có thể bạn sẽ thích
      </h2>

      {movies.length > 0 && (
        <div className='grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 min-[1600px]:grid-cols-6 gap-4'>
          {movies.map((movie) => {
            return (
              <MovieCard cardType='vertical' key={movie._id} data={movie} />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Recommend
