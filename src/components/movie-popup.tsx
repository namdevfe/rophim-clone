'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { APP } from '@/constants/app'
import { ROUTES } from '@/constants/route'
import { cn } from '@/lib/utils'
import { Rect } from '@/types/common'
import { Movie } from '@/types/movie'
import { Dot, Heart, Info, PlayIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface MoviePopupProps {
  isActive: boolean
  rect: Rect
  data: Movie
  onClose: () => void
}

const MoviePopup = ({
  isActive = false,
  rect,
  data,
  onClose
}: MoviePopupProps) => {
  const {
    thumb_url,
    name,
    episode_current,
    origin_name,
    slug,
    quality,
    type,
    year,
    category
  } = data || {}

  let fullThumbURL: string = thumb_url
  if (!thumb_url?.startsWith('https')) {
    fullThumbURL = `${APP.DOMAIN_CDN_IMAGE}/${thumb_url}`
  }

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <Card
      className={cn(
        'w-full max-w-[420px] absolute z-[100] gradient-dark rounded-md border-0 overflow-hidden transition-transform duration-300 will-change-transform scale-0',
        isActive && 'scale-100'
      )}
      style={{ top: rect.y, left: rect.x }}
      onMouseLeave={onClose}
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
          {category?.length > 0 && (
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
  )
}

export default MoviePopup
