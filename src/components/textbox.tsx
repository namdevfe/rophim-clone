import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface TextBoxProps {
  title: string
  link: string
  hasViewMore?: boolean
}

const TextBox = ({
  link = '/',
  title = '',
  hasViewMore = false
}: TextBoxProps) => {
  return (
    <div className='flex items-center gap-3 mb-5'>
      <h2 className='text-2xl font-medium'>{title}</h2>
      {hasViewMore && (
        <Link
          href={link}
          className='flex items-center justify-center gap-2 py-1 px-3 w-[30px] h-[30px] text-xs rounded-full border border-white group transition-all will-change-transform duration-300 ease-out hover:w-auto hover:text-primaryCustom'
        >
          <span className='hidden transition-all duration-300 will-change-transform group-hover:block'>
            Xem thêm
          </span>

          <ChevronRight size={16} className='flex-shrink-0' />
        </Link>
      )}
    </div>
  )
}

export default TextBox
