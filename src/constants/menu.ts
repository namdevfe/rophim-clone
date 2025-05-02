import { ROUTES } from '@/constants/route'

export interface MenuItem {
  title: string
  href?: ((slug: string) => string) | string | undefined
  items?: MenuItem[]
}

export const MENU_LIST: MenuItem[] = [
  {
    title: 'Chủ đề',
    href: ROUTES.MAIN.CHU_DE
  },
  {
    title: 'Duyệt tìm',
    href: ROUTES.MAIN.DUYET_TIM
  },
  {
    title: 'Phim lẻ',
    href: ROUTES.MAIN.PHIM_LE
  },
  {
    title: 'Phim bộ',
    href: ROUTES.MAIN.PHIM_BO
  },
  {
    title: 'Quốc gia',
    items: [
      {
        title: 'Anh',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Canada',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Hàn Quốc',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Hồng Kông',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Mỹ',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Nhật Bản',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Pháp',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Thái Lan',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Trung Quốc',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Úc',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Đài Loan',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      },
      {
        title: 'Đức',
        href: (slug: string) => ROUTES.MAIN.QUOC_GIA(slug)
      }
    ]
  },
  {
    title: 'Diễn viên',
    href: ROUTES.MAIN.DIEN_VIEN
  },
  {
    title: 'Lịch chiếu',
    href: ROUTES.MAIN.LICH_CHIEU
  }
]

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
