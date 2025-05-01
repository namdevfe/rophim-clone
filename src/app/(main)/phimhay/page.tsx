import GPMNSection from './_components/gpmn-section'
import CategoriesSection from './_components/categories-section'
import SlidersSection from './_components/sliders-section'
import { ApiResponse } from '@/types/common'
import movieService from '@/services/movie-service'
import NewestSection from './_components/newest-section'
import CollectionSection from './_components/collection-section'
import TopMoviesSection from './_components/top-movies-section'
import SingleMoviesSection from '@/app/(main)/phimhay/_components/single-movies-section'
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

  /** Get movies korean */
  const moviesKoreanResponse = await movieService.getMoviesByCountry(
    'han-quoc',
    {
      limit: 64
    }
  )

  /** Get movies korean */
  const moviesUSUKResponse = await movieService.getMoviesByCountry('au-my')

  /** Get single movies */
  const singleMovieData = await movieService.getMoviesByType('phim-le', {
    limit: 64
  })

  /** Get cartoon movies */
  const cartoonMovieData = await movieService.getMoviesByType('hoat-hinh')

  /** Get series movies */
  const seriesMoviesData = await movieService.getMoviesByType('phim-bo')

  /** Get kid movies */
  const kidMoviesData = await movieService.getMovieByGenre('tre-em')

  /** Get chinese movies with genre is action */
  const actionChineseMoviesData = await movieService.getMoviesByCountry(
    'hong-kong',
    {
      category: 'hanh-dong'
    }
  )

  /** Get horror movies */
  const horrorMoviesData = await movieService.getMovieByGenre('kinh-di')

  /** Get ameican movies with genre is love */
  const loveAmericanMoviesData = await movieService.getMoviesByCountry(
    'au-my',
    {
      category: 'tinh-cam'
    }
  )

  /** Get love movies */
  const psychologicalMovieData = await movieService.getMovieByGenre('tam-ly')

  /** Newest section props */
  const newestSectionProps = {
    koreanMovies: moviesKoreanResponse?.data?.items || [],
    chineseMovies: moviesChineseResponse?.data?.items || [],
    usukMovies: moviesUSUKResponse?.data?.items || []
  }

  /** Top 10 movies section props */
  const topMovies = moviesData?.items?.slice(0, 10) || []

  /** Korean movie genre love */
  const loveMovies =
    moviesData?.items?.filter((movie: Movie) =>
      movie?.category?.some((item) => item?.slug === 'tam-ly')
    ) || []

  /** Get Thailand movies */
  const thaiLandMoviesData = await movieService.getMoviesByCountry('thai-lan')

  /** Get crime movies */
  const crimeMoviesData = await movieService.getMovieByGenre('hinh-su', {
    limit: 64
  })

  /** Get crime Korean movies */
  const crimeKoreanMovies = await movieService.getMovieByGenre('hinh-su', {
    limit: 64,
    country: 'han-quoc'
  })

  /** Get family movies */
  const familyMovies = await movieService.getMovieByGenre('gia-dinh', {
    limit: 64
  })

  /** Get Korean single movies */
  const koreanSingleMovies = await movieService.getMoviesByType('phim-le', {
    country: 'han-quoc',
    limit: 64
  })

  return (
    <>
      <SlidersSection movies={slidersSectionMovies} />
      <CategoriesSection categories={categoriesData || []} />
      <GPMNSection movies={historyMoviesData?.data?.items || []} />
      <NewestSection {...newestSectionProps} />
      <CollectionSection
        link='phim-dien-anh-moi-coong'
        title='Phim Điện Ảnh Mới Coóng'
        movies={moviesData?.items || []}
      />
      <TopMoviesSection title='Top 10 Phim Hôm Nay' movies={topMovies} />
      <SingleMoviesSection
        title='Mãn Nhãn với Tuyển Tập Phim Lẻ Hot'
        link='hanh-dong'
        movies={singleMovieData?.data?.items || []}
      />
      <CollectionSection
        link='hoat-hinh'
        title='Hòa Mình Cùng Các Bộ Phim Hoạt Hình Hay'
        movies={cartoonMovieData?.data?.items || []}
      />
      <TopMoviesSection
        title='Top 10 Phim Bộ Hôm Nay'
        movies={seriesMoviesData?.data?.items?.slice(0, 10) || []}
      />
      <CollectionSection
        link='hoat-hinh'
        title='Phim Thiếu Nhi mà Người Lớn Vẫn Thích Cày'
        movies={kidMoviesData?.data?.items || []}
      />
      <CollectionSection
        link='hanh-dong'
        title='Điện Ảnh Hồng Kông ở Chỗ Này Này'
        movies={actionChineseMoviesData?.data?.items || []}
      />
      <CollectionSection
        link='kinh-di'
        title='Tôi Sợ Con Người Em Rồi Đó, nhưng Không Bằng Sợ Ma'
        movies={horrorMoviesData?.data?.items || []}
      />
      <CollectionSection
        title='Yêu Kiểu Mỹ'
        movies={loveAmericanMoviesData?.data?.items || []}
      />
      <CollectionSection
        link='tam-ly'
        title='Đường về nhà là vào tim ta...'
        movies={psychologicalMovieData?.data?.items || []}
      />
      <CollectionSection
        title='Giai Điệu Thanh Xuân'
        movies={loveMovies || []}
      />
      <SingleMoviesSection
        link='thai-lan'
        title='Xoắn Não Như Lakorn Thái'
        movies={thaiLandMoviesData?.data?.items || []}
      />
      <CollectionSection
        link='phim-le'
        title='Phim Điện Ảnh Hàng Tuyển'
        movies={singleMovieData?.data?.items || []}
      />
      <CollectionSection
        title='Căng Não Cùng Tội Phạm'
        movies={crimeMoviesData?.data?.items || []}
      />
      <CollectionSection
        title='Phá Án Kiểu Hàn'
        movies={crimeKoreanMovies?.data?.items || []}
      />
      <SingleMoviesSection
        title='Gia Đình của Chúng Mình'
        movies={familyMovies?.data?.items || []}
      />
      <CollectionSection
        link='/phim-le?country=han-quoc'
        title='Bắc Rạp Xem Phim Hàn'
        movies={koreanSingleMovies?.data?.items || []}
      />
    </>
  )
}

export default PhimHayPage
