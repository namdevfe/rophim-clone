import TopMovieList from './top-movie-list'
import TextBox from '@/components/textbox'
import { Movie } from '@/types/movie'
import './styles.css'

interface TopMoviesSectionProps {
  movies: Movie[]
  title: string
}

const TopMoviesSection = ({
  movies = [],
  title = ''
}: TopMoviesSectionProps) => {
  return (
    <section className='top-movies-section'>
      <div className='container-fluid'>
        <TextBox title={title} />
        <TopMovieList movies={movies} />
      </div>
    </section>
  )
}

export default TopMoviesSection
