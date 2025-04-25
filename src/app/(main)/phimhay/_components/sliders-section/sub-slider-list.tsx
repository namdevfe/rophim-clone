import { Movie } from '@/types/movie'
import Image from 'next/image'
import type { Swiper as SwiperType } from 'swiper'
import { EffectFade, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface SubSliderListProps {
  movies: Movie[]
  onChange: (swiper: SwiperType) => void
}

const SubSliderList = ({ movies = [], onChange }: SubSliderListProps) => {
  return (
    <Swiper
      onSwiper={onChange}
      spaceBetween={5}
      slidesPerView={6}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[EffectFade, Thumbs]}
      className='bottom-slider-wrap'
    >
      {movies.map((item) => {
        const { _id, poster_url, slug, name } = item || {}

        return (
          <SwiperSlide key={_id}>
            <Image
              src={poster_url}
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
  )
}

export default SubSliderList
