import { Episode, Movie, MovieDetail } from '@/types/movie'
import MovieInfo from './movie-info'
import RecommendMovies from './recommend-movies'

interface MovieInforSectionProps {
  movieData: MovieDetail
  episodes: Episode[]
  recommendMovies: Movie[]
}

const MovieInforSection = ({
  movieData,
  episodes,
  recommendMovies = []
}: MovieInforSectionProps) => {
  return (
    <section>
      <div className='container-fluid flex flex-col sm:flex-row'>
        {/* Infor */}
        <div className='flex-1 w-full'>
          <MovieInfo data={movieData} episodes={episodes} />
        </div>

        {/* Recommend movies */}
        <div className='w-full sm:w-[440px] px-0 pt-[30px] sm:p-[30px]'>
          <RecommendMovies data={recommendMovies} />
        </div>
      </div>
    </section>
  )
}

export default MovieInforSection
