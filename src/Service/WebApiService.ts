import axios, { AxiosResponse } from 'axios';
import urlService from './UrlService';
import { RegisterCustomerReqModel } from '../Models/RegisterCustomer';
import { CustomerModel } from '../Models/CustomerModel';
import { LoginReqModel, LoginResModel } from '../Models/LoginModel';
import store from '../Redux/Store';
import { CompanyModel } from '../Models/CompanyModel';
import { CouponModel } from '../Models/CouponModel';
import { RegisterCompanyReqModel } from '../Models/RagisterCompany';
// import CouponByCategory from '../Components/Coupon/CouponByCategory/CouponByCategory';
import { useParams } from 'react-router-dom';
import { CategoryType } from '../Models/CategoryType';
import { UserModel } from '../Models/UserModel';
// import PurchaseCoupon from '../Components/Coupon/purchaseCoupon/purchaseCoupon';

class WebApiService {

    public login(data: LoginReqModel): Promise<AxiosResponse<LoginResModel>> {
        return axios.post<LoginResModel>(urlService.loginUrl, data);
    }

    public RegisterCustomer(data: RegisterCustomerReqModel): Promise<AxiosResponse<any>> {
        return axios.post<any>(urlService.addCustomerUrl, data);
    }

    public RegisterCompanyAuth(data: RegisterCompanyReqModel): Promise<AxiosResponse<any>> {
        const token = store.getState().loginUserReducer?.loginUser?.token;
        const headers = { 'Authorization': token };
        return axios.post<any>(urlService.addCompanyUrl, data ,{headers}) ;
    }

    
    public getAllCoupon(): Promise<AxiosResponse<CouponModel[]>> {
        return axios.get<CouponModel[]>(urlService.couponUrl);
    }

    public getCouponByCategory(category: CategoryType): Promise<AxiosResponse<CouponModel[]>> {
        return axios.get<CouponModel[]>(urlService.couponByCategoryUrl, {
            params : { category },

        } );
    }

    public getAllCustomer(): Promise<AxiosResponse<CustomerModel[]>> {
        return axios.get<CustomerModel[]>(urlService.adminUrl + "/customer");
    }
    public getAllUser(): Promise<AxiosResponse<UserModel[]>> {
        return axios.get<UserModel[]>(urlService.allUsersUrl);
    }

    public getAllCustomerAuth(): Promise<AxiosResponse<CustomerModel[]>> {
        const token = store.getState().loginUserReducer?.loginUser?.token;
        const headers = { 'Authorization': token };
        return axios.get<CustomerModel[]>(urlService.adminUrl + "/customer", { headers });
    }
    public getAllUserAuth(): Promise<AxiosResponse<UserModel[]>> {
        const token = store.getState().loginUserReducer?.loginUser?.token;
        const headers = { 'Authorization': token };
        return axios.get<UserModel[]>(urlService.allUsersUrl , { headers });
    }


        public getSingleCustomerAuth(id: number): Promise<AxiosResponse<CustomerModel[]>> {
        const token = store.getState().loginUserReducer?.loginUser?.token;
        const headers = { 'Authorization': token };
        return axios.get<CustomerModel[]>(`${urlService.adminUrl + "/customer"}/${id}` , { headers });
    }
    
    public getThisCustomerAuth(): Promise<AxiosResponse<CustomerModel>> {
        const token = store.getState().loginUserReducer?.loginUser?.token;
        const headers = { 'Authorization': token };
        return axios.get<CustomerModel>(urlService.customerUrl , { headers });
    }

    public deleteCustomerAuth(id: number): Promise<AxiosResponse<any>> {
        const headers = { 'Authorization': store.getState().loginUserReducer.loginUser.token };
        return axios.delete<any>(`${urlService.adminUrl + "/customer"}/${id}`, { headers })
    } 
    public PurchaseCouponAuth(id: number): Promise<AxiosResponse<any>> {
        const headers = { 'Authorization': store.getState().loginUserReducer.loginUser.token };
        return axios.put<any>(`${urlService.PurchaseCoupon}/${id}`, {}, { headers })
    }

        public deleteCompanyAuth(id: number): Promise<AxiosResponse<any>> {
        const headers = { 'Authorization': store.getState().loginUserReducer.loginUser.token };
        return axios.delete<any>(`${urlService.adminUrl + "/companies"}/${id}`, { headers })
    }
        public deleteCouponAuth(id: number): Promise<AxiosResponse<any>> {
        const headers = { 'Authorization': store.getState().loginUserReducer.loginUser.token };
        return axios.delete<any>(`${urlService.companyCouponUrl }/${id}`, { headers })
    }

    
    public getAllCompanies(): Promise<AxiosResponse<CompanyModel[]>> {
        return axios.get<CompanyModel[]>(urlService.adminUrl + "/companies");
    }

    public getSingleCompanies(id: number): Promise<AxiosResponse<CompanyModel[]>> {
        const headers = { 'Authorization': store.getState().loginUserReducer.loginUser.token };
        return axios.get<CompanyModel[]>(`${urlService.adminUrl + "/companies"}/${id}` , { headers });
    }

    public getSingleCompaniesAuth(id: number): Promise<AxiosResponse<CompanyModel[]>> {
        const token = store.getState().loginUserReducer?.loginUser?.token;
        const headers = { 'Authorization': token };
        return axios.get<CompanyModel[]>(`${urlService.adminUrl + "/companies"}/${id}` , { headers });
    }

    public getThisCompaniesAuth(): Promise<AxiosResponse<CompanyModel>> {
        const token = store.getState().loginUserReducer?.loginUser?.token;
        const headers = { 'Authorization': token };
        return axios.get<CompanyModel>(urlService.companyUrl , { headers });
    }

    public getAllCompaniesAuth(): Promise<AxiosResponse<CompanyModel[]>> {
        const token = store.getState().loginUserReducer?.loginUser?.token;
        const headers = { 'Authorization': token };
        return axios.get<CompanyModel[]>(urlService.adminUrl + "/companies", { headers });
    }


    public getAllCompanyCouponAuth(): Promise<AxiosResponse<CouponModel[]>> {
        const token = store.getState().loginUserReducer?.loginUser?.token;
        const headers = { 'Authorization': token };
        return axios.get<CouponModel[]>(urlService.companyCouponUrl, { headers });
    }
    
    public getAllCustomerCouponAuth(): Promise<AxiosResponse<CouponModel[]>> {
        const token = store.getState().loginUserReducer?.loginUser?.token;
        const headers = { 'Authorization': token };
        return axios.get<CouponModel[]>(urlService.customerCouponUrl, { headers });
    }


    public updateCustomerAuth(id: number, customer: CustomerModel): Promise<AxiosResponse<CustomerModel>> {
        const headers = { 'Authorization': store.getState().loginUserReducer.loginUser.token };
        return axios.put(`${urlService.adminCustomerUrl}/${id}`, customer, { headers });
    }

    public updateCompanyAuth(id: number, company: CompanyModel): Promise<AxiosResponse<CompanyModel>> {
        const headers = { 'Authorization': store.getState().loginUserReducer.loginUser.token }
        return axios.put(`${urlService.adminCompanyUrl}/${id}`, company, { headers });
    }  
    
    public updateCouponAuth(id: number, coupon: CouponModel): Promise<AxiosResponse<CouponModel>> {
        const headers = { 'Authorization': store.getState().loginUserReducer.loginUser.token }
        return axios.put(`${urlService.UpdateCouponUrl}/${id}`, coupon, { headers });
    }

    
    public addCouponAuth(coupon: CouponModel): Promise<AxiosResponse<CouponModel>> {
        const headers = { 'Authorization': store.getState().loginUserReducer.loginUser.token };
        return axios.post<CouponModel>(urlService.AddCoupon, coupon, { headers });
    }    
    


    public getAllCompanyCoupon(): Promise<AxiosResponse<CouponModel[]>>{
        const headers = { 'Authorization': store.getState().loginUserReducer.loginUser.token };
        return axios.get<CouponModel[]>(urlService.companyCouponUrl, { headers });
    }
    // public getAllTasksAuth(): Promise<AxiosResponse<TodoModel[]>> {
    //     const headers = { 'Authorization': store.getState().userReducer.user.token };
    //     return axios.get<TodoModel[]>(urlService.user, { headers });
    // }
    
    // public getAllUserAuth(): Promise<AxiosResponse<UserModel[]>> {
    //     const token = store.getState().userReducer?.user?.token;
    //     const headers = { 'Authorization': token };
    //     return axios.get<UserModel[]>(urlService.adminUrl + "/user", { headers });
    // }


    // public addTaskAuth(todo: TodoModel): Promise<AxiosResponse<TodoModel>> {
    //     const headers = { 'Authorization': store.getState().userReducer.user.token };
    //     return axios.post<TodoModel>(urlService.user, todo, { headers });
    // }

    // public deleteTaskAuth(id: number): Promise<AxiosResponse<any>> {
    //     const headers = { 'Authorization': store.getState().userReducer.user.token };
    //     return axios.delete<any>(`${urlService.user}/${id}`, { headers })
    // }

    // public updateTaskAuth(id: number, todo: TodoModel): Promise<AxiosResponse<TodoModel>> {
    //     const headers = { 'Authorization': store.getState().userReducer.user.token }
    //     return axios.put(`${urlService.user}/${id}`, todo, { headers });
    // }

}

const webApiService = new WebApiService();
export default webApiService;