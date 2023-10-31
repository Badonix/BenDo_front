import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import makeAnimated from "react-select/animated";

export const useMakePost = () => {
  const [preview, setPreview] = useState<string | null>();
  const { register, control, setValue } = useForm();
  const { image } = useWatch({ control });
  const animatedComponents = makeAnimated();
  useEffect(() => {
    if (image) {
      image[0] ? setPreview(URL.createObjectURL(image[0])) : setPreview(null);
    }
  }, [image]);

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
  return { register, setValue, preview, customStyles, animatedComponents };
};
