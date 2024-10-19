import axios from "axios";

export const axiosPublic = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://gadget-server-alpha.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
