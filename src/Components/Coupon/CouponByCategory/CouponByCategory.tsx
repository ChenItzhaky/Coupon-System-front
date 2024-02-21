import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { CouponModel } from "../../../Models/CouponModel";
import store from "../../../Redux/Store";
import notifyService from "../../../Service/NotificationService";
import webApiService from "../../../Service/WebApiService";
import CouponCard from "../../Company/CompanyCouponCard/CompanyCouponCard";
import EmptyView from '../../pages/EmptyView/EmptyView';
import "./CouponByCategory.css";
import { CategoryModel, CategoryType } from '../../../Models/CategoryType';
import { gotAllCouponAction } from "../../../Redux/CouponAppState";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


// const params= useParams()
// const LokCategory = +(params.category || '');
// const filtCoupons : CouponModel[] = [];

// function CouponByCategory(): JSX.Element {
//     const[CouponList, setCouponList] = useState<CouponModel[]>(store.getState()
//     .couponReducer.allCouponList);



//     const dispatch = useDispatch();

//     useEffect(() => {

//         if (CouponList.length > 0) {
//             return;
//         }
//         webApiService.getAllCoupon()
//         .then(res => {
//             notifyService.success('coupon list');
//             setCouponList(res.data);
//             store.dispatch(gotAllCouponAction(res.data));
//             dispatch(gotAllCouponAction(res.data));
//             console.log(res.data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })

//     }, []);
    
//     return (
//         <div className="CouponByCategory">
// 			<h1>  coupon by category: {LokCategory}  </h1>
            
//             {
            
            
//                 (filtCoupons.length !== 0) ?
                

//                 filtCoupons. map((cou, idx) =>
//                 <CouponCard key={`coupon-card-${idx}`} coupon ={cou} />) :
                    
//                     <EmptyView
//                         title={"No Items Found"}
//                         description={"there are no coupons available right now"} />
//             }
            
            
//         </div>
//     );
// }

// export default CouponByCategory;

