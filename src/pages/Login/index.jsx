import { useContext, useState } from "react";
import { UserContext } from "../../userContext";
import { LoginWrapper } from "./login.style";
import ModalAuth from "../../components/Modals/ModalAuth";
import { AuthOptions, LoginAnchor } from "../Register/register.style";
import ThirdPartyLogin from "../../components/ThirdPartyLogin";
import { MainWrapper } from "../../components/MainWrapper.style";
import { RegisterContainer } from "../Register/register.style";
import FormLogin from "../../components/Forms/FormLogin";

export default function LogIn() {
  const { loading } = useContext(UserContext);

  return (
    <RegisterContainer>
      <MainWrapper style={{ maxWidth: "600px" }} className="main-wrapper-login">
        <LoginWrapper>
          <p>Login</p>
          <AuthOptions>
            <p className="sm">
              Não possui uma conta?{" "}
              <LoginAnchor to="/">Cadastre-se</LoginAnchor>
            </p>
            <p className="sm">Ou continue com</p>
            <ThirdPartyLogin />
          </AuthOptions>
          <FormLogin />
          {/* <span>Esqueceu sua senha?</span> */}
          {loading && <ModalAuth authAction="login" />}
        </LoginWrapper>
      </MainWrapper>
    </RegisterContainer>
  );
}
