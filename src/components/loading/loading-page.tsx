import Image from 'next/image'
import './styles.css'

const LoadingPage = () => {
  return (
    <div className='loading-page-wrap fixed top-0 left-0 px-[15px] z-[200] flex items-center justify-center w-full h-screen bg-[#191B24]'>
      <div className='max-w-[830px]'>
        <div className='loading-logo'>
          {/* Logo tank */}
          <div className='logo-wrap'>
            {/* VN flag */}
            <div className='vn-flag'>
              <Image
                fill
                src='/img/vn-flag-full.gif'
                alt='icon-vn-flag'
                className='left-0 w-full h-full object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            {/* Tank */}
            <div className='tank-simu'>
              <Image
                src='/img/tank.webp'
                alt='icon-tank'
                fill
                className='w-full h-full object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />

              {/* Wheels */}
              <div className='absolute left-[238px] bottom-2 flex items-center'>
                {Array(8)
                  .fill('')
                  .map((_, index) => {
                    return (
                      <Image
                        key={new Date().getTime() + index}
                        src='/img/wheel.webp'
                        alt='icon-wheel'
                        width={36}
                        height={36}
                        className='mr-2 last:mr-0 last:ml-5 animate-spin'
                      />
                    )
                  })}

                {/* Fences */}
                <div className='fence' />
                <div className='fence2' />
              </div>
            </div>

            {/* Gates */}
            <div className='gate' />
            <div className='gate2' />
          </div>
          <p className='text-center text-2xl text-[#ffffff60] font-semibold mt-8'>
            Cùng Rổ Phim Chào Mừng 50 Năm Thống Nhất Đất Nước 30/04/1975 -
            30/04/2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
