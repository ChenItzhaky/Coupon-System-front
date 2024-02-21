// import { useState } from "react";
// import { UserModel } from "../../../Models/UserModel";
// import "./UserList.css";
// import store from "../../../Redux/Store";
// import webApiService from "../../../Service/WebApiService";
// import notifyService from "../../../Service/NotificationService";
// import { useDispatch } from "react-redux/es/hooks/useDispatch";
// import UserCard from "../../User/UserCard/UserCard";

// function UserList(): JSX.Element {
//     const[userList, setUserList] =
//     useState<UserModel[]>(store.getState()
//     .userReducer.userList);

//     const dispatch = useDispatch();



//     // Effect = very very very very long operation...
//     useEffect(() => {

//         if (UserList.length > 0) {
//             return;
//         }

//         webApiService.getAllUserAuth()
//             .then(res => {
//                 notifyService.success('user list');
//                 setUserList(res.data);
//                 store.dispatch(gotAllCustomerAction(res.data));
//                 dispatch(gotAllCustomerAction(res.data));
//                 console.log(res.data);
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })

//     }, []);
    

//     return (

//         <div className="UserList">
// 			<h1> all customers  </h1>

//             {
//                 (userList.length !== 0) ?

//                 userList.map((c, idx) => <UserCard key={`customer-card-${idx}`} customer={c} />) :
//                     <EmptyView
//                         title={"No Items Found"}
//                         description={"owr otters cod not find any users"} />
//             }
            
//         </div>
//     );

// export default UserList;
//     function useEffect(arg0: () => void, arg1: undefined[]) {
//         throw new Error("Function not implemented.");
//     }

//     function gotAllCustomerAction(data: any): any {
//         throw new Error("Function not implemented.");
//     }

