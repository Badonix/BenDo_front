import { motion } from "framer-motion";

export const Choose = () => {
  return (
    <section className="text-center w-screen h-screen md:flex-row flex-col flex">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: "300" }}
        className="flex-col flex items-center justify-center w-full h-full bg-cyan-400 px-3 gap-8"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-white">Match</h2>
          <p className="text-center w-full max-w-2xl text-white">
            It's like a lucky dip for developers! Spin the wheel, and meet a
            fellow coder who's into the same stuff you are. It's a fun way to
            make unexpected connections!
          </p>
        </div>
        <button className="text-xl px-3 py-1 rounded-2xl border border-black">
          Start
        </button>
      </motion.div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.8,
          duration: 1,
          type: "spring",
          stiffness: "300",
        }}
        className="flex-col w-full h-full bg-blue-500 flex items-center justify-center px-3"
      >
        <h2 className="text-3xl text-white">Browse</h2>
        <p>bla bla bla bla</p>
        <button className="text-xl px-3 py-1 rounded-2xl border border-black">
          Start
        </button>
      </motion.div>
    </section>
  );
};

export default Choose;
