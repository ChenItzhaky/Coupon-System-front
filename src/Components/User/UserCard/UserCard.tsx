import { UserModel } from "../../../Models/UserModel";
import "./UserCard.css";

interface UserCardProps {
  user: UserModel;
}
function UserCard(props: UserCardProps): JSX.Element {
  return (
    <div className="UserCard">
      <h3>{`${props.user.email} (#${props.user.id})`} </h3>
      <p>{`${props.user.ClientsType}`}</p>

      <hr />
    </div>
  );
}
export default UserCard;
