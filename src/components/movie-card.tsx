'use client'

// import MoviePopup from '@/components/movie-popup'
import { Badge } from '@/components/ui/badge'
import { APP } from '@/constants/app'
import { ROUTES } from '@/constants/route'
import { cn } from '@/lib/utils'
// import { Rect } from '@/types/common'
import { Movie } from '@/types/movie'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

interface MovieCardProps {
  isTopMovie?: boolean
  data: Movie
  cardType?: 'horizontal' | 'vertical'
  className?: string
}

const MovieCard = ({
  isTopMovie = false,
  data,
  cardType = 'horizontal',
  className = ''
}: MovieCardProps) => {
  const { thumb_url, name, episode_current, lang, origin_name, slug } =
    data || {}
  const movieCardRef = useRef<HTMLElement>(null)
  // const [isHovered, setIsHovered] = useState<boolean>(false)
  // const [rect, setRect] = useState<Rect>({
  //   x: 0,
  //   y: 0
  // })

  let fullThumbURL: string = thumb_url
  if (!thumb_url.startsWith('https')) {
    fullThumbURL = `${APP.DOMAIN_CDN_IMAGE}/${thumb_url}`
  }

  // const handleHover = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   const node = e.target as HTMLElement
  //   const clientRect = node.getBoundingClientRect() as DOMRect
  //   setRect({
  //     x: clientRect.left,
  //     y: clientRect.top + window?.scrollY
  //   })
  //   setIsHovered(true)
  // }

  // const handleUnHover = () => {
  //   setRect({
  //     x: 0,
  //     y: 0
  //   })
  //   setIsHovered(false)
  // }

  /** Card type is horizontal */
  if (cardType === 'horizontal') {
    return (
      <>
        <figure className='relative' ref={movieCardRef}>
          <div className='overflow-hidden relative flex rounded-md aspect-[378/211] w-full'>
            {/* Thumbnail image */}
            {fullThumbURL && (
              <Link
                href={ROUTES.MAIN.PHIM(slug)}
                className='flex w-full'
                // onMouseEnter={handleHover}
              >
                <Image
                  className='w-full h-full object-cover'
                  priority
                  src={fullThumbURL}
                  alt={name || ''}
                  title={name}
                  width={395}
                  height={222}
                />
              </Link>
            )}

            {/* Tags*/}
            <div className='absolute bottom-0 left-4 flex pointer-events-none'>
              {episode_current && (
                <Badge className='h-6 bg-[#5e6070] rounded rounded-b-none rounded-r-none border-none hover:bg-[#5e6070]'>
                  {episode_current}
                </Badge>
              )}

              {lang && (
                <Badge className='left-4 h-6 bg-[#2ca35d] rounded rounded-b-none rounded-l-none border-none hover:bg-[#2ca35d]'>
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

        {/* <MoviePopup
          isActive={isHovered}
          data={data}
          rect={rect}
          onClose={handleUnHover}
        /> */}
      </>
    )
  }

  /** Card type is vertical */
  if (cardType === 'vertical') {
    return (
      <>
        <figure className={cn(className)}>
          <div className='relative'>
            <Link
              href={ROUTES.MAIN.PHIM(slug)}
              className={cn(
                'movie-thumb flex h-full w-full overflow-hidden aspect-[192/288] rounded-lg transition-all duration-300',
                {
                  'aspect-[286/430]': isTopMovie
                },
                {
                  'hover:opacity-50': !isTopMovie
                }
              )}
              // onMouseEnter={handleHover}
            >
              <Image
                className='w-full h-full object-cover transition-all duration-300'
                src={fullThumbURL}
                alt={name}
                width={200}
                height={300}
                title={name}
              />

              {isTopMovie && <div className='mask' />}
            </Link>

            <div className='absolute bottom-0 left-2/4 -translate-x-2/4 flex pointer-events-none'>
              {lang.includes('+') ? (
                <>
                  <Badge className='h-6 bg-[#5e6070] font-normal rounded rounded-b-none rounded-r-none border-none hover:bg-[#5e6070] whitespace-nowrap'>
                    {lang.split('+')[0]}
                  </Badge>
                  <Badge className='left-4 h-6 bg-[#2ca35d] font-normal rounded rounded-b-none rounded-l-none border-none hover:bg-[#2ca35d] whitespace-nowrap'>
                    {lang.split('+')[1]}
                  </Badge>
                </>
              ) : (
                <Badge className='left-4 h-6 bg-[#5e6070] font-normal rounded rounded-b-none rounded-l-none border-none hover:bg-[#2ca35d] whitespace-nowrap'>
                  {lang}
                </Badge>
              )}
            </div>
          </div>

          <div className='text-center pt-3'>
            <h3
              className='text-sm font-normal truncate line-clamp-1 text-wrap whitespace-normal transition-colors duration-300 hover:text-primaryCustom'
              title={name}
            >
              <Link href={ROUTES.MAIN.THE_LOAI.DETAIL(slug)}>{name}</Link>
            </h3>
            <p className='mt-[6px] text-[13px] text-[#aaa] font-normal truncate line-clamp-1 text-wrap whitespace-normal'>
              {origin_name}
            </p>
          </div>
        </figure>

        {/* <MoviePopup
          isActive={isHovered}
          data={data}
          rect={rect}
          onClose={handleUnHover}
        /> */}
      </>
    )
  }
}

export default MovieCard
