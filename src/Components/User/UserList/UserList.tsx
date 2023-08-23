import { useEffect } from "react";
import "./UserList.css";

function AllCustomer(): JSX.Element {
    const[UserList, setUserList] = useState<UserModel[]>(store.getState()
    .customerReducer.customerList);

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
