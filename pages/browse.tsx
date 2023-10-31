import { MakePostModal, Navbar, Post } from "@/components";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModalContext } from "@/context";
const Browse = () => {
  const [posts, setPosts] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    setTimeout(() => {
      setPosts((prev) => [6, ...prev]);
    }, 3000);
  }, []);
  const { setOpenModal, openModal } = useContext(ModalContext);
  return (
    <>
      <Navbar />
      <AnimatePresence>
        {openModal === "make_post" && <MakePostModal />}
      </AnimatePresence>
      <div className="mt-16 browse_body min-h-screen">
        <div className="w-screen flex items-center justify-center flex-col px-4 ">
          <motion.div
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            className="w-full max-w-4xl mt-5"
          >
            <button
              onClick={() => setOpenModal("make_post")}
              className="px-2 py-1 bg-cyan-500 text-white rounded-md font-bold hover:bg-cyan-600"
            >
              Make post
            </button>
          </motion.div>
        </div>
        <div className="px-4 mt-4 posts-cont flex items-center flex-col gap-10">
          {posts?.map((el, i) => (
            <Post key={i} num={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Browse;
