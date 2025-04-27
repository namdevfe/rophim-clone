export interface ApiResponse<DataType = any> {
  status: string
  msg?: string
  data: DataType
}

export type QueryParams = Partial<{
  page: string
  sort_field: string
  sort_type: 'asc' | 'desc'
  sort_lang: string
  category: string
  country: string
  year: number
  limit: number
}>
