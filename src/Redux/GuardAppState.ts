import { createSlice } from '@reduxjs/toolkit';


//This is the Contract
interface GuardState {
    isAdmin: boolean;
}


//This is the initialized Task Application State - initialize within empty array
const initialState: GuardState = {
    isAdmin: false,
};

//These are all possible actions
export enum ActionType {
    LOGGED_IN_AS_ADMIN = "LOGGED_IN_AS_ADMIN",
    CLEAR_DATA = "CLEAR_DATA"
}


//This is tasksSlice
const guardSlice = createSlice({
    name: "guard",
    initialState,
    reducers: {
        loggedInAsAdmin(state) {
            state.isAdmin = true;
        },
        removeAdminAccess(state) {
            state.isAdmin = initialState.isAdmin;
        },
    },
});


//This is the exported tasks
export const {
    loggedInAsAdmin,
    removeAdminAccess,
  } = guardSlice.actions;

//Export the reducer
export const guardReducer = guardSlice.reducer;