import SlidersSection from './_components/sliders-section'

const getMovieList = async () => {
  try {
    const response = await fetch(
      'https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1'
    )

    return await new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve(response.json())
      }, 2000)
    })
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
