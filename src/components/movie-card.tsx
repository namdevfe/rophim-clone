'use client'

import { Badge } from '@/components/ui/badge'
import { ROUTES } from '@/constants/route'
import { Movie } from '@/types/movie'
import Image from 'next/image'
import Link from 'next/link'

interface MovieCardProps {
  data: Movie
}

const MovieCard = ({ data }: MovieCardProps) => {
  const { thumb_url, name, episode_total, lang, origin_name, slug } = data || {}

  return (
    !!data && (
      <figure className='overflow-hidden'>
        <div className='overflow-hidden relative flex rounded-md aspect-[378/211] w-full'>
          {/* Thumbnail image */}
          {thumb_url && (
            <Link href={ROUTES.MAIN.PHIM(slug)} className='flex w-full'>
              <Image
                className='w-full h-full object-cover'
                priority
                src={thumb_url}
                alt={name || ''}
                title={name}
                width={395}
                height={222}
              />
            </Link>
          )}

          {/* Tags*/}
          <div className='absolute bottom-0 left-4 flex pointer-events-none'>
            {episode_total && (
              <Badge className='h-6 bg-[#5e6070] rounded rounded-b-none rounded-r-none border-none hover:bg-[#5e6070]'>
                <span className='text-xs font-light'>PĐ.</span>
                {episode_total}
              </Badge>
            )}

            {lang && (
              <Badge className='left-4 h-6 bg-[#2ca35d] rounded rounded-b-none rounded-l-none border-none hover:bg-[#2ca35d]'>
                <span className='text-xs font-light'>TM.</span>
                {lang}
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className='py-3 px-4'>
          <h3 className='h-10 text-sm font-medium truncate line-clamp-2 text-wrap whitespace-normal transition-colors duration-300 hover:text-primaryCustom'>
            <Link href={ROUTES.MAIN.PHIM(slug)} title={name}>
              {name}
            </Link>
          </h3>

          <p className='text-[#aaa] text-xs mt-2'>{origin_name}</p>
        </div>
      </figure>
    )
  )
}

export default MovieCard
