import { useDispatch } from "react-redux";
import "./UpdateCustomer.css";
import * as zod from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import { CustomerModel, CouponList } from '../../../Models/CustomerModel';
import { useState } from 'react';
import store from "../../../Redux/Store";
import { SubmitHandler, useForm } from "react-hook-form";
import webApiService from "../../../Service/WebApiService";
import { zodResolver } from "@hookform/resolvers/zod";
import notifyService from "../../../Service/NotificationService";
import { updatedCustomerAction } from "../../../Redux/CustomerAppState";

function UpdateCustomer(): JSX.Element {
const dispatch = useDispatch();
const navigate = useNavigate();
const params = useParams();
const idx = +(params.id || 0);
const [obj] = useState<CustomerModel>(store.getState().customerReducer.customerList.filter(c => c.id === idx)[0])
console.log(obj);



const defaultValuesObj = { ...obj }; //Spread Operator



const schema = zod.object({

    firstName: zod.string().nonempty("enter first name"),
    lastName: zod.string().nonempty("enter last name"),
    email: zod.string().nonempty("enter email"),
    password: zod.string().nonempty("enter password"), //todo: enter password from DB

});



const { register, handleSubmit, formState: { errors} } =
    useForm<CustomerModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: zodResolver(schema) });

const onSubmit: SubmitHandler<CustomerModel> = (data: CustomerModel) => {

    return webApiService.updateCustomerAuth(idx, data)
        .then(res => {
            notifyService.success("Customer updated")
            dispatch(updatedCustomerAction(res.data));
            navigate("/customerList");
        })
        .catch(err => notifyService.error(err))



};





return (
    <div className="UpdateCustomer">
        <h1>Update customer </h1>


        <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>


            {(errors?.firstName) ? <span>{errors.firstName.message}</span> : <label htmlFor="first name">first name</label>}
            <input {...register("firstName")} name="first name" type="text" placeholder="first name..." />

            {(errors?.lastName) ? <span>{errors.lastName.message}</span> : <label htmlFor="last name">last name</label>}
            <input {...register("lastName")} name="last name" type="text" placeholder="last name..." />

            {(errors?.email) ? <span>{errors.email.message}</span> : <label htmlFor="group">email</label>}
            <input {...register("email")} type="text" name="email" placeholder="email..." />

            {(errors?.password) ? <span>{errors.email.message}</span> : <label htmlFor="group">password</label>}
            <input {...register("password")} type="text" name="password" placeholder="password..." />

            <button >ADD</button>

        </form>
    </div>
);
}

export default UpdateCustomer;