import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { CouponModel } from "../../../Models/CouponModel";
import store from "../../../Redux/Store";
import notifyService from "../../../Service/NotificationService";
import webApiService from "../../../Service/WebApiService";
import CouponCard from "../../Company/CompanyCouponCard/CompanyCouponCard";
import EmptyView from "../../pages/EmptyView/EmptyView";
import "./CouponByCategory.css";
import { CategoryModel, CategoryType } from '../../../Models/CategoryType';

function CouponByCategory(): JSX.Element {
    const[CouponList, setCouponList] = useState<CouponModel[]>(store.getState()
    .couponReducer.couponList);

    const dispatch = useDispatch();

    useEffect(() => {

        if (CouponList.length > 0) {
            return;
        }
        webApiService.getCouponByCategory()
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
        <div className="CouponByCategory">

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

export default CouponByCategory;
function useState<T>(couponList: any): [any, any] {
    throw new Error("Function not implemented.");
}

function useEffect(arg0: () => void, arg1: undefined[]) {
    throw new Error("Function not implemented.");
}

function gotAllCouponAction(data: any): any {
    throw new Error("Function not implemented.");
}

