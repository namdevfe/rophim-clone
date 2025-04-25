'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ROUTES } from '@/constants/route'
import { cn } from '@/lib/utils'
import { Category } from '@/types/category'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface CategoryCardProps {
  data: Pick<Category, 'name' | 'slug'> & { _id: string }
  className?: string
}

const CategoryCard = ({ data, className = '' }: CategoryCardProps) => {
  const router = useRouter()
  const { name, slug } = data || {}
  const categoryDetailPath = ROUTES.MAIN.THE_LOAI.DETAIL(slug)

  return (
    <Card
      className={cn(
        'min-w-[120px] xs:w-auto cursor-pointer min-h-[148px] bg-gradient-to-r text-white border-none transition-transform will-change-transform duration-300 hover:-translate-y-3',
        {
          [`${className}`]: !!className
        }
      )}
      onClick={() => router.push(categoryDetailPath)}
    >
      <CardContent className='h-full py-5 px-6 flex flex-col items-center justify-center xs:justify-end gap-3'>
        <h3 className='text-2xl font-bold capitalize'>{name}</h3>
        <Button
          variant='ghost'
          className='hidden xs:inline-flex hover:bg-transparent hover:text-white'
        >
          Xem chủ đề <ChevronRight size={12} />
        </Button>
      </CardContent>
    </Card>
  )
}

export default CategoryCard
