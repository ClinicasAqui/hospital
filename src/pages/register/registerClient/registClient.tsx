import React, { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContextProvier } from "../../../context/authContext";
import { apiCep } from "../../../services/apiCep";
import { IApiCepResponse } from "../../../interfaces/apiInterface/apiInterface";
import InputMask from "react-input-mask";
import { IRegisterClient } from "../../../interfaces/authInteface/authInterface";
import { Link } from "react-router-dom";

export const RegisterClient = () => {
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
    confiPass: yup
      .string()
      .required("Confirmação da senha obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
    age: yup.string().required("Idade obrigatória"),
  });

  const { registerClient } = useContext(AuthContextProvier);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterClient>({ resolver: yupResolver(formSchema) });

  return (
    <>
      <form onSubmit={handleSubmit(registerClient)}>
        <label htmlFor="name">Nome</label>
        <input type="text" {...register("name")} placeholder="Seu nome" id="name" />
        <span>
          <>{errors.name?.message}</>
        </span>
        <label htmlFor="idade">Idade</label>
        <input
          type="text"
          {...register("age")}
          placeholder="Digite sua idade ex: 19"
          id="idade"
        />
        <span>
          <>{errors.age?.message}</>
        </span>
        <label htmlFor="cpf">CPF</label>
        <InputMask
          mask={"999.999.999-99"}
          type="text"
          {...register("cpf")}
          placeholder="Seu CPF ex: 999.999.999-99"
          id="cpf"
        />
        <span>
          <>{errors.cpf?.message}</>
        </span>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          {...register("email")}
          placeholder="Email"
          id="email"
        />
        <span>
          <>{errors.email?.message}</>
        </span>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Digite sua senha"
          id="password"
        />
        <span>
          <>{errors.password?.message}</>
        </span>
        <label htmlFor="confiPass">Confirme a senha</label>
        <input
          type="password"
          {...register("confiPass")}
          placeholder="Confirme sua senha"
          id="confiPass"
        />
        <span>
          <>{errors.confiPass?.message}</>
        </span>
        <button type="submit">Register</button>
      </form>
      <p>Você ja tem uma conta?</p>
      <Link to="/login">Login</Link>
    </>
  );
};
