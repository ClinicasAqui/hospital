import React, { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContextProvier } from "../../../context/authContext";
import { apiCep } from "../../../services/apiCep";
import { IApiCepResponse } from "../../../interfaces/apiInterface/apiInterface";
import InputMask from "react-input-mask";
import { IRegisterClient } from "../../../interfaces/authInteface/authInterface";

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
    telefone: yup.string().required("Telefone obrigatória"),
    idade: yup.string().required("Idade obrigatória"),
    image: yup
      .mixed()
      .required("Imagem obrigatória")
      .test("file", "Imagem obrigatória", (value) => {
        return value && value.length !== 0;
      })
      .test("fileSize", "Imagem muito pesada", (value) => {
        return value[0] && value[0].size <= 2000000;
      })
      .test(
        "fileFormat",
        "imagem somente do tipo: .jpg, .jpeg, .png",
        (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
      ),
    cep: yup.string().required("Cep obrigatória"),
    numero: yup.string().required("Número obrigatória"),
  });

  const [cep, setCep] = useState("");
  const [loradouro, setLoradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");
  const [disable, setDisable] = useState(true);

  const { registerClient } = useContext(AuthContextProvier);

  useEffect(() => {
    cep.replace(/([^\d])+/gim, "").length === 8
      ? apiCep
          .get(`${cep.replace(/([^\d])+/gim, "")}/json/`)
          .then((res: IApiCepResponse) => {
            setLoradouro(res.data.logradouro);
            setBairro(res.data.bairro);
            setLocalidade(res.data.localidade);
            setUf(res.data.uf);
            setDisable(false);
          })
          .catch((res) => console.log(res.data))
      : setLoradouro("");
    setBairro("");
    setLocalidade("");
    setUf("");
    setDisable(true);
  }, [cep]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterClient>({ resolver: yupResolver(formSchema) });

  return (
    <form onSubmit={handleSubmit(registerClient)}>
      <label htmlFor="name">Nome</label>
      <input type="text" {...register("name")} placeholder="Seu nome" id="name" />
      <span>
        <>{errors.name?.message}</>
      </span>
      <label htmlFor="idade">Idade</label>
      <input
        type="text"
        {...register("idade")}
        placeholder="Digite sua idade ex: 19"
        id="idade"
      />
      <span>
        <>{errors.idade?.message}</>
      </span>
      <label htmlFor="image">Imagem</label>
      <input
        type="file"
        {...register("image")}
        id="image"
      />
      <span>
        <>{errors.image?.message}</>
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
      <label htmlFor="Telefone">Telefone</label>
      <InputMask
        mask={"(99) 99999-9999"}
        type="text"
        {...register("telefone")}
        placeholder="Telefone ex: (99) 99999-9999"
        id="Telefone"
      />
      <span>
        <>{errors.telefone?.message}</>
      </span>
      <label htmlFor="planos">Planos De Saude</label>
      <input
        type="text"
        {...register("planos")}
        placeholder="Planos De Saude ex: UniMed"
        id="planos"
      />
      <span>
        <>{errors.telefone?.message}</>
      </span>
      <label htmlFor="cep">Cep</label>
      <InputMask
        mask={"99.999-999"}
        type="text"
        {...register("cep")}
        placeholder="Cep: ex 13.606-412"
        id="cep"
        onChange={(ev) => setCep(ev.target.value)}
        value={cep}
      />
      <span>
        <>{errors.cep?.message}</>
      </span>
      {!disable ? (
        <>
          <label htmlFor="loradouro">Loradouro</label>
          <input
            value={loradouro}
            type="text"
            {...register("loradouro")}
            placeholder="Loradouro"
            id="loradouro"
          />
          <span>
            <>{errors.loradouro?.message}</>
          </span>
          <label htmlFor="bairro">Bairro</label>
          <input
            value={bairro}
            type="text"
            {...register("bairro")}
            placeholder="Bairro"
            id="bairro"
          />
          <span>
            <>{errors.bairro?.message}</>
          </span>
          <label htmlFor="localidade">Localidade</label>
          <input
            value={localidade}
            type="text"
            {...register("localidade")}
            placeholder="Localidade"
            id="localidade"
          />
          <span>
            <>{errors.localidade?.message}</>
          </span>
          <label htmlFor="uf">Uf</label>
          <input
            value={uf}
            type="text"
            {...register("uf")}
            placeholder="Uf"
            id="uf"
          />
          <span>
            <>{errors.uf?.message}</>
          </span>
          <label htmlFor="numero">Número da casa</label>
          <input
            type="text"
            {...register("numero", {
              required: true,
            })}
            placeholder="Número da casa"
            id="numero"
          />
          <span>
            <>{errors.numero?.message}</>
          </span>
        </>
      ) : (
        <></>
      )}
      <button type="submit">Entrar</button>
    </form>
  );
};
