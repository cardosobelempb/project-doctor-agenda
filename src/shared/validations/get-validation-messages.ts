// utils/get-validation-messages.ts
import { SupportedLocales, validationMessages } from "./validation-messages";

export const getValidationMessages = (locale: SupportedLocales = 'pt') => {
  return validationMessages[locale];
};
