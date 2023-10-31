import { signUp } from "@/services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
export const useThirdSignup = (setSignupData: any, signupData: any) => {
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { avatar } = useWatch({ control });
  useEffect(() => {
    if (avatar) {
      avatar[0] && setPreview(URL.createObjectURL(avatar[0]));
    }
  }, [avatar]);
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const requestData = signupData;
      setSignupData((prev: any) => {
        return { ...prev, avatar: data.avatar };
      });
      requestData.avatar = data.avatar[0];
      await signUp(requestData);
      setIsLoading(false);
      router.push("/verify-email");
    } catch (e) {
      setIsLoading(false);
    }
  };
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    preview,
  };
};
