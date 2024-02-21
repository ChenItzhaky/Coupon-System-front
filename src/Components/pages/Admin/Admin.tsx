import "./Admin.css";
import { Link } from 'react-router-dom';



function Admin(): JSX.Element {
    return (
        <div className="Admin">
			<h1>welcome admin</h1>

            <Link to = {"/customerSingle"}><button className="myButton" >get single customer  </button></Link>
            <Link to = {"/companySingle"}> <button className="myButton" >get single company </button></Link>
            <Link to = {"/customerList"}><button className="myButton" > get all customer {" "} </button></Link>
            <Link to = {"/companyList"}> <button className="myButton" >get all companies  {" "}</button></Link>
            <Link to = {"/registerCompany"}> <button className="myButton" >register company  {" "}</button></Link>
            <Link to = {"/register"}> <button className="myButton" >register customer  {" "}</button></Link>
        
            {/* todo: direct Usr interaction */}
            {/* <button className="myButton" >update user {" "}</button> */}
            {/* <button className="myButton" >get single user {" "} </button> */}
            {/* <button className="myButton" >delete single user {" "} </button> */}
            {/* <Link to = {"/UsrList"}> <button className="myButton" >get all users {" "} </button> </Link> */}

        </div>
    );
}


export default Admin;
function register(arg0: string): import("react/jsx-runtime").JSX.IntrinsicAttributes & import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement> {
    throw new Error("Function not implemented.");
}

