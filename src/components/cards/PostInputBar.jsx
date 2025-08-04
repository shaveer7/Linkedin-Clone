import { useState } from "react";
import Modal from "../modals/Modal";
import PostProfileModalButton from "../buttons/PostProfileModalButton";
const PostInputBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center space-x-3 w-full"
      >
        <img src="/userImg.jpeg" className="h-12 w-12 rounded-full" />
        <button className="flex-1 border border-gray-300 rounded-full px-4 py-3 outline-none hover:bg-[#F3F3F3] flex items-start">
          Start a post
        </button>
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <PostProfileModalButton open={open} onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default PostInputBar;
