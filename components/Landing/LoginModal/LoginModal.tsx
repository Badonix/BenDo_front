import { useModal } from "@/hooks";
import { motion } from "framer-motion";
export const LoginModal = () => {
  const { wrapperRef } = useModal();
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
        className="p-6 rounded-lg bg-slate-100 flex items-center flex-col justify-center gap-5 shadow-lg"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-center">Log In</h2>
          <p className="text-center">
            Log in to <span className="text-cyan-500 font-bold">start </span>
            your <span className="text-cyan-500 font-bold">Journey</span>
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold">Username</label>
            <input
              className="outline-none p-2 shadow-sm rounded-lg text-cyan-600"
              placeholder="johndoe689"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold">Password</label>
            <input
              type="password"
              className="outline-none p-2 shadow-sm rounded-lg text-cyan-600"
              placeholder="********"
            />
          </div>
          <button className="bg-cyan-500 font-bold text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors">
            Log in
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;
