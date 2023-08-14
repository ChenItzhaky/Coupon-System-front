import { CustomerModel } from "../Models/CustomerModel";

interface CustomerState {
    tasks: CustomerModel[];
}
const initialState: CustomerState = {
    tasks: [],
};

export enum ActionType {
    GOT_ALL_CUSTOMER = "GOT_ALL_CUSTOMERS",
    ADDED_CUSTOMER = "ADDED_CUSTOMER",
    UPDATED_CUSTOMER = "UPDATED_CUSTOMER",
    DELETED_CUSTOMER = "DELETED_CUSTOMER",
}

