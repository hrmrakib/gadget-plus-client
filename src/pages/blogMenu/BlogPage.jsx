import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import FadeLoading from "../../components/loading/FadeLoading";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const {
    isPending,
    error,
    data: blogs,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/blogs");
      return res.data;
    },
  });

  if (isPending) return <FadeLoading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className='w-[96%] mx-auto mt-24'>
      <h2 className='text-3xl text-white text-center pt-10'>Blog Posts</h2>

      <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {blogs?.map((post) => (
          <Link to={`/blog/${post?._id}`} key={post?._id} className='border'>
            <img
              className='w-full h-60'
              src={post?.image}
              width={400}
              height={400}
              alt='post-img'
            />
            <div className='p-5'>
              <h3 className='text-gray-300 text-sm'>{post?.date}</h3>
              <h2 className='text-gray-200 text-lg mt-1'>{post?.title}</h2>
              <p className='text-gray-200 text-base mt-2'>
                {post?.description.slice(0, 130)} ...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
