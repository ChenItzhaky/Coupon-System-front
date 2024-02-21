import { useEffect, useState } from "react";
import { CompanyModel } from "../../../Models/CompanyModel";
import store from "../../../Redux/Store";
import "./CompanyList.css";
import { useDispatch } from "react-redux";
import webApiService from "../../../Service/WebApiService";
import notifyService from "../../../Service/NotificationService";
import { gotAllCompanyAction } from "../../../Redux/CompaniesAppState";
import EmptyView from "../../pages/EmptyView/EmptyView";
import CompanyCard from "../CompanyCard/CompanyCard";

function AllCompanies(): JSX.Element {
    const[CompanyList, setCompanyList] = 
    useState<CompanyModel[]>(store.getState()
    .companyReducer.companyList);

    const dispatch = useDispatch();



    // Effect = very very very very long operation...
    useEffect(() => {

        if (CompanyList.length > 0) {
            return;
        }

        webApiService.getAllCompaniesAuth()
            .then(res => {
                notifyService.success('company list');
                setCompanyList(res.data);
                store.dispatch(gotAllCompanyAction(res.data));
                dispatch(gotAllCompanyAction(res.data));
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
                (CompanyList.length !== 0) ?

                CompanyList.map((c, idx) => <CompanyCard key={`company-card-${idx}`} company={c} />) :
                    <EmptyView
                        title={"No Items Found"}
                        description={"there are no tasks available right now"} />
            }
            
        </div>
    );
}
export default AllCompanies;
