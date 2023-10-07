import { useModal } from "@/hooks";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useWatch } from "react-hook-form";
import { checkUnique } from "@/services";
import { useState } from "react";
export const useSignupModal = (setSignupData: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { password: passwordValue } = useWatch({ control });
  const { setOpenModal } = useModal();
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const res = await checkUnique(data);
      console.log(res);
      setSignupData(data);
      setIsLoading(false);
      setOpenModal("signup2");
    } catch (e: any) {
      setIsLoading(false);
      e.response?.data?.data.email &&
        setError("email", { message: "Email is already taken" });
      e.response?.data?.data.username &&
        setError("username", { message: "Username is already taken" });
    }
  };
  return {
    handleSubmit,
    onSubmit,
    register,
    ErrorMessage,
    errors,
    passwordValue,
    isLoading,
  };
};
