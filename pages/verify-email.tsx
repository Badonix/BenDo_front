import { motion } from "framer-motion";
import Link from "next/link";
export const VerifyEmail = () => {
  return (
    <div className="w-full h-screen bg-cyan-200 flex items-center justify-center px-2">
      <Link href="/">
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            type: "spring",
            stiffness: "300",
          }}
          className="absolute top-3 left-3 bg-cyan-500 px-3 py-1 text-lg rounded-lg cursor-pointer shadow-lg text-white"
        >
          Home
        </motion.div>
      </Link>
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: "300" }}
        className="bg-white shadow-lg rounded-lg w-full gap-4 max-w-xl flex items-center justify-center flex-col py-8 px-1"
      >
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-2xl">Check Email!</h2>
          <p className="text-gray-600">
            We have sent you an email verification letter
          </p>
        </div>
        <motion.img
          animate={{ scale: 1, y: 0 }}
          initial={{ scale: 0, y: 100 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: "300",
            delay: 0.3,
          }}
          src="/assets/send.gif"
          className="h-20"
        />
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
