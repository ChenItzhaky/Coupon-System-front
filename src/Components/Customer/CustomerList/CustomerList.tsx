import "./CustomerList.css";
import { CustomerModel } from '../../../Models/CustomerModel';
import store from "../../../Redux/Store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import notifyService from "../../../Service/NotificationService";
import webApiService from "../../../Service/WebApiService";
import { gotAllCustomerAction } from "../../../Redux/CustomerAppState";
import CustomerCard from "../customerCard/customerCard";
import EmptyView from "../../pages/EmptyView/EmptyView";

function AllCustomer(): JSX.Element {
    const[CustomerList, setCustomerList] = useState<CustomerModel[]>(store.getState()
    .customerReducer.customerList);

    const dispatch = useDispatch();



    // Effect = very very very very long operation...
    useEffect(() => {

        if (CustomerList.length > 0) {
            return;
        }

        webApiService.getAllCustomerAuth()
            .then(res => {
                notifyService.success('customer list');
                setCustomerList(res.data);
                store.dispatch(gotAllCustomerAction(res.data));
                dispatch(gotAllCustomerAction(res.data));
                console.log(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })

    }, []);
    

    return (

        <div className="CustomerList">
			<h1> all customers  </h1>

            {
                (CustomerList.length !== 0) ?

                CustomerList.map((t, idx) => <CustomerCard key={`customer-card-${idx}`} customer={t} />) :
                    <EmptyView
                        title={"No Items Found"}
                        description={"there are no tasks available right now"} />
            }
            
        </div>
    );
}

export default AllCustomer;
