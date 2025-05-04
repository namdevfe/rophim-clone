'use client'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Episode } from '@/types/movie'
import { Play } from 'lucide-react'
import { useState } from 'react'

interface EpisodesProps {
  episodes: Episode[]
}

const Episodes = ({ episodes = [] }: EpisodesProps) => {
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
                  <Button
                    key={new Date().getTime() + index}
                    className='group px-1 gap-[10px] h-[50px] rounded-md bg-[#282B3A] hover:bg-[#282B3A] hover:text-primaryCustom [&_svg]:size-3'
                  >
                    <Play
                      size={12}
                      fill='#fff'
                      className='flex-shrink-0 transition-colors duration-300 group-hover:fill-primaryCustom'
                    />
                    <span>{episode.name}</span>
                  </Button>
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
