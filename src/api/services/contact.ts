import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "@/api/client/axios";
import { MutationOptionsWithoutFn } from "@/api/services/types";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const useSubmitContactForm = (
  // eslint-disable-next-line
  options?: MutationOptionsWithoutFn<any, any, FormData>,
  // eslint-disable-next-line
): UseMutationResult<any, any, FormData> => {
  return useMutation({
    mutationFn: async (formData: FormData) =>
      await api.post(import.meta.env.VITE_CONTACT_FORM_ENDPOINT, formData),
    ...options,
  });
};

export { useSubmitContactForm };
