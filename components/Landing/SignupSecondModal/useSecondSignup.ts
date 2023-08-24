import { useModal } from "@/hooks";
import makeAnimated from "react-select/animated";
import { useForm } from "react-hook-form";
export const useSecondSignup = () => {
  const { wrapperRef, setOpenModal } = useModal();
  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data: any) => {
    setOpenModal("signup3");
  };
  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      color: "rgb(6, 182, 212)",
    }),

    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "rgb(6, 182, 212)",
      color: "white",
      borderRadius: "3px",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "white",
      ":hover": {
        backgroundColor: "rgba(6, 182, 212, 0.4)",
        color: "white",
      },
    }),
  };

  return {
    wrapperRef,
    animatedComponents,
    setOpenModal,
    customStyles,
    register,
    onSubmit,
    handleSubmit,
    setValue,
    errors,
  };
};
