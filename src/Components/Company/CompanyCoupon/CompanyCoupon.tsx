import "./CompanyCoupon.css";
import { CouponModel } from "../../../Models/CouponModel";
import store from "../../../Redux/Store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import notifyService from "../../../Service/NotificationService";
import webApiService from "../../../Service/WebApiService";
import EmptyView from "../../pages/EmptyView/EmptyView";
import { gotAllCompanyCouponAction } from "../../../Redux/CouponAppState";
import CompanyCouponCard from "../CompanyCouponCard/CompanyCouponCard";

function CompanyCoupon(): JSX.Element {
    // State = React Mechanism for managing data in component
    const [couponList, setCouponList] = useState<CouponModel[]>(store.getState().couponReducer.couponList);

    const dispatch = useDispatch();


    useEffect(() => {

        if (couponList.length > 0) {
            return;
        }

        webApiService.getAllCompanyCoupon()
            .then(res => {
                notifyService.success('all your coupons');
                setCouponList(res.data);
                // store.dispatch(gotAllTasksAction(res.data));
                dispatch(gotAllCompanyCouponAction(res.data));
                console.log(res.data);
            })
            .catch(()=>{console.log("");})

    }, []);

    return (
        <div className="companyCoupon">
            <h1>coupon List</h1>

            {
                (couponList.length !== 0) ?

                couponList.map((c, idx) => <CompanyCouponCard key={`coupon-card-${idx}`} coupon={c} />) :
                    <EmptyView
                        title={"No Items Found"}
                        description={"there are no tasks available right now"} />
            }
        </div>
    );
}

export default CompanyCoupon;