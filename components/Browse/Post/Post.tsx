import { Comment, ExpandableText, Like, Send } from "@/components";
import { Emotions } from "@/components/Shared/Emotions";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export const Post = ({ num }: { num: number }) => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos
  debitis accusamus animi optio ducimus atque voluptas nostrum, dolorum
  quo ad, perspiciatis eveniet ipsum quos necessitatibus nam? Enim, hic
  consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Dolores eos debitis accusamus animi optio ducimus atque voluptas
  nostrum, dolorum quo ad, perspiciatis eveniet ipsum quos
  necessitatibus nam? Enim, hic consectetur. Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Dolores eos debitis accusamus animi
  optio ducimus atque voluptas nostrum, dolorum quo ad, perspiciatis
  eveniet ipsum quos necessitatibus nam? Enim, hic consectetur.`;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="rounded-2xl bg-white w-full max-w-4xl"
    >
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <img
            src="/assets/default.png"
            className="rounded-full object-cover w-12 h-12 shadow-lg border"
          />
          <p className="text-bold">George Miqautadze</p>
        </div>
        <p className="text-cyan-500">{num} minutes ago</p>
      </div>
      <hr></hr>
      <div className="p-2">
        <ExpandableText maxChars={300} text={text} />
      </div>
      <img
        className="w-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg"
      />
      <div className="flex items-center justify-around py-1 px-2">
        <div className="relative w-full">
          <div className="min-w-full">
            {isHovered && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full h-6 absolute -top-5"
              ></div>
            )}
            <AnimatePresence>
              {isHovered && (
                <Emotions
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </AnimatePresence>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative flex items-center max-w-xs gap-2 py-3 rounded-2xl hover:bg-slate-300 w-full cursor-pointer justify-center transition-all"
            >
              <Like />
              <p>React</p>
            </div>
          </div>
        </div>
        <div className="flex items-center max-w-xs gap-2 py-3 rounded-2xl hover:bg-slate-300 w-full cursor-pointer justify-center transition-all">
          <Comment />
          <p>Comment</p>
        </div>
        <div className="flex items-center max-w-xs gap-2 py-3 rounded-2xl hover:bg-slate-300 w-full cursor-pointer justify-center transition-all">
          <Send />
          <p>Message</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
