import { useMutation } from "@tanstack/react-query";
import { sendPrompt, speechToText } from "../services/assistant";

export const useSendPrompt = () =>
  useMutation({ mutationKey: ["send-prompt"], mutationFn: sendPrompt });

export const useSpeechToText = () =>
  useMutation({ mutationKey: ["speech-to-text"], mutationFn: speechToText });
