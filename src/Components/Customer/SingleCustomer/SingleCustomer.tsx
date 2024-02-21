import { useEffect, useState } from "react";
import webApiService from "../../../Service/WebApiService";
import "./SingleCustomer.css";
import notifyService from "../../../Service/NotificationService";
import { useDispatch } from "react-redux";
import { CustomerModel } from "../../../Models/CustomerModel";
import { gotSingleCustomerAction } from "../../../Redux/CustomerAppState";
import EmptyView from "../../pages/EmptyView/EmptyView";
import CustomerCard from "../CustomerCard/CustomerCard";
import { useForm } from "react-hook-form";

function SingleCustomer(): JSX.Element {
    const dispatch = useDispatch();
    const {
    handleSubmit,
    register,
    formState: {errors},
}= useForm();
  const [customer, setCustomer] =useState<CustomerModel | null> (null)  //(store.getState().companyReducer.companyList)
  
    const onSubmit = (data:{id: string}) => {
        const comId = parseInt(data.id);
  
        if (!isNaN(comId)){
            webApiService.getSingleCustomerAuth(comId)
            .then((res) =>{
                notifyService.success(`customer #${comId} fond`);
                dispatch(gotSingleCustomerAction(res.data[0]));
                setCustomer(res.data[0])
            })
            .catch((err) => notifyService.error(err));
      
      }
      else{
          notifyService.error("please enter a valid customer id")
      }
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
                  <p>First name: {customer.firstName}</p>
                  <p>Lest name: {customer.lastName}</p>
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


export default SingleCustomer;
