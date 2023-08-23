import { CompanyModel } from "../../../Models/CompanyModel";
import "./CompanyCard.css";

interface CompanyCardProps {
    company: CompanyModel;  
}

function CompanyCard(props: CompanyCardProps): JSX.Element {
    return (
        <div className="CompanyCard">
			<h3>{`${props.company.name} " " ${props.company.email} (#${props.company.id})`} </h3>
            
            
            <hr />
        </div>
    );
}

export default CompanyCard;
