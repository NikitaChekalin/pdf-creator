import { useMutation } from "@tanstack/react-query";
import { createPdfRequest } from "@/shared/services";

export const useCreateOrder = () =>
  useMutation({
    mutationFn: createPdfRequest,
  });
