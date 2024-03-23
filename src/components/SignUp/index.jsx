import { useContext } from "react";
import { UserContext } from "../../userContext";
import {
  SignUpWrapper,
  AuthOptions,
  LoginAnchor,
  SocialLogin,
  LoginButton,
} from "./signup.style";
import googleIcon from "../../assets/images/google.svg";
import githubIcon from "../../assets/images/github.svg";
import FormSignUp from "../Forms/FormSignUp";
import ModalAuth from "../Modals/ModalAuth";
export default function SignUp() {
  const { loading, thirdPartyLogin } = useContext(UserContext);

  function handleLogin(provider) {
    thirdPartyLogin(provider);
  }

  return (
    <SignUpWrapper>
      <p>Criar nova conta</p>
      <AuthOptions>
        <p>
          Já possui uma conta? <LoginAnchor>Faça login</LoginAnchor>
        </p>
        <p>Ou continue com</p>
        <SocialLogin>
          <LoginButton onClick={() => handleLogin("google")}>
            <img src={googleIcon} alt="Google logo" />
          </LoginButton>
          <LoginButton onClick={() => handleLogin("github")}>
            <img src={githubIcon} alt="Github logo" />
          </LoginButton>
        </SocialLogin>
      </AuthOptions>
      <FormSignUp />

      {loading && <ModalAuth authAction="cadastro" />}
    </SignUpWrapper>
  );
}
