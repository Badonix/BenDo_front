import { LandingNavbar } from "@/components";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="h-screen">
      <LandingNavbar />
      <div className="flex h-full -translate-y-12 flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-3 flex-wrap text-center justify-center">
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl"
          >
            Introducing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [1, 1.2, 1] }}
            transition={{ delay: 3, duration: 0.7 }}
            className="text-5xl text-cyan-500 font-bold"
          >
            BenDo
          </motion.h1>
        </div>
        <div>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
            animate={{ y: 0, opacity: 1 }}
          >
            A Platform to Help You Find{" "}
            <motion.span
              initial={{ y: -50, opacity: 0 }}
              transition={{ delay: 4, duration: 1 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-cyan-500 font-bold"
            >
              Coding Buddies{" "}
            </motion.span>
          </motion.p>
        </div>
        <motion.button
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 50, opacity: 1 }}
          transition={{
            delay: 4.5,
            duration: 1,
            type: "spring",
            stiffness: 300,
          }}
          className="px-4 py-2 rounded-xl text-white text-lg font-bold shadow-md bg-cyan-500 transition-colors hover:bg-cyan-600"
        >
          Get Started
        </motion.button>
      </div>
      <motion.img
        initial={{ x: 500, rotate: 90 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{
          delay: 4.5,
          duration: 1,
        }}
        src="/assets/fat_bird.png"
        className="absolute right-0 bottom-0 -z-10"
      />
      <motion.img
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 4.5,
          duration: 1,
        }}
        src="/assets/landing_frame.png"
        className="sm:block hidden -z-10 absolute left-0 top-1/4 h-1/2"
      />
    </main>
  );
}
