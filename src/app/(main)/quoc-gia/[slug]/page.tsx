import movieService from '@/services/movie-service'
import { Suspense } from 'react'
import { PaginationWithLinks } from '@/components/ui/pagination-with-links'
import MovieList from '@/components/movie-list'

interface CountryMoviesPageProps {
  params: { slug: string }
  searchParams?: {
    page: string
  }
}

const CountryMoviesPage = async ({
  params,
  searchParams
}: CountryMoviesPageProps) => {
  const countrySlug = params?.slug
  const moviesRes = await movieService.getMoviesByCountry(countrySlug, {
    limit: 32,
    page: Number(searchParams?.page) || 1
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

          <PaginationWithLinks
            pageSize={
              moviesRes?.data?.params?.pagination?.totalItemsPerPage || 32
            }
            page={moviesRes?.data?.params?.pagination?.currentPage || 1}
            totalCount={moviesRes?.data?.params?.pagination?.totalItems || 0}
          />
        </Suspense>
      </div>
    </section>
  )
}

export default CountryMoviesPage
