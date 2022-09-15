import React, { useContext, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { AuthContextProvier } from "../../context/authContext";
import { CardCl } from "../../components/cardClinic";
import { Header } from "../../components/header";

export const Login = () => {
  const [visible, setVisible] = useState(false);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const { singIn } = useContext(AuthContextProvier);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <>
      <Header input={true} />
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
              <IoMdEye onClick={() => setVisible(false)} />
            </>
          ) : (
            <>
              <input
                type="password"
                {...register("password")}
                placeholder="Senha"
                id="password"
              />
              <IoIosEyeOff onClick={() => setVisible(true)} />
            </>
          )}
        </div>
        <span>
          <>{errors.password?.message}</>
        </span>
        <button type="submit">Entrar</button>
      </form>
      <CardCl
        cl={{
          id: 1,
          idCl: 1,
          nomeCl: "Teste Clinica 1",
          img: [
            "https://i1.wp.com/iclinic-mkt.s3.amazonaws.com/ghost-images/images/2019/03/recepcionista-de-clinica.png?resize=1024&w=1024",
            "https://clinicadeimagens.net/wp-content/uploads/2020/02/foto2.png",
            "https://clinicadetodos-sp.com.br/wp-content/uploads/2021/02/Clinica-de-todos-lapa-recepcao.jpg",
          ],
          endereço: {
              Rua: "Av. Augusta Viola da Costa",
              Numero: "350",
              Bairro: "Jardim Jose Ometto II",
              Cidade: "Araras - SP",
              Cep: "13606-396",
            },
          descricao:
            "CLÍNICA TERAPÊUTICA RENOVA VIDA Localizada em um lugar tranquilo e acolhedor, a Clínica Terapêutica Renova Vida oferece uma estrutura completa para o tratamento de Dependência Química e Alcoólica. Temos alvarás concedidos pelos bombeiros, vigilância sanitária e municipal. Contamos com uma equipe multidisciplinar que oferece total suporte para o dependente como também para a Família. Nosso diferencial é um tratamento teórico/prático onde o residente estuda e pratica o que estudou na instituição para se reinserir em sociedade.",
          tratamento:
            "Respiratória Aguda Grave do Coronavírus 2 (SRA-CoV-2). A doença é caracterizada por uma infecção respiratória com sintomas que vão desde um leve resfriado comum/tipo gripe a problemas de saúde mais graves. Os sintomas normalmente incluem febre, tosse, dor de garganta e falta de ar",
        }}
      ></CardCl>
    </>
  );
};
