import moment from "moment";
import { CouponModel } from "../../../Models/CouponModel";
import "./CustomerCouponCard.css";
import { Link } from "react-router-dom";

interface CouponCardProps {
    coupon: CouponModel;  
}

function CouponCard(props: CouponCardProps): JSX.Element {
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
            <h3>Image: <img src={props.coupon.image}/> </h3>
            
            <Link to={`/purchaseCoupon/${props.coupon.id}`}><button className="myButton" > purchase coupon</button></Link>
            
            
        </div>
    );
}


export default CouponCard;
