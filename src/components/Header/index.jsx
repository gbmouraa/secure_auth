import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../userContext";
import { HeaderWrapper, ActionButton, Logo } from "./header.style";

export default function Header() {
  const { isSigned } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  function handleAuth() {
    if (location.pathname === "/") {
      navigate("/login");
      return;
    }

    navigate("/");
  }

  return (
    <HeaderWrapper>
      <Logo>SecureAuth</Logo>
      {!isSigned && (
        <ActionButton onClick={handleAuth}>
          {location.pathname === "/" ? "Entrar" : "Cadastre-se"} <div />
        </ActionButton>
      )}
    </HeaderWrapper>
  );
}
