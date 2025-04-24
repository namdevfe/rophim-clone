export interface MenuItem {
  title: string
  href?: string
  items?: MenuItem[]
}

export const MENU_LIST: MenuItem[] = [
  {
    title: 'Chủ đề',
    href: '/chu-de'
  },
  {
    title: 'Duyệt tìm',
    href: '/duyet-tim'
  },
  {
    title: 'Phim lẻ',
    href: '/phim-le'
  },
  {
    title: 'Phim bộ',
    href: '/phim-bo'
  },
  {
    title: 'Quốc gia',
    items: [
      {
        title: 'Anh',
        href: '/quocgia/anh'
      },
      {
        title: 'Canada',
        href: '/quocgia/canada'
      },
      {
        title: 'Hàn Quốc',
        href: '/quocgia/hanquoc'
      },
      {
        title: 'Hồng Kông',
        href: '/quocgia/hongkong'
      },
      {
        title: 'Mỹ',
        href: '/quocgia/my'
      },
      {
        title: 'Nhật Bản',
        href: '/quocgia/nhatban'
      },
      {
        title: 'Pháp',
        href: '/quocgia/phap'
      },
      {
        title: 'Thái Lan',
        href: '/quocgia/thailan'
      },
      {
        title: 'Trung Quốc',
        href: '/quocgia/trungquoc'
      },
      {
        title: 'Úc',
        href: '/quocgia/uc'
      },
      {
        title: 'Đài Loan',
        href: '/quocgia/dailoan'
      },
      {
        title: 'Đức',
        href: '/quocgia/duc'
      }
    ]
  },
  {
    title: 'Diễn viên',
    href: '/dien-vien'
  },
  {
    title: 'Lịch chiếu',
    href: '/lich-chieu'
  }
]
