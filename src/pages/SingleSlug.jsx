import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleSlug = () => {
  const { slug } = useParams();
  const navigate = useNavigate(); // استخدم useNavigate للعودة للصفحة السابقة
  const [blog, setBlog] = useState();

  console.log("blog", blog);

  const fetchData = useCallback(async () => {
    const response = await fetch("http://localhost:3001/posts/" + slug);
    const json = await response.json();
    setBlog(json);
  }, [slug]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-full">
      <div className="bg-blue-400 h-14" />
      <div className="w-full mx-2 md:mx-20 flex flex-col gap-1 mt-5">
        <h1 className="w-full">{blog?.title}</h1>
        <p className="text-sm text-gray-500">
          Published on: {new Date(blog?.createdAt).toLocaleDateString()}
        </p>
        <div
          className="text-[15px] w-[90%] md:w-[70%] mt-5 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: blog?.content,
          }}
        />
        <div>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-500 underline my-5"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleSlug;
