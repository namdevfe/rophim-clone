import { Category } from '@/types/category'
import CategoryCard from '@/components/category-card'
import CategoryRemain from './category-remain'

const GRADIENTS = [
  'from-purple-400 to-pink-500',
  'from-green-400 to-blue-500',
  'from-yellow-400 to-red-500',
  'from-pink-500 to-orange-500',
  'from-indigo-500 to-purple-500'
]

const getRandomColor = () => {
  return GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)]
}

interface CategoryListProps {
  categories: Category[]
}

const CategoryList = ({ categories = [] }: CategoryListProps) => {
  const categoryListFirst = categories.slice(0, 6)
  const countCategoryRemain = categories.slice(7).length

  return (
    <div className='no-scrollbar flex -mx-[15px] px-[15px] xs:px-0 xs:mx-0 overflow-x-scroll xs:overflow-x-visible xs:grid xs:grid-cols-3 min-[769px]:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 min-[1441px]:grid-cols-7 gap-4 items-stretch'>
      {categoryListFirst.map((category: any) => {
        return (
          <CategoryCard
            key={category?._id}
            data={category}
            className={getRandomColor()}
          />
        )
      })}

      {countCategoryRemain > 0 && (
        <CategoryRemain count={countCategoryRemain} />
      )}
    </div>
  )
}

export default CategoryList
