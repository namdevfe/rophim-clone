import HistoryMovieList from './history-movie-list'
import ViewMoreButton from './viewmore-button'
import { Movie } from '@/types/movie'
import Hero from './hero'
import { Suspense } from 'react'

interface GPMNSectionProps {
  movies: Movie[]
}

const GPMNSection = ({ movies = [] }: GPMNSectionProps) => {
  return (
    <section className='py-[50px]'>
      <div className='container-fluid h-auto md:h-[300px]'>
        <div className='relative h-full flex flex-col md:flex-row items-center gap-8 bg-[#fedaa8] rounded-2xl'>
          <Hero />
          <Suspense fallback={<>Loading</>}>
            <HistoryMovieList movies={movies} />
          </Suspense>
          <ViewMoreButton />
        </div>
      </div>
    </section>
  )
}

export default GPMNSection
