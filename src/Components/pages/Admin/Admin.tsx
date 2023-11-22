import "./Admin.css";
import { Link } from 'react-router-dom';

const id = 1;

function Admin(): JSX.Element {
    return (
        <div className="Admin">
			<h1>welcome admin</h1>

            <button className="myButton" >get single customer {" "} </button>
            <button className="myButton" >get single company {" "} </button>
            {/* <button className="myButton" >get single user {" "} </button> */}
            <Link to = {`/deleteCustomer`}> <button className="myButton" >delete single customer {" "} </button></Link>
            <button className="myButton" >delete single company {" "} </button>
            {/* <button className="myButton" >delete single user {" "} </button> */}
            <Link to = {"/customerList"}><button className="myButton" > get all customer {" "} </button></Link>
            <Link to = {"/companyList"}> <button className="myButton" >get all companies  {" "}</button></Link>
            {/* <Link to = {"/UsrList"}> <button className="myButton" >get all users {" "} </button> </Link> */}
            <button className="myButton" >update customer  {" "}</button>
            <button className="myButton" >update companies {" "} </button>
            {/* <button className="myButton" >update user {" "}</button> */}

        </div>
    );
}


export default Admin;
