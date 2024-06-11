import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ValidationMode } from "react-hook-form";

const mode: keyof ValidationMode = "all";

export const defaultValues: SignInTypes = {
  email: "",
  password: "",
};

export const signInSchemaValidation = yup.object({
  email: yup.string().email().required("Digite um e-mail válido"),
  password: yup.string().required("Digite uma placa válida"),
});

export const signInFormArgs = {
  mode,
  defaultValues: defaultValues,
  resolver: yupResolver(signInSchemaValidation),
};

export interface SignInTypes
  extends yup.InferType<typeof signInSchemaValidation> {}


  //Exemplo da estrutura para criar um schema de validação para o formulário de login com YUP pode ser feito tbm com o zod 