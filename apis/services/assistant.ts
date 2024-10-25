import { urls } from "@/utils/urls";
import { generateClient } from "../client";

type sendPrompt = (_: ISendPrompt) => Promise<IResult>;
export const sendPrompt: sendPrompt = async (data) => {
  const client = generateClient();
  const response = await client.post<IResult>(urls.aiAssistant.prompt, data);
  return response.data;
};

type speechToText = (_: ISpeechToText) => Promise<IResult>;
export const speechToText: speechToText = async (data) => {
  const client = generateClient(true);
  const response = await client.post<IResult>(
    urls.aiAssistant.speechToText,
    data
  );
  return response.data;
};
