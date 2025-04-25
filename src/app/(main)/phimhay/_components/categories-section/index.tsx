import { Category } from '@/types/category'
import CategoryList from './category-list'

interface CategoriesSectionProps {
  categories: Category[]
}

const CategoriesSection = ({ categories = [] }: CategoriesSectionProps) => {
  return (
    <section className='pt-16 pb-12'>
      <div className='container-fluid'>
        <h2 className='text-2xl font-semibold mb-5'>Bạn đang quan tâm gì?</h2>
        <CategoryList categories={categories || []} />
      </div>
    </section>
  )
}

export default CategoriesSection
