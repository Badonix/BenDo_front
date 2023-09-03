import { useModal } from "@/hooks";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useWatch } from "react-hook-form";
import { checkUnique } from "@/services";
export const useSignupModal = (setSignupData: any, signupData: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm({ defaultValues: signupData });
  const { password: passwordValue } = useWatch({ control });
  const { setOpenModal } = useModal();
  const onSubmit = async (data: any) => {
    try {
      const res = await checkUnique(data);
      console.log(res);
      setSignupData(data);
      setOpenModal("signup2");
    } catch (e: any) {
      e.response.data?.data.email &&
        setError("email", { message: "Email is already taken" });
      e.response.data?.data.username &&
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
  };
};
