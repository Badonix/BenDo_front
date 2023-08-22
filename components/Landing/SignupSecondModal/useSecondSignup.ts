import { useModal } from "@/hooks";
import makeAnimated from "react-select/animated";

export const useSecondSignup = () => {
  const { wrapperRef } = useModal();
  const animatedComponents = makeAnimated();
  const { setOpenModal } = useModal();
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

  return { wrapperRef, animatedComponents, setOpenModal, customStyles };
};
