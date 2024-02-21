import "./Register.css";
import * as zod from 'zod';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from "react-hook-form";
import notifyService from "../../../Service/NotificationService";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterCustomerDetailsModel, RegisterCustomerReqModel } from "../../../Models/RegisterCustomer";
import webApiService from "../../../Service/WebApiService";

function Register(): JSX.Element {
    const navigate = useNavigate();

    const schema = zod.object({
        firstName: zod.string(),
        lastName: zod.string(),
        email: zod.string().email(),
        password: zod.string().min(4),
        confirm: zod.string().min(4),
    }).refine(value => value.password === value.confirm, {
        message: "Passwords must match",
        path: ['confirm'],
    })


    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } }
        = useForm<RegisterCustomerDetailsModel>({ mode: "all", resolver: zodResolver(schema) });


    const onSubmit: SubmitHandler<RegisterCustomerDetailsModel> = (data: RegisterCustomerDetailsModel) => {

        const reqBody = {"firstName": data.firstName, "lastName": data.lastName,
                        "email": data.email, "password": data.password } as RegisterCustomerReqModel;

        return webApiService.RegisterCustomer(reqBody)
            .then(() => {
                navigate("/login");
            })
            .catch(err => notifyService.error(err))

    };

    return (
        <div className="Register form-look-and-feel">
            <h1>Register Customer</h1>
            <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>

                {(errors?.firstName) ? <span>{errors.firstName.message}</span> : <label htmlFor="firstName">First Name</label>}
                <input {...register("firstName")} name="firstName" type="string" placeholder="firstName..." />

                {(errors?.lastName) ? <span>{errors.lastName.message}</span> : <label htmlFor="lastName">Lest Name</label>}
                <input {...register("lastName")} name="lastName" type="string" placeholder="lastName..." />

                {(errors?.email) ? <span>{errors.email.message}</span> : <label htmlFor="email">Email</label>}
                <input {...register("email")} name="email" type="email" placeholder="Email..." />

                {(errors?.password) ? <span>{errors.password.message}</span> : <label htmlFor="password">Password</label>}
                <input {...register("password")} name="password" type="password" placeholder="Password..." />

                {(errors?.confirm) ? <span>{errors.confirm.message}</span> : <label htmlFor="confirm">Confirm Password</label>}
                <input {...register("confirm")} name="confirm" type="password" placeholder="Confirm password..." />


                <button disabled={!isValid || isSubmitting} >Register</button>

            </form>
        </div>
    );
}


export default Register;
