import { CouponModel } from "../../../Models/CouponModel";
import "./CouponCard.css";

interface CouponCardProps {
    coupon: CouponModel;  
}

function CouponCard(props: CouponCardProps): JSX.Element {
    return (
        <div className="CouponCard">
			<h3>{`${props.coupon.title} " " ${props.coupon.description} (#${props.coupon.id})`} </h3>
            
            
            <hr />
        </div>
    );
}


export default CouponCard;
