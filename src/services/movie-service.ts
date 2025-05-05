import { QueryParams } from '@/types/common'
import queryString from 'query-string'

/** Get movie by country */
const getMoviesByCountry = async (
  countrySlug: string,
  queryParams?: QueryParams
) => {
  try {
    const query = queryString.stringify(queryParams || {})
    const response = await fetch(
      `https://phimapi.com/v1/api/quoc-gia/${countrySlug}?${query}`
    )

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

/** Get movie details */
const getMovieBySlug = async (slug: string) => {
  try {
    const response = await fetch(`https://phimapi.com/phim/${slug}`)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

/** Get movies by category */
const getMovieByGenre = async (slug: string, queryParams?: QueryParams) => {
  try {
    const query = queryString.stringify(queryParams || {})
    const response = await fetch(
      `https://phimapi.com/v1/api/the-loai/${slug}?${query}`
    )
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

/** Get movies by filters */
const getMoviesByType = async (type: string, queryParams?: QueryParams) => {
  try {
    const query = queryString.stringify(queryParams || {})
    const response = await fetch(
      `https://phimapi.com/v1/api/danh-sach/${type}?${query}`
    )
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

/** Get all genres */
const getGenres = async () => {
  try {
    const response = await fetch('https://phimapi.com/the-loai')
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

/** Get all countries */
const getCountries = async () => {
  try {
    const response = await fetch('https://phimapi.com/quoc-gia')
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

/** Get list movies */
const getMovies = async (page: number = 1) => {
  try {
    const response = await fetch(
      `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}`
    )

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

/** Search movie */
const getMovieByKeyword = async (queryParams: QueryParams) => {
  try {
    const query = queryString.stringify(queryParams || {})
    const response = await fetch(`https://phimapi.com/v1/api/tim-kiem?${query}`)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const movieService = {
  getMovieBySlug,
  getMoviesByCountry,
  getMovieByGenre,
  getMoviesByType,
  getGenres,
  getCountries,
  getMovies,
  getMovieByKeyword
}

export default movieService
