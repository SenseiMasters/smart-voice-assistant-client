"use client";

import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { serverErrors, walletErrors } from "@/utils/constants/messages";

export const useErrorHandler = () => {
  const { push } = useRouter();

  const parseErrorMessage = (
    message: string | string[],
    withoutSlice = false
  ) => {
    let msg: string = message as string;
    if (message instanceof Array) {
      msg = message.join(", ");
    }
    return msg.length >
      Number(process.env.NEXT_PUBLIC_ERROR_MESSAGE_LENGTH || 0) && !withoutSlice
      ? `${msg.slice(
          0,
          Number(process.env.NEXT_PUBLIC_ERROR_MESSAGE_LENGTH || 0)
        )}...`
      : msg;
  };

  const showMessage = (error: IServerError, pureError: AxiosError) =>
    toast.error(
      `${serverErrors[error.statusCode.toString()]}\n${
        !!pureError.message ? `${parseErrorMessage(error.message)}.` : ""
      }`
    );

  const checkWalletError = (e: IWalletErrorDto) => {
    if (!!e.code) {
      toast.error(walletErrors[e.code.toString()]);
    } else if (!!e?.cause?.shortMessage) {
      toast.error(e.cause.shortMessage);
    }
  };

  // returns true when axios error request is unauthorized error.
  const checkServerError = (
    e: AxiosError,
    disableLogout = false,
    cbStatusCode?: number,
    cb?: (_: string) => void
  ): boolean | null => {
    if (!e || e.code === "ERR_NETWORK") {
      toast.error(serverErrors["500"]);
      return false;
    }
    if (!e?.response?.data) return false;
    const error: IServerError = e.response.data as IServerError;
    if (!!cbStatusCode && !!cb) {
      if (cbStatusCode === error.statusCode) {
        cb(
          `${serverErrors[error.statusCode.toString()]}\n${
            !!e.message ? `${parseErrorMessage(error.message, true)}.` : ""
          }`
        );
      }
    }
    const unauthorized = error.statusCode === 403 || error.statusCode === 401;
    if (!unauthorized) {
      showMessage(error, e);
    } else if (unauthorized && !disableLogout) {
      showMessage(error, e);
      push("/logout");
    }
    if (error.statusCode === 404) return null;
    return error.statusCode === 401;
  };

  return { checkWalletError, checkServerError };
};
