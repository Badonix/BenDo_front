import { signUp } from "@/services";

export const useSignupModal = () => {
  const handleSubmit = async () => {
    console.log(
      await signUp({
        first_name: "giorgi",
      })
    );
  };
  return { handleSubmit };
};
