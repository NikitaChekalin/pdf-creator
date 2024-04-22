import React, { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ name, error, ...rest }, ref) => {
    return (
      <div>
        <textarea
          {...rest}
          ref={ref}
          name={name}
          className={`w-full px-3 py-2 text-base text-gray-700 placeholder-gray-400 border rounded-md focus:outline-none disabled:bg-gray-200 disabled:cursor-not-allowed resize-none ${
            error ? "border-red-500" : ""
          }`}
          placeholder="Введіть текст"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
