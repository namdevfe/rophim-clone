import HistoryMovieList from './history-movie-list'
import ViewMoreButton from '@/app/(main)/phimhay/_components/gpmn-section/viewmore-button'
import { Movie } from '@/types/movie'
import Hero from './hero'

interface GPMNSectionProps {
  movies: Movie[]
}

const GPMNSection = ({ movies = [] }: GPMNSectionProps) => {
  return (
    <section className='py-[50px]'>
      <div className='container-fluid h-auto md:h-[300px]'>
        <div className='relative h-full flex flex-col md:flex-row items-center gap-8 bg-[#fedaa8] rounded-2xl'>
          <Hero />
          <HistoryMovieList movies={movies} />
          <ViewMoreButton />
        </div>
      </div>
    </section>
  )
}

export default GPMNSection
