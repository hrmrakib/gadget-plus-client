import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "./useAxiosPublic";

const useGetProductByTitle = (title) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["productTitle", title],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/product-by-title", {
        params: { title },
      });
      return res.data;
    },
    // enabled: !!title,
  });
  return { data, isLoading, error };
};

export default useGetProductByTitle;
