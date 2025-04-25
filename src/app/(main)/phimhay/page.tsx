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

const PhimHayPage = async () => {
  const moviesResponse = await getMovieList()
  const movies = moviesResponse.items?.splice(0, 6)

  return (
    <>
      <SlidersSection movies={movies || []} />
    </>
  )
}

export default PhimHayPage
