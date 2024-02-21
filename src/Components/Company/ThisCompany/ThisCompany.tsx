import { useDispatch } from "react-redux";
import webApiService from "../../../Service/WebApiService";
import "./ThisCompany.css";
import { CompanyModel } from "../../../Models/CompanyModel";
import { useState } from "react";
import notifyService from "../../../Service/NotificationService";
import { gotThisCompanyAction } from "../../../Redux/CompaniesAppState";

function ThisCompany(): JSX.Element {
    const dispatch = useDispatch();

    const [company, setCompany] =useState<CompanyModel | null> (null)  //(store.getState().companyReducer.companyList)
    

            webApiService.getThisCompaniesAuth()
            .then((res) =>{
                notifyService.success(`company fond`);
                dispatch(gotThisCompanyAction(res.data));
                setCompany(res.data)
            })
            .catch((err) => notifyService.error(err));
        
    return (
        <div className="thisCompany">
            <h1> your company </h1>
            {company && (
                <div className="CompanyCard">
                    
                    <p>ID: {company.id}</p>
                    <p>name: {company.name}</p>
                    <p>email: {company.email}</p>
                    <p>password: {company.password}</p>
    
                    <h2>coupon list</h2>
                    <ul className="CouponList">
                        {company.coupons.map((Coupon) => (
                                <li key={Coupon.id} className="CouponCard">
                                    <p>title: {Coupon.title}</p>
                                    <p>description: {Coupon.description}</p>
                                    <p>category: {Coupon.category}</p>
                                    <p>start date: {Coupon.startDate.toString()}</p>
                                    <p>end date: {Coupon.endDate.toString()}</p>
                                    <p>amount: {Coupon.amount}</p>
                                    <p>price: {Coupon.price}</p>
                                    <p>image: <img src={Coupon.image} /></p>
    
                                </li>
                            ))}
                            </ul>
                </div>
            )}
        </div>
    )}

export default ThisCompany;
