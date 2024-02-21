import { useDispatch } from "react-redux";
import "./Logout.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userLoggedOut } from "../../../Redux/UserAppState";
import { removeAdminAccess } from "../../../Redux/GuardAppState";
import { clearAllCompany } from "../../../Redux/CompaniesAppState";
import { clearAllCustomer } from "../../../Redux/CustomerAppState";

function Logout(): JSX.Element {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearAllCompany())
        dispatch(clearAllCustomer())
        dispatch(userLoggedOut());
        dispatch(removeAdminAccess())
        navigate("/home");
    }, []);
    return (
        <></>
    );
}

export default Logout;
