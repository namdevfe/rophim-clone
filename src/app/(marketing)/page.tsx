import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/route'

const HomePage = () => {
  return (
    <main className='flex flex-col gap-4 min-h-screen items-center justify-center'>
      <h1 className='text-3xl font-bold'>Marketing Page</h1>
      <Button variant='secondary' asChild>
        <Link href={ROUTES.MAIN.PHIM_HAY} scroll={false}>
          Xem ngay
        </Link>
      </Button>
    </main>
  )
}

export default HomePage
