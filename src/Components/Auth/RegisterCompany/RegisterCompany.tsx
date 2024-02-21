
import * as zod from 'zod';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from "react-hook-form";
import notifyService from "../../../Service/NotificationService";
import { zodResolver } from "@hookform/resolvers/zod";
import webApiService from "../../../Service/WebApiService";
import { RegisterCompanyReqModel , RegisterCompanyDetailsModel} from "../../../Models/RagisterCompany";

function RegisterCompany(): JSX.Element {
    const navigate = useNavigate();

    const schema = zod.object({
        name: zod.string(),
        email: zod.string().email(),
        password: zod.string().min(4),
        confirm: zod.string().min(4),
    }).refine(value => value.password === value.confirm, {
        message: "Passwords must match",
        path: ['confirm'],
    })
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } }
    = useForm<RegisterCompanyDetailsModel>({ mode: "all", resolver: zodResolver(schema) });


const onSubmit: SubmitHandler<RegisterCompanyDetailsModel> 
= (data: RegisterCompanyDetailsModel) => {

    const reqBody = {"name": data.name,
                    "email": data.email, 
                    "password": data.password } as RegisterCompanyReqModel;

    return webApiService.RegisterCompanyAuth(reqBody)
        .then(() => {
            navigate("/login");
        })
        .catch(err => notifyService.error(err))

};

return (
    <div className="Register form-look-and-feel">
        <h1>Register Company</h1>
        <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>

            {(errors?.name) ? <span>{errors.name.message}</span> : <label htmlFor="name"> Name</label>}
            <input {...register("name")} name="name" type="string" placeholder="name..." />

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


export default RegisterCompany;
