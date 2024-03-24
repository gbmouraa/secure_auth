import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../userContext";
import { loginSchema } from "../../validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  InputWrapper,
  Input,
  ErrorMsg,
  AuthErrorMsg,
  SignUpButton,
} from "./form.style";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const { signIn, authError } = useContext(UserContext);

  function onSubmit(data) {
    signIn(data.email, data.password);
  }

  return (
    <Form
      autoComplete="off"
      style={{ maxWidth: "400px", padding: "0px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputWrapper>
        <Input
          errors={errors?.email ? "true" : "false"}
          type="text"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
        <label htmlFor="email">Email</label>

        {errors?.email && (
          <ErrorMsg style={{ color: "red" }}>{errors.email.message}</ErrorMsg>
        )}
      </InputWrapper>

      <InputWrapper>
        <Input
          errors={errors?.password ? "true" : "false"}
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Senha"
          {...register("password")}
        />
        <label htmlFor="password">Senha</label>

        <button
          name="password"
          onClick={() => setShowPassword((prev) => !prev)}
          type="button"
        >
          {showPassword ? <FiEye size={22} /> : <FiEyeOff size={22} />}
        </button>

        {errors?.password && (
          <ErrorMsg style={{ color: "red" }}>
            {errors.password.message}
          </ErrorMsg>
        )}
      </InputWrapper>

      {authError === "invalid-credential" && (
        <AuthErrorMsg style={{ color: "red" }}>
          Email ou senha inválidos.
        </AuthErrorMsg>
      )}

      <SignUpButton
        type="submit"
        style={{
          marginLeft: "100%",
          transform: "translateX(-100%)",
          marginTop: "20px",
        }}
      >
        Entrar
      </SignUpButton>
    </Form>
  );
}
