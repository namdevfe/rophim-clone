import { ROUTES } from '@/constants/route'
import { Movie } from '@/types/movie'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import './top-movies.css'

interface TopMoviesProps {
  data: Movie[]
}

const TopMovies = ({ data = [] }: TopMoviesProps) => {
  return (
    <div className='top-movies hidden min-[1120px]:block pt-10 border-t border-t-[#ffffff10]'>
      <div className='flex items-center gap-4 mb-4'>
        <Sparkles />
        <h2 className='text-2xl font-semibold first-letter:uppercase'>
          Top phim tuần này
        </h2>
      </div>

      <div className='movies flex flex-col gap-4'>
        {data.map((movie, index) => {
          const { slug, poster_url, name, origin_name } = movie || {}

          return (
            <figure
              key={movie._id}
              className='movies-item flex items-center h-[120px]'
            >
              <div className='number'>{index + 1}</div>
              <div className='flex items-center flex-1 bg-[#ffffff05] ml-4 rounded-lg overflow-hidden'>
                {/* Thumb image */}
                <Link
                  href={ROUTES.MAIN.PHIM(slug)}
                  className='relative flex flex-shrink-0 w-20 h-full rounded-lg overflow-hidden'
                >
                  <Image
                    src={poster_url}
                    alt={name}
                    title={name}
                    width={500}
                    height={400}
                    className='w-full h-full object-cover'
                  />
                </Link>

                {/* Content */}
                <div className='py-[10px] px-4'>
                  <h3 className='xs:h-10 mb-[6px] text-sm text-white capitalize xs:truncate xs:line-clamp-2 xs:text-wrap xs:whitespace-normal transition-colors duration-300 hover:text-primaryCustom'>
                    <Link href={ROUTES.MAIN.PHIM(slug)} title={name}>
                      {name}
                    </Link>
                  </h3>
                  <p className='text-xs text-textBase capitalize xs:truncate xs:line-clamp-2 xs:text-wrap xs:whitespace-normal'>
                    {origin_name}
                  </p>
                </div>
              </div>
            </figure>
          )
        })}
      </div>
    </div>
  )
}

export default TopMovies
