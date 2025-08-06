import { useState } from "react";
import Modal from "../modals/Modal";
import PostProfileModalButton from "../buttons/PostProfileModalButton";

const PostInputBar = () => {
  const [open, setOpen] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);

  const handleStateReset = () => {
    setOpenNew(false);
    setOpen(false);
    setOpenMedia(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center space-x-3 w-full"
      >   
        <img src="/userImg.jpeg" className="h-12 w-12 rounded-full" />
        <div className="flex-1 border border-gray-300 rounded-full px-4 py-3 outline-none hover:bg-[#F3F3F3] flex items-start">
          Start a post
        </div>
      </button>

      <Modal open={open} onClose={handleStateReset}>
        <PostProfileModalButton
          onClose={handleStateReset}
          openNew={openNew}
          setOpenNew={setOpenNew}
          openMedia={openMedia}
          setOpenMedia={setOpenMedia}
          setOpen={setOpen}
        />
      </Modal>
    </>
  );
};

export default PostInputBar;
