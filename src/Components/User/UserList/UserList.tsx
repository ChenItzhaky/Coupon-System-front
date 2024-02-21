import { useEffect, useState } from "react";
import "./UserList.css";
import { UserModel } from '../../../Models/UserModel';
import store from "../../../Redux/Store";
import notifyService from "../../../Service/NotificationService";
import { gotAllUserAction } from "../../../Redux/UserAppState";
import webApiService from "../../../Service/WebApiService";
import { useDispatch } from "react-redux";

function UserList(): JSX.Element {
    const[userList, setUserList] = useState<UserModel[]>(store.getState()
    .userReducer.userList);

    const dispatch = useDispatch();

    useEffect(() => {

        webApiService.getAllUserAuth()
        .then(res =>{
                console.log(res.data);
                setUserList(res.data);
                store.dispatch(gotAllUserAction(res.data));
                notifyService.success("All Users")
            })
            .catch(err =>{
                console.log(err);
                notifyService.error("som thing went wrong")
            })

    }, []);
    

    return (

        <div className="UserList">
			<h1> all users  </h1>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Email</th>
                        <th> Clients Type </th>
                    </tr>
                </thead>
                <tbody>
                    {
                    userList.map((u,idx) =>
                        <tr key={`table-tr-${idx}`}>
                            <td>{u.id}</td>
                            <td>{u.email}</td>
                            <td>{u.ClientsType}</td>
                        </tr>)
                    }
                        
                </tbody>
            </table>
        </div>
    );
}
export default UserList;


