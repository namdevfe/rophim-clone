'use client'
import { MENU_LIST } from '@/constants/menu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const MenuDesktop = () => {
  const pathname = usePathname()
  const subMenuTriggerRef = useRef<HTMLLIElement | null>(null)
  const [isShowSubMenu, setIsShowSubMenu] = useState<boolean>(false)

  const handleToggleSubMenu = () => {
    setIsShowSubMenu((prev) => !prev)
  }

  const handleCloseSubMenu = () => {
    setIsShowSubMenu(false)
  }

  /** Handle close sub menu when click outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        subMenuTriggerRef.current &&
        !subMenuTriggerRef.current.contains(e.target as Node)
      ) {
        e.stopPropagation()
        e.preventDefault()
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
      {MENU_LIST.map((menuItem, parentIndex) => {
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
            ref={subMenuTriggerRef}
            className='relative flex items-center gap-1 px-[10px] text-white text-xs text-nowrap leading-9 font-normal cursor-pointer'
            onClick={handleToggleSubMenu}
          >
            <span>{title}</span>
            <ChevronDown size={14} />

            {/* Submenu */}
            {isShowSubMenu && (
              <ul className='absolute top-full left-0 z-[2] flex flex-col min-w-40 rounded-md overflow-hidden bg-[#0f111af2]'>
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
