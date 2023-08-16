import { Link } from "react-router-dom";
import { CustomerModel } from "../../../Models/CustomerModel";
import "./customerCard.css";

interface CustomerCardProps {
    customer: CustomerModel;
}
function CustomerCard(props: CustomerCardProps): JSX.Element {
    return (
        <div className="customerCard">
			            {/* <p>id : #{props.todo.id}</p> */}
                        <h3>{`${props.customer.firstName} " " ${props.customer.lastName} (#${props.customer.id})`} </h3>
            <p>{`${props.customer.firstName}`}</p>
            
            <hr />
            {/* <div className="row"> */}
                    {/* Link to coupons */}
                {/* <Link to={`/todos/update/${props.todo.id}`}><button>✏️ Edit Todo</button></Link>
                <Link to={`/todos/delete/${props.todo.id}`}> <button>🗑️ Delete Todo</button></Link> */}
                  {/* </div> */}
        </div>
    );
}

export default CustomerCard;
