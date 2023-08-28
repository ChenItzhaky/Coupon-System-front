import { Link } from "react-router-dom";
import "./Coupon.css";

function Coupon(): JSX.Element {
    return (
        <div className="Coupon">
            <Link to={""}><button className="myButton" >  all coupons </button></Link>
            <Link to={""}><button className="myButton" >  coupons by category </button></Link>
            <Link to={""}><button className="myButton" >  coupons by price </button></Link>

        </div>
    );
}

export default Coupon;
