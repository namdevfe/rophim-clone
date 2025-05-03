import CategoryCard from '@/components/category-card'
import TextBox from '@/components/textbox'
import { getRandomColor } from '@/lib/helper-function'
import movieService from '@/services/movie-service'
import { CategoryDetail } from '@/types/category'

const ChuDePage = async () => {
  const genres: CategoryDetail[] = await movieService.getGenres()

  return (
    <section className='py-40'>
      <div className='container-fluid'>
        <TextBox title='Các chủ đề' />
        <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 min-[1600px]:grid-cols-7 gap-4'>
          {genres.length > 0 &&
            genres.map((genre) => {
              return (
                <CategoryCard
                  className={getRandomColor()}
                  key={genre._id}
                  data={genre}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default ChuDePage
