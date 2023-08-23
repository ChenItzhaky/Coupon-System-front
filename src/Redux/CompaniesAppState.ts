import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CompanyModel } from "../Models/CompanyModel";




export class CompanyAppState{
    companyList: CompanyModel[] = [];
}
interface CompanyState {
    companyList: CompanyModel[];
}
const initialState: CompanyState = {
    companyList: [],
};
export enum CompanyActionType {
    GOT_ALL_COMPANY = "GOT_ALL_COMPANY",
    ADDED_COMPANY = "ADDED_COMPANY",
    UPDATED_COMPANY = "UPDATED_COMPANY",
    DELETED_COMPANY = "DELETED_COMPANY",
}



const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        gotAllCompanyAction(state, action: PayloadAction<CompanyModel[]>) {
            state.companyList = action.payload;
        },
        addedCompanyAction(state, action: PayloadAction<CompanyModel>) {
            state.companyList.push(action.payload);
        },
        updatedCompanyAction(state, action: PayloadAction<CompanyModel>) {
            const idx = state.companyList.findIndex(t => t.id === action.payload.id);
            state.companyList[idx] = action.payload;
        },
        deletedCompanyAction(state, action: PayloadAction<number>) {
            state.companyList = state.companyList.filter((company) => company.id !== action.payload);
        },
        clearAllCompany(state) {
            state.companyList = initialState.companyList;
        } 

    },
});
export const {
    gotAllCompanyAction,
    // gotSingleCompanyAction,
    addedCompanyAction,
    // updatedCompanyACtion,
    deletedCompanyAction,
    clearAllCompany
    } = companySlice.actions;

    export const companyReducer =companySlice.reducer;

