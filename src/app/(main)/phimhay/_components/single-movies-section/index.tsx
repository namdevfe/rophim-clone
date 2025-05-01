import MovieList from './movie-list'
import TextBox from '@/components/textbox'
import { Movie } from '@/types/movie'

interface SingleMoviesSectionProps {
  movies: Movie[]
  link: string
  title: string
}

const SingleMoviesSection = ({
  movies = [],
  title,
  link
}: SingleMoviesSectionProps) => {
  return (
    <section className='py-[50px]'>
      <div className='container-fluid'>
        <TextBox hasViewMore title={title} link={link} />
        <MovieList movies={movies} />
      </div>
    </section>
  )
}

export default SingleMoviesSection
