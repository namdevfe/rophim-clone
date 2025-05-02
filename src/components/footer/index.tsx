import { Separator } from '@/components/ui/separator'
import { FOOTER_GROUP_LIST, FOOTER_MENU_LIST } from '@/constants/menu'
import { ROUTES } from '@/constants/route'
import Image from 'next/image'
import Link from 'next/link'
import './footer.css'

const SOCIAL_NETWORKS: {
  id: string
  name: string
  href: string
  icon: string
}[] = [
  {
    id: '1',
    name: 'Telegram',
    href: 'https://www.facebook.com/',
    icon: '/img/telegram-icon.svg'
  },
  {
    id: '2',
    name: 'X',
    href: '#',
    icon: '/img/x-icon.svg'
  },
  {
    id: '3',
    name: 'Facebook',
    href: 'https://www.facebook.com/rophimcom/',
    icon: '/img/facebook-icon.svg'
  },
  {
    id: '4',
    name: 'Tiktok',
    href: '#',
    icon: '/img/tiktok-icon.svg'
  },
  {
    id: '5',
    name: 'Youtube',
    href: '#',
    icon: '/img/youtube-icon.svg'
  },
  {
    id: '6',
    name: 'Threads',
    href: '#',
    icon: '/img/threads-icon.svg'
  },
  {
    id: '7',
    name: 'Instagram',
    href: '#',
    icon: '/img/instagram-icon.svg'
  }
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container-fluid'>
        <div className='content'>
          <div className='content-top'>
            <Image
              src='/img/vn_flag.svg'
              alt='vietnam-flag'
              width={20}
              height={20}
            />
            <p className='text-sm font-normal text-white capitalize text-center md:text-left'>
              Hoàng Sa & Trường Sa là của Việt Nam!
            </p>
          </div>
          <div className='content-middle'>
            {/* Logo */}
            <Link href={ROUTES.MAIN.PHIM_HAY} className='flex-shrink-0'>
              <Image src='/img/logo.svg' alt='logo' width={200} height={60} />
            </Link>

            <Separator orientation='vertical' className='h-10 bg-[#ffffff10]' />

            {/* Socials */}
            <ul className='flex items-center gap-3'>
              {SOCIAL_NETWORKS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center justify-center w-10 h-10 bg-[#282B3A] rounded-full'
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      title={item.name}
                      width={14}
                      height={14}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Menus */}
          <div className='content-bottom'>
            <ul className='menu-list'>
              {FOOTER_MENU_LIST.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul className='menu-list'>
              {FOOTER_GROUP_LIST.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <p className='mb-2 text-textBase text-sm font-normal'>
            RoPhim - Phim hay cả rổ - Trang xem phim online chất lượng cao miễn
            phí Vietsub, thuyết minh, lồng tiếng full HD. Kho phim mới khổng lồ,
            phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như Việt Nam, Hàn
            Quốc, Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ… đa dạng thể loại. Khám
            phá nền tảng phim trực tuyến hay nhất 2024 chất lượng 4K!
          </p>
          <p className='text-textBase text-sm font-normal'>© 2024 RoPhim</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
