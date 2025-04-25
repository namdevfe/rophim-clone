'use client'
import SearchInput from '@/components/search-input'
import { ROUTES } from '@/constants/route'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import DownloadApp from './download-app'
import Membership from './membership'
import MenuDesktop from './menu-desktop'
import MenuMobile from './menu-mobile'

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null)
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false)

  const handleToggleSearchInput = () => {
    setIsShowSearch((prev) => !prev)
  }

  /** Handle change header color when scroll height > header height */
  useEffect(() => {
    const handleHeaderBgColorChange = () => {
      const scrollY = window.scrollY

      if (scrollY > 74) {
        if (headerRef.current) {
          headerRef.current.classList.add('bg-headerBackground')
          headerRef.current.classList.remove('bg-transparent')
        }
      } else {
        headerRef.current?.classList.add('bg-transparent')
        headerRef.current?.classList.remove('bg-headerBackground')
      }
    }

    window.addEventListener('scroll', handleHeaderBgColorChange)

    return () => window.removeEventListener('scroll', handleHeaderBgColorChange)
  }, [])

  return (
    <header
      className='fixed top-0 left-0 z-[100] w-full h-[74px] py-3 bg-transparent transition-colors duration-300'
      ref={headerRef}
    >
      <div className='container-fluid h-full flex items-center'>
        <div className='w-full flex items-center gap-6'>
          <div
            className={cn('flex items-center gap-6 flex-shrink-0 md:flex', {
              hidden: isShowSearch
            })}
          >
            <MenuMobile />
            <Link href={ROUTES.MAIN.PHIM_HAY} className='flex'>
              <Image
                src='/img/logo.svg'
                alt='logo'
                width={134}
                height={40}
                priority
              />
            </Link>
          </div>
          <SearchInput
            className={cn(
              'fixed h-[50px] md:h-11 max-w-[calc(100%-60px)] md:max-w-[360px] md:relative opacity-0 md:opacity-100 invisible md:visible pointer-events-none md:pointer-events-auto top-3 md:top-0 left-[15px] md:left-0 right-12 md:right-0 z-50 md:flex',
              {
                'opacity-1 visible pointer-events-auto': isShowSearch
              }
            )}
          />
          <MenuDesktop />
        </div>

        <div className='flex items-center gap-7'>
          <DownloadApp />
          <Membership />

          {/* Search button when responsive */}
          <button
            className={cn(
              'relative flex md:hidden text-white w-5 h-5 before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-white before:opacity-0 before:transition-all before:will-change-transform before:duration-300 after:absolute after:opacity-0 after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:transition-transform after:will-change-transform after:duration-300',
              {
                'before:rotate-45 before:opacity-100 before:translate-x-[3px] before:translate-y-[9px] after:-rotate-45 after:opacity-100 after:translate-x-[3px] after:-translate-y-[9px] before:bg-[#FF6C5D] after:bg-[#FF6C5D]':
                  isShowSearch
              }
            )}
            onClick={handleToggleSearchInput}
          >
            {isShowSearch && (
              <span
                className={cn(
                  'absolute top-2/4 left-0 -translate-y-2/4 w-[14px] h-[2px] bg-white opacity-100 transition-opacity duration-300',
                  {
                    'opacity-0': isShowSearch
                  }
                )}
              />
            )}

            {!isShowSearch && <Search size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
