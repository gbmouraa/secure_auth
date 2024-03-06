import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, InputWrapper, Input, ErrorMsg } from "./form.style";
import { FiEye, FiEyeOff } from "react-icons/fi";

const schema = z
  .object({
    firstName: z.string().min(1, "Este campo é obrigatório"),
    lastName: z.string().min(1, "Este campo é obrigatório"),
    email: z
      .string()
      .min(1, "Este campo é obrigatório")
      .email("Digite um email válido"),
    password: z
      .string()
      .min(1, "Este campo é obrigatório")
      .min(6, "Senha deve conter no minimo 6 caracteres"),
    confirmPassword: z.string().min(1, "Este campo é obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export default function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");

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
          type={password}
          id="password"
          placeholder="Senha"
          {...register("password")}
        />
        <label htmlFor="password">Senha</label>

        <button
          onClick={() =>
            setPassword((prev) => (prev === "password" ? "text" : "password"))
          }
          type="button"
        >
          {password === "password" ? (
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
          type={confirmPassword}
          id="confirm-password"
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
        />
        <label htmlFor="confirm-password">Confirmar senha</label>

        <button
          onClick={() =>
            setConfirmPassword((prev) =>
              prev === "password" ? "text" : "password"
            )
          }
          type="button"
        >
          {confirmPassword === "password" ? (
            <FiEye size={22} />
          ) : (
            <FiEyeOff size={22} />
          )}
        </button>
        {errors?.confirmPassword && (
          <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>
        )}
      </InputWrapper>

      <button type="submit">Cadastrar</button>
    </Form>
  );
}
