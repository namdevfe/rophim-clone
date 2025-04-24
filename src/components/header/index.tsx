'use client'
import SearchInput from '@/components/search-input'
import { Button } from '@/components/ui/button'
import { Search, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import MenuDesktop from './menu-desktop'
import MenuMobile from './menu-mobile'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const Header = () => {
  const headerRef = useRef<HTMLElement>(null)
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
      className='fixed top-0 left-0 w-full h-[74px] py-3 bg-transparent transition-colors duration-300'
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
            <Link href='/'>
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
          {/* Download app */}
          <div className='hidden md:flex items-center gap-3'>
            <div className='text-primaryCustom'>
              <svg
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                className='w-9 h-9'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M10.9998 16.8992C11.1655 16.8992 11.2998 16.7649 11.2998 16.5992V11.5982C11.2998 9.28322 13.1838 7.39922 15.4998 7.39922H18.7998C18.9238 7.39922 19.0446 7.41106 19.1616 7.43327C19.3745 7.47368 19.5998 7.32682 19.5998 7.11012V6.69922C19.5998 6.67022 19.5968 6.64022 19.5918 6.61222C19.2488 4.66722 17.4468 3.19922 15.4008 3.19922H6.79982C4.42882 3.19922 2.49982 5.12822 2.49982 7.49922V12.5982C2.49982 14.9692 4.42882 16.8992 6.79982 16.8992H8.24282L7.86182 19.2492H5.85982C5.44582 19.2492 5.10982 19.5852 5.10982 19.9992C5.10982 20.4132 5.44582 20.7492 5.85982 20.7492H10.7598C11.1738 20.7492 11.5098 20.4132 11.5098 19.9992C11.5098 19.5852 11.1738 19.2492 10.7598 19.2492H9.38082L9.76182 16.8992H10.9998Z'
                  fill='currentColor'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M17.1912 18.4564C16.7712 18.4564 16.4302 18.1154 16.4302 17.6954C16.4302 17.2754 16.7712 16.9344 17.1912 16.9344C17.6112 16.9344 17.9522 17.2754 17.9522 17.6954C17.9522 18.1154 17.6112 18.4564 17.1912 18.4564ZM18.8002 8.90039H15.5002C14.0362 8.90039 12.8002 10.1364 12.8002 11.5994V18.0994C12.8002 19.5884 14.0112 20.7994 15.5002 20.7994H18.8002C20.2892 20.7994 21.5002 19.5884 21.5002 18.0994V11.5994C21.5002 10.1364 20.2642 8.90039 18.8002 8.90039Z'
                  fill='#ffffff'
                />
              </svg>
            </div>

            <div className='text-white whitespace-nowrap'>
              <p className='mb-1 text-xs'>Tải ứng dụng</p>
              <p className='text-sm font-bold'>RoPhim</p>
            </div>
          </div>

          {/* CTA */}
          <Button
            className='hidden md:inline-flex px-3 rounded-[48px]'
            variant='secondary'
            size='lg'
          >
            <UserRound size={14} />
            <span>Thành viên</span>
          </Button>

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
