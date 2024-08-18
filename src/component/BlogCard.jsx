import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col w-[280px] gap-2 border rounded-md px-4 py-4 my-1 shadow-lg shadow-gray-400/20">
      {/* eslint-disable-next-line react/prop-types */}
      <h2 className="text-[15px] font-bold">{blog?.title}</h2>

      {/* <div
        className="text-[12px]"
        dangerouslySetInnerHTML={{
          __html:
            // eslint-disable-next-line react/prop-types
            blog?.content?.substring(0, 150) +
            // eslint-disable-next-line react/prop-types
            (blog?.content?.length > 150 ? "..." : ""),
        }}
      /> */}
      {/* eslint-disable-next-line react/prop-types */}
      <div className="text-[12px] h-[90px]">{blog?.excert}</div>
      <p className="text-sm text-gray-500">
        {/* eslint-disable-next-line react/prop-types */}
        Published on: {new Date(blog?.createdAt).toLocaleDateString()}
      </p>
      {/* eslint-disable-next-line react/prop-types */}
      <Link className="text-blue-500 text-[15px] underline" to={blog?.id}>
        More details ...
      </Link>
    </div>
  );
};

export default BlogCard;
