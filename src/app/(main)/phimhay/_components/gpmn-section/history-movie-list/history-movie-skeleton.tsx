import { Skeleton } from '@/components/ui/skeleton'

const HistoryMovieSkeleton = () => {
  return (
    <div className='flex gap-4 min-h-[82px]'>
      <Skeleton className='w-[52px] xxs:h-full' />
      <div className='w-full h-full flex flex-row items-center gap-4 xxs:gap-0 xxs:items-start xxs:flex-col justify-between'>
        <Skeleton className='h-10 w-full' />
        <Skeleton className='h-[30px] w-[100px]' />
      </div>
    </div>
  )
}

export default HistoryMovieSkeleton
