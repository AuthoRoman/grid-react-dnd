import axios from "axios";
import { Data } from "../types/types.ts";

export const getApiList = async () => {
  const response = await axios.get<Data[]>("http://localhost:3000/data");
  if (!response.data) {
    throw new Error("No data received from API");
  }
  return response.data;
};
