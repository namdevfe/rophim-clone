'use client'

import { PackageOpen } from 'lucide-react'

interface GalleryProps {
  trailerURL: string
}

const Gallery = ({ trailerURL }: GalleryProps) => {
  const trailerId = trailerURL.split('https://www.youtube.com/watch?v=')[1]

  return (
    <div className='py-10'>
      <h2 className='mb-4 text-xl font-semibold first-letter:uppercase'>
        Videos
      </h2>
      <div className='w-full aspect-video'>
        {!!trailerId ? (
          <iframe
            allowFullScreen
            src={`https://www.youtube.com/embed/${trailerId}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            className='w-full h-full object-cover'
          />
        ) : (
          <div className='h-full w-full py-12 px-8 flex flex-col gap-4 items-center justify-center bg-black opacity-20 text-textBase text-sm font-normal rounded-lg'>
            <PackageOpen size={48} strokeWidth={1} />
            <p>Chưa có video nào</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery
