import React from "react";
import { Divider } from "../../atoms";

interface Container {
  children: React.ReactNode;
  title: string;
}

export const Container = ({ children, title }: Container) => (
  <main className="flex flex-col items-center justify-between">
    <div className="w-full max-w-3xl p-24">
      <h1 className="text-3xl font-bold text-gray-500">{title}</h1>
      <Divider />
      {children}
    </div>
  </main>
);
