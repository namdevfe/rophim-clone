'use client'
import { Movie } from '@/types/movie'
import HistoryMovieCard from './history-movie-card'

interface HistoryMovieListProps {
  movies: Movie[]
}

const HistoryMovieList = ({ movies = [] }: HistoryMovieListProps) => {
  return (
    <div className='flex-1 w-full px-4 grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 md:grid-cols-2 min-[1441px]:grid-cols-3 gap-4'>
      {movies.map((movie) => {
        return <HistoryMovieCard key={movie._id} data={movie} />
      })}
    </div>
  )
}

export default HistoryMovieList
