import TopMovieList from './top-movie-list'
import TextBox from '@/components/textbox'
import { Movie } from '@/types/movie'
import './styles.css'

interface TopMoviesSectionProps {
  movies: Movie[]
}

const TopMoviesSection = ({ movies = [] }: TopMoviesSectionProps) => {
  return (
    <section className='top-movies-section'>
      <div className='container-fluid'>
        <TextBox title='Top 10 Phim Hôm Nay' />
        <TopMovieList movies={movies} />
      </div>
    </section>
  )
}

export default TopMoviesSection
