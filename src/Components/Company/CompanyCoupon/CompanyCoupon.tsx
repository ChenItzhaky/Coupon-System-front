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
    const [companyCouponList, setCouponList] = useState<CouponModel[]>(store.getState().couponReducer.companyCouponList);
    const dispatch = useDispatch();


    useEffect(() => {

        if (companyCouponList.length > 0) {
            return;
        }

        webApiService.getAllCompanyCoupon()
            .then(res => {
                notifyService.success('all your coupons');
                setCouponList(res.data);
                dispatch(gotAllCompanyCouponAction(res.data));
                console.log(res.data);
            })
            .catch(()=>{console.log("");})

    }, []);

    return (
        <div className="CompanyCoupon">
            <h1>coupon List</h1>

            {
                (companyCouponList.length !== 0) ?

                companyCouponList.map((c, idx) => <CompanyCouponCard key={`coupon-card-${idx}`} coupon={c} />) :
                    <EmptyView
                        title={"No Items Found"}
                        description={"there are no coupons registered to this company right now"} />
            }
        </div>
    );
}

export default CompanyCoupon;