
export type Root = CompanyMode[]

export interface CompanyMode {
  id: number
  name: string
  email: string
  password: string
  coupons: Coupon[]
}

export interface Coupon {
  id: number
  category: string
  title: string
  description: string
  startDate: Date
  endDate: Date
  amount: number
  price: number
  image: string
}
