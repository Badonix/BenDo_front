import { Comment, Like, Send } from "@/components";

export const Post = () => {
  return (
    <div className="rounded-2xl bg-white w-full max-w-4xl">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <img
            src="/assets/default.png"
            className="rounded-full object-cover w-12 h-12 shadow-lg border"
          />
          <p className="text-bold">George Miqautadze</p>
        </div>
        <p className="text-cyan-500">5 minutes ago</p>
      </div>
      <hr></hr>
      <div className="p-2 max-h-36 overflow-y-scroll">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos
          debitis accusamus animi optio ducimus atque voluptas nostrum, dolorum
          quo ad, perspiciatis eveniet ipsum quos necessitatibus nam? Enim, hic
          consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores eos debitis accusamus animi optio ducimus atque voluptas
          nostrum, dolorum quo ad, perspiciatis eveniet ipsum quos
          necessitatibus nam? Enim, hic consectetur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolores eos debitis accusamus animi
          optio ducimus atque voluptas nostrum, dolorum quo ad, perspiciatis
          eveniet ipsum quos necessitatibus nam? Enim, hic consectetur.
        </p>
      </div>
      <img
        className="w-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg"
      />
      <div className="flex items-center justify-around py-1 px-2">
        <div className="flex items-center max-w-xs gap-2 py-3 rounded-2xl hover:bg-slate-300 w-full cursor-pointer justify-center transition-all">
          <Like />
          <p>React</p>
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
    </div>
  );
};

export default Post;
