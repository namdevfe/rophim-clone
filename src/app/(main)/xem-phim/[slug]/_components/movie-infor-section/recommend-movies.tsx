import { ROUTES } from '@/constants/route'
import { Movie } from '@/types/movie'
import Image from 'next/image'
import Link from 'next/link'

interface RecommendMoviesProps {
  data: Movie[]
}

const RecommendMovies = ({ data = [] }: RecommendMoviesProps) => {
  return (
    <>
      <h2 className='mb-4 text-2xl first-letter:uppercase font-semibold'>
        Đề xuất cho bạn
      </h2>
      <div className='flex flex-col gap-4'>
        {data.map((movie) => {
          const { slug, poster_url, name, origin_name } = movie || {}

          return (
            <figure
              key={movie._id}
              className='movies-item flex items-center h-[120px]'
            >
              <div className='flex items-center flex-1 bg-[#ffffff05] rounded-lg overflow-hidden'>
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
    </>
  )
}

export default RecommendMovies
