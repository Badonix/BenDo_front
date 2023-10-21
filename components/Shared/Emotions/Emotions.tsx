import { motion } from "framer-motion";
export const Emotions = ({ onMouseEnter, onMouseLeave }: any) => {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      exit={{ y: 25, opacity: 0 }}
      className="flex items-center rounded-2xl shadow-lg text-white px-2 absolute bg-cyan-500 -top-18 py-2 gap-1"
    >
      <div>
        <div className="reaction">
          <img
            src="/assets/like.png"
            className="h-12 hover:scale-105 transition-all cursor-pointer rounded-full shadow-md"
          />
          <p className="reaction_text">Like</p>
        </div>
      </div>
      <div>
        <div className="reaction">
          <img
            src="/assets/heart.png"
            className="h-12 hover:scale-105 transition-all cursor-pointer rounded-full shadow-md"
          />
          <p className="reaction_text">Love</p>
        </div>
      </div>
      <div>
        <div className="reaction">
          <img
            src="/assets/happy.png"
            className="h-12 hover:scale-105 transition-all cursor-pointer rounded-full shadow-md"
          />
          <p className="reaction_text">Haha</p>
        </div>
      </div>
      <div>
        <div className="reaction">
          <img
            src="/assets/cat_reaction.png"
            className="h-12 hover:scale-105 transition-all cursor-pointer rounded-full shadow-md"
          />
          <p className="reaction_text">Gato</p>
        </div>
      </div>
      <div>
        <div className="reaction">
          <img
            src="/assets/bird_reaction.png"
            className="h-12 hover:scale-105 transition-all cursor-pointer rounded-full shadow-md"
          />
          <p className="reaction_text">Bendo</p>
        </div>
      </div>

      <div>
        <div className="reaction">
          <img
            src="/assets/angry.png"
            className="h-12 hover:scale-105 transition-all cursor-pointer rounded-full shadow-md"
          />
          <p className="reaction_text">Angry</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Emotions;
