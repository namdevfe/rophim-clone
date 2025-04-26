import GPMNSection from '@/app/(main)/phimhay/_components/gpmn-section'
import CategoriesSection from './_components/categories-section'
import SlidersSection from './_components/sliders-section'
import { ApiResponse } from '@/types/common'

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

  return (
    <>
      <SlidersSection movies={slidersSectionMovies} />
      <CategoriesSection categories={categoriesData || []} />
      <GPMNSection movies={historyMoviesData?.data?.items || []} />
    </>
  )
}

export default PhimHayPage
