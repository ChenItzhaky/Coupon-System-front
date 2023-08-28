import { useEffect, useState } from "react";
import webApiService from "../../../Service/WebApiService";
import "./SingleCustomer.css";
import CustomerList from "../CustomerList/CustomerList";
import notifyService from "../../../Service/NotificationService";
import { useDispatch } from "react-redux";
import store from "../../../Redux/Store";
import { CustomerModel } from "../../../Models/CustomerModel";
import { gotSingleCustomerAction } from "../../../Redux/CustomerAppState";
import EmptyView from "../../pages/EmptyView/EmptyView";
import CustomerCard from "../customerCard/customerCard";

function SingleCustomer(): JSX.Element {
  const [SingleCustomer, setSingleCustomer] = useState<CustomerModel[]>(
    store.getState().customerReducer.customerList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    
    if (CustomerList.length > 0) {
      return;
    }

    webApiService
      .getAllCustomerAuth()
      .then((res) => {
        notifyService.success("single customer");
        setSingleCustomer(res.data);
        store.dispatch(gotSingleCustomerAction(res.data));
        dispatch(gotSingleCustomerAction(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return 
  <div className="SingleCustomer">
    <h1>single customer</h1>

    {
                (CustomerList.length !== 0) ?

                CustomerList.map((t, idx) => <CustomerCard key={`customer-card-${idx}`} customer={t} />) :
                    <EmptyView
                        title={"No Items Found"}
                      description={"there are no tasks available right now"} />
            }

  </div>;
}

export default SingleCustomer;
