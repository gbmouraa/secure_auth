import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext";
import { HeaderWrapper, ActionButton } from "./header.style";
import { Logo } from "../Logo.style";

export default function Header() {
  const { isSigned } = useContext(AuthContext);
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
