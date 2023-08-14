import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResModel } from '../Models/LoginModel';


interface UserState {
    user: LoginResModel
}



//This is the initialized Task Application State - initialize within empty array
const initialState: UserState = {
    user: { token: "", email: "" , type:null}
};


//These are all possible actions
export enum ActionType {
    USER_lOGGED_IN = "USER_lOGGED_IN",
    USER_REGISTERED = "USER_REGISTERED",
    USER_LOGGED_OUT = "USER_LOGGED_OUT",
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLoggedIn(state, action: PayloadAction<LoginResModel>) {
            state.user = action.payload;
        },

        userLoggedOut(state) {
            state.user = initialState.user;
        },

    },
});


//This is the exported tasks
export const {
    userLoggedIn,
    userLoggedOut,
   } = userSlice.actions;



//Export the reducer
export const userReducer = userSlice.reducer;