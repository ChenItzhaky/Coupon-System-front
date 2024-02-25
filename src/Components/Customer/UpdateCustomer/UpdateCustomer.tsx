import { useDispatch } from "react-redux";
import "./UpdateCustomer.css";
import * as zod from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import { CustomerModel } from '../../../Models/CustomerModel';
import { useState } from 'react';
import store from "../../../Redux/Store";
import { SubmitHandler, useForm } from "react-hook-form";
import webApiService from "../../../Service/WebApiService";
import { zodResolver } from "@hookform/resolvers/zod";
import notifyService from "../../../Service/NotificationService";
import { gotAllCustomerAction, updatedCustomerAction } from "../../../Redux/CustomerAppState";


function UpdateCustomer(): JSX.Element {
const dispatch = useDispatch();
const navigate = useNavigate();
const params = useParams();
const idx = +(params.id || 0);
const [obj] = useState<CustomerModel>(store.getState().customerReducer.customerList.filter(c => c.id === idx)[0])
console.log(obj);

const[CustomerList, setCustomerList] =
useState<CustomerModel[]>(store.getState()
.customerReducer.customerList);



const defaultValuesObj = { ...obj }; //Spread Operator



const schema = zod.object({

    firstName: zod.string().nonempty("enter first name"),
    lastName: zod.string().nonempty("enter last name"),
    email: zod.string().nonempty("enter email"),
    password: zod.string().nonempty("enter password"), 

});


const { register, handleSubmit, formState: { errors, isValid, isSubmitting} } =
    useForm<CustomerModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: zodResolver(schema) });

const onSubmit: SubmitHandler<CustomerModel> = (data: CustomerModel) => {
    const reqBody = {"firstName": data.firstName, "lastName": data.lastName,
                        "email": data.email, "password": data.password } as CustomerModel;

    return webApiService.updateCustomerAuth(idx, reqBody)
        .then(res => {
            notifyService.success("Customer updated")
            dispatch(updatedCustomerAction(res.data));

            webApiService.getAllCustomerAuth() //todo:לשנות לשליפה והחלפה של השינוי הספציפי
                .then(res => {
                    notifyService.success('customer list');
                    setCustomerList(res.data);
                    store.dispatch(gotAllCustomerAction(res.data));
                    dispatch(gotAllCustomerAction(res.data));

                    navigate("/customerList");
                })
                .catch((err)=>{
                    console.log(err);
                })
    
            
        })
        .catch(err => notifyService.error(err))


};


return (
    <div className="UpdateCustomer">
        <h1>Update customer </h1>


        <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>


            {(errors?.firstName) ? <span>{errors.firstName.message}</span> : <label htmlFor="first name">first name</label>}
            <input {...register("firstName")} name="firstName" type="text" placeholder="first name..." />

            {(errors?.lastName) ? <span>{errors.lastName.message}</span> : <label htmlFor="last name">last name</label>}
            <input {...register("lastName")} name="lastName" type="text" placeholder="last name..." />

            {(errors?.email) ? <span>{errors.email.message}</span> : <label htmlFor="group">email</label>}
            <input {...register("email")} type="text" name="email" placeholder="email..." />

            {(errors?.password) ? <span>{errors.password.message}</span> : <label htmlFor="group">password</label>}
            <input {...register("password")} type="text" name="password" placeholder="password..." />


            <button disabled={!isValid || isSubmitting}>Update Customer</button>

        </form>
    </div>
);
}

export default UpdateCustomer;