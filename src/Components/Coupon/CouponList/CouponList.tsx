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



    // Effect = very very very very long operation...
    useEffect(() => {

        if (CouponList.length > 0) {
            return;
        }

        webApiService.getAllCouponAuth()
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

        <div className="CompanyList">
			<h1> all companies  </h1>

            {
                (CouponList.length !== 0) ?

                CouponList.map((t, idx) => <CouponCard key={`coupon-card-${idx}`} coupon ={t} />) :
                    <EmptyView
                        title={"No Items Found"}
                        description={"there are no tasks available right now"} />
            }
            
        </div>
    );
}

export default AllCoupons;
