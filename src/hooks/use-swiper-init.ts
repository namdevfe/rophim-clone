'use client'
import { useEffect, useRef, useState } from 'react'

const useSwiperInit = <T>(data: T) => {
  const swiperRef = useRef<any>(null)
  const [isReady, setIsReady] = useState<boolean>(false)

  useEffect(() => {
    if (!!data) {
      const timeout = setTimeout(() => {
        setIsReady(true)
        if (swiperRef.current) {
          swiperRef.current.swiper.init()
        }
      }, 300)

      return () => clearTimeout(timeout)
    }
  }, [data])

  return {
    ref: swiperRef,
    isReady
  }
}

export default useSwiperInit
