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

export const checkUnique = async (data: {
  username: string;
  email: string;
}) => {
  const response = await instance.post("/api/unique", data);
  return response;
};

export const verifyCSRF = async () => {
  await instance.get("/sanctum/csrf-cookie");
};

export const login = async (data: any) => {
  const response = await instance.post("/api/login", data);
  return response;
};
