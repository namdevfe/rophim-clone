'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { MENU_LIST } from '@/constants/menu'

const MenuDesktop = () => {
  const pathname = usePathname()
  const [isShowSubMenu, setIsShowSubMenu] = useState<boolean>(false)

  const handleToggleSubMenu = () => {
    setIsShowSubMenu((prev) => !prev)
  }

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
              href={href}
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
            className='relative flex items-center gap-1 px-[10px] text-white text-xs text-nowrap leading-9 font-normal cursor-pointer'
            onClick={() => handleToggleSubMenu()}
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
                          href={subMenuItem.href}
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
