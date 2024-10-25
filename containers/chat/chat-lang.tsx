"use client";

import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { classNames } from "@/utils/classNames";
import { LangContext } from "@/providers/lang.provider";
import { LangEnum } from "@/utils/components/assistants";

const languages: ISelectItem<LangEnum>[] = [
  { label: "Farsi", value: LangEnum.FA },
  { label: "English", value: LangEnum.EN },
];

export const ChatLang: React.FC = () => {
  const { lang, setLang } = React.useContext(LangContext);

  const changeLang = (newLang: LangEnum) => {
    setLang(newLang);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className={classNames(
            "bg-gray-700 rounded-xl flex py-2 text-white font-semibold w-full",
            "justify-center items-center hover:bg-gray-600 gap-x-2 disabled:bg-green-300"
          )}
        >
          {lang}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className={classNames(
          "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white",
          "shadow-lg ring-1 data-[closed]:transform data-[closed]:opacity-0",
          "data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",
          "ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95"
        )}
      >
        <div className="py-1 px-1">
          {languages.map((el, index) => (
            <MenuItem key={index}>
              <button
                onClick={() => changeLang(el.value)}
                className={classNames(
                  "block text-sm text-left text-gray-700 data-[focus]:bg-gray-100",
                  "px-4 py-2 data-[focus]:text-gray-900 w-full rounded-lg"
                )}
              >
                {el.label}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};
