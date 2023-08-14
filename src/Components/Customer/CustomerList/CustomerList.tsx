import "./CustomerList.css";
import { CustomerModel } from '../../../Models/CustomerModel';
import store from "../../../Redux/Store";
import { useState } from "react";
import { useDispatch } from "react-redux";

function CustomerList(): JSX.Element {
    const[CustomerModel, setCostmerModel] = useState<CustomerModel[]>(store.getState().tasksReducer.tasks);

    const dispatch = useDispatch();

    // const [todos, setTodos] = useState<TodoModel[]>(store.getState().tasksReducer.tasks);

    // 

    return (

        <div className="CustomerList">
			<h1> all customers  </h1>
            
        </div>
    );
}

export default CustomerList;
