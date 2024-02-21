import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import App from "../../../App";
import About from "../../pages/About/About";
import Page404 from "../../pages/Page404/Page404";
import Home from "../../pages/Home/Home";
import Login from "../../Auth/Login/Login";
import Admin from "../../pages/Admin/Admin";
import Company from "../../pages/Company/Company";
import Customer from "../../pages/Customer/Customer";
import CustomerList from "../../Customer/CustomerList/CustomerList";
import CompanyList from "../../Company/CompanyList/CompanyList";
import Coupon from "../../pages/Coupon/Coupon";
import DeleteCustomer from "../../Customer/DeleteCustomer/DeleteCustomer";
import DeleteCompany from "../../Company/DeleteCompany/DeleteCompany";
import CompanySingle from "../../Company/CompanySingle/CompanySingle";
import CustomerSingle from "../../Customer/CustomerSingle/CustomerSingle";
import CompanyCoupon from '../../Company/CompanyCoupon/CompanyCoupon';
import AddCoupon from "../../Company/AddCoupon/AddCoupon";
import ThisCompany from "../../Company/ThisCompany/ThisCompany";
import ThisCustomer from "../../Customer/ThisCustomer/ThisCustomer";
import DeleteCoupon from "../../Coupon/DeleteCoupon/DeleteCoupon";
import UpdateCustomer from "../../Customer/UpdateCustomer/UpdateCustomer";
import Logout from "../../Auth/Logout/Logout";
import CouponList from "../../Coupon/CouponList/CouponList";
import Register from "../../Auth/Register/Register";
import RegisterCompany from "../../Auth/RegisterCompany/RegisterCompany";
// import CouponByCategory from "../../Coupon/CouponByCategory/CouponByCategory";
import MyCouponList from "../../Customer/MyCouponList/MyCouponList";
import CustomerCouponList from "../../Coupon/CustomerCouponList/CustomerCouponList";
import PurchaseCoupon from "../../Coupon/purchaseCoupon/purchaseCoupon";
import UserList from "../../User/UserList/UserList";
import UpdateCoupon from "../../Coupon/UpdateCoupon/UpdateCoupon";
import UpdateCompony from "../../Company/UpdateCompany/UpdateCompany";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element= {<App/>}/>
                <Route path="/home" element= {<Home/>}/>
                <Route index element= {<Home/>}/>
                <Route path="/About" element= {<About/>}/>
                <Route path="/login" element= {<Login/>}/>
                <Route path="/logout" element= {<Logout/>}/>
                <Route path="/register" element= {<Register/>}/>
                <Route path="/registerCompany" element= {<RegisterCompany/>}/>
                <Route path="/admin" element= {<Admin/>}/>
                <Route path="/company" element= {<Company/>}/>
                <Route path="/customer" element= {<Customer/>}/>
                <Route path="/deleteCustomer/:id" element= {<DeleteCustomer/>}/>
                <Route path="/deleteCompany/:id" element= {<DeleteCompany/>}/>
                <Route path="/deleteCoupon/:id" element= {<DeleteCoupon/>}/>
                <Route path="/updateCustomer/:id" element= {<UpdateCustomer/>}/>
                <Route path="/updateCoupon/:id" element= {<UpdateCoupon/>}/>
                <Route path="/updateCompony/:id" element= {<UpdateCompony/>}/>
                <Route path="/coupon" element= {<Coupon/>}/>
                <Route path="/couponList" element= {<CouponList/>}/>
                <Route path="/customerList" element= {<CustomerList/>}/>
                <Route path="/companyList" element= {<CompanyList/>}/> 
                <Route path="/useList" element= {<UserList/>}/> 
                <Route path="/customerSingle" element= {<CustomerSingle/>}/>
                <Route path="/companySingle" element= {<CompanySingle/>}/>
                <Route path="/thisCompany" element= {<ThisCompany/>}/>
                <Route path="/thisCustomer" element= {<ThisCustomer/>}/>
                <Route path="/companyCoupons" element= {<CompanyCoupon/>}/>
                <Route path="/addCoupons" element= {<AddCoupon/>}/>
                {/* <Route path="/couponByCategory" element= {<CouponByCategory/>}/> */}
                <Route path="/customerCouponList" element= {<CustomerCouponList/>}/>
                <Route path="/myCouponList" element= {<MyCouponList/>}/>
                <Route path="/purchaseCoupon/:id" element= {<PurchaseCoupon/>}/>
            


                <Route path="*" element= {<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
