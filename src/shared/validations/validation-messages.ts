export type ValidationMessagesType = {
  messages: {
    required: string;
    invalidEmail: string;
    passwordMinLength: string;
    nameMinLength: string;
    passwordMismatch: string;
    invalidPhone: string;
    maxLength: (field: string, max: number) => string;
    minLength: (field: string, min: number) => string;
  };
  placeholders: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone?: string;
  };
};

export type SupportedLocales = 'pt' | 'en';

export const validationMessages: Record<SupportedLocales, ValidationMessagesType> = {
  pt: {
    messages: {
      required: "Este campo é obrigatório.",
      invalidEmail: "Digite um e-mail válido.",
      passwordMinLength: "A senha deve conter pelo menos 8 caracteres.",
      nameMinLength: "O nome deve conter pelo menos 1 caractere.",
      passwordMismatch: "As senhas não coincidem.",
      invalidPhone: "Digite um número de telefone válido.",
      maxLength: (field, max) => `${field} deve ter no máximo ${max} caracteres.`,
      minLength: (field, min) => `${field} deve ter no mínimo ${min} caracteres.`,
    },
    placeholders: {
      name: "Digite seu nome",
      email: "Digite seu e-mail",
      password: "Digite sua senha",
      confirmPassword: "Confirme sua senha",
      phone: "Digite seu telefone",
    },
  },
  en: {
    messages: {
      required: "This field is required.",
      invalidEmail: "Please enter a valid email address.",
      passwordMinLength: "Password must be at least 8 characters.",
      nameMinLength: "Name must contain at least 1 character.",
      passwordMismatch: "Passwords do not match.",
      invalidPhone: "Please enter a valid phone number.",
      maxLength: (field, max) => `${field} must be at most ${max} characters.`,
      minLength: (field, min) => `${field} must be at least ${min} characters.`,
    },
    placeholders: {
      name: "Enter your name",
      email: "Enter your email",
      password: "Enter your password",
      confirmPassword: "Confirm your password",
      phone: "Enter your phone number",
    },
  },
};
