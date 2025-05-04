'use client'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/route'
import { Heart, MessageCircleMore, Play, Plus, Send } from 'lucide-react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useToast } from '@/hooks/use-toast'

interface ActionsProps {
  slug: string
}

const ACTIONS: {
  id: string
  title: string
  content: string
  icon: React.ReactNode
}[] = [
  {
    id: '1',
    title: 'Yêu thích',
    content:
      'Thêm phim vào danh sách yêu thích để nhận thông báo cập nhật về phim nhé!',
    icon: (
      <Heart size={20} fill='#fff' className='transition-colors duration-300' />
    )
  },
  {
    id: '2',
    title: 'Thêm vào',
    icon: <Plus size={20} className='transition-colors duration-300' />,
    content: 'Thêm vào'
  },
  {
    id: '3',
    title: 'Chia sẻ',
    icon: <Send size={20} className='transition-colors duration-300' />,
    content: 'Chia sẻ'
  },
  {
    id: '4',
    title: 'Bình luận',
    icon: (
      <MessageCircleMore size={20} className='transition-colors duration-300' />
    ),
    content: 'Bình luận'
  }
]

const Actions = ({ slug }: ActionsProps) => {
  const { toast } = useToast()

  const handleShowNotification = () => {
    toast({
      description: 'Feature is comming soon'
    })
  }

  return (
    <div className='flex flex-col xs:flex-row items-center gap-8 mb-[30px]'>
      <Link
        href={ROUTES.MAIN.XEM_PHIM(slug)}
        className='flex items-center justify-center gap-4 h-[60px] w-fit py-4 px-8 text-[#191B24] text-xl capitalize text-nowrap font-medium gradient-btn rounded-[32px] transition-all duration-300'
      >
        <Play fill='#191B24' />
        <span>Xem ngay</span>
      </Link>

      {/* List action */}
      <div className='flex items-center gap-4'>
        {ACTIONS.map((item) => {
          const { id, title, icon, content } = item
          return (
            <TooltipProvider key={id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant='ghost'
                    className='group flex flex-col gap-[10px] min-w-20 h-[60px] p-[10px] duration-300 hover:bg-[#ffffff05] hover:text-white'
                    onClick={handleShowNotification}
                  >
                    <span className='group-hover:[&_svg]:fill-primaryCustom group-hover:[&_svg]:text-primaryCustom flex-shrink-0'>
                      {icon}
                    </span>
                    <span>{title}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{content}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
      </div>
    </div>
  )
}

export default Actions
