import { APP } from '@/constants/app'
import { GRADIENTS } from '@/constants/color'

export const handleURLImage = (url: string): string => {
  let fullURL: string = url

  if (!url.startsWith('https')) {
    fullURL = `${APP.DOMAIN_CDN_IMAGE}/${url}`
  }

  return fullURL
}

export const getRandomColor = (colors: string[] = GRADIENTS) => {
  return colors[Math.floor(Math.random() * colors.length)]
}
