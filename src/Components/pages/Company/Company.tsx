import { Link } from "react-router-dom";
import "./Company.css";

function Company(): JSX.Element {
    return (
        <div className="Company">
			<h1>welcome company</h1>

            <Link to={"/thisCompany"}><button className="myButton" > get details </button></Link>
            <Link to={"/companyCoupons"}><button className="myButton" > get coupons </button></Link>
            <Link to={""}><button className="myButton" > get coupons by category </button></Link>
            <Link to={""}><button className="myButton" > get coupons by price </button></Link>
            <Link to={"/addCoupons"}><button className="myButton" > add coupon </button></Link>
            <Link to={""}><button className="myButton" > update coupon</button></Link>
        </div>
    );
}

export default Company;
