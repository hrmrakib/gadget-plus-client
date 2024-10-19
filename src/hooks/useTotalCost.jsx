import { useSelector } from "react-redux";

const useTotalCost = () => {
  const costs = useSelector((state) => state.cart.carts);

  const totalCost = costs.reduce((total, product) => {
    return total + product?.orderCount * product?.price;
  }, 0);

  return { totalCost };
};

export default useTotalCost;
