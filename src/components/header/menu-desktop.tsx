'use client'
import { MenuItem } from '@/constants/menu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

interface MenuDesktopProps {
  menuList: MenuItem[]
}

const MenuDesktop = ({ menuList = [] }: MenuDesktopProps) => {
  const pathname = usePathname()
  const subMenuTriggerRefs = useRef<(HTMLLIElement | null)[]>([])
  const [showSubMenus, setShowSubMenus] = useState<number[]>([])

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
    <ul className='hidden md:flex items-center'>
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
                'px-[10px] text-white text-xs text-nowrap leading-9 font-normal transition-colors duration-300 hover:text-primaryCustom',
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
            className='relative flex items-center gap-1 px-[10px] text-white text-xs text-nowrap leading-9 font-normal cursor-pointer'
            onClick={() => handleToggleSubMenu(parentIndex)}
          >
            <span>{title}</span>
            <ChevronDown size={14} />

            {/* Submenu */}
            {showSubMenus.some((item) => item === parentIndex) && (
              <ul className='h-[50vh] custom-scroll overflow-y-auto absolute top-full left-0 z-[2] flex flex-col min-w-40 rounded-md overflow-hidden bg-[#0f111af2]'>
                {items?.map((subMenuItem, index) => {
                  return (
                    <li key={subMenuItem.title || new Date().getTime() + index}>
                      {subMenuItem.href && (
                        <Link
                          href={
                            typeof subMenuItem.href === 'function'
                              ? subMenuItem.href('slug')
                              : subMenuItem.href
                          }
                          className='inline-block w-full py-1 px-5 text-xs font-normal capitalize transition-colors duration-300 hover:text-primaryCustom hover:bg-[#ffffff05]'
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
  )
}

export default MenuDesktop
