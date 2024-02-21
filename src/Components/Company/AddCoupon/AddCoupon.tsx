import "./AddCoupon.css";
import { SubmitHandler, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { CouponModel } from "../../../Models/CouponModel";
import notifyService from "../../../Service/NotificationService";
import webApiService from "../../../Service/WebApiService";
import { addedCouponAction } from "../../../Redux/CouponAppState";

function AddCoupon(): JSX.Element {

const navigate = useNavigate();
const dispatch = useDispatch();

const schema = zod.object({

    category: zod.string().nonempty(" enter coupon title category"),
    title: zod.string().nonempty(" enter coupon title"),
    description: zod.string().nonempty(" enter coupon description"),
    startDate: zod.string().transform((dateString, ctx) => {
        const date = new Date(dateString);
        if (!zod.date().safeParse(date).success) {

        }
        return date;
    }),
    endDate: zod.string().transform((dateString, ctx) => {
        const date = new Date(dateString);
        if (!zod.date().safeParse(date).success) {
    
        }
        return date;
    }),
    amount: zod.string().refine((val)=> !Number.isNaN(val)),
    price: zod.string().refine((val)=> !Number.isNaN(val)),
    image: zod.string().nonempty(" enter image"),



});


const { register, handleSubmit, formState: { errors, isValid, isSubmitting } }
    = useForm<CouponModel>({ mode: "all", resolver: zodResolver(schema) });



const onSubmit: SubmitHandler<CouponModel> 
= async (data: CouponModel) => {
    return webApiService.addCouponAuth(data)
    .then(()=> {navigate("/companyCoupons");
})
.catch (err =>notifyService.error(err))
    ;
}



return (
    <div className="AddCoupon form-look-and-feel">
        <h1>Add new Coupon</h1>


        <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>

            {(errors?.category)? <span>{errors.category.message}</span>:
            <label htmlFor="category">category</label>}
            <select {...register("category") }>
                <option value="FOOD"> FOOD </option>
                <option value="FASHION"> FASHION </option>
                <option value="CARS"> CARS </option>
                <option value="ELECTRONICS"> ELECTRONICS </option>
                <option value="VACATION"> VACATION </option>
                <option value="HEALTH"> HEALTH </option>
                <option value="RESTAURANT"> RESTAURANT </option>
            </select>

            {(errors?.title) ? <span>{errors.title.message}</span> : <label htmlFor="title">Title</label>}
            <input {...register("title")} name="title" type="text" placeholder="Title..." />

            {(errors?.description) ? <span>{errors.description.message}</span> : <label htmlFor="description">Description</label>}
            <input {...register("description")} name="description" type="text" placeholder="Description..." />

            {(errors?.startDate) ? <span>{errors.startDate.message}</span> : <label htmlFor="startDate">startDate</label>}
            <input {...register("startDate")} name="startDate" type="datetime-local" placeholder="startDate..." />

            {(errors?.endDate) ? <span>{errors.endDate.message}</span> : <label htmlFor="endDate">endDate</label>}
            <input {...register("endDate")} name="endDate" type="datetime-local" placeholder="endDate..." />

            {(errors?.amount) ? <span>{errors.amount.message}</span> : <label htmlFor="amount">amount</label>}
            <input {...register("amount")} name="amount" type="number" placeholder="amount..." />

            {(errors?.price) ? <span>{errors.price.message}</span> : <label htmlFor="price">price</label>}
            <input {...register("price")} name="price" type="number" step="0.01" placeholder="price..." />

            {(errors?.image) ? <span>{errors.image.message}</span> : <label htmlFor="image">image</label>}
            <input {...register("image")} name="image" type="text" placeholder="image..." />


            <button disabled={!isValid || isSubmitting}>ADD</button>
        </form>
    </div>
);
}

export default AddCoupon;