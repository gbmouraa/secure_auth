import { useContext, useState } from "react";
import { UserContext } from "../../userContext";
import { MainWrapper } from "../../components/MainWrapper.style";
import ModalAuth from "../../components/Modals/ModalAuth";

export default function LogIn() {
  const { signIn, loading } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <MainWrapper>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Senha</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>

      {loading && <ModalAuth authAction="login" />}
    </MainWrapper>
  );
}
