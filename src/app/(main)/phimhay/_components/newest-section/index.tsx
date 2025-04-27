import { Movie } from '@/types/movie'
import NewestMovieList from './newest-movie-list'
import './newest-section.css'

interface NewestSectionProps {
  koreanMovies: Movie[]
  chineseMovies: Movie[]
  usukMovies?: Movie[]
}

const NewestSection = ({
  chineseMovies = [],
  koreanMovies = [],
  usukMovies = []
}: NewestSectionProps) => {
  return (
    <section className='newest-section'>
      <div className='container-fluid'>
        <div className='py-8 pl-4 pr-4 sm:pl-8 sm:pr-8 rounded-2xl bg-gradient-to-bl from-[#282b3a00] to-[#282b3a] overflow-hidden'>
          {/* Korea movies */}
          <NewestMovieList
            slug='han-quoc'
            title='Phim Hàn Quốc mới'
            titleClassName='gradient-purple'
            movies={koreanMovies}
          />

          {/* Chinese movies */}
          <NewestMovieList
            slug='trung-quoc'
            title='Phim Trung Quốc mới'
            titleClassName='gradient-primary'
            wrapperClassName='mt-8'
            movies={chineseMovies}
          />

          {/* US-UK movies */}
          <NewestMovieList
            slug='au-my'
            title='Phim US-UK mới'
            titleClassName='gradient-pink'
            wrapperClassName='mt-8'
            movies={usukMovies}
          />
        </div>
      </div>
    </section>
  )
}

export default NewestSection
