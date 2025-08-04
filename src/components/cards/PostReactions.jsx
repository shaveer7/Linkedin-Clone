const PostReactions = () => {
  return (
    <div className="flex items-center justify-between">
      <a
        href="#"
        className="flex items-center text-sm text-gray-500 hover:underline hover:text-blue-600"
      >
        <span className="flex items-center relative mr-4">
          <img
            src="/likeReact.svg"
            className="object-cover border-2 border-white"
            height="20"
            width="20"
          />
          <img
            src="/supportReact.svg"
            className="absolute left-3.5 border-2 rounded-4xl border-white"
            height="20"
            width="20"
          />
        </span>
        Muhammad Mursil and 37 others
      </a>
      <a
        href="#"
        className="text-sm text-gray-500 hover:underline hover:text-blue-600"
      >
        28 comments
      </a>
    </div>
  );
};

export default PostReactions;
