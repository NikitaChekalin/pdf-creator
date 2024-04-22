"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  FormTextValues,
  defaultValues,
  textFormValidationSchema,
} from "../libs";

export const useTextForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTextValues>({
    defaultValues,
    resolver: yupResolver(textFormValidationSchema),
  });

  const onSubmit = (data: FormTextValues) => {
    console.log("data", data);
  };

  return {
    control,
    onSubmit,
    handleSubmit,
    errors,
  };
};
