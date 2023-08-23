import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './UserAppState';
import { guardReducer } from './GuardAppState';
import { customerReducer } from './CustomerAppState';
import { companyReducer } from './CompaniesAppState';

// This is rootReducer
const rootReducer = {
    userReducer: userReducer,
    guardReducer: guardReducer,
    customerReducer: customerReducer,
    companyReducer: companyReducer
    // add more reducers here if needed
};


// This is store object
const store = configureStore({
    reducer: rootReducer,
});

// Export root Application State
export type RootState = ReturnType<typeof store.getState>;

// Export store object
export default store;