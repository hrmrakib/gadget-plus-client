import { useQuery } from "@tanstack/react-query";

const useGetProductByTitle = (title) => {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: [title],
    queryFn: () =>
      axiosPublic.get(`/api/product-by-title`, {
        params: { title },
      }),
  });
  return {
    product,
    isLoading,
    error,
  };
};

export default useGetProductByTitle;
