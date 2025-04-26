'use client'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/route'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const HISTORY_SLUG = 'lich-su'

const ViewMoreButton = () => {
  return (
    <Button
      className='h-[60px] md:h-full gap-4 w-full md:w-[60px] bg-[#c9221a] text-white hover:bg-[#c9221a] rounded-t-none rounded-b-2xl md:rounded-l-none md:rounded-r-[16px] [&_svg]:size-auto shadow-lg'
      asChild
    >
      <Link href={ROUTES.MAIN.THE_LOAI.DETAIL(`/${HISTORY_SLUG}`)}>
        <span className='inline-block md:hidden text-sm'>Xem thêm</span>
        <ChevronRight size={28} strokeWidth={3} />
      </Link>
    </Button>
  )
}

export default ViewMoreButton
