import { useParams } from "react-router-dom";
import FadeLoading from "../../components/loading/FadeLoading";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const BlogDetail = () => {
  const { id } = useParams();

  const {
    isPending,
    error,
    data: blog,
  } = useQuery({
    queryKey: ["blogDetail"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/blog", {
        params: { id },
      });
      return res.data;
    },
  });

  if (isPending) return <FadeLoading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(blog && blog);

  return (
    <div className='w-3/4 lg:w-1/2 mx-auto mt-24 pt-10 bg-[#00000090]'>
      <div className='mt-6'>
        <img
          src={blog?.image}
          alt={blog?.title}
          className='w-full h-96 object-cover rounded-md'
        />
      </div>
      <div>
        <h3 className='text-lg text-white mt-5'>{blog?.date}</h3>
        <h2 className='text-3xl text-white'>{blog?.title}</h2>

        <p className='mt-6 text-lg text-white'>{blog?.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
