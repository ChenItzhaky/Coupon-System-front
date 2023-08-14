export interface CouponModel{
    id: number;
    company: string;
    category: string
    title: string;
    description: string
    startDate: Date;
    endDate: Date;
    amount: number;
    price: number;
    image: string;
}