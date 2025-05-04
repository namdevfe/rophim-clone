'use client'
import EpisodeItem from '@/components/episode-item'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Episode } from '@/types/movie'
import { useState } from 'react'

interface EpisodesProps {
  episodes: Episode[]
  slug: string
}

const Episodes = ({ episodes = [], slug }: EpisodesProps) => {
  const [server, setServer] = useState<string>(episodes[0].server_name)

  const handleServerChange = (value: string) => {
    setServer(value)
  }

  return (
    <div className='py-10'>
      <Select
        defaultValue={server}
        value={server}
        onValueChange={handleServerChange}
      >
        <SelectTrigger>
          <SelectValue placeholder='Chọn server' />
        </SelectTrigger>
        <SelectContent>
          {episodes.map((item) => (
            <SelectItem key={item.server_name} value={item.server_name}>
              {item.server_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Episodes */}
      {
        <div className='grid items-center grid-cols-3 xs:grid-cols-4 min-[1024px]:grid-cols-6 min-[1600px]:grid-cols-8 gap-2 mt-6'>
          {episodes.map((item) => {
            if (item.server_name === server) {
              return item.server_data.map((episode, index) => {
                return (
                  <EpisodeItem
                    key={new Date().getTime() + index}
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
      }
    </div>
  )
}

export default Episodes
