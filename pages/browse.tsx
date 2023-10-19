import { Navbar, Post } from "@/components";

const Browse = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16 browse_body min-h-screen">
        <div className="px-4 py-4 posts-cont flex items-center flex-col gap-10">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
};

export default Browse;
