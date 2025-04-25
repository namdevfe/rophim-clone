'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ROUTES } from '@/constants/route'
import { Movie } from '@/types/movie'
import { Heart, Info, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Swiper as SwiperType } from 'swiper'
import { EffectFade, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface MainSliderListProps {
  movies: Movie[]
  thumbsSwiper: SwiperType | null
}

const MainSliderList = ({ movies = [], thumbsSwiper }: MainSliderListProps) => {
  const moviesModified = movies.map((movie) => {
    const {
      _id,
      name,
      slug,
      category,
      imdb,
      origin_name,
      poster_url,
      thumb_url,
      quality,
      type,
      year,
      time
    } = movie || {}
    return {
      _id,
      name,
      slug,
      category,
      imdb,
      origin_name,
      poster_url,
      thumb_url,
      quality,
      type,
      year,
      time
    }
  })

  return (
    <Swiper
      spaceBetween={10}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[EffectFade, Thumbs]}
      effect='fade'
      className='top-slider-wrap'
    >
      {moviesModified.map((movie) => {
        const {
          _id,
          name,
          slug,
          category,
          imdb,
          origin_name,
          thumb_url,
          quality,
          type,
          year,
          time
        } = movie || {}
        return (
          <SwiperSlide
            key={_id}
            className='before:content-[""] before:absolute before:left-0 before:top-0 before:z-10 before:block before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)]'
          >
            <Image src={thumb_url} alt={slug} fill quality={100} />
            <div className='absolute top-2/4 left-[15px] right-[15px] z-[22] -translate-y-2/4 max-w-[540px]'>
              {/* Title */}
              <h2
                className='mb-2 text-[42px] font-bold capitalize leading-[63px] drop-shadow-xl transition-colors duration-300 text-left hover:text-primaryCustom'
                title={name}
              >
                <Link href={ROUTES.MAIN.PHIM(slug)}>{name}</Link>
              </h2>
              {/* Orginal title */}
              <Link
                href={ROUTES.MAIN.PHIM(slug)}
                className='mb-4 flex capitalize text-sm text-left transition-colors duration-300 hover:text-primaryCustom'
              >
                {origin_name}
              </Link>
              {/* Tags */}
              <div className='flex flex-wrap items-center gap-[10px] mb-3'>
                {/* Tag IMDb */}
                {imdb.id && (
                  <Badge
                    variant='outline'
                    className='h-[26px] rounded-md border-primaryCustom bg-transparent text-white font-medium text-xs'
                  >
                    <span className='text-primaryCustom text-[10px] font-medium leading-none pr-1'>
                      IMDb
                    </span>
                    <span>{imdb.id}</span>
                  </Badge>
                )}

                {/* Tag quality */}
                {quality && (
                  <Badge className='px-[6px] h-[26px] rounded-md bg-primaryCustom bg-gradientTagCustom text-black text-xs font-bold uppercase'>
                    {quality}
                  </Badge>
                )}

                {/* Tag model */}
                {type && (
                  <Badge
                    variant='secondary'
                    className='bg-white h-[26px] text-xs text-black font-medium rounded-md uppercase px-2 hover:bg-white'
                  >
                    {type}
                  </Badge>
                )}

                {/* Tag year */}
                {year && (
                  <Badge
                    variant='outline'
                    className='h-[26px] text-white bg-[#ffffff10] text-xs font-normal'
                  >
                    {year}
                  </Badge>
                )}

                {/* Tag total duration */}
                {time && (
                  <Badge
                    variant='outline'
                    className='h-[26px] text-white bg-[#ffffff10] text-xs font-normal'
                  >
                    {time}
                  </Badge>
                )}
              </div>
              {/* Categories */}
              <div className='flex flex-wrap items-center gap-[10px] mb-6'>
                {category.map((item) => {
                  const { id, name, slug } = item || {}

                  return (
                    <Link
                      key={id}
                      href={ROUTES.MAIN.THE_LOAI(slug)}
                      className='h-[26px] inline-flex items-center justify-center px-[6px] rounded-sm capitalize text-xs bg-[#ffffff10] transition-colors duration-300 hover:text-primaryCustom'
                    >
                      {name}
                    </Link>
                  )
                })}
              </div>
              {/* Description */}
              <p className='mb-8 xs:text-ellipsis xs:line-clamp-3 text-left text-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium perspiciatis atque iusto cum, totam alias
                consequuntur dignissimos aut molestiae odio voluptate. Nemo rem
                ad dolorum esse. Repudiandae assumenda molestiae aut?
              </p>
              {/* Actions */}
              <div className='flex items-center gap-8'>
                <Button
                  size='icon'
                  className='rounded-full w-[70px] h-[70px] p-0 gradient-btn [&_svg]:size-7 transition-shadow duration-300'
                  asChild
                >
                  <Link href={ROUTES.MAIN.XEM_PHIM(slug)}>
                    <Play fill='#000' strokeWidth={0} />
                  </Link>
                </Button>

                <div className='relative h-[50px] rounded-[30px] overflow-hidden border-2 border-solid border-[#ffffff10] transition-colors duration-300 hover:border-white group'>
                  <Button className='h-full bg-transparent hover:bg-transparent hover:text-primaryCustom [&_svg]:size-5 group'>
                    <Heart
                      fill='#fff'
                      strokeWidth={0}
                      className='group-hover:fill-current'
                    />
                  </Button>
                  <Separator
                    orientation='vertical'
                    className='absolute top-0 left-2/4 -translate-x-2/4 w-[2px] h-[50px] bg-[#ffffff10] transition-colors duration-300 group-hover:bg-white'
                  />
                  <Button className='h-full bg-transparent hover:bg-transparent hover:text-primaryCustom [&_svg]:size-5'>
                    <Info />
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MainSliderList
