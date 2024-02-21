import { Link } from "react-router-dom";
import { CompanyModel } from "../../../Models/CompanyModel";
import "./CompanyCard.css";
import Company from '../../pages/Company/Company';

interface CompanyCardProps {
    company: CompanyModel;  
}

function CompanyCard(props: CompanyCardProps): JSX.Element {
    return (
        <div className="CompanyCard">
			<h3>{`${props.company.name} 
            ${props.company.email} (#${props.company.id})`} </h3>
            
            <Link to = {`/deleteCompany/ ${props.company.id}`}><button className="myButton" >delete single company {" "} </button></Link>
            <Link to = {`/updateCompony/ ${props.company.id}`}> <button className="myButton" >update this Company {" "} </button></Link>

            <hr />
        </div>
    );
}

export default CompanyCard;
