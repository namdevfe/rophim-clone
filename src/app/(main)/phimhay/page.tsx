import CategoriesSection from './_components/categories-section'
import SlidersSection from './_components/sliders-section'

const getMovieList = async () => {
  try {
    const response = await fetch(
      'https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1'
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

const PhimHayPage = async () => {
  /** Movies */
  const moviesData = await getMovieList()
  const movies = moviesData.items?.splice(0, 6)

  /** Categories */
  const categoriesData = await getCategoryList()

  return (
    <>
      <SlidersSection movies={movies || []} />
      <CategoriesSection categories={categoriesData || []} />
    </>
  )
}

export default PhimHayPage
