import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../userContext";
import {
  RegisterContainer,
  SignUpWrapper,
  AuthOptions,
  LoginAnchor,
} from "./register.style";
import { MainWrapper } from "../../components/MainWrapper.style";
import ThirdPartyLogin from "../../components/ThirdPartyLogin";
import FormSignUp from "../../components/Forms/FormSignUp";
import ModalAuth from "../../components/Modals/ModalAuth";

export default function Register() {
  const { isSigned, loading } = useContext(UserContext);

  if (isSigned) {
    return <Navigate to="/profile" />;
  }

  return (
    <RegisterContainer>
      <MainWrapper>
        <SignUpWrapper>
          <p>Criar nova conta</p>
          <AuthOptions>
            <p className="sm">
              Já possui uma conta?{" "}
              <LoginAnchor to="/login">Faça login</LoginAnchor>
            </p>
            <p className="sm">Ou continue com</p>
            <ThirdPartyLogin />
          </AuthOptions>
          <FormSignUp />

          {loading && <ModalAuth authAction="cadastro" />}
        </SignUpWrapper>
      </MainWrapper>
    </RegisterContainer>
  );
}
