import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

export const signUp = async (data: any) => {
  const response = await instance.post("/api/signup", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};
