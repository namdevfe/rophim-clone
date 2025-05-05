import MovieCard from '@/components/movie-card'
import { Movie } from '@/types/movie'

interface MovieListProps {
  data: Movie[]
}

const MovieList = ({ data = [] }: MovieListProps) => {
  return data.length > 0 ? (
    <div className='mb-[50px] grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6'>
      {data.map((movie) => {
        return <MovieCard key={movie._id} cardType='vertical' data={movie} />
      })}
    </div>
  ) : (
    <div className='flex items-center justify-center'>
      Không tìm thấy phim nào
    </div>
  )
}

export default MovieList
