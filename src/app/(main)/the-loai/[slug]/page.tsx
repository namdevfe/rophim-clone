import movieService from '@/services/movie-service'
import MovieList from './_components/movie-list'
import { Suspense } from 'react'

interface CategoryDetailPageProps {
  params: { slug: string }
}

const CategoryDetailPage = async ({ params }: CategoryDetailPageProps) => {
  const categorySlug = params?.slug
  const moviesRes = await movieService.getMovieByGenre(categorySlug, {
    limit: 32
  })

  const movies = moviesRes?.data?.items || []
  const titlePage = `Phim ${moviesRes?.data?.titlePage}`

  return (
    <section className='py-40'>
      <div className='container-fluid'>
        <h1 className='mb-5 text-[42px] leading-[50px] font-semibold capitalize'>
          {titlePage}
        </h1>

        <Suspense fallback={<div>Loading..</div>}>
          <MovieList data={movies} />
        </Suspense>
      </div>
    </section>
  )
}

export default CategoryDetailPage
