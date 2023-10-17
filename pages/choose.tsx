import { motion } from "framer-motion";

export const Choose = () => {
  return (
    <section className="text-center w-screen h-screen md:flex-row flex-col flex">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: "300" }}
        className="relative left-choose flex-col flex items-center justify-center shadow-xl border border-zinc-300 w-full h-full bg-cyan-400 px-3 gap-8"
      >
        <img
          src="/assets/fat_bird.png"
          className="hidden lg:block -z-10  bird bird-left absolute bottom-0 left-0"
        />
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-3xl text-white">MATCH</h2>
          <p className="text-center w-full max-w-2xl text-white">
            It's like a lucky dip for developers! Spin the wheel, and meet a
            fellow coder who's into the same stuff you are. It's a fun way to
            make unexpected connections!
          </p>
        </motion.div>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2 }}
          className="md:text-4xl text-2xl px-9 py-2 rounded-2xl text-cyan-400 bg-white shadow-lg"
        >
          Start
        </motion.button>
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
        className="relative right-choose flex-col flex items-center justify-center shadow-xl border border-zinc-300 w-full h-full bg-blue-500 px-3 gap-8"
      >
        <img
          src="/assets/fat_bird.png"
          className="hidden lg:block -z-10  bird bird-right absolute bottom-0 right-0"
        />
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
          className="flex flex-col gap-2 px-10"
        >
          <h2 className="text-3xl text-white">BROWSE</h2>
          <p className="text-center w-full max-w-2xl text-white">
            Explore a world of developers at your fingertips. Just like flipping
            through a magazine, scroll through profiles, discover new faces, and
            connect with your favorites effortlessly.
          </p>
        </motion.div>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.5 }}
          className="md:text-4xl text-2xl text-cyan-800 px-9 py-2 rounded-2xl bg-white shadow-lg"
        >
          Start
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Choose;
