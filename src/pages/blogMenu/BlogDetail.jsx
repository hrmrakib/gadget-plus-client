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

  return <div>BlogDetail, {id}</div>;
};

export default BlogDetail;
