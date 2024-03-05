import { useState } from "react";
import { Form, InputWrapper, Input } from "./form.style";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function FormSignUp() {
  // states para controlar os inputs de senha
  const [inputType, setInputType] = useState("password");
  const [visible, setVisble] = useState(false);

  function handleVisible() {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
    setVisble((prev) => !prev);
  }

  return (
    <Form>
      <div className="names">
        <InputWrapper>
          <Input type="text" id="firstName" placeholder="Primeiro Nome" />
          <label htmlFor="firstName">Primeiro nome</label>
        </InputWrapper>

        <InputWrapper>
          <Input type="text" id="lastName" placeholder="Ultimo nome" />
          <label htmlFor="lastName">Ultimo nome</label>
        </InputWrapper>
      </div>

      <InputWrapper>
        <Input type="text" id="email" placeholder="Email" />
        <label htmlFor="email">Email</label>
      </InputWrapper>

      <InputWrapper>
        <Input type={inputType} id="password" placeholder="Senha" />
        <label htmlFor="password">Senha</label>

        <button onClick={handleVisible}>
          {visible ? <FiEyeOff size={22} /> : <FiEye size={22} />}
        </button>
      </InputWrapper>

      <InputWrapper>
        <Input
          type={inputType}
          id="confirm-password"
          placeholder="Confirmar senha"
        />
        <label htmlFor="confirm-password">Confirmar senha</label>
      </InputWrapper>
    </Form>
  );
}
