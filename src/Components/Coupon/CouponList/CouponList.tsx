import { useEffect, useState } from "react";
import "./CouponList.css";
import { CouponModel } from "../../../Models/CouponModel";
import { useDispatch } from "react-redux";
import webApiService from "../../../Service/WebApiService";
import notifyService from "../../../Service/NotificationService";
import { gotAllCouponAction } from "../../../Redux/CouponAppState";
import store from "../../../Redux/Store";
import CouponCard from "../CouponCard/CouponCard";
import EmptyView from "../../pages/EmptyView/EmptyView";

function AllCoupons(): JSX.Element {
    const[CouponList, setCouponList] = useState<CouponModel[]>(store.getState()
    .couponReducer.couponList);

    const dispatch = useDispatch();

    useEffect(() => {

        if (CouponList.length > 0) {
            return;
        }

        webApiService.getAllCoupon()
            .then(res => {
                notifyService.success('coupon list');
                setCouponList(res.data);
                store.dispatch(gotAllCouponAction(res.data));
                dispatch(gotAllCouponAction(res.data));
                console.log(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })

    }, []);
    
    return (

        <div className="CouponList">
			<h1> all coupon  </h1>

            {
                (CouponList.length !== 0) ?

                CouponList.map((cou, idx) => <CouponCard key={`coupon-card-${idx}`} coupon ={cou} />) :
                    <EmptyView
                        title={"No Items Found"}
                        description={"there are no coupons available right now"} />
            }
            
        </div>
    );
}

export default AllCoupons;
