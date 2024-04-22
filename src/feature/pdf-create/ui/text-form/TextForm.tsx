"use client";

import { Controller } from "react-hook-form";
import { useTextForm } from "./hook";
import { Button, Form, Textarea } from "@/shared/ui";

export const TextForm = () => {
  const { handleSubmit, control, errors, onSubmit } = useTextForm();

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Content>
        <Controller
          name="text"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              placeholder="Артем Шевченко Валерійович"
              error={errors.text?.message}
            />
          )}
        />

        <Button type="submit" title="Конвертувати в PDF" className="self-end" />
      </Form.Content>
    </Form.Root>
  );
};
