import { motion } from "framer-motion";
import { useModal } from "@/hooks";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ProffessionData, SkillsData } from "./skills";
import { useSecondSignup } from "./useSecondSignup";
export const SignupSecondModal = () => {
  const { wrapperRef } = useModal();
  const animatedComponents = makeAnimated();
  const { setOpenModal } = useModal();
  const { customStyles } = useSecondSignup();
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ scale: 0, opacity: 0 }}
        className="h-screen w-screen z-20 absolute top-0 left-0 flex sm:items-center items-start sm:py-0 py-2 justify-center backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          ref={wrapperRef}
          className="relative max-w-md w-screen p-6 rounded-lg bg-slate-100 flex items-center flex-col justify-center gap-5 shadow-lg"
        >
          <div className="flex flex-col gap-2 ">
            <div className="absolute top-5 left-6">
              <p>2/3</p>
            </div>
            <h2 className="text-3xl font-bold text-center">Skills</h2>
            <p className="text-center">
              Tell us about your{" "}
              <span className="text-cyan-500 font-bold"> Skills</span>
            </p>
          </div>
          <form className="flex flex-col sm:gap-4 gap-2 w-full">
            <div>
              <label>Profession</label>
              <Select
                components={animatedComponents}
                options={ProffessionData}
                isMulti
                closeMenuOnSelect={true}
                styles={customStyles}
              />
            </div>
            <div>
              <label>Languages</label>
              <Select
                components={animatedComponents}
                options={SkillsData}
                isMulti
                closeMenuOnSelect={true}
                styles={customStyles}
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpenModal("signup")}
                className="w-full shadow-lg text-cyan-500 font-bold bg-white py-2 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                className="w-full shadow-lg bg-cyan-500 font-bold text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Next
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SignupSecondModal;
