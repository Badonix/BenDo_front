import { motion } from "framer-motion";
import Link from "next/link";
const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 300 }}
      className="z-10 fixed top-0 flex translate-y-7 items-center justify-between px-3 py-3 bg-navbar-pattern w-full bg-cyan-500 shadow-lg"
    >
      <motion.div
        initial={{ x: -200, rotate: 90 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          type: "spring",
          stiffness: 300,
        }}
        className="flex items-center gap-3 text-2xl "
      >
        <img src="/assets/fat_bird.png" className="w-10" />
        <p className="font-bold text-white">BenDo</p>
      </motion.div>
      <div className="flex items-center gap-4">
        <Link href="/choose">
          <motion.button
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.6,
              duration: 1,
              type: "spring",
              stiffness: 300,
            }}
            className="transition-colors px-4 py-1 rounded-xl text-white text-lg font-bold border-2 border-white bg-transparent hover:bg-white hover:text-cyan-500"
          >
            Choose
          </motion.button>
        </Link>
        <Link href="/">
          <motion.button
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.6,
              duration: 1,
              type: "spring",
              stiffness: 300,
            }}
            className="transition-colors px-4 py-1 rounded-xl text-white text-lg font-bold border-2 border-white bg-transparent hover:bg-white hover:text-cyan-500"
          >
            Log out
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
