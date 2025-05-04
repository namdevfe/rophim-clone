'use client'
import { Badge } from '@/components/ui/badge'
import { ROUTES } from '@/constants/route'
import { cn } from '@/lib/utils'
import { MovieDetail as MovieDetailType } from '@/types/movie'
import { ChevronDown, CircleCheck, LoaderCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface MovieDetailProps {
  data: MovieDetailType
}

const MovieDetail = ({ data }: MovieDetailProps) => {
  const [isShowInfor, setIsShowInfor] = useState<boolean>(false)
  const {
    name,
    poster_url,
    origin_name,
    imdb,
    quality,
    time,
    year,
    type,
    episode_current,
    episode_total,
    category,
    status,
    content,
    country,
    director,
    actor
  } = data || {}

  /** Handle toggle movie infor */
  const handleToggleShowInfor = () => {
    setIsShowInfor((prev) => !prev)
  }

  return (
    <div className='pb-10'>
      {/* Thumbnail */}
      <div className='mx-auto min-[1120px]:mx-0 relative w-40 h-60 mb-4 rounded-lg overflow-hidden'>
        <Image
          src={poster_url}
          alt={name}
          title={name}
          fill
          className='object-cover'
        />
      </div>

      {/* Information */}
      <div>
        {/* Name */}
        <h1 className='mb-2 text-2xl font-semibold capitalize text-center min-[1120px]:text-left'>
          {name}
        </h1>
        <p className='mb-6 text-sm font-normal text-primaryCustom text-center min-[1120px]:text-left'>
          {origin_name}
        </p>

        {/* Button show movie details */}
        <div className='text-center pb-8 block min-[1120px]:hidden'>
          <button
            className='flex items-center gap-2 w-fit mx-auto text-sm font-medium text-primaryCustom'
            onClick={handleToggleShowInfor}
          >
            <span>Thông tin phim</span>
            <ChevronDown size={18} className='flex-shrink-0' />
          </button>
        </div>

        {isShowInfor && (
          <>
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

              {episode_current && (
                <Badge
                  variant='outline'
                  className='h-[26px] text-white bg-[#ffffff10] text-xs font-normal'
                >
                  {episode_current}
                </Badge>
              )}
            </div>

            {/* Genres */}
            <div className='flex flex-wrap items-center gap-[10px] mb-3'>
              {category.map((item) => {
                const { id, name, slug } = item || {}

                return (
                  <Link
                    key={id}
                    href={ROUTES.MAIN.THE_LOAI.DETAIL(slug)}
                    className='h-[26px] inline-flex items-center justify-center px-[6px] rounded-sm capitalize text-xs bg-[#ffffff10] transition-colors duration-300 hover:text-primaryCustom'
                  >
                    {name}
                  </Link>
                )
              })}
            </div>

            {/* Status */}
            {(type === 'series' || type === 'hoathinh') && (
              <div
                className={cn(
                  'flex items-center gap-2 h-9 w-fit py-2 px-3 mb-6 rounded-[32px] overflow-hidden text-xs bg-[#ff83001a] text-[#ff8300]',
                  {
                    'bg-[#22cb4c1a] text-[#22cb4c]': status === 'completed'
                  }
                )}
              >
                {status === 'completed' ? (
                  <CircleCheck size={18} />
                ) : (
                  <LoaderCircle size={18} className='animate-spin' />
                )}
                <span>
                  {status === 'completed'
                    ? `${episode_current}`
                    : `Đã chiếu: ${episode_current} / ${episode_total}`}
                </span>
              </div>
            )}

            {/* Description */}
            <div className='mb-5'>
              <h4 className='mb-2 text-sm text-white font-medium first-letter:uppercase whitespace-nowrap'>
                Giới thiệu:
              </h4>
              <p className='text-sm text-textBase font-light'>{content}</p>
            </div>

            {/* Time */}
            <div className='mb-5 flex items-center gap-[10px]'>
              <h4 className='text-sm text-white font-medium first-letter:uppercase whitespace-nowrap'>
                Thời lượng:
              </h4>
              <p className='text-sm text-textBase font-light'>{time}</p>
            </div>

            {/* Country */}
            <div className='mb-5 flex items-center gap-[10px]'>
              <h4 className='text-sm text-white font-medium first-letter:uppercase whitespace-nowrap'>
                Quốc gia:
              </h4>
              {country.map((item) => (
                <Link
                  href={ROUTES.MAIN.QUOC_GIA(item.slug)}
                  key={item.id}
                  className='text-sm text-white font-light transition-colors duration-300 hover:text-primaryCustom'
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Director */}
            <div className='mb-5 flex items-center gap-[10px]'>
              <h4 className='text-sm text-white font-medium first-letter:uppercase whitespace-nowrap'>
                Đạo diễn:
              </h4>
              {director.map((name) => (
                <p key={name} className='text-sm text-textBase font-light'>
                  {name}
                </p>
              ))}
            </div>

            {/* Actors */}
            <div className='mb-5 flex gap-[10px]'>
              <h4 className='text-sm text-white font-medium first-letter:uppercase whitespace-nowrap'>
                Diễn viên:
              </h4>
              <p className='text-sm text-textBase font-light'>
                {actor.join(', ')}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default MovieDetail
