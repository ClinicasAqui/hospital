import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  IAuthContext,
  IAuthContextProvier,
  IParamsValidateEmail,
  IRegisterClient,
  ISingIn,
} from "../../interfaces/authInteface/authInterface";
import { apiFake } from "../../services/apifake";
import { FieldValue } from "react-hook-form/dist/types";
import { IResponseLogin } from "../../interfaces/apiInterface/apiInterface";
import { apiHospital } from "../../services/apiHospital";
import { AxiosResponse } from "axios";

export const AuthContextProvier = createContext<IAuthContextProvier>(
  {} as IAuthContextProvier
);

export function AuthContext({ children }: IAuthContext) {
  const [message, setMessage] = useState("")

  const singIn = (data: FieldValue<ISingIn>) => {
    toast.promise(
      apiFake.post("/login", data).then((res: IResponseLogin) => {
        localStorage.setItem("@Token", res.data.accessToken);
        localStorage.setItem("@Id_User", res.data.user.id);
      }),
      {
        pending: "Carregando...",
        success: "Logado com sucesso",
        error: "Email ou Senha incorreto",
      }
    );
  };

  const registerClient = (data: IRegisterClient) => {
    const {
      name,
      email,
      password,
      age,
      cpf,
    } = data;
    const ParseAge = Number(age)
    toast.promise(
      apiHospital
        .post("user", {
          name,
          email,
          password,
          cpf,
          age: ParseAge,
        })
        .then((res) => {
          
          console.log(res.data);
        }),
      {
        pending: "Carregando...",
        success: "Registrado com sucesso com sucesso",
        error: "Email ou Senha incorreto",
      }
    );
  };

  function validateEmail( tokenEmail : IParamsValidateEmail) {
    apiHospital.post(`auth/verify/user/${tokenEmail}`)
      .then((data: AxiosResponse) => {
        setMessage("Checked");
        console.log(data.data);
      })
      .catch((error: AxiosResponse) => {
        setMessage("Error");
        console.log(error.data);
      });
      console.log(tokenEmail)
    return message
  }
  return (
    <AuthContextProvier.Provider value={{ singIn, registerClient, message, validateEmail }}>
      {children}
    </AuthContextProvier.Provider>
  );
}
