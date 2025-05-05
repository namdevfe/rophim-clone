import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Country } from '@/types/movie'
import React from 'react'

interface FilterByCountryProps {
  data: Country[]
  current?: string
  onChange?: (item: Country) => void
}

const FilterByCountry = ({ data, current, onChange }: FilterByCountryProps) => {
  return (
    <div className='p-4 flex items-center gap-8'>
      <div className='min-w-[120px] text-right text-sm font-medium text-white whitespace-nowrap'>
        Quốc gia:
      </div>
      {data.length > 0 && (
        <div className='flex flex-wrap items-center gap-2'>
          {data.map((country) => {
            return (
              <Button
                variant='ghost'
                key={country._id}
                className={cn(
                  'text-textBase text-sm font-normal border border-transparent bg-transparent hover:text-primaryCustom hover:bg-transparent',
                  {
                    'border-[#fff3] text-primaryCustom':
                      current === country.slug
                  }
                )}
                onClick={() => onChange?.(country)}
              >
                {country.name}
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default FilterByCountry
