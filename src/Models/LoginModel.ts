import { ClientsType } from "./ClientsType";

export interface LoginReqModel{
    email: string;
    password: string;
    type: ClientsType;
} 

export interface LoginResModel{
    token: string;
    email: string;
    type: ClientsType;

}