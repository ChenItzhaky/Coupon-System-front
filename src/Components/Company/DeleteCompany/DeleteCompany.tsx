import { useNavigate, useParams } from "react-router-dom";
import "./DeleteCompany.css";
import webApiService from "../../../Service/WebApiService";
import notifyService from "../../../Service/NotificationService";
import { useDispatch } from "react-redux";
import { deletedCompanyAction } from "../../../Redux/CompaniesAppState";

function DeleteCompany(): JSX.Element {
    const dispatch = useDispatch();

const params = useParams();
const id = +(params.id || 0);

const navigate = useNavigate();

const yes = () => {
    webApiService.deleteCompanyAuth(id)
        .then(() => {
            notifyService.success(`deleted company #${id} successfully`);
            // store.dispatch(deletedTaskAction(id));
            dispatch(deletedCompanyAction(id));
            navigate(-1);
        })
        .catch(err => notifyService.error(err))
}

const no = () => {
    navigate(-1);
}

return (
    <div className="CompanyTodo">
        <h1>Delete Company</h1>
        <p>Are you sure you want to delete company #{id}?</p>
        <div className="row">
            <button onClick={yes} className="danger">Yes</button>
            <button onClick={no}>Cancel</button>
        </div>

    </div>
);
}

export default DeleteCompany;