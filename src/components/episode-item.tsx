import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/route'
import { cn } from '@/lib/utils'
import { Play } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface EpisodeItemProps {
  data: {
    currentServer: string
    name: string
    episodeSlug: string
    slug: string
  }
  isActive?: boolean
}

const EpisodeItem = ({ data, isActive = false }: EpisodeItemProps) => {
  return (
    <Button
      className={cn(
        'group px-1 gap-[10px] h-[50px] rounded-md bg-[#282B3A] hover:bg-[#282B3A] hover:text-primaryCustom [&_svg]:size-3',
        {
          'bg-primaryCustom text-[#191B24] hover:bg-primaryCustom hover:text-[#191B24]':
            isActive
        }
      )}
      asChild
    >
      <Link
        href={{
          pathname: ROUTES.MAIN.XEM_PHIM(data.slug),
          query: {
            serverName: data.currentServer,
            episode: data.episodeSlug
          }
        }}
      >
        <Play
          size={12}
          fill='#fff'
          className={cn(
            'flex-shrink-0 transition-colors duration-300 group-hover:fill-primaryCustom',
            {
              'fill-[#191B24] group-hover:fill-[#191B24]': isActive
            }
          )}
        />
        <span>{data.name}</span>
      </Link>
    </Button>
  )
}

export default EpisodeItem
