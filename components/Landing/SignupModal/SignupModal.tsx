import { motion } from "framer-motion";
import { useModal } from "@/hooks";
import { useSignupModal } from "./useSignupModal";
export const SignupModal = ({ setSignupData }: any) => {
  const { wrapperRef } = useModal();
  const {
    passwordValue,
    handleSubmit,
    onSubmit,
    register,
    ErrorMessage,
    errors,
  } = useSignupModal(setSignupData);
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
          transition={{ delay: 0.3, duration: 0.2 }}
          ref={wrapperRef}
          className="p-6 rounded-lg bg-slate-100 flex items-center flex-col justify-center gap-5 shadow-lg"
        >
          <div className="flex flex-col gap-2 relative">
            <div className="absolute top-1 left-1">
              <p>1/3</p>
            </div>
            <h2 className="text-3xl font-bold text-center">Sign Up</h2>
            <p className="text-center">
              Sign Up to <span className="text-cyan-500 font-bold">start </span>
              interacting with{" "}
              <span className="text-cyan-500 font-bold">People</span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:gap-4 gap-2 w-full"
          >
            <div className="flex flex-col gap-1 relative">
              <label className="text-lg font-bold">First Name</label>
              <input
                className={`outline-none p-2 shadow-sm rounded-lg text-cyan-600 ${
                  errors["first_name"] && "text-red-500"
                }`}
                placeholder={"John"}
                type="text"
                {...register("first_name", {
                  required: "This field is required",
                  minLength: { value: 2, message: "At least 2 symbols" },
                  maxLength: { value: 15, message: "Max 15 symbols" },
                })}
              />
              <p className="absolute top-full text-red-500 text-sm right-0">
                <ErrorMessage errors={errors} name="first_name" />
              </p>
            </div>
            <div className="flex flex-col gap-1 relative">
              <label className="text-lg font-bold">Last Name</label>
              <input
                className={`outline-none p-2 shadow-sm rounded-lg text-cyan-600 ${
                  errors["last_name"] && "text-red-500"
                }`}
                placeholder={"Doe"}
                type="text"
                {...register("last_name", {
                  required: "This field is required",
                  minLength: { value: 2, message: "At least 2 symbols" },
                  maxLength: { value: 20, message: "Max 20 symbols" },
                })}
              />
              <p className="absolute top-full text-red-500 text-sm right-0">
                <ErrorMessage errors={errors} name="last_name" />
              </p>
            </div>
            <div className="flex flex-col gap-1 relative">
              <label className="text-lg font-bold">Username</label>
              <input
                className={`outline-none p-2 shadow-sm rounded-lg text-cyan-600 ${
                  errors["username"] && "text-red-500"
                }`}
                placeholder={"johndoe689"}
                type="text"
                {...register("username", {
                  required: "This field is required",
                  minLength: { value: 3, message: "At least 3 symbols" },
                  maxLength: { value: 20, message: "Max 20 symbols" },
                })}
              />
              <p className="absolute top-full text-red-500 text-sm right-0">
                <ErrorMessage errors={errors} name="username" />
              </p>
            </div>
            <div className="flex flex-col gap-1 relative">
              <label className="text-lg font-bold">Email</label>
              <input
                className={`outline-none p-2 shadow-sm rounded-lg text-cyan-600 ${
                  errors["email"] && "text-red-500"
                }`}
                placeholder={"johndoe689@gmail.com"}
                type="text"
                {...register("email", {
                  required: "This field is required",
                  minLength: { value: 5, message: "At least 5 symbols" },
                  maxLength: { value: 30, message: "Max 30 symbols" },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g,
                    message: "Invalid email",
                  },
                })}
              />
              <p className="absolute top-full text-red-500 text-sm right-0">
                <ErrorMessage errors={errors} name="email" />
              </p>
            </div>
            <div className="flex flex-col gap-1 relative">
              <label className="text-lg font-bold">Password</label>
              <input
                type="password"
                className={`outline-none p-2 shadow-sm rounded-lg text-cyan-600 ${
                  errors["password"] && "text-red-500"
                }`}
                placeholder={"*********"}
                {...register("password", {
                  required: "This field is required",
                  minLength: { value: 5, message: "At least 5 symbols" },
                  maxLength: { value: 20, message: "Max 20 symbols" },
                })}
              />
              <p className="absolute top-full text-red-500 text-sm right-0">
                <ErrorMessage errors={errors} name="password" />
              </p>
            </div>{" "}
            <div className="flex flex-col gap-1 relative">
              <label className="text-lg font-bold">Confirm Password</label>
              <input
                type="password"
                className={`outline-none p-2 shadow-sm rounded-lg text-cyan-600 ${
                  errors["password_confirmation"] && "text-red-500"
                }`}
                placeholder={"********"}
                {...register("password_confirmation", {
                  required: "This field is required",
                  minLength: { value: 5, message: "At least 5 symbols" },
                  maxLength: { value: 20, message: "Max 20 symbols" },
                  validate: (value) =>
                    value != passwordValue ? "Passwords do not match" : true,
                })}
              />
              <p className="absolute top-full text-red-500 text-sm right-0">
                <ErrorMessage errors={errors} name="password_confirmation" />
              </p>
            </div>
            <button
              type="submit"
              className="bg-cyan-500 mt-2 font-bold text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Next
            </button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SignupModal;
