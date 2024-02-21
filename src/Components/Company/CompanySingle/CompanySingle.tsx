import { useDispatch } from "react-redux";
import "./CompanySingle.css";
import webApiService from "../../../Service/WebApiService";
import notifyService from "../../../Service/NotificationService";
import { gotSingleCompanyAction } from "../../../Redux/CompaniesAppState";
import { CompanyModel } from "../../../Models/CompanyModel";
import { useState } from "react";
import { useForm } from "react-hook-form";


function CompanySingle(): JSX.Element {
    const dispatch = useDispatch();
const {
    handleSubmit,
    register,
    formState: {errors},
}= useForm();
const [company, setCompany] =useState<CompanyModel | null> (null)  //(store.getState().companyReducer.companyList)

const onSubmit = (data:{id: string}) => {
    const comId = parseInt(data.id);

    if (!isNaN(comId)){
        webApiService.getSingleCompanies(comId)
        .then((res) =>{
            notifyService.success(`company #${comId} fond`);
            dispatch(gotSingleCompanyAction(res.data[0]));
            setCompany(res.data[0])
        })
        .catch((err) => notifyService.error(err));
    
    }
    else{
        notifyService.error("please enter a valid company id")
    }
};
return (
    <div className="companySingle">
        <h1> single company </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors?.id ?(
                <span>{errors.id.message = ("please enter a valid company id")}</span>
            ) : (
            <>
            <label htmlFor="id">id</label>
            <input {...register("id")} type="number" placeholder="id" />
            </>
            )}
            <button>get</button>
        </form>
        {company && (
            <div className="companyCard">
                <h2>single company</h2>
                <p>ID: {company.id}</p>
                <p>name: {company.name}</p>
                <p>email: {company.email}</p>
                <p>password: {company.password}</p>

                <h2>coupon list</h2>
                <ul className="CouponList">
                    {company.coupons.map((Coupon) => (
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
export default CompanySingle;

// webApiService.getSingleCompaniesAuth(id)
// .then(res => {
//     notifyService.success(`company #${id}` );
//     setCompany(res.data);
//     store.dispatch(gotSingleCompanyAction(id));
//     dispatch(gotSingleCompanyAction(id));
//     console.log(res.data);
// })
// .catch((err)=>{
//     console.log(err);
// })



// return(
//     <div>
//         <h1>Company #{id}</h1>
//         {
//         company.map((t, id) => <CompanyCard key={`company-card-${id}`} company={t} />)
//         }
//     </div>
// )








// // function getSingleCompanies(data: CompanyModel[]): any {
// //     throw new Error("Function not implemented.");
// // }

// }
// export default CompanySingle;