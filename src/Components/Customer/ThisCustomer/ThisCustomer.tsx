import { useState } from "react";
import { CustomerModel } from "../../../Models/CustomerModel";
import webApiService from "../../../Service/WebApiService";
import "./ThisCustomer.css";
import { useDispatch } from "react-redux";
import notifyService from "../../../Service/NotificationService";
import { gotThisCustomerAction } from "../../../Redux/CustomerAppState";

function ThisCustomer(): JSX.Element {
    const dispatch = useDispatch();

    const [customer, setCustomer] =useState<CustomerModel | null> (null)  //(store.getState().companyReducer.companyList)
    

            webApiService.getThisCustomerAuth()
            .then((res) =>{
                notifyService.success(`customer fond`);
                dispatch(gotThisCustomerAction(res.data));
                setCustomer(res.data)
            })
            .catch((err) => notifyService.error(err));
        
    return (
        <div className="thisCustomer">
            <h1> your details </h1>
            {customer && (
                <div className="customerCard">
                    
                    <p>ID: {customer.id}</p>
                    <p>First name: {customer.firstName}</p>
                    <p>Last name: {customer.lastName}</p>
                    <p>Email: {customer.email}</p>
                    <p>Password: {customer.password}</p>
    
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

export default ThisCustomer;
