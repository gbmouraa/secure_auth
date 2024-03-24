import { z } from "zod";

// register
export const schema = z
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

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Este campo é obrigatório")
    .email("Digite um email válido"),
  password: z.string().min(1, "Este campo é obrigatório"),
});
