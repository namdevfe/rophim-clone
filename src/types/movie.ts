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

export interface Category {
  id: string
  name: string
  slug: string
}

export interface Country {
  id: string
  name: string
  slug: string
}
