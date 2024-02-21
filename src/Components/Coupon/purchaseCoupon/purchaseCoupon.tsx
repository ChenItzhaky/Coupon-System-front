import { useDispatch } from "react-redux";
import "./purchaseCoupon.css";
import { useNavigate, useParams } from "react-router-dom";
import webApiService from "../../../Service/WebApiService";
import notifyService from "../../../Service/NotificationService";
import { updatedPurchaseCouponAction } from "../../../Redux/CouponAppState";

function PurchaseCoupon(): JSX.Element {
    const dispatch = useDispatch();
    const params = useParams();
    const id = +(params.id || 0);
    const navigate = useNavigate();
    
    const yes = () => {
        webApiService.PurchaseCouponAuth(id)
            .then(() => {
                notifyService.success(` coupon #${id} purchase successfully`);
                dispatch(updatedPurchaseCouponAction(id));
                navigate("/customerCouponList");
            })
            .catch(err => notifyService.error(err))
    }
    
    const no = () => {
        navigate(-1);
    }
    
    return (
        <div className="purchaseCompany">
            <h1>purchase Coupon</h1>
            <p>Are you sure you want to buy coupon #{id}?</p>
            <div className="row">
                <button onClick={yes} className="danger">Yes</button>
                <button onClick={no}>Cancel</button>
            </div>
    
        </div>
    );
}

export default PurchaseCoupon;
