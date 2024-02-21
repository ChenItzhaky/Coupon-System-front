import { useDispatch } from "react-redux";
import "./DeleteCoupon.css";
import { useNavigate, useParams } from "react-router-dom";
import webApiService from "../../../Service/WebApiService";
import notifyService from "../../../Service/NotificationService";
import { deletedCouponAction } from "../../../Redux/CouponAppState";

function DeleteCoupon(): JSX.Element {
const dispatch = useDispatch();

const params = useParams();
const id = +(params.id || 0);
const navigate = useNavigate();

const yes = () => {
    webApiService.deleteCouponAuth(id)
        .then(() => {
            notifyService.success(`deleted coupon #${id} successfully`);
            // store.dispatch(deletedTaskAction(id));
            dispatch(deletedCouponAction(id));
            navigate(-1);
        })
        .catch(err => notifyService.error(err))
}

const no = () => {
    navigate(-1);
}

return (
    <div className="deleteCompany">
        <h1>Delete Coupon</h1>
        <p>Are you sure you want to delete coupon #{id}?</p>
        <div className="row">
            <button onClick={yes} className="danger">Yes</button>
            <button onClick={no}>Cancel</button>
        </div>

    </div>
);
}

export default DeleteCoupon;
