import { useModal } from "@/hooks";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useWatch } from "react-hook-form";
export const useSignupModal = (setSignupData: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { password: passwordValue } = useWatch({ control });
  const { setOpenModal } = useModal();
  const onSubmit = async (data: any) => {
    setSignupData(data);
    setOpenModal("signup2");
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
