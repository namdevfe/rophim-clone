export interface ApiResponse<DataType = any> {
  status: string
  msg?: string
  data: DataType
}

export type QueryParams = Partial<{
  page: string | number
  sort_field: string
  sort_type: 'asc' | 'desc'
  sort_lang: string
  category: string | string[]
  country: string
  year: number | string
  limit: number | string
  keyword: string
}>

export interface Rect {
  x: number
  y: number
}
