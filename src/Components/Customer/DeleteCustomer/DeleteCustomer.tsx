import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import notifyService from "../../../Service/NotificationService";
import webApiService from "../../../Service/WebApiService";

const dispatch = useDispatch();

const params = useParams();
const id = +(params.id || 0);

const navigate = useNavigate();

const yes = () => {
    webApiService.deleteCustomerAuth(id)
        .then(() => {
            notifyService.success(`deleted customer #${id} successfully`);
            // store.dispatch(deletedTaskAction(id));
            dispatch(deletedCustomerAction(id));
            navigate(-1);
        })
        .catch(err => notifyService.error(err))
}

const no = () => {
    navigate(-1);
}

return (
    <div className="DeleteTodo">
        <h1>Delete Task</h1>
        <p>Are you sure you want to delete todo #{id}?</p>
        <div className="row">
            <button onClick={yes} className="danger">Yes</button>
            <button onClick={no}>Cancel</button>
        </div>

    </div>
);
}

export default DeleteCustomer;