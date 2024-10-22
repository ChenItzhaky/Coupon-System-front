import { configureStore } from '@reduxjs/toolkit';
import { loginUserReducer,  } from './LogUserAppState';
import { guardReducer } from './GuardAppState';
import { customerReducer } from './CustomerAppState';
import { companyReducer } from './CompaniesAppState';
import { couponReducer } from './CouponAppState';
import { userReducer } from './UserAppState';

// This is rootReducer
const rootReducer = {
    loginUserReducer: loginUserReducer,
    userReducer: userReducer,
    guardReducer: guardReducer,
    customerReducer: customerReducer,
    companyReducer: companyReducer,
    couponReducer: couponReducer
    

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