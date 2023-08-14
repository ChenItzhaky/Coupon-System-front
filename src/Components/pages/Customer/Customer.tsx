import { Link } from "react-router-dom";
import "./Customer.css";

function Customer(): JSX.Element {
    return (
        <div className="Customer">
			<h1>welcome customer</h1>
            
            <Link to={""}><button className="myButton" > get details </button></Link>
            <Link to={""}><button className="myButton" > get coupons </button></Link>
            <Link to={""}><button className="myButton" > get coupons by category </button></Link>
            <Link to={""}><button className="myButton" > get coupons by price </button></Link>
            <Link to={""}><button className="myButton" > purchase coupons  </button></Link>

        </div>
    );
}

export default Customer;
