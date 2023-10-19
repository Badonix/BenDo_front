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
      <div className="p-2">
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
      <img src="/assets/dots.webp" />
      <div className="flex items-center justify-around">
        <div>Like</div>
        <div>Message</div>
      </div>
    </div>
  );
};

export default Post;
