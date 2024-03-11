import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  InputWrapper,
  Input,
  ErrorMsg,
  SignUpButton,
} from "./form.style";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AvatarSelection from "../AvatarSelection";

export default function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // states para alterar a visibilidade da senha
  const [passwordVisibility, setPasswordVisivility] = useState({
    password: "off",
    confirmPassword: "off",
  });

  function togglePasswordVisibility(element) {
    const newPasswordVisibility = { ...passwordVisibility };
    newPasswordVisibility[element] =
      newPasswordVisibility[element] === "on" ? "off" : "on";
    setPasswordVisivility(newPasswordVisibility);
  }

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="names">
        <InputWrapper>
          <Input
            errors={errors?.firstName ? "true" : "false"}
            type="text"
            id="firstName"
            placeholder="Primeiro Nome"
            {...register("firstName")}
          />
          <label htmlFor="firstName">Primeiro nome</label>

          {errors?.firstName && <ErrorMsg>{errors.firstName.message}</ErrorMsg>}
        </InputWrapper>

        <InputWrapper>
          <Input
            errors={errors?.lastName ? "true" : "false"}
            type="text"
            id="lastName"
            placeholder="Ultimo nome"
            {...register("lastName")}
          />
          <label htmlFor="lastName">Ultimo nome</label>

          {errors?.lastName && <ErrorMsg>{errors.lastName.message}</ErrorMsg>}
        </InputWrapper>
      </div>

      <InputWrapper>
        <Input
          errors={errors?.email ? "true" : "false"}
          type="text"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
        <label htmlFor="email">Email</label>

        {errors?.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
      </InputWrapper>

      <InputWrapper>
        <Input
          errors={errors?.password ? "true" : "false"}
          type={passwordVisibility.password === "off" ? "password" : "text"}
          id="password"
          placeholder="Senha"
          {...register("password")}
        />
        <label htmlFor="password">Senha</label>

        <button
          name="password"
          onClick={(e) => togglePasswordVisibility(e.currentTarget.name)}
          type="button"
        >
          {passwordVisibility.password === "on" ? (
            <FiEye size={22} />
          ) : (
            <FiEyeOff size={22} />
          )}
        </button>

        {errors?.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
      </InputWrapper>

      <InputWrapper>
        <Input
          errors={errors?.confirmPassword ? "true" : "false"}
          type={
            passwordVisibility.confirmPassword === "off" ? "password" : "text"
          }
          id="confirm-password"
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
        />
        <label htmlFor="confirm-password">Confirmar senha</label>

        <button
          name="confirmPassword"
          onClick={(e) => togglePasswordVisibility(e.currentTarget.name)}
          type="button"
        >
          {passwordVisibility.confirmPassword === "on" ? (
            <FiEye size={22} />
          ) : (
            <FiEyeOff size={22} />
          )}
        </button>
        {errors?.confirmPassword && (
          <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>
        )}
      </InputWrapper>

      <AvatarSelection />
      <SignUpButton type="submit">Cadastrar</SignUpButton>
    </Form>
  );
}
