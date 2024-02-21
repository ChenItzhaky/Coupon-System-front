import { useDispatch } from "react-redux";
import { CustomerModel } from "../../../Models/CustomerModel";
import { useState } from "react";
import { useForm } from "react-hook-form";
import webApiService from "../../../Service/WebApiService";
import notifyService from "../../../Service/NotificationService";
import { gotSingleCustomerAction } from "../../../Redux/CustomerAppState";
import { useNavigate } from "react-router-dom";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Id } from "@reduxjs/toolkit/dist/tsHelpers";

function CustomerSingle(): JSX.Element {
    
    const dispatch = useDispatch();
    const {
    handleSubmit,
    register,
    formState: {errors},
}= useForm();
const [customer, setCustomer] =useState<CustomerModel | null> (null)  //(store.getState().companyReducer.companyList)

const onSubmit = (data:{id: string}) => {
    const cusId = parseInt(data.id);

    // if (!isNaN(cusId)){
        webApiService.getSingleCustomerAuth(cusId)
        .then((res) =>{
            notifyService.success(`customer #${cusId} fond`);
            dispatch(gotSingleCustomerAction(res.data[0]));
            setCustomer(res.data[0])
        })
        .catch((err) => notifyService.error(err));
    
    // }
    // else{
    //     notifyService.error("please enter a valid customer id")
    // }
};
return (
    <div className="customerSingle">
        <h1> single customer </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors?.id ?(
                <span>{errors.id.message = ("please enter a valid customer id")}</span>
            ) : (
            <>
            <label htmlFor="id">id</label>
            <input {...register("id")} type="number" placeholder="id" />
            </>
            )}
            <button>get</button>
        </form>
        {customer && (
            <div className="customerCard">
                <h2>single company</h2>
                <p>ID: {customer.id}</p>
                <p>first name: {customer.firstName}</p>
                <p>last first name: {customer.lastName}</p>
                <p>email: {customer.email}</p>
                <p>password: {customer.password}</p>
                <h2>coupon list</h2>
                <ul className="CouponList">
                    {customer.couponList.map((Coupon) => (
                            <li key={Coupon.id} className="couponCard">
                                <p>title: {Coupon.title}</p>
                                <p>description: {Coupon.description}</p>
                                <p>category: {Coupon.category}</p>
                                <p>start date: {Coupon.startDate.toString()}</p>
                                <p>end date: {Coupon.endDate.toString()}</p>
                                <p>amount: {Coupon.amount}</p>
                                <p>price: {Coupon.price}</p>
                                <p>image: {Coupon.image}</p>

                            </li>
                        ))}
                        </ul>
            </div>
        )}
    </div>
)}

export default CustomerSingle;


// const {
//     handleSubmit,
//     register,
//     formState: {errors},
// }= useForm();
// const [customer, setCustomer] =useState<CustomerModel | null> (null)  //(store.getState().companyReducer.companyList)

// const onSubmit = (data:{id: string}) => {
//     const cusId = parseInt(data.id);

//     if (!isNaN(cusId)){
//         webApiService.getSingleCustomerAuth(cusId)
//         .then((res) =>{
//             notifyService.success(`customer #${cusId} fond`);
//             dispatch(gotSingleCustomerAction(res.data[0]));
//             setCustomer(res.data[0])
//         })
//         .catch((err) => notifyService.error(err));
    
//     }
//     else{
//         notifyService.error("please enter a valid customer id")
//     }
// };
// return (
//     <div className="customerSingle">
//         <h1> single customer </h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//             {errors?.id ?(
//                 <span>{errors.id.message = ("please enter a valid customer id")}</span>
//             ) : (
//             <>
//             <label htmlFor="id">id</label>
//             <input {...register("id")} type="number" placeholder="id" />
//             </>
//             )}
//             <button>get</button>
//         </form>
//         {customer && (
//             <div className="customerCard">
//                 <h2>single company</h2>
//                 <p>ID: {customer.id}</p>
//                 <p>first name: {customer.firstName}</p>
//                 <p>last first name: {customer.lastName}</p>
//                 <p>email: {customer.email}</p>
//                 <p>password: {customer.password}</p>
//                 <h2>coupon list</h2>
//                 <ul className="CouponList">
//                     {customer.couponList.map((Coupon) => (
//                             <li key={Coupon.id} className="couponCard">
//                                 <p>title: {Coupon.title}</p>
//                                 <p>description: {Coupon.description}</p>
//                                 <p>category: {Coupon.category}</p>
//                                 <p>start date: {Coupon.startDate.toString()}</p>
//                                 <p>end date: {Coupon.endDate.toString()}</p>
//                                 <p>amount: {Coupon.amount}</p>
//                                 <p>price: {Coupon.price}</p>
//                                 <p>image: {Coupon.image}</p>

//                             </li>
//                         ))}
//                         </ul>
//             </div>
//         )}
//     </div>
// )}