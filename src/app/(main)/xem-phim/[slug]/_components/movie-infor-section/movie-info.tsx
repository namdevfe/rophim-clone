'use client'
import EpisodeItem from '@/components/episode-item'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ROUTES } from '@/constants/route'
import { cn } from '@/lib/utils'
import { Episode, MovieDetail } from '@/types/movie'
import { ChevronRight, CircleCheck, LoaderCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface MovieInfoProps {
  data: MovieDetail
  episodes: Episode[]
}

const MovieInfo = ({ data, episodes = [] }: MovieInfoProps) => {
  const {
    poster_url,
    name,
    origin_name,
    content,
    slug,
    imdb,
    quality,
    type,
    year,
    time,
    episode_current,
    category,
    status,
    episode_total
  } = data || {}
  const [server, setServer] = useState<string>()
  const searchParams = useSearchParams()
  const currentServer = searchParams.get('serverName')
  const currentEpisode = searchParams.get('episode')

  const handleServerChange = (value: string) => {
    setServer(value)
  }

  /** Set default server */
  useEffect(() => {
    if (currentServer) {
      setServer(currentServer)
    }
  }, [currentServer])

  return (
    <>
      <div className='hidden md:flex gap-6 p-[30px] pl-0 border-b border-b-[#ffffff10]'>
        {/* Thumb */}
        <div className='flex-shrink-0 w-[100px] aspect-[100/150] overflow-hidden rounded-lg'>
          <Image
            src={poster_url}
            alt={name}
            width={200}
            height={200}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Informations */}
        <div className='max-w-[440px]'>
          <h3 className='mb-2 text-xl font-semibold truncate capitalize transition-colors duration-300 hover:text-primaryCustom'>
            <Link href={ROUTES.MAIN.PHIM(slug)} title={name}>
              {name}
            </Link>
          </h3>

          <p className='mb-5 text-sm font-normal capitalize text-primaryCustom truncate'>
            {origin_name}
          </p>

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
        </div>

        {/* Description */}
        <div>
          <p className='mb-6 text-textBase text-sm text-ellipsis line-clamp-4'>
            {content}
          </p>
          <Link
            className='flex items-center gap-2 text-sm text-primaryCustom'
            href={ROUTES.MAIN.PHIM(slug)}
          >
            <span>Thông tin phim</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      <div className='pt-[30px]'>
        <Select
          defaultValue={server}
          value={server}
          onValueChange={handleServerChange}
        >
          <SelectTrigger>
            <SelectValue placeholder='Chọn server' />
          </SelectTrigger>
          <SelectContent>
            {episodes?.length > 0 &&
              episodes.map((item) => (
                <SelectItem
                  key={item.server_name}
                  value={item.server_name}
                  className='cursor-pointer'
                >
                  {item.server_name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>

        <div className='grid items-center grid-cols-3 xs:grid-cols-4 min-[1024px]:grid-cols-6 min-[1600px]:grid-cols-8 gap-2 mt-6'>
          {episodes.map((item) => {
            if (item.server_name === server) {
              return item.server_data.map((episode, index) => {
                return (
                  <EpisodeItem
                    key={new Date().getTime() + index}
                    isActive={episode.slug === currentEpisode}
                    data={{
                      currentServer: server,
                      name: episode.name,
                      episodeSlug: episode.slug,
                      slug
                    }}
                  />
                )
              })
            }
          })}
        </div>
      </div>
    </>
  )
}

export default MovieInfo
