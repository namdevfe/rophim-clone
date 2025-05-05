import MovieCard from '@/components/movie-card'
import { Movie } from '@/types/movie'

interface MovieListProps {
  data: Movie[]
}

const MovieList = ({ data = [] }: MovieListProps) => {
  return (
    <div className='mb-[50px] grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6'>
      {data.map((movie) => {
        return <MovieCard key={movie._id} cardType='vertical' data={movie} />
      })}
    </div>
  )
}

export default MovieList
