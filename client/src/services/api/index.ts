import axios from "axios";
import { SERVER_URL } from "../../config";

export type ExtensionType = {
  _id: string;
  name: string;
  description: string;
  isActive: boolean;
  logo: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const BaseUrl = `${SERVER_URL}/api/v1/extension`;

export const getExtensions = async (requestType: number) => {
  const paramOptions = {
    0: "",
    1: "isActive=true",
    2: "isActive=false",
  };
  const chosenOption = paramOptions[requestType as keyof typeof paramOptions];
  try {
    const url = `${BaseUrl}${chosenOption ? "?" + chosenOption : ""}`;
    const { data } = await axios.get(url);
    return data.extensions as ExtensionType[];
  } catch (error) {
    console.error(error);
  }
};
