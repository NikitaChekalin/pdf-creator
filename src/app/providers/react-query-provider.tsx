"use client";

import { queryClient } from "@/shared/api";
import { QueryClientProvider } from "@tanstack/react-query";

interface ReactQueryProvider {
  children: React.ReactNode;
}

export const ReactQueryProvider = ({ children }: ReactQueryProvider) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
