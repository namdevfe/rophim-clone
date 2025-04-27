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
const getMovieByCategory = async (slug: string, queryParams?: QueryParams) => {
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

const movieService = {
  getMovieBySlug,
  getMoviesByCountry,
  getMovieByCategory
}

export default movieService
