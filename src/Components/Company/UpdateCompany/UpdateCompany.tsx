import { useState } from "react";
import { CompanyModel } from "../../../Models/CompanyModel";
import store from "../../../Redux/Store";
import "./UpdateCompany.css";
import * as zod from 'zod';
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import webApiService from "../../../Service/WebApiService";
import notifyService from "../../../Service/NotificationService";
import { gotAllCompanyAction, updatedCompanyAction } from "../../../Redux/CompaniesAppState";
import { zodResolver } from "@hookform/resolvers/zod";
import { CouponList } from '../../../Models/CustomerModel';

function UpdateCompony(): JSX.Element {

const dispatch = useDispatch();
const navigate = useNavigate();
const params = useParams();
const idx = +(params.id || 0);
const [obj] = useState<CompanyModel>(store.getState().companyReducer.companyList.filter(c => c.id === idx)[0])
console.log(obj);

const[CompanyList, setCompanyList] = 
useState<CompanyModel[]>(store.getState()
.companyReducer.companyList);


const defaultValuesObj = { ...obj }; //Spread Operator



const schema = zod.object({

    name: zod.string().nonempty("enter name"),
    email: zod.string().nonempty("enter email"),
    password: zod.string().nonempty("enter password"), 


});



const { register, handleSubmit, formState: { errors, isValid, isSubmitting} } =
    useForm<CompanyModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: zodResolver(schema) });

const onSubmit: SubmitHandler<CompanyModel> = (data: CompanyModel) => {

    return webApiService.updateCompanyAuth(idx, data)
        .then(res => {
            notifyService.success("Company updated")
            dispatch(updatedCompanyAction(res.data));
            webApiService.getAllCompaniesAuth() //todo:לשנות לשליפה והחלפה של השינוי הספציפי
                .then(res => {
                    notifyService.success('company list');
                    setCompanyList(res.data);
                    store.dispatch(gotAllCompanyAction(res.data));
                    dispatch(gotAllCompanyAction(res.data));
                    console.log(res.data);
                    
                    navigate("/CompanyList");
            })
            .catch((err)=>{
                console.log(err);
            })

        })
        .catch(err => notifyService.error(err))



};



return (
    <div className="UpdateCustomer">
        <h1>Update Existing Task</h1>


        <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>


            <label htmlFor="id">Id</label>
            <input name="id" type="text" value={obj.id} disabled={true} />


            {(errors?.name) ? <span>{errors.name.message}</span> : <label htmlFor="name">company name</label>}
            <input {...register("name")} name="name" type="text" placeholder="name..." />

            {(errors?.email) ? <span>{errors.email.message}</span> : <label htmlFor="group">email</label>}
            <input {...register("email")} type="text" name="email" placeholder="email..." />

            {(errors?.password) ? <span>{errors.email.message}</span> : <label htmlFor="group">password</label>}
            <input {...register("password")} type="text" name="password" placeholder="password..." />



            <button disabled={!isValid || isSubmitting}>Update</button>
        </form>
    </div>
);
}

export default UpdateCompony;

