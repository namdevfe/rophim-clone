'use client'
import { Card } from '@/components/ui/card'
import { ROUTES } from '@/constants/route'
import { useRouter } from 'next/navigation'
import React from 'react'

interface CategoryRemainProps {
  count: number
}

const CategoryRemain = ({ count = 0 }: CategoryRemainProps) => {
  const router = useRouter()

  return (
    <Card
      className='min-w-[120px] xs:w-auto flex items-center justify-center p-4 bg-[#ffffff10] border-none cursor-pointer transition-transform will-change-transform duration-300 hover:-translate-y-3'
      onClick={() => router.push(ROUTES.MAIN.CHU_DE)}
    >
      <p className='text-2xl font-bold text-white'>{`+${count} chủ đề`}</p>
    </Card>
  )
}

export default CategoryRemain
