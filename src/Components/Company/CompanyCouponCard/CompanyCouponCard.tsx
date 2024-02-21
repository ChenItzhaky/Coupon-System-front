import { Link } from "react-router-dom";
import { CouponModel } from "../../../Models/CouponModel";
import "./CompanyCouponCard.css";
import moment from "moment";

interface CompanyCouponCardProps {
    coupon: CouponModel;  
}

function CouponCard(props: CompanyCouponCardProps): JSX.Element {
    
    return (
        <div className="CouponCard">
            <h3>Coupon ID: #{props.coupon.id}</h3>
			<h3>Coupon title {props.coupon.title} </h3>
            <h3>Description: {props.coupon.description} </h3>
            <h3>Category: {props.coupon.category}</h3>
            <h3>Start Date: {moment (props.coupon.startDate).format("DD/MM/yy")} </h3>
            <h3>End Date: {moment (props.coupon.endDate).format("DD/MM/yy")} </h3>
            <h3>Amount: {props.coupon.amount} </h3>
            <h3>Price: {props.coupon.price} </h3>
            <h3>Image:  {props.coupon.image} </h3>
            
            <div>
            <Link to={`/deleteCoupon/${props.coupon.id}`}><button className="myButton" > delete coupon </button></Link>
            <Link to={""}><button className="myButton" > update coupon</button></Link>
            </div>
            
        </div>
    );
}
// 


export default CouponCard;
