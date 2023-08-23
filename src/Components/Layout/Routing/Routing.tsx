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


function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element= {<App/>}/>
                <Route path="/home" element= {<Home/>}/>
                <Route index element= {<Home/>}/>
                <Route path="/About" element= {<About/>}/>
                <Route path="/login" element= {<Login/>}/>
                <Route path="/admin" element= {<Admin/>}/>
                <Route path="/company" element= {<Company/>}/>
                <Route path="/customer" element= {<Customer/>}/>
                <Route path="/customerList" element= {<CustomerList/>}/>
                <Route path="/companyList" element= {<CompanyList/>}/>
                <Route path="*" element= {<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
