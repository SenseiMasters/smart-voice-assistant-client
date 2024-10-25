"use client";

import React from "react";

interface IPromptProvider {
  prompt: string;
  setPrompt: (_: string) => void;
}

export const PromptContext = React.createContext<IPromptProvider>({
  prompt: "",
  setPrompt: () => undefined,
});

export const PromptProvider: React.FC<IChildrenProps> = ({ children }) => {
  const [prompt, setPrompt] = React.useState<string>("");

  return (
    <PromptContext.Provider value={{ prompt, setPrompt }}>
      {children}
    </PromptContext.Provider>
  );
};
