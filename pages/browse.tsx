import { Navbar, Post } from "@/components";
import { useEffect, useState } from "react";

const Browse = () => {
  const [posts, setPosts] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    setTimeout(() => {
      setPosts((prev) => [6, ...prev]);
    }, 3000);
  }, []);
  return (
    <>
      <Navbar />
      <div className="mt-16 browse_body min-h-screen">
        <div className="px-4 py-4 posts-cont flex items-center flex-col gap-10">
          {posts?.map((el, i) => (
            <Post key={i} num={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Browse;
