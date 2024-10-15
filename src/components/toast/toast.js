import toast from "react-hot-toast";

export const successToast = (value) => {
  return toast.success(value);
};

export const errorToast = (value) => {
  return toast.error(value);
};
