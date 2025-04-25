'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { UserRound } from 'lucide-react'
import React from 'react'

const Membership = () => {
  const { toast } = useToast()

  return (
    <Button
      className='hidden md:inline-flex px-3 rounded-[48px]'
      variant='secondary'
      size='lg'
      onClick={() => {
        toast({
          title: 'Tính năng đang phát triển'
        })
      }}
    >
      <UserRound size={14} />
      <span>Thành viên</span>
    </Button>
  )
}

export default Membership
