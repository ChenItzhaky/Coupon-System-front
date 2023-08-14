import "./Admin.css";
import { Link } from 'react-router-dom';


function Admin(): JSX.Element {
    return (
        <div className="Admin">
			<h1>welcome admin</h1>

            <button className="myButton" >get single customer {" "} </button>
            <button className="myButton" >get single company {" "} </button>
            <button className="myButton" >get single user {" "} </button>
            <button className="myButton" >delete single customer {" "} </button>
            <button className="myButton" >delete single company {" "} </button>
            <button className="myButton" >delete single user {" "} </button>
            <Link to = {"/customerList"}><button className="myButton" > get all customer {" "} </button></Link>
            <button className="myButton" >get all companies  {" "}</button>
            <button className="myButton" >get all users {" "} </button>
            <button className="myButton" >update customer  {" "}</button>
            <button className="myButton" >update companies {" "} </button>
            <button className="myButton" >update user {" "}</button>

        </div>
    );
}


export default Admin;
