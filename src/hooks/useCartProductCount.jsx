import { useSelector } from "react-redux";

const useCartProductCount = () => {
  const cartProducts = useSelector((state) => state.cart.carts);

  // cart product count
  const cartProductCount = cartProducts.reduce((total, product) => {
    return total + product?.orderCount;
  }, 0);

  return { cartProductCount };
};

export default useCartProductCount;
