import { Category } from '@/types/category'

export interface Movie {
  _id: string
  name: string
  slug: string
  origin_name: string
  type: 'single' | 'series' | string // tùy bạn refine thêm
  poster_url: string
  thumb_url: string
  sub_docquyen: boolean
  time: string
  episode_current: string
  quality: string
  lang: string
  year: number
  episode_total: number
  tmdb: {
    type: string | null
    id: number | null
    season: number | null
    vote_average: number
    vote_count: number
  }
  imdb: {
    id: string | null
  }
  modified: {
    time: string
  }
  category: Category[]
  country: Country[]
}

export interface Country {
  id: string
  name: string
  slug: string
  _id?: string
}

export interface MovieDetail {
  tmdb: {
    type: string // "tv" | "movie"
    id: string
    season: number | null
    vote_average: number
    vote_count: number
  }
  imdb: {
    id: string | null
  }
  created: {
    time: string // ISO date
  }
  modified: {
    time: string // ISO date
  }
  _id: string
  name: string
  slug: string
  origin_name: string
  content: string
  type: string // "series" | "single" | etc.
  status: string // "completed" | "ongoing" | etc.
  poster_url: string
  thumb_url: string
  is_copyright: boolean
  sub_docquyen: boolean
  chieurap: boolean
  trailer_url: string
  time: string
  episode_current: string
  episode_total: string
  quality: string
  lang: string
  notify: string
  showtimes: string
  year: number
  view: number
  actor: string[]
  director: string[]
  category: Category[]
  country: Country[]
  episodes: Array<Episode>
}

export interface Episode {
  server_name: string
  server_data: Array<{
    name: string
    slug: string
    filename: string
    link_embed: string
    link_m3u8: string
  }>
}
