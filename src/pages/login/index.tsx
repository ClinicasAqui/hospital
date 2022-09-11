import React, { useContext, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { AuthContextProvier } from "../../context/authContext";


export const Login = () => {
  const [visible, setVisible] = useState(false);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const { singIn } = useContext(AuthContextProvier)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <form onSubmit={handleSubmit(singIn)}>
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
      <div>
        {visible ? (
          <>
            <input
              type="text"
              {...register("password")}
              placeholder="Senha"
              id="password"
            />
            <IoMdEye
              onClick={() => setVisible(false)}
            />
          </>
        ) : (
          <>
            <input
              type="password"
              {...register("password")}
              placeholder="Senha"
              id="password"
            />
            <IoIosEyeOff
              onClick={() => setVisible(true)}
            />
          </>
        )}
      </div>
      <span>
        <>{errors.password?.message}</>
      </span>
      <button type="submit">Entrar</button>
    </form>
  );
};
