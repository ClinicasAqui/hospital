import { createContext, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { IAuthContext, IAuthContextProvier, IRegisterClient, ISingIn } from "../../interfaces/authInteface/authInterface";
import { apiFake } from "../../services/apifake";
import { FieldValue } from "react-hook-form/dist/types"; 
import { IResponseLogin } from "../../interfaces/apiInterface/apiInterface";

export const AuthContextProvier = createContext<IAuthContextProvier>({} as IAuthContextProvier)

export function AuthContext({children}: IAuthContext){
    const singIn = (data: FieldValue<ISingIn>) => {
        toast.promise(apiFake.post("/login", data).then((res: IResponseLogin) => {
            localStorage.setItem("@Token", res.data.accessToken)
            localStorage.setItem("@Id_User", res.data.user.id)
        }),{
            pending: "Carregando...",
            success: "Logado com sucesso",
            error: "Email ou Senha incorreto"
        })
    }

    const registerClient = (data: IRegisterClient) => {
        console.log(data.image)
        const {name, email, password, idade, image, cpf, telefone, cep, loradouro, bairro, localidade, uf, numero} = data
        toast.promise(apiFake.post("/register", {name, email, password, idade, image, cpf, telefone, endereco: { cep, loradouro, bairro, localidade, uf, numero }}).then((res) => {
            localStorage.setItem("@Token", res.data.accessToken)
            localStorage.setItem("@Id_User", res.data.user.id)
            console.log(res.data)
        }),{
            pending: "Carregando...",
            success: "Logado com sucesso",
            error: "Email ou Senha incorreto"
        })
    }


    return(
        <AuthContextProvier.Provider value={{singIn, registerClient}}>
            {children}
        </AuthContextProvier.Provider>
    )
}
