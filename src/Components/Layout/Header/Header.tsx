import "./Header.css";
import logo from "../../../assets/Images/otter.jpg";
import { Link } from "react-router-dom";
function Header(): JSX.Element {
    return (
        <div className="Header">
            <img src={logo} alt="goat logo" width={50} height={50} />
            <h1>Coupon System</h1>
            <Link to={"/login"}><button className="myButton" >Login </button></Link>
            <Link to={"/register"}><button className="myButton" >Register </button></Link>
            <Link to= {"/logout"}> <button className="myButton" onClick={() => console.log("logd out")}>Logout</button></Link>
        </div>
    );
}

export default Header;
