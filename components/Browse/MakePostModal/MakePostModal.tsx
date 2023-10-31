import { useModal } from "@/hooks";
import { motion } from "framer-motion";
import { useMakePost } from "./useMakePost";
import Select from "react-select";
import { ProffessionData } from "./profession";
export const MakePostModal = () => {
  const { wrapperRef } = useModal();
  const { register, preview, customStyles, animatedComponents, setValue } =
    useMakePost();
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ scale: 0, opacity: 0 }}
      className="h-full fixed w-screen z-20 top-0 left-0 flex sm:items-center items-start sm:py-0 py-12 justify-center backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        ref={wrapperRef}
        className="p-6 rounded-lg md:-mt-24 bg-slate-100 fixed flex items-center flex-col justify-center gap-5  w-full max-w-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold">Create Post</h2>
        <form className="w-full">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="So I'm looking for..."
            {...register("content")}
            className="w-full resize-x-none outline-none shadow-lg p-2 rounded-md max-h-40"
          ></textarea>
          <label htmlFor="image" className="w-full ">
            <div className="w-full rounded-md shadow-lg text-xl text-center text-white  bg-cyan-500 py-2 hover:bg-cyan-600 cursor-pointer transition-all">
              {!preview ? "Choose Image" : "Choose Another"}
            </div>
          </label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            className="hidden"
            id="image"
            {...register("image")}
          />
          {preview && (
            <img
              className="mt-4 rounded-md shadow-lg w-full max-h-60 object-cover"
              src={preview}
            />
          )}
          <div className="mt-4">
            <label>Who is this post for?</label>
            <Select
              components={animatedComponents}
              options={ProffessionData}
              isMulti
              closeMenuOnSelect={true}
              styles={customStyles}
              maxMenuHeight={150}
              onChange={(e) => {
                let assembled: string[] = [];
                e.forEach((el: any) => assembled.push(el.value));
                setValue("audience", assembled);
              }}
            />
            <input
              type="hidden"
              {...register("audience", {
                required: "Choose your profession",
              })}
            />
          </div>
          <div className="w-full flex justify-end mt-4">
            <button className="text-lg text-white bg-cyan-500 rounded-md shadow-lg px-4 py-2 hover:bg-cyan-600 transition-all">
              Add
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default MakePostModal;
