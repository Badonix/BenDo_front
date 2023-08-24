import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
export const useThirdSignup = () => {
  const [preview, setPreview] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { avatar } = useWatch({ control });
  useEffect(() => {
    avatar && setPreview(URL.createObjectURL(avatar[0]));
  }, [avatar]);
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    preview,
  };
};
