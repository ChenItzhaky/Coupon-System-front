
export type Root = CustomerModel[]

export interface CustomerModel {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  couponList: CouponList[]
}

export interface CouponList {
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
