'use client'
import FilterByCountry from '@/components/movie-filters/filter-by-country'
import FilterByYear from '@/components/movie-filters/filter-by-year'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import movieService from '@/services/movie-service'
import { Country } from '@/types/movie'
import { Funnel } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import queryString from 'query-string'
import { useEffect, useMemo, useState } from 'react'

const MovieFilters = () => {
  const [isShowFilters, setIsShowFilters] = useState<boolean>(false)
  const [countries, setCountries] = useState<Country[]>([])
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const filtersObject = {
    country: searchParams.get('country'),
    year: Number(searchParams.get('year'))
  }

  const listYears = useMemo(() => {
    let years: number[] = []

    for (let i = 1970; i <= new Date().getFullYear(); i++) {
      years.push(i)
    }

    return years
  }, [])

  const handleFiltersToggle = () => {
    setIsShowFilters((prev) => !prev)
  }

  const handleCountryChange = (country: Country) => {
    const newQueryString = queryString.stringify({
      ...filtersObject,
      country: country.slug,
      page: 1
    })

    router.push(`${pathname}?${newQueryString}`)
  }

  const handleYearChange = (year: number) => {
    const newQueryString = queryString.stringify({
      ...filtersObject,
      year,
      page: 1
    })

    router.push(`${pathname}?${newQueryString}`)
  }

  /** Get all countries */
  useEffect(() => {
    ;(async () => {
      try {
        const countries = await movieService.getCountries()
        if (countries?.length > 0) {
          setCountries(countries)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className='relative mb-8'>
      {/* Toggle filter button */}
      <Button
        variant='secondary'
        className={cn(
          'top-0 left-0  p-0 bg-[#191B24] text-white text-base font-medium hover:bg-[#191B24] hover:text-opacity-90',
          {
            'absolute -translate-y-1/2': isShowFilters
          }
        )}
        onClick={handleFiltersToggle}
      >
        <Funnel fill='#ffd875' strokeWidth={0} />
        Bộ lọc
      </Button>

      {/* Filters */}
      {isShowFilters && (
        <div className='border border-[#ffffff10] rounded-lg'>
          {/* Filters */}
          <FilterByCountry
            current={filtersObject.country || undefined}
            data={countries}
            onChange={handleCountryChange}
          />

          <FilterByYear
            current={filtersObject.year || undefined}
            data={listYears}
            onChange={handleYearChange}
          />
        </div>
      )}
    </div>
  )
}

export default MovieFilters
