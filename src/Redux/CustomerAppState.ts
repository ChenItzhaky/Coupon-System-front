import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerModel } from "../Models/CustomerModel";


export class CustomerAppState{
    customerList: CustomerModel[] = [];
}
interface CustomerState {
    customerList: CustomerModel[];
}
const initialState: CustomerState = {
    customerList: [],
};
export enum CustomerActionType {
    GOT_ALL_CUSTOMER = "GOT_ALL_CUSTOMERS",
    GOT_SINGLE_CUSTOMER = "GOT_SINGLE_CUSTOMERS",
    ADDED_CUSTOMER = "ADDED_CUSTOMER",
    UPDATED_CUSTOMER = "UPDATED_CUSTOMER",
    DELETED_CUSTOMER = "DELETED_CUSTOMER",
}



const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        gotAllCustomerAction(state, action: PayloadAction<CustomerModel[]>) {
            state.customerList = action.payload;
        },
        gotSingleCustomerAction(state, action: PayloadAction<CustomerModel>) {
            state.customerList.push(action.payload);
        },
        
        addedCustomerAction(state, action: PayloadAction<CustomerModel>) {
            state.customerList.push(action.payload);
        },
        updatedCustomerAction(state, action: PayloadAction<CustomerModel>) {
            const idx = state.customerList.findIndex(cus => cus.id === action.payload.id);
            state.customerList[idx] = action.payload;
        },

        deletedCustomerAction(state, action: PayloadAction<number>) {
            state.customerList = state.customerList.filter((customer) => customer.id !== action.payload);
        },
        clearAllCustomer(state) {
            state.customerList = initialState.customerList;
        },
        gotThisCustomerAction(state, action: PayloadAction<CustomerModel>){
            state.customerList.push(action.payload);
        }
        

    },
});
export const {
    gotAllCustomerAction,
    gotThisCustomerAction,
    gotSingleCustomerAction,
    addedCustomerAction,
    updatedCustomerAction,
    deletedCustomerAction,
    clearAllCustomer
    } = customerSlice.actions;

    export const customerReducer =customerSlice.reducer;



