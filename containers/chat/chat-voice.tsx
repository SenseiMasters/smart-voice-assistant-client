"use client";

import * as React from "react";
import { AiOutlineClear } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { MdPausePresentation } from "react-icons/md";
import { RiVoiceRecognitionLine } from "react-icons/ri";

import { classNames } from "@/utils/classNames";

interface IChatVoiceProps {
  loading?: boolean;
  handleOnSubmit?: (_: Blob) => void;
}

export const ChatVoice: React.FC<IChatVoiceProps> = ({
  loading = false,
  handleOnSubmit,
}) => {
  const [voice, setVoice] = React.useState<Blob>();
  const [voiceUrl, setVoiceUrl] = React.useState<string>();
  const [isRecording, setIsRecording] = React.useState<boolean>(false);

  const audioBlob = React.useRef<BlobPart[]>([]);
  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);

  const reset = () => {
    setVoice(undefined);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
        },
        video: false,
      });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = async (event) => {
        audioBlob.current.push(event.data);
      };

      mediaRecorderRef.current.addEventListener("stop", async () => {
        const blob = new Blob(audioBlob.current, { type: "audio/ogg" });
        setVoice(blob);
        setIsRecording(false);
        audioBlob.current = [];
        mediaRecorderRef.current = null;

        const fileReader = new FileReader();
        fileReader.readAsDataURL(blob);
        fileReader.onloadend = function () {
          const newData = (fileReader.result as string).split(";");
          setVoiceUrl(`data:audio/ogg;${newData[1]}`);
        };
      });

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop?.();
  };

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button
          className="bg-red-500 hover:bg-red-400 disabled:bg-red-300 text-white font-semibold rounded-xl py-2 flex items-center justify-center gap-2"
          onClick={reset}
          disabled={!voice || loading}
        >
          <AiOutlineClear className="w-6 h-6" />
          <span>Reset</span>
        </button>
        <button
          className="bg-green-500 hover:bg-green-400 disabled:bg-green-300 text-white font-semibold rounded-xl py-2 flex items-center justify-center gap-2"
          onClick={() => {
            if (!voice) return;
            if (!!handleOnSubmit) handleOnSubmit(voice);
          }}
          disabled={!voice || loading}
        >
          <RiVoiceRecognitionLine className="w-6 h-6" />
          <span>Recognize</span>
        </button>
        <>
          {isRecording ? (
            <button
              className={classNames(
                "bg-violet-500 hover:bg-violet-400 disabled:bg-violet-300 text-white font-semibold rounded-xl py-2 flex items-center justify-center gap-2"
              )}
              onClick={stopRecording}
              disabled={!!voice || loading}
            >
              <MdPausePresentation className="w-6 h-6" />
              <span>Pause</span>
            </button>
          ) : (
            <button
              className={classNames(
                "bg-blue-500 hover:bg-blue-400 disabled:bg-blue-300 text-white font-semibold rounded-xl py-2 flex items-center justify-center gap-2"
              )}
              onClick={startRecording}
              disabled={!!voice || loading}
            >
              <MdKeyboardVoice className="w-6 h-6" />
              <span>Record</span>
            </button>
          )}
        </>
      </div>
      {!!voiceUrl && <audio className="w-full" src={voiceUrl} controls />}
    </div>
  );
};
