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
import githubIcon from "../../assets/github.svg";
import FormSignUp from "../Forms/FormSignUp";
import ModalAuth from "../Modals/ModalAuth";
export default function SignUp() {
  const { loading, thirdPartyLogin } = useContext(AuthContext);

  return (
    <SignUpWrapper>
      <p>Criar nova conta</p>
      <AuthOptions>
        <p>
          Já possui uma conta? <LoginAnchor>Faça login</LoginAnchor>
        </p>
        <p>Ou continue com</p>
        <SocialLogin>
          <LoginButton onClick={thirdPartyLogin}>
            <img src={googleIcon} alt="Google logo" />
          </LoginButton>
          <LoginButton onClick={thirdPartyLogin}>
            <img src={githubIcon} alt="Github logo" />
          </LoginButton>
        </SocialLogin>
      </AuthOptions>
      <FormSignUp />

      {loading && <ModalAuth authAction="cadastro" />}
    </SignUpWrapper>
  );
}
