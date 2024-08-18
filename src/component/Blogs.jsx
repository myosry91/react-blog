import BlogCard from "./BlogCard";

// eslint-disable-next-line react/prop-types
const Blogs = ({data}) => {
 console.log("data", data);
  return (
    <div>
      <h2 className="text-[20px]">Blogs</h2>
      <div className="flex flex-wrap justify-around my-4 items-center gap-3">
        {data ? (
          // eslint-disable-next-line react/prop-types
          data.map((item, index) => <BlogCard key={index} blog={item} />)
        ) : (
          <p>loading ...</p>
        )}{" "}
      </div>
    </div>
  );
}

export default Blogs