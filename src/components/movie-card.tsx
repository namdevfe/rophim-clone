'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { APP } from '@/constants/app'
import { ROUTES } from '@/constants/route'
import { cn } from '@/lib/utils'
import { Movie } from '@/types/movie'
import { Dot, Heart, Info, PlayIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface MovieCardProps {
  data: Movie
}

interface Rect {
  x: number
  y: number
}

const MovieCard = ({ data }: MovieCardProps) => {
  const {
    thumb_url,
    name,
    episode_current,
    lang,
    origin_name,
    slug,
    quality,
    type,
    year,
    category
  } = data || {}
  const movieCardRef = useRef<HTMLElement>(null)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [rect, setRect] = useState<Rect>({
    x: 0,
    y: 0
  })

  let fullThumbURL: string = ''
  if (!thumb_url.startsWith('https')) {
    fullThumbURL = `${APP.DOMAIN_CDN_IMAGE}/${thumb_url}`
  }

  const handleHover = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const node = e.target as HTMLElement
    const clientRect = node.getBoundingClientRect() as DOMRect
    setRect({
      x: clientRect.left,
      y: clientRect.top + window?.scrollY
    })
    setIsHovered(true)
  }

  const handleUnHover = () => {
    setRect({
      x: 0,
      y: 0
    })
    setIsHovered(false)
  }

  return (
    !!data && (
      <>
        <figure className='relative' ref={movieCardRef}>
          <div className='overflow-hidden relative flex rounded-md aspect-[378/211] w-full'>
            {/* Thumbnail image */}
            {fullThumbURL && (
              <Link
                href={ROUTES.MAIN.PHIM(slug)}
                className='flex w-full'
                onMouseEnter={handleHover}
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
        {/* Movie card tooltip */}
        {createPortal(
          <Card
            className={cn(
              'w-full max-w-[420px] absolute z-[100] gradient-dark rounded-md border-0 overflow-hidden transition-transform duration-300 will-change-transform scale-0',
              isHovered && 'scale-100'
            )}
            style={{ top: rect.y, left: rect.x }}
            onMouseLeave={handleUnHover}
          >
            <CardContent className='p-0'>
              {/* Thumbnail */}
              <AspectRatio ratio={16 / 9} asChild>
                <Link href={ROUTES.MAIN.PHIM(slug)}>
                  <Image
                    className='w-full h-full object-cover'
                    src={fullThumbURL}
                    alt={name}
                    width={800}
                    height={200}
                    title={name}
                  />
                </Link>
              </AspectRatio>

              {/* Content */}
              <div className='p-6'>
                {/* Name */}
                <div className='flex flex-col gap-2 mb-5'>
                  <h3 className='text-base text-white font-medium capitalize'>
                    {name}
                  </h3>
                  <p className='text-xs text-primaryCustom font-normal capitalize'>
                    {origin_name}
                  </p>
                </div>

                {/* Actions */}
                <div className='flex items-stretch gap-2'>
                  <Button
                    className='bg-primaryCustom text-primaryButtonText hover:bg-primaryCustom transition-opacity hover:opacity-90'
                    size='lg'
                  >
                    <PlayIcon fill='#191B24' strokeWidth={0} />
                    <span>Xem ngay</span>
                  </Button>

                  <Button
                    className='px-3 flex-1 bg-transparent text-white transition-all duration-300 hover:bg-transparent hover:opacity-90 hover:text-white'
                    variant='outline'
                    size='lg'
                  >
                    <Heart fill='#ffffff' strokeWidth={0} />
                    <span>Thích</span>
                  </Button>

                  <Button
                    className='px-3 flex-1 bg-transparent text-white transition-all duration-300 hover:bg-transparent hover:opacity-90 hover:text-white'
                    variant='outline'
                    size='lg'
                  >
                    <Info />
                    <span>Chi tiết</span>
                  </Button>
                </div>

                {/* Tags */}
                <div className='flex items-center gap-1 h-[22px] mt-5'>
                  {/* IMDb */}
                  <Badge className='h-full flex items-center gap-1 text-xs font-medium bg-transparent rounded-md border-primaryCustom hover:bg-transparent'>
                    <span className='text-primaryCustom'>IMDb</span>
                    <span>7.0</span>
                  </Badge>

                  {/* Quality */}
                  {quality && (
                    <Badge className='px-[6px] h-full rounded-md bg-primaryCustom bg-gradientTagCustom text-black text-xs font-bold uppercase'>
                      {quality}
                    </Badge>
                  )}

                  {/* Type */}
                  {type && (
                    <Badge
                      variant='secondary'
                      className='bg-white h-full text-xs text-black font-medium rounded-md uppercase px-2 hover:bg-white'
                    >
                      {type}
                    </Badge>
                  )}

                  {/* Tag year */}
                  {year && (
                    <Badge
                      variant='outline'
                      className='h-full text-white bg-[#ffffff10] text-xs font-normal'
                    >
                      {year}
                    </Badge>
                  )}

                  {episode_current && (
                    <Badge
                      variant='outline'
                      className='h-full text-white bg-[#ffffff10] text-xs font-normal'
                    >
                      {episode_current}
                    </Badge>
                  )}
                </div>

                {/* Categories */}
                {category.length > 0 && (
                  <div className='flex items-center text-xs text-white mt-3 gap-1'>
                    {category.map((item, index) => (
                      <div
                        key={new Date().getTime() + index}
                        className='flex items-center gap-1'
                      >
                        {index > 0 && <Dot fill='#fff' />}
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>,
          document.body
        )}
      </>
    )
  )
}

export default MovieCard
