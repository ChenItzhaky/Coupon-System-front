import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResModel } from '../Models/LoginModel';


interface UserState {
    loginUser: LoginResModel
}


//This is the initialized Task Application State - initialize within empty array
const initialState: UserState = {
    loginUser: { token: "", email: "" , type:null}
};




//These are all possible actions
export enum ActionType {
    USER_lOGGED_IN = "USER_lOGGED_IN",
    USER_REGISTERED = "USER_REGISTERED",
    USER_LOGGED_OUT = "USER_LOGGED_OUT",
    GOT_ALL_USERS = "GOT_ALL_USERS"
}


const loginUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLoggedIn(state, action: PayloadAction<LoginResModel>) {
            state.loginUser = action.payload;
            console.log(action.payload);
        },

        userLoggedOut(state) {
            state.loginUser = initialState.loginUser;
        },

    },
});


//This is the exported tasks
export const {
    userLoggedIn,
    userLoggedOut,
    } = loginUserSlice.actions;



//Export the reducer
export const loginUserReducer = loginUserSlice.reducer;