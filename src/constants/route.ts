export const ROUTES = {
  MAIN: {
    PHIM_HAY: '/phimhay',
    PHIM_BO: '/phim-bo',
    PHIM_LE: '/phim-le',
    CHU_DE: '/chu-de',
    PHIM: (slug: string) => `/phim/${slug}`,
    QUOC_GIA: (slug: string) => `/quoc-gia/${slug}`,
    XEM_PHIM: (slug: string) => `/xem-phim/${slug}`,
    THE_LOAI: {
      INDEX: '/the-loai',
      DETAIL: (slug: string) => `/the-loai/${slug}`
    }
  },
  MARKETING: {
    HOME: '/'
  }
}
