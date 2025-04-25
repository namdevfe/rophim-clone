'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

/** Import css */
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import './slider-section.css'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, Info, Play } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const SLIDERS = [
  {
    id: 'slider-1',
    slug: 'captain-america-brave-new-world',
    image:
      'https://images.unsplash.com/photo-1657558045738-21507cf53606?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Captain America: Thế giới mới',
    original_title: 'Captain America: Brave New World',
    imdb: 5.8,
    quality: '4k',
    tag: 'T16',
    year: '2025',
    total_duration: '2h00m',
    category: [
      'Hành động',
      'Chiếu rạp',
      'Gây cấn',
      'Siêu anh hùng',
      'Marvel',
      'Khoa học'
    ],
    description:
      'Sau cuộc gặp gỡ với tân Tổng thống Hoa Kỳ Thaddeus Ross, Sam Wilson vô tình bị cuốn vào cuộc xung đột tại một sự kiện quốc tế. Trong vai trò Captain America mới, Wilson buộc phải điều tra và lật tẩy một âm mưu toàn cầu bất chính, trước khi kẻ thủ ác nhấn chìm cả thế giới vào cảnh suy tàn.'
  },
  {
    id: 'slider-2',
    slug: 'captain-america-brave-new-world',
    image:
      'https://images.unsplash.com/photo-1657558045738-21507cf53606?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Captain America: Thế giới mới',
    original_title: 'Captain America: Brave New World',
    imdb: 5.8,
    quality: '4k',
    tag: 'T16',
    year: '2025',
    total_duration: '2h00m',
    category: [
      'Hành động',
      'Chiếu rạp',
      'Gây cấn',
      'Siêu anh hùng',
      'Marvel',
      'Khoa học'
    ],
    description:
      'Sau cuộc gặp gỡ với tân Tổng thống Hoa Kỳ Thaddeus Ross, Sam Wilson vô tình bị cuốn vào cuộc xung đột tại một sự kiện quốc tế. Trong vai trò Captain America mới, Wilson buộc phải điều tra và lật tẩy một âm mưu toàn cầu bất chính, trước khi kẻ thủ ác nhấn chìm cả thế giới vào cảnh suy tàn.'
  },
  {
    id: 'slider-3',
    slug: 'captain-america-brave-new-world',
    image:
      'https://images.unsplash.com/photo-1657558045738-21507cf53606?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Captain America: Thế giới mới',
    original_title: 'Captain America: Brave New World',
    imdb: 5.8,
    quality: '4k',
    tag: 'T16',
    year: '2025',
    total_duration: '2h00m',
    category: [
      'Hành động',
      'Chiếu rạp',
      'Gây cấn',
      'Siêu anh hùng',
      'Marvel',
      'Khoa học'
    ],
    description:
      'Sau cuộc gặp gỡ với tân Tổng thống Hoa Kỳ Thaddeus Ross, Sam Wilson vô tình bị cuốn vào cuộc xung đột tại một sự kiện quốc tế. Trong vai trò Captain America mới, Wilson buộc phải điều tra và lật tẩy một âm mưu toàn cầu bất chính, trước khi kẻ thủ ác nhấn chìm cả thế giới vào cảnh suy tàn.'
  }
]

const SlidersSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <section className='sliders-section relative h-screen max-h-[1080px]'>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className='top-slider-wrap'
      >
        {SLIDERS.map((slider) => {
          return (
            <SwiperSlide
              key={slider.id}
              className='before:content-[""] before:absolute before:left-0 before:top-0 before:z-10 before:block before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)]'
            >
              <Image
                src={slider.image}
                alt={slider.title}
                fill
                quality={80}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <div className='absolute top-2/4 left-[15px] right-[15px] z-[22] -translate-y-2/4 max-w-[540px]'>
                {/* Title */}
                <h2
                  className='mb-2 text-[42px] font-bold capitalize leading-[63px] drop-shadow-xl transition-colors duration-300 text-left hover:text-primaryCustom'
                  title={slider.title}
                >
                  <Link href={`/phim/${slider.slug}`}>{slider.title}</Link>
                </h2>
                {/* Orginal title */}
                <Link
                  href={`/phim/${slider.slug}`}
                  className='mb-4 flex capitalize text-sm text-left transition-colors duration-300 hover:text-primaryCustom'
                >
                  {slider.original_title}
                </Link>
                {/* Tags */}
                <div className='flex flex-wrap items-center gap-[10px] mb-3'>
                  {/* Tag IMDb */}
                  <Badge
                    variant='outline'
                    className='h-[26px] rounded-md border-primaryCustom bg-transparent text-white font-medium text-xs'
                  >
                    <span className='text-primaryCustom text-[10px] font-medium leading-none pr-1'>
                      IMDb
                    </span>
                    <span>{slider.imdb}</span>
                  </Badge>

                  {/* Tag quality */}
                  <Badge className='px-[6px] h-[26px] rounded-md bg-primaryCustom bg-gradientTagCustom text-black text-xs font-bold uppercase'>
                    {slider.quality}
                  </Badge>

                  {/* Tag model */}
                  <Badge
                    variant='secondary'
                    className='bg-white h-[26px] text-xs text-black font-medium rounded-md uppercase px-2 hover:bg-white'
                  >
                    {slider.tag}
                  </Badge>

                  {/* Tag year */}
                  <Badge
                    variant='outline'
                    className='h-[26px] text-white bg-[#ffffff10] text-xs font-normal'
                  >
                    {slider.year}
                  </Badge>

                  {/* Tag total duration */}
                  <Badge
                    variant='outline'
                    className='h-[26px] text-white bg-[#ffffff10] text-xs font-normal'
                  >
                    {slider.total_duration}
                  </Badge>
                </div>
                {/* Categories */}
                <div className='flex flex-wrap items-center gap-[10px] mb-6'>
                  {slider.category.map((item) => {
                    return (
                      <Link
                        key={item}
                        href='/the-loai/hanh-dong'
                        className='h-[26px] inline-flex items-center justify-center px-[6px] rounded-sm capitalize text-xs bg-[#ffffff10] transition-colors duration-300 hover:text-primaryCustom'
                      >
                        {item}
                      </Link>
                    )
                  })}
                </div>
                {/* Description */}
                <p className='mb-8 xs:text-ellipsis xs:line-clamp-3 text-left text-sm'>
                  {slider.description}
                </p>
                {/* Actions */}
                <div className='flex items-center gap-8'>
                  <Button
                    size='icon'
                    className='rounded-full w-[70px] h-[70px] p-0 gradient-btn [&_svg]:size-7 transition-shadow duration-300'
                  >
                    <Play fill='#000' strokeWidth={0} />
                  </Button>

                  <div className='relative h-[50px] rounded-[30px] overflow-hidden border-2 border-solid border-[#ffffff10] transition-colors duration-300 hover:border-white group'>
                    <Button className='h-full bg-transparent hover:bg-transparent hover:text-primaryCustom [&_svg]:size-5 group'>
                      <Heart
                        fill='#fff'
                        strokeWidth={0}
                        className='group-hover:fill-current'
                      />
                    </Button>
                    <Separator
                      orientation='vertical'
                      className='absolute top-0 left-2/4 -translate-x-2/4 w-[2px] h-[50px] bg-[#ffffff10] transition-colors duration-300 group-hover:bg-white'
                    />
                    <Button className='h-full bg-transparent hover:bg-transparent hover:text-primaryCustom [&_svg]:size-5'>
                      <Info />
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className='bottom-slider-wrap'
      >
        {SLIDERS.map((slider) => {
          return (
            <SwiperSlide key={slider.id}>
              <Image
                src={slider.image}
                alt={slider.title}
                width={100}
                height={200}
                quality={80}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default SlidersSection
