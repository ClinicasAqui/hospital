import { ReactNode } from "react";
import { FieldValue } from "react-hook-form/dist/types"; 

export interface IAuthContextProvier {
    singIn: (data: FieldValue<ISingIn>) => void;
    registerClient: (data: IRegisterClient) => void;
    validateEmail: (tokenEmail: IParamsValidateEmail) => string;
    message:  string;
}

export interface IAuthContext {
    children: ReactNode
}

export interface ISingIn {
    email: string;
    password: string;
}

export interface IRegisterClient{
    name: string;
    email: string;
    password: string;
    confiPass: string;
    age: string;
    cpf: string;
}

export interface IParamsValidateEmail {
    tokenEmail: any;
  }