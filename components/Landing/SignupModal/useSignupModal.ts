import { useModal } from "@/hooks";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useWatch } from "react-hook-form";
export const useSignupModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { password: passwordValue } = useWatch({ control });
  const { setOpenModal } = useModal();
  const onSubmit = async (data: any) => {
    console.log(data);
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
