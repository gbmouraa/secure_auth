import { useContext } from "react";
import { AuthContext } from "../../authContext";
import {
  SignUpWrapper,
  AuthOptions,
  LoginAnchor,
  SocialLogin,
  LoginButton,
} from "./signup.style";
import googleIcon from "../../assets/google.svg";
import microsoftIcon from "../../assets/microsoft.svg";
import githubIcon from "../../assets/github.svg";
import FormSignUp from "../Forms/FormSignUp";
import ModalAuth from "../Modals/ModalAuth";
export default function SignUp() {
  const { loading } = useContext(AuthContext);

  return (
    <SignUpWrapper>
      <p>Criar nova conta</p>
      <AuthOptions>
        <p>
          Já possui uma conta? <LoginAnchor>Faça login</LoginAnchor>
        </p>
        <p>Ou continue com</p>
        <SocialLogin>
          <LoginButton>
            <img src={googleIcon} alt="Google icon" />
          </LoginButton>
          <LoginButton>
            <img src={githubIcon} alt="Google icon" />
          </LoginButton>
          <LoginButton>
            <img src={microsoftIcon} alt="Google icon" />
          </LoginButton>
        </SocialLogin>
      </AuthOptions>
      <FormSignUp />

      {loading && <ModalAuth />}
    </SignUpWrapper>
  );
}
