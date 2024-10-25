import axios from "axios";
import { SERVER_URL } from "@/utils/cfg";

export const generateClient = (isForm = false) => {
  return axios.create({
    baseURL: SERVER_URL,
    headers: {
      "Content-Type": isForm ? "multipart/form-data" : "application/json",
    },
  });
};
