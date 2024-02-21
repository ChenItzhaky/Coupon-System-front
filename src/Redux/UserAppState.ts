import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../Models/UserModel";


export class UserAppState {
    userList: UserModel[] = [];
}

interface UserState {
    userList: UserModel[];
}

const initialState: UserState={
    userList: [],
};

export enum UserActionType{
    GOT_ALL_USERS = "GOT_ALL_USERS",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        gotAllUserAction(state, action: PayloadAction<UserModel[]>) {
            state.userList = action.payload;
        },
    },

});
export const{
    gotAllUserAction,
}= userSlice.actions;

export const userReducer = userSlice.reducer;
