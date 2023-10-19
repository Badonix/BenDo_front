import { login, verifyCSRF } from "@/services";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await verifyCSRF();
      await login(data);
      router.push("/choose");
      setIsLoading(false);
    } catch (e: any) {
      e.response.status === 401 &&
        setError("password", { type: "wrong", message: "Wrong Credentials" });
      setIsLoading(false);
    }
  };
  return { register, handleSubmit, onSubmit, errors, isLoading };
};
export default useLogin;
