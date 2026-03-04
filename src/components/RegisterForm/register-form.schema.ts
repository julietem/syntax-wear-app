import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

export const registerUserFormSchema = z
  .object({ 
    firstName: z.string().nonempty("Primeiro nome é obrigatório"),
    lastName: z.string().nonempty("Sobrenome é obrigatório"),

    email: z
      .string()
      .nonempty("Email é obrigatório")
      .email("Email inválido"),

    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres"),

    confirmPassword: z
      .string()
      .min(1, "Confirmação de senha é obrigatória"),

    cpf: z
      .string()
      .min(1, "CPF é obrigatório")
      .refine(isValidCPF, "CPF inválido"),
    birthDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Data de nascimento inválida"),
    phone: z
      .string()
      .nonempty("telefone é obrigatório")
      .refine((phone) => /^\d{10,11}$/.test(phone), "Número de celular inválido"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });


type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerUserFormSchema),
        mode: "onBlur",
        defaultValues: {
            email:"",
            password:""
        },
        criteriaMode:"all",
    });

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setError,
        reset
    };
}