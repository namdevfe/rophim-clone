'use client'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { MenuItem } from '@/constants/menu'
import { cn } from '@/lib/utils'
import { ChevronDown, UserRound } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

interface MenuMobileProps {
  menuList: MenuItem[]
}

const MenuMobile = ({ menuList = [] }: MenuMobileProps) => {
  const pathname = usePathname()
  const [isShowMenuMobile, setIsShowMenuMobile] = useState<boolean>(false)
  const subMenuTriggerRefs = useRef<(HTMLLIElement | null)[]>([])
  const [showSubMenus, setShowSubMenus] = useState<number[]>([])

  /** Handle show/hide menu mobile */
  const handleToggleShowMenuMobile = () => {
    setIsShowMenuMobile((prev) => !prev)
  }

  const handleCloseMenuMobile = () => {
    setIsShowMenuMobile(false)
  }

  /** Handle show/hide subMenu on mobile */
  const handleToggleSubMenu = (index: number) => {
    if (showSubMenus.some((currentIndex) => currentIndex === index)) {
      setShowSubMenus((prev) => prev.filter((item) => item !== index))
    } else {
      setShowSubMenus((prev) => [...prev, index])
    }
  }

  const handleCloseSubMenu = () => {
    setShowSubMenus([])
  }

  /** Handle close menu mobile when resize with break-point >= 992px */
  useEffect(() => {
    const handleResize = () => {
      const clientWidth = window.innerWidth

      if (clientWidth >= 992) {
        if (isShowMenuMobile) {
          handleCloseMenuMobile()
        }
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isShowMenuMobile])

  /** Handle close menu mobile each path change */
  useEffect(() => {
    handleCloseMenuMobile()
  }, [pathname])

  /** Handle close sub menu when click outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const clickedInsideAny = subMenuTriggerRefs.current.some((el) => {
        return el && el.contains(e.target as Node)
      })

      if (!clickedInsideAny) {
        handleCloseSubMenu()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <Popover
      open={isShowMenuMobile}
      onOpenChange={() => handleToggleShowMenuMobile()}
    >
      <PopoverTrigger asChild>
        <button
          className={cn(
            'relative flex md:hidden text-white w-5 h-5 before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-white before:transition-all before:will-change-transform before:duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:transition-transform after:will-change-transform after:duration-300',
            {
              'before:rotate-45 before:translate-x-[3px] before:translate-y-[9px] after:-rotate-45 after:translate-x-[3px] after:-translate-y-[9px] before:bg-[#FF6C5D] after:bg-[#FF6C5D]':
                isShowMenuMobile
            }
          )}
        >
          <span
            className={cn(
              'absolute top-2/4 left-0 -translate-y-2/4 w-[14px] h-[2px] bg-white opacity-100 transition-opacity duration-300',
              {
                'opacity-0': isShowMenuMobile
              }
            )}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className='min-w-[360px] flex flex-col gap-4 p-6 rounded-xl bg-[#3b4987f2] border-0'
        align='start'
        sideOffset={15}
      >
        <Button variant='secondary' className='w-full h-10 rounded-[48px]'>
          <UserRound size={12} />
          <span>Thành viên</span>
        </Button>

        <div className='flex items-center gap-3 py-2 px-[10px] bg-[#fff1] rounded-lg cursor-pointer'>
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

        {/* Menu */}
        <ul className='grid grid-cols-2 gap-2'>
          {menuList.map((menuItem, parentIndex) => {
            const { title, href, items } = menuItem
            const isActive = href === pathname

            return href ? (
              <li
                key={menuItem.title || new Date().getTime() + parentIndex}
                className='flex'
              >
                <Link
                  href={typeof href === 'function' ? href('') : href}
                  className={cn(
                    'px-[10px] text-white text-xs text-nowrap leading-9 font-medium transition-colors duration-300 hover:text-primaryCustom',
                    {
                      'text-primaryCustom': isActive
                    }
                  )}
                >
                  {title}
                </Link>
              </li>
            ) : (
              <li
                key={menuItem.title || new Date().getTime() + parentIndex}
                ref={(el) => {
                  subMenuTriggerRefs.current[parentIndex] = el
                }}
                className='relative flex items-center gap-1 px-[10px] text-white text-xs text-nowrap leading-9 font-medium cursor-pointer'
                onClick={() => handleToggleSubMenu(parentIndex)}
              >
                <span>{title}</span>
                <ChevronDown size={14} />

                {/* Submenu */}
                {showSubMenus.some((item) => item === parentIndex) && (
                  <ul className='max-h-[400px] overflow-y-auto custom-scroll absolute top-full left-0 z-[2] flex flex-col min-w-40 rounded-md overflow-hidden bg-[#0f111af2]'>
                    {items?.map((subMenuItem, index) => {
                      return (
                        <li
                          key={
                            subMenuItem.title || new Date().getTime() + index
                          }
                        >
                          {subMenuItem.href && (
                            <Link
                              href={
                                typeof subMenuItem.href === 'function'
                                  ? subMenuItem.href('')
                                  : subMenuItem.href
                              }
                              className='inline-block w-full py-1 px-5 text-xs font-medium capitalize transition-colors duration-300 hover:text-primaryCustom hover:bg-[#ffffff05]'
                            >
                              {subMenuItem.title}
                            </Link>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </PopoverContent>
    </Popover>
  )
}

export default MenuMobile
