'use client'
import { Badge } from '@/components/ui/badge'
import { ROUTES } from '@/constants/route'
import { handleURLImage } from '@/lib/helper-function'
import { Movie } from '@/types/movie'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface MovieCardWithThumbProps {
  data: Movie
  className?: string
}

const MovieCardWithThumb = ({
  data,
  className = ''
}: MovieCardWithThumbProps) => {
  const {
    slug,
    thumb_url,
    poster_url,
    name,
    origin_name,
    lang,
    type,
    year,
    time
  } = data

  const fullPosterURL = handleURLImage(poster_url)
  const fullThumbURL = handleURLImage(thumb_url)
  const langs = lang.split('+').length > 0 ? lang.split('+') : lang

  return (
    <figure className={className}>
      {/* Thumb image */}
      <Link
        href={ROUTES.MAIN.PHIM(slug)}
        className='relative flex aspect-video w-full'
      >
        <Image
          src={fullPosterURL}
          alt={name}
          title={name}
          width={500}
          height={500}
          className='w-full h-full object-cover rounded-md'
        />

        {/* Tags */}
        <div className='absolute bottom-0 left-[120px] flex pointer-events-none rounded-tl-sm rounded-tr-sm overflow-hidden'>
          {Array.isArray(langs) ? (
            langs.map((item, index) => (
              <Badge
                key={new Date().getTime() + index}
                className='left-4 h-6 font-normal bg-[#2ca35d] first:bg-[#5e6070] last-child:bg-[#2ca35d] rounded-none border-none hover:first:bg-[#5e6070] hover:last:bg-[#2ca35d]'
              >
                {item}
              </Badge>
            ))
          ) : (
            <Badge className='left-4 h-6 font-normal bg-[#5e6070] rounded rounded-b-none rounded-l-none border-none hover:bg-[#5e6070]'>
              {langs}
            </Badge>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className='relative py-4 pr-5 pl-5 xs:pl-[120px]'>
        <Link
          href={ROUTES.MAIN.PHIM(slug)}
          className='hidden xs:flex absolute -top-[60px] left-5 w-20 h-[120px] rounded-lg overflow-hidden'
        >
          {/* Thumb small */}
          <Image
            src={fullThumbURL}
            alt={name}
            title={name}
            width={80}
            height={120}
            className='w-full h-full object-cover'
          />
        </Link>

        <div className='text-center xs:text-left'>
          <h3 className='text-white text-sm font-medium capitalize xs:truncate xs:line-clamp-1 text-wrap transition-colors duration-300 hover:text-primaryCustom'>
            <Link href={ROUTES.MAIN.PHIM(slug)}>{name}</Link>
          </h3>

          <p className='my-3 text-textBase text-xs font-normal xs:text-ellipsis xs:line-clamp-1'>
            {origin_name}
          </p>

          <div className='hidden xs:flex'>
            {type && (
              <div className='relative text-xs text-textBase font-normal text-nowrap pr-[10px]'>
                <span className='capitalize'>{type}</span>
              </div>
            )}

            {year && (
              <div className='relative text-xs text-textBase font-normal text-nowrap px-[10px]'>
                <Dot
                  size={18}
                  className='absolute -left-[10px] top-0 text-textBase'
                />
                <span className='capitalize'>{year}</span>
              </div>
            )}

            {time && (
              <div className='relative text-xs text-textBase font-normal text-nowrap px-[10px]'>
                <Dot
                  size={18}
                  className='absolute -left-[10px] top-0 text-textBase'
                />
                <span className='capitalize'>{time}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </figure>
  )
}

export default MovieCardWithThumb
