import MovieInforSection from './_components/movie-infor-section'
import movieService from '@/services/movie-service'
import { Episode } from '@/types/movie'
import dynamic from 'next/dynamic'
const PlayerSection = dynamic(() => import('./_components/player-section'), {
  ssr: false
})

interface WatchMoviePageProps {
  params: { slug: string }
  searchParams?: {
    serverName: string
    episode: string
  }
}

const WatchMoviePage = async ({
  params,
  searchParams
}: WatchMoviePageProps) => {
  const serverName = searchParams?.serverName
  const episode = searchParams?.episode
  const movieResponse = await movieService.getMovieBySlug(params?.slug)
  const episodes: Episode[] = movieResponse?.episodes || []
  const moviesData = await movieService.getMovies()
  const recommendMovies = moviesData?.items || []

  const currentServerData = episodes?.find(
    (item) => item.server_name === serverName
  )

  const currentEpisodeData = currentServerData?.server_data.find(
    (item) => item.slug === episode
  )

  return (
    <>
      <PlayerSection
        posterURL={movieResponse?.movie?.thumb_url || ''}
        slug={params?.slug}
        name={movieResponse?.movie?.name}
        movieURL={currentEpisodeData?.link_m3u8 || ''}
      />
      <MovieInforSection
        movieData={movieResponse?.movie}
        episodes={episodes}
        recommendMovies={recommendMovies}
      />
    </>
  )
}

export default WatchMoviePage
