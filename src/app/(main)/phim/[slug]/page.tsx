import movieService from '@/services/movie-service'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import MovieDetail from './_components/movie-detail'
import TopMovies from './_components/top-movies'
import Actions from './_components/actions'
import ContentTabs from './_components/content-tabs'
import { MovieDetail as MovieDetailType } from '@/types/movie'

interface MovieDetailPageProps {
  params: { slug: string }
}

const MovieDetailPage = async ({ params }: MovieDetailPageProps) => {
  const movieResponse = await movieService.getMovieBySlug(params.slug)
  const movies = await movieService.getMovies()
  const movieData: MovieDetailType = movieResponse?.movie || {}
  const episodes = movieResponse?.episodes || []
  const trailerURL = movieData?.trailer_url || ''

  /** Redirect to not found page if movie not found */
  if (!movieResponse?.status) {
    return notFound()
  }

  return (
    <>
      {/* Hero section */}
      <section>
        <div className='relative -z-[1] w-full h-[500px] before:content-[""] before:absolute before:left-0 before:top-0 before:z-10 before:block before:w-full before:h-full before:bg-black before:bg-opacity-20'>
          <Image
            src={movieData?.thumb_url}
            alt={movieData?.name}
            title={movieData?.name}
            fill
            quality={80}
            priority
            className='w-full h-full object-cover -z-[1]'
          />
        </div>
      </section>

      {/* Content */}
      <section className='-mt-[100px]'>
        <div className='container-fluid flex flex-col min-[1120px]:flex-row gap-4'>
          <div className='bg-[rgba(25,27,36,.3)] max-w-full min-[1120px]:max-w-[440px] pt-10 pl-10 pr-10 pb-0 min-[1120px]:pt-10 min-[1120px]:pl-10 min-[1120px]:pr-10 min-[1120px]:pb-10 rounded-3xl backdrop-blur-xl'>
            <MovieDetail data={movieData} />
            <TopMovies data={movies?.items || []} />
          </div>
          <div className='flex-1 p-10 bg-[rgba(25,27,36,.3)] rounded-3xl backdrop-blur-xl'>
            <Actions slug={params?.slug} episodes={episodes} />
            <ContentTabs
              slug={params?.slug}
              episodes={episodes}
              trailerURL={trailerURL}
              movies={movies?.items || []}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default MovieDetailPage
