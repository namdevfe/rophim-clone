'use client'
import { Movie } from '@/types/movie'
import Image from 'next/image'
import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderList from './slider-list'

/** Import css */
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import './slider-section.css'

interface SlidersSectionProps {
  movies: Movie[]
}

const SlidersSection = ({ movies = [] }: SlidersSectionProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  /** List bottom sliders */
  const bottomSliderImages = movies.map((movie) => {
    return {
      _id: movie._id,
      name: movie.name,
      slug: movie.slug,
      posterURL: movie.poster_url
    }
  })

  const handleSwiperChange = (swiper: SwiperType) => {
    setThumbsSwiper(swiper)
  }

  return (
    <section className='sliders-section relative h-screen max-h-[1080px]'>
      <SliderList movies={movies} thumbsSwiper={thumbsSwiper} />
      <Swiper
        onSwiper={handleSwiperChange}
        spaceBetween={5}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className='bottom-slider-wrap'
      >
        {bottomSliderImages.map((item) => {
          const { _id, name, slug, posterURL } = item
          return (
            <SwiperSlide key={_id}>
              <Image
                src={posterURL}
                alt={slug}
                width={100}
                height={200}
                quality={100}
                title={name}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default SlidersSection
