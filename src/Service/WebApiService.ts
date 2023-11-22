import axios, { AxiosResponse } from 'axios';
import urlService from './UrlService';
import { RegisterReqModel } from '../Models/Register';
import { CustomerModel } from '../Models/CustomerModel';
import { LoginReqModel, LoginResModel } from '../Models/LoginModel';
import store from '../Redux/Store';
import { CompanyModel } from '../Models/CompanyModel';
import { CouponModel } from '../Models/CouponModel';

class WebApiService {

    public login(data: LoginReqModel): Promise<AxiosResponse<LoginResModel>> {
        return axios.post<LoginResModel>(urlService.loginUrl, data);
    }

    public register(data: RegisterReqModel): Promise<AxiosResponse<any>> {
        return axios.post<any>(urlService.authUrl + "/register", data);
    }

    public getAllCustomer(): Promise<AxiosResponse<CustomerModel[]>> {
        return axios.get<CustomerModel[]>(urlService.adminUrl + "/customer");
    }

    public getAllCustomerAuth(): Promise<AxiosResponse<CustomerModel[]>> {
        const token = store.getState().userReducer?.user?.token;
        const headers = { 'Authorization': token };
        return axios.get<CustomerModel[]>(urlService.adminUrl + "/customer", { headers });
    }

        public getSingleCustomerAuth(id: number): Promise<AxiosResponse<CustomerModel[]>> {
        const token = store.getState().userReducer?.user?.token;
        const headers = { 'Authorization': token };
        return axios.get<CustomerModel[]>(`${urlService.adminUrl + "/customer"}/${id}` , { headers });
    }

        public deleteCustomerAuth(id: number): Promise<AxiosResponse<any>> {
        const headers = { 'Authorization': store.getState().userReducer.user.token };
        return axios.delete<any>(`${urlService.adminUrl + "/customer"}/${id}`, { headers })
    }

        public deleteCompanyAuth(id: number): Promise<AxiosResponse<any>> {
        const headers = { 'Authorization': store.getState().userReducer.user.token };
        return axios.delete<any>(`${urlService.adminUrl + "/companies"}/${id}`, { headers })
    }

    
    public getAllCompanies(): Promise<AxiosResponse<CompanyModel[]>> {
        return axios.get<CompanyModel[]>(urlService.adminUrl + "/companies");
    }

    public getAllCompaniesAuth(): Promise<AxiosResponse<CompanyModel[]>> {
        const token = store.getState().userReducer?.user?.token;
        const headers = { 'Authorization': token };
        return axios.get<CompanyModel[]>(urlService.adminUrl + "/companies", { headers });
    }

    public getAllCouponAuth(): Promise<AxiosResponse<CouponModel[]>> {
        const token = store.getState().userReducer?.user?.token;
        const headers = { 'Authorization': token };
        return axios.get<CouponModel[]>(urlService.couponUrl, { headers });
    }


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