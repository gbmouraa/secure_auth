import { useContext } from "react";
import { UserContext } from "../../userContext";
import { ThirdParty, LoginButton } from "./thirdPartyLogin.style";
import googleIcon from "../../assets/images/google.svg";
import githubIcon from "../../assets/images/github.svg";

export default function ThirdPartyLogin() {
  const { thirdPartyLogin } = useContext(UserContext);

  function handleLogin(provider) {
    thirdPartyLogin(provider);
  }

  return (
    <ThirdParty>
      <LoginButton onClick={() => handleLogin("google")}>
        <img src={googleIcon} alt="Google logo" />
      </LoginButton>
      <LoginButton onClick={() => handleLogin("github")}>
        <img src={githubIcon} alt="Github logo" />
      </LoginButton>
    </ThirdParty>
  );
}
