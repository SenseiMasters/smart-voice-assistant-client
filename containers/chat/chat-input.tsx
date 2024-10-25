"use client";

import React from "react";
import { IoMdSend } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

import { ChatLang } from "./chat-lang";
import { classNames } from "@/utils/classNames";
import { TextArea } from "@/components/textarea";
import { PromptContext } from "@/providers/prompt.provider";

interface IChatInputProps {
  loading?: boolean;
  handleOnRemove: () => void;
  handleOnSubmit: (_: string) => void;
}

export const ChatInput: React.FC<IChatInputProps> = ({
  loading = false,
  handleOnSubmit,
  handleOnRemove
}) => {
  const { prompt, setPrompt } = React.useContext(PromptContext);

  return (
    <section className="w-full space-y-4">
      <div className="w-full">
        <TextArea
          placeholder="Enter something you want ..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button
          disabled={!prompt || loading}
          onClick={handleOnRemove}
          className={classNames(
            "bg-red-500 rounded-xl flex py-2 text-white font-semibold",
            "justify-center items-center hover:bg-red-400 gap-x-2 disabled:bg-red-300"
          )}
        >
          <MdDeleteOutline className="w-6 h-6" />
          <span>Remove</span>
        </button>
        <button
          disabled={!prompt || loading}
          onClick={() => handleOnSubmit(prompt)}
          className={classNames(
            "bg-green-500 rounded-xl flex py-2 text-white font-semibold",
            "justify-center items-center hover:bg-green-400 gap-x-2 disabled:bg-green-300"
          )}
        >
          <IoMdSend className="w-6 h-6 text-white" />
          <span>Send</span>
        </button>
        <ChatLang />
      </div>
    </section>
  );
};
