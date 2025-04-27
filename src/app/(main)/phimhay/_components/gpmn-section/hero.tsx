import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative h-full flex-1 flex items-center justify-center xxs:justify-end w-full py-10 pr-0 xxs:pr-4 md:py-0 xs:pr-[84px] sm:pr-[250px] md:pr-0'>
      {/* Hero image */}
      <div className='absolute left-0 bottom-0 w-full h-auto md:h-full'>
        <Image
          src='/img/hero.webp'
          alt='hero-image'
          width={300}
          height={1132}
          className='relative z-10 w-[200px] xs:w-[300px] h-auto'
        />

        {/* VN flag */}
        <Image
          className='absolute top-0 left-0 z-[8] -rotate-[23deg] translate-x-8 -translate-y-7 w-[150px] xs:w-40 h-auto'
          src='/img/vn-flag-full.gif'
          alt='vn-flag'
          width={160}
          height={200}
        />
      </div>

      {/* Background image */}
      <div className='bg-[url("/img/behind-hero.webp")] bg-no-repeat bg-cover bg-center absolute left-0 top-0 w-full h-full rounded-l-2xl rounded-r-2xl opacity-50 max-w-[704px] md:max-w-[500px]' />

      {/* Content */}
      <div className='max-w-[270px] relative z-40 flex flex-col items-center xxs:items-end gap-6'>
        <Image
          src='/img/50y.webp'
          alt='50-years'
          width={270}
          height={160}
          className='w-[175px] xs:w-[270px]'
        />

        <Button
          variant='secondary'
          className='text-base xxs:w-10 xxs:h-10 ml-auto xxs:ml-0 xs:ml-0 xs:h-[50px] xs:w-full gap-6 hover:bg-white bg-white'
        >
          <span className='inline-block xxs:hidden xs:inline-block'>
            Tìm hiểu về ngày 30/4
          </span>
          <ArrowRight size={24} />
        </Button>
      </div>
    </div>
  )
}

export default Hero
