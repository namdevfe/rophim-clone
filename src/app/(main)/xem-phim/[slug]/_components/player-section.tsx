'use client'
import { Button } from '@/components/ui/button'
import Hls from 'hls.js'
import { ChevronLeft } from 'lucide-react'
import Plyr from 'plyr'
import { useEffect, useRef } from 'react'
import 'plyr/dist/plyr.css'
import Link from 'next/link'
import { ROUTES } from '@/constants/route'
import { useToast } from '@/hooks/use-toast'

interface PlayerSectionProps {
  slug: string
  name: string
  posterURL: string
  movieURL: string
}

const PlayerSection = ({
  slug,
  name,
  movieURL,
  posterURL
}: PlayerSectionProps) => {
  const { toast } = useToast()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const hlsRef = useRef<Hls | null>(null)

  /** Init player the first time when component mounted */
  useEffect(() => {
    if (videoRef.current) {
      new Plyr(videoRef.current, {
        controls: [
          'play-large',
          'play',
          'progress',
          'current-time',
          'mute',
          'volume',
          'captions',
          'settings',
          'pip',
          'airplay',
          'fullscreen'
        ],
        settings: ['captions', 'quality', 'speed', 'loop'],
        quality: {
          default: 720,
          options: [360, 480, 720, 1080],
          forced: true,
          onChange: () => {
            toast({
              description: 'Bạn đang xem phim ở chất lượng cao nhất'
            })
          }
        },
        loop: {
          active: false
        }
      })
    }
  }, [toast])

  // Load video when movieURL change
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Clean hls old if have
    if (hlsRef.current) {
      hlsRef.current.destroy()
    }

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(movieURL)
      hls.attachMedia(video)
      hlsRef.current = hls
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = movieURL
    }

    // Clean when movieURL change
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }
    }
  }, [movieURL])

  return (
    <section className='pt-40 pb-10'>
      <div className='container-fluid'>
        <div className='flex items-center gap-4 mb-6'>
          <Button
            variant='outline'
            className='w-[30px] h-[30px] p-0 rounded-full bg-transparent'
            asChild
          >
            <Link href={ROUTES.MAIN.PHIM(slug)}>
              <ChevronLeft />
            </Link>
          </Button>
          <h1 className='text-xl font-semibold capitalize'>{name}</h1>
        </div>

        <div className='w-full rounded-lg'>
          <video
            ref={videoRef}
            autoPlay
            muted
            controls
            playsInline
            className='w-full h-full'
            data-poster={posterURL}
          />
        </div>
      </div>
    </section>
  )
}

export default PlayerSection
