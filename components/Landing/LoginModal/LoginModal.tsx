import { useModal } from "@/hooks";
import { motion } from "framer-motion";
import useLogin from "./useLogin";
import { ErrorMessage } from "@hookform/error-message";
export const LoginModal = () => {
  const { wrapperRef } = useModal();
  const { register, onSubmit, handleSubmit, errors, isLoading } = useLogin();
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ scale: 0, opacity: 0 }}
      className="h-screen w-screen z-20 absolute top-0 left-0 flex sm:items-center items-start sm:py-0 py-12 justify-center backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        ref={wrapperRef}
        className="p-6 rounded-lg bg-slate-100 flex items-center flex-col justify-center gap-5  w-full max-w-sm shadow-lg"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-center">Log In</h2>
          <p className="text-center">
            Log in to <span className="text-cyan-500 font-bold">start </span>
            your <span className="text-cyan-500 font-bold">Journey</span>
          </p>
        </div>
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold">Username</label>
            <div className="flex flex-col gap-1 relative">
              <input
                {...register("login", {
                  required: "Username field is required",
                  minLength: { value: 3, message: "At least 3 characters" },
                  maxLength: {
                    value: 254,
                    message: "No more than 254 characters",
                  },
                })}
                className={`outline-none p-2 shadow-sm rounded-lg text-cyan-600 ${
                  errors["login"] && "text-red-500"
                }`}
                placeholder="johndoe689"
                type="text"
              />
              <p className="absolute top-full text-red-500 text-sm right-0">
                <ErrorMessage errors={errors} name="login" />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold">Password</label>
            <div className="flex flex-col gap-1 relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: 3,
                  maxLength: 20,
                })}
                type="password"
                className={`outline-none p-2 shadow-sm rounded-lg text-cyan-600 ${
                  errors["password"] && "text-red-500"
                }`}
                placeholder="********"
              />
              <p className="absolute top-full text-red-500 text-sm right-0">
                <ErrorMessage errors={errors} name="password" />
              </p>
            </div>
          </div>
          <button
            disabled={isLoading}
            className="bg-cyan-500 h-10 mt-2 w-full relative font-bold text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            {isLoading ? (
              <div
                className="loader absolute top-1/2 left-0  -translate-y-1/2 w-full h-full"
                id="loader-6"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              "Log In"
            )}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;
