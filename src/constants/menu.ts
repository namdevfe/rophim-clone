export interface MenuItem {
  title: string
  href?: ((slug: string) => string) | string | undefined
  items?: MenuItem[]
}

interface FooterMenuItem {
  id: string
  title: string
  href: string
}
export const FOOTER_MENU_LIST: FooterMenuItem[] = [
  {
    id: '1',
    title: 'Hỏi-Đáp',
    href: '/hoi-dap'
  },
  {
    id: '2',
    title: 'Chính sách bảo mật',
    href: '/chinh-sach'
  },
  {
    id: '3',
    title: 'Điều khoản sử dụng',
    href: '/dieu-khoan'
  },
  {
    id: '4',
    title: 'Giới thiệu',
    href: '/gioi-thieu'
  },
  {
    id: '5',
    title: 'Liên hệ',
    href: '/lien-he'
  }
]

export const FOOTER_GROUP_LIST: FooterMenuItem[] = [
  {
    id: '1',
    title: 'Dongphim',
    href: '/dongphim'
  },
  {
    id: '2',
    title: 'Ghienphim',
    href: '/ghienphim'
  },
  {
    id: '3',
    title: 'Motphim',
    href: '/motphim'
  },
  {
    id: '4',
    title: 'Subnhanh',
    href: '/subnhanh'
  }
]
