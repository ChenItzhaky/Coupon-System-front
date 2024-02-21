import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CouponModel } from "../Models/CouponModel";

export class CompanyAppState{
    companyList: CouponModel[] = [];
}
interface CouponState {
    allCouponList: CouponModel[];
    mineCouponList: CouponModel[];
    companyCouponList: CouponModel[];
}
const initialState: CouponState = {
    allCouponList: [],
    mineCouponList: [],
    companyCouponList: [],
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
            state.allCouponList = action.payload;
        },
        gotAllCompanyCouponAction(state, action: PayloadAction<CouponModel[]>) {
            state.companyCouponList = action.payload;
        },
        gotAllCustomerCouponAction(state, action: PayloadAction<CouponModel[]>) {
            state.mineCouponList = action.payload;
        },
        
        addedCouponAction(state, action: PayloadAction<CouponModel>) {
            state.allCouponList.push(action.payload);
        },
        updatedCouponAction(state, action: PayloadAction<CouponModel>) {
            const idx = state.allCouponList.findIndex(t => t.id === action.payload.id);
            state.allCouponList[idx] = action.payload;
        },
        deletedCouponAction(state, action: PayloadAction<number>) {
            state.allCouponList = state.allCouponList.filter((coupon) => coupon.id !== action.payload);
        },
        updatedPurchaseCouponAction(state, action: PayloadAction<number>) {
            state.allCouponList = state.allCouponList.filter((coupon) => coupon.id !== action.payload);
        },

        clearAllCoupon(state) {
            state.allCouponList = initialState.allCouponList;
        }, 



    },
});
export const {
    gotAllCouponAction,
    gotAllCompanyCouponAction,
    gotAllCustomerCouponAction,
    // gotSingleCouponAction,
    addedCouponAction,
    updatedCouponAction,
    deletedCouponAction,
    clearAllCoupon,
    updatedPurchaseCouponAction,
    } = couponSlice.actions;

    export const couponReducer =couponSlice.reducer;
