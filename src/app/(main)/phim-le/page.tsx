import movieService from '@/services/movie-service'
import { Suspense } from 'react'
import { PaginationWithLinks } from '@/components/ui/pagination-with-links'
import MovieList from '@/components/movie-list'
import MovieFilters from '@/components/movie-filters'
import { QueryParams } from '@/types/common'

interface SingleMoviesPageProps {
  searchParams?: QueryParams
}

const SingleMoviesPage = async ({ searchParams }: SingleMoviesPageProps) => {
  const moviesRes = await movieService.getMoviesByType('phim-le', {
    limit: 32,
    page: Number(searchParams?.page) || 1,
    country: searchParams?.country ?? '',
    year: searchParams?.year
  })

  const movies = moviesRes?.data?.items || []

  return (
    <section className='py-40'>
      <div className='container-fluid'>
        <h1 className='mb-5 text-[42px] leading-[50px] font-semibold capitalize'>
          Phim lẻ
        </h1>

        <MovieFilters />

        <Suspense fallback={<div>Loading..</div>}>
          <MovieList data={movies} />

          {moviesRes?.data?.items?.length > 0 && (
            <PaginationWithLinks
              pageSize={
                moviesRes?.data?.params?.pagination?.totalItemsPerPage || 32
              }
              page={moviesRes?.data?.params?.pagination?.currentPage || 1}
              totalCount={moviesRes?.data?.params?.pagination?.totalItems || 0}
            />
          )}
        </Suspense>
      </div>
    </section>
  )
}

export default SingleMoviesPage
