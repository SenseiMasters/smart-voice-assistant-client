"use client";

import React from "react";
import { AxiosError } from "axios";

import { ChatInput } from "./chat-input";
import { ChatVoice } from "./chat-voice";
import { classNames } from "@/utils/classNames";
import { LangContext } from "@/providers/lang.provider";
import { PromptContext } from "@/providers/prompt.provider";
import { useErrorHandler } from "@/hooks/error-handler.hook";
import { useSendPrompt, useSpeechToText } from "@/apis/hooks/assistant";

export const ChatContainer: React.FC = () => {
  const { lang } = React.useContext(LangContext);
  const { prompt, setPrompt } = React.useContext(PromptContext);
  const [text, setText] = React.useState<string>("");

  const sendPrompt = useSendPrompt();
  const speechToText = useSpeechToText();
  const errorHandler = useErrorHandler();

  const submitPrompt = async () => {
    try {
      const response = await sendPrompt.mutateAsync({
        input: prompt,
        lang,
      });
      setText(response.result);
    } catch (error) {
      errorHandler.checkServerError(error as AxiosError);
    }
  };

  const submitStt = async (voice: Blob) => {
    try {
      const response = await speechToText.mutateAsync({
        audio: new File([voice], "audio", { type: "audio/ogg" }),
        lang,
      });
      setPrompt(response.result);
    } catch (error) {
      errorHandler.checkServerError(error as AxiosError);
    }
  };

  return (
    <section
      className={classNames(
        "flex flex-wrap container w-full",
        "min-h-screen mx-auto items-center px-4"
      )}
    >
      {!!text && (
        <div
          dir="rtl"
          className="w-full"
          dangerouslySetInnerHTML={{
            __html: text.replace(/^\`\`\`html/g, "").replace(/\`\`\`$/g, ""),
          }}
        ></div>
      )}
      <div className="max-w-[600px] w-full mx-auto space-y-2">
        <ChatInput
          handleOnSubmit={submitPrompt}
          loading={sendPrompt.isPending || speechToText.isPending}
        />
        <ChatVoice
          handleOnSubmit={submitStt}
          loading={sendPrompt.isPending || speechToText.isPending}
        />
      </div>
    </section>
  );
};
