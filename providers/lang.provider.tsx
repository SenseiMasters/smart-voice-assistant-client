"use client";

import React from "react";

interface ILangProvider {
  lang: LangEnum;
  setLang: (_: LangEnum) => void;
}

export const LangContext = React.createContext<ILangProvider>({
  lang: "Farsi" as LangEnum,
  setLang: () => undefined,
});

export const LangProvider: React.FC<IChildrenProps> = ({ children }) => {
  const [lang, setLang] = React.useState<LangEnum>("Farsi" as LangEnum);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
