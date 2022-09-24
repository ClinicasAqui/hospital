import { Link } from "react-router-dom";
import { Header } from "../../components/header";

export const EmailVerify = () => {
  return (
    <>
      <Header input={false}></Header>
      <div>
        <h2>Ative sua conta para poder logar.</h2>
        <p>
          Ative sua conta. caso o email nao estiver na entrada verifique seu
          span.
        </p>
        <p>Ir para login</p>
        <Link to={"/login"}>Login</Link>
      </div>
    </>
  );
};
