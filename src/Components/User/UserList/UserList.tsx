import { useEffect, useState } from "react";
import "./UserList.css";
import webApiService from "../../../Service/WebApiService";
import UserCard from "../UserCard/UserCard";
import EmptyView from "../../pages/EmptyView/EmptyView";
import { UserModel } from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import { useDispatch } from "react-redux";

function AllCustomer(): JSX.Element {
    const[UserList, setUserList] = useState<UserModel[]>(store.getState()
    .userReducer.userList);

    const dispatch = useDispatch();



    // Effect = very very very very long operation...
    useEffect(() => {

        if UserList.length > 0) {
            return;
        }

        webApiService.getAllUserAuth()
            .then(res => {
                notifyService.success('user list');
                setUserList(res.data);
                store.dispatch(gotAllUserAction(res.data));
                dispatch(gotAllUserAction(res.data));
                console.log(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })

    }, []);
    

    return (

        <div className="UserList">
			<h1> all users  </h1>

            {
                (UserList.length !== 0) ?

                UserList.map((t, idx) => <UserCard key={`user-card-${idx}`} user={t} />) :
                    <EmptyView
                        title={"No Items Found"}
                        description={"there are no tasks available right now"} />
            }
            
        </div>
    );
}
export default UserList;
