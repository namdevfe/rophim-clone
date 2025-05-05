import CollectionMovieList from './collection-movie-list'
import TextBox from '@/components/textbox'
import { Movie } from '@/types/movie'

interface CollectionSectionProps {
  movies: Movie[]
  title: string
  link?: string
}

const CollectionSection = ({
  movies = [],
  title = '',
  link = ''
}: CollectionSectionProps) => {
  return (
    <section className='py-[50px]'>
      <div className='container-fluid'>
        <TextBox hasViewMore={!!link} title={title} link={link} />

        <CollectionMovieList movies={movies} />
      </div>
    </section>
  )
}

export default CollectionSection
