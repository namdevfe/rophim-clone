import { Skeleton } from '@/components/ui/skeleton'

// interface MovieSkeletonProps {
//   className
// }

const MovieSkeleton = () => {
  return (
    <div className='flex flex-col space-y-3 min-h-[212px]'>
      <Skeleton className='h-[125px] w-full rounded-xl bg-primaryCustom' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-full bg-primaryCustom' />
        <Skeleton className='h-4 w-full bg-primaryCustom' />
      </div>
    </div>
  )
}

export default MovieSkeleton
