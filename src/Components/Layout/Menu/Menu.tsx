import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<Link to={"/home"}>Home</Link>
			<Link to={"/about"}>About</Link>
			<Link to={"/coupon"}>Coupons</Link>
	
			
			{/*<a href="#">Admin View</a>
			<a href="#">Company View</a>
			<a href="#">Customer View</a>
			<a href="/about">About</a> */}
        </div>
    );
}

export default Menu;
