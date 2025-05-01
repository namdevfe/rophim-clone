import { APP } from '@/constants/app'

export const handleURLImage = (url: string): string => {
  let fullURL: string = url

  if (!url.startsWith('https')) {
    fullURL = `${APP.DOMAIN_CDN_IMAGE}/${url}`
  }

  return fullURL
}
