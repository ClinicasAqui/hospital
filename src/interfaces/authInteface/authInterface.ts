import { ReactNode } from "react";
import { FieldValue } from "react-hook-form/dist/types"; 

export interface IAuthContextProvier {
    singIn: (data: FieldValue<ISingIn>) => void;
    registerClient: (data: IRegisterClient) => void;
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
    idade: string;
    cpf: string;
    telefone: string;
    cep: string;
    loradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    numero: string;
}