"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  FormTextValues,
  defaultValues,
  textFormValidationSchema,
} from "../libs";
import { useCreatePdf } from "@/shared/hooks";

export const useTextForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTextValues>({
    defaultValues,
    resolver: yupResolver(textFormValidationSchema),
  });

  const { mutateAsync: createPdf, isPending } = useCreatePdf();

  const onSubmit = async ({ text }: FormTextValues) => {
    const result = await createPdf(text);

    console.log(result, "result");
  };

  return {
    control,
    onSubmit,
    handleSubmit,
    errors,
    isLoading: isPending,
  };
};
