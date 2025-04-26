export interface ApiResponse<DataType = any> {
  status: string
  msg?: string
  data: DataType
}
