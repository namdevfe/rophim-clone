import GPMNSection from '@/app/(main)/phimhay/_components/gpmn-section'
import CategoriesSection from './_components/categories-section'
import SlidersSection from './_components/sliders-section'
import { ApiResponse } from '@/types/common'
import movieService from '@/services/movie-service'
import NewestSection from '@/app/(main)/phimhay/_components/newest-section'
import { Movie } from '@/types/movie'

/** Fetch data */
const getMovieList = async () => {
  try {
    const response = await fetch(
      'https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3'
    )

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getCategoryList = async () => {
  try {
    const response = await fetch('https://phimapi.com/the-loai')
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const getHistoryMovies = async () => {
  try {
    const response = await fetch(
      'https://phimapi.com/v1/api/the-loai/lich-su?page=1&limit=6&country=viet-nam'
    )

    return (await response.json()) as ApiResponse
  } catch (error) {
    console.log(error)
  }
}

const PhimHayPage = async () => {
  /** Movies */
  const moviesData = await getMovieList()
  const slidersSectionMovies = moviesData?.items?.splice(0, 6) || []

  /** Categories */
  const categoriesData = await getCategoryList()

  /** History movies */
  const historyMoviesData = await getHistoryMovies()

  /** Get movies china */
  const moviesChineseResponse = await movieService.getMoviesByCountry(
    'trung-quoc'
  )
  const domainCDNImage = moviesChineseResponse?.data?.APP_DOMAIN_CDN_IMAGE || ''

  /** Get movies korean */
  const moviesKoreanResponse = await movieService.getMoviesByCountry('han-quoc')

  /** Get movies korean */
  const moviesUSUKResponse = await movieService.getMoviesByCountry('au-my')

  /** Newest section props */
  const newestSectionProps = {
    koreanMovies:
      moviesKoreanResponse?.data?.items?.map((movie: Movie) => {
        return {
          ...movie,
          thumb_url: `${domainCDNImage}/${movie.thumb_url}`,
          poster_url: `${domainCDNImage}/${movie.poster_url}`
        }
      }) || [],
    chineseMovies:
      moviesChineseResponse?.data?.items?.map((movie: Movie) => {
        return {
          ...movie,
          thumb_url: `${domainCDNImage}/${movie.thumb_url}`,
          poster_url: `${domainCDNImage}/${movie.poster_url}`
        }
      }) || [],
    usukMovies:
      moviesUSUKResponse?.data?.items?.map((movie: Movie) => {
        return {
          ...movie,
          thumb_url: `${domainCDNImage}/${movie.thumb_url}`,
          poster_url: `${domainCDNImage}/${movie.poster_url}`
        }
      }) || []
  }

  return (
    <>
      <SlidersSection movies={slidersSectionMovies} />
      <CategoriesSection categories={categoriesData || []} />
      <GPMNSection movies={historyMoviesData?.data?.items || []} />
      <NewestSection {...newestSectionProps} />
    </>
  )
}

export default PhimHayPage
