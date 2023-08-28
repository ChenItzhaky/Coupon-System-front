import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CouponModel } from "../Models/CouponModel";

export class CompanyAppState{
    companyList: CouponModel[] = [];
}
interface CouponState {
    couponList: CouponModel[];
}
const initialState: CouponState = {
    couponList: [],
};
export enum CompanyActionType {
    GOT_ALL_COUPON = "GOT_ALL_COUPON",
    ADDED_COUPON = "ADDED_COUPON",
    UPDATED_COUPON = "UPDATED_COUPON",
    DELETED_COUPON = "DELETED_COUPON",
}



const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {
        gotAllCouponAction(state, action: PayloadAction<CouponModel[]>) {
            state.couponList = action.payload;
        },
        addedCouponAction(state, action: PayloadAction<CouponModel>) {
            state.couponList.push(action.payload);
        },
        updatedCouponAction(state, action: PayloadAction<CouponModel>) {
            const idx = state.couponList.findIndex(t => t.id === action.payload.id);
            state.couponList[idx] = action.payload;
        },
        deletedCouponAction(state, action: PayloadAction<number>) {
            state.couponList = state.couponList.filter((coupon) => coupon.id !== action.payload);
        },
        clearAllCoupon(state) {
            state.couponList = initialState.couponList;
        } 

    },
});
export const {
    gotAllCouponAction,
    // gotSingleCouponAction,
    addedCouponAction,
    // updatedCouponACtion,
    deletedCouponAction,
    clearAllCoupon
    } = couponSlice.actions;

    export const couponReducer =couponSlice.reducer;
