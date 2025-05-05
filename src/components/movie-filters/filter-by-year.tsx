import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

interface FilterByYearProps {
  data: number[]
  current?: number
  onChange?: (item: number) => void
}

const FilterByYear = ({ data, current, onChange }: FilterByYearProps) => {
  return (
    <div className='p-4 flex items-center gap-8 border-t border-t-[#ffffff10]'>
      <div className='w-[120px] text-right text-sm font-medium text-white whitespace-nowrap'>
        Năm sản xuất:
      </div>
      {data.length > 0 && (
        <div className='flex-1 flex flex-wrap items-center gap-2'>
          {data.map((year, index) => {
            return (
              <Button
                variant='ghost'
                key={new Date().getTime() + index}
                className={cn(
                  'text-textBase text-sm font-normal border border-transparent bg-transparent hover:text-primaryCustom hover:bg-transparent',
                  {
                    'border-[#fff3] text-primaryCustom': current === year
                  }
                )}
                onClick={() => onChange?.(year)}
              >
                {year}
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default FilterByYear
