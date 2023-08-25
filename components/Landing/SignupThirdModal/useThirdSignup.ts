import { signUp } from "@/services";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
export const useThirdSignup = (setSignupData: any, signupData: any) => {
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
  const onSubmit = async (data: any) => {
    try {
      const requestData = signupData;
      setSignupData((prev: any) => {
        return { ...prev, avatar: data.avatar };
      });
      requestData.avatar = data.avatar[0];
      console.log(requestData);
      const resp = await signUp(requestData);
      console.log(resp);
    } catch (e) {
      console.log(e);
    }
  };
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    preview,
  };
};
