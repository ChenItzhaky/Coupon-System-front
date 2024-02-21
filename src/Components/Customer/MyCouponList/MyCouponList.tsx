import { useEffect, useState } from "react";
import "./MyCouponList.css";
import { CouponModel } from "../../../Models/CouponModel";
import { useDispatch } from "react-redux";
import webApiService from "../../../Service/WebApiService";
import notifyService from "../../../Service/NotificationService";
import {  gotAllCustomerCouponAction } from "../../../Redux/CouponAppState";
import store from "../../../Redux/Store";
import EmptyView from "../../pages/EmptyView/EmptyView";
import CouponCard from "../../Coupon/CouponCard/CouponCard";

function MyCouponList(): JSX.Element {
    const[CouponList, setCouponList] = useState<CouponModel[]>(store.getState()
    .couponReducer.mineCouponList);

    const dispatch = useDispatch();

    useEffect(() => {

        if (CouponList.length > 0) {
            return;
        }

        webApiService.getAllCustomerCouponAuth()
            .then(res => {
                notifyService.success('coupon list');
                setCouponList(res.data)
                store.dispatch(gotAllCustomerCouponAction(res.data));
                dispatch(gotAllCustomerCouponAction(res.data));
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

export default MyCouponList;
