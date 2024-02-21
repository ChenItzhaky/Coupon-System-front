import { Link, useNavigate } from "react-router-dom";
import "./Coupon.css";
import { useDispatch } from "react-redux";
import * as zod from "zod";
import { CategoryModel, CategoryType } from "../../../Models/CategoryType";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CouponModel } from "../../../Models/CouponModel";
import notifyService from "../../../Service/NotificationService";
import webApiService from "../../../Service/WebApiService";

function Coupon(): JSX.Element {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const schemaCategory = zod.object({
        category: zod.string().nonempty(" enter coupon title category"),
    });

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } }
    = useForm<CategoryModel>({ mode: "all", resolver: zodResolver(schemaCategory) });



    const onSubmit: SubmitHandler<CategoryModel> 
    = async (data: CategoryModel) => {
        return webApiService.getCouponByCategory(data.category)
        .then(()=> {navigate("/couponByCategory");

})
.catch (err =>notifyService.error(err))
    ;
}

    return (
        <div className="Coupon">
            <Link to={"/couponList"}><button className="myButton" >  all coupons </button></Link>
            <Link to={"/couponByPrice"}><button className="myButton" >  coupons by price </button></Link>
            <h3> coupons by category</h3>
            <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
            <select {...register("category") }>
                <option value="FOOD"> FOOD </option>
                <option value="FASHION"> FASHION </option>
                <option value="CARS"> CARS </option>
                <option value="ELECTRONICS"> ELECTRONICS </option>
                <option value="VACATION"> VACATION </option>
                <option value="HEALTH"> HEALTH </option>
                <option value="RESTAURANT"> RESTAURANT </option>
            </select>
            <button disabled={!isValid || isSubmitting}>search</button>
            </form>

            
            

        </div>
    );
}

export default Coupon;
