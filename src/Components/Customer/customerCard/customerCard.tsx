import { Link } from "react-router-dom";
import { CustomerModel } from "../../../Models/CustomerModel";
import "./customerCard.css";

interface CustomerCardProps {
    customer: CustomerModel;
}
function CustomerCard(props: CustomerCardProps): JSX.Element {
    return (
        <div className="customerCard">
                        <h3>{`${props.customer.firstName} " " ${props.customer.lastName} (#${props.customer.id})`} </h3>
            <p>{`${props.customer.firstName}`}</p>
            
            <hr />
        </div>
    );
}

export default CustomerCard;
