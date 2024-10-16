import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { FaEye, FaPlus, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

const COLLECTION_TYPE = gql`
  query Collection_Type($collectionType: String!) {
    collectionType(collectionType: $collectionType) {
      _id
      title
      img
      price
      color
      description
      brand
      category
      collectionType
    }
  }
`;

const NewProductCollection = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(COLLECTION_TYPE, {
    variables: { collectionType: "new" },
  });

  if (loading) return <div>loading ....</div>;
  if (error) return <div>{error?.message}</div>;

  return (
    <section className='w-[96%] mx-auto mt-20'>
      <div className='flex flex-col justify-center pl-10 w-full h-60 bg-[url("/trending/common-banner.webp")] *:text-white'>
        <h3 className='font-medium'>Home / collection / new </h3>
        <p className='mt-3 text-xl'>
          A new collection description typically includes details about the
          individual's expertise, experience, and speaking style. It...
        </p>
      </div>

      <h3 className='my-14 text-3xl font-bold text-center text-white'>
        New Collection ({data?.collectionType.length})
      </h3>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {data?.collectionType?.map((product) => (
          <div key={product?._id} className='bg-[#1c1c1c] p-5'>
            <div className='bg-[#262626] flex flex-col items-center justify-center gap-2'>
              <Link to={`/product/${product?._id}`}>
                <img
                  className='w-56 h-64'
                  src={product?.img}
                  width={220}
                  height={350}
                  alt='ultra'
                />
              </Link>
              <button
                onClick={() => dispatch(addToCart(product))}
                className='w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white hover:bg-blue-600 transition duration-50 ease-in-out'
              >
                <FaPlus />
                Add to Cart
              </button>
            </div>

            <h2 className='text-2xl text-white my-2'>{product?.title}</h2>
            <div className='flex items-center gap-1 *:text-orange-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className='text-2xl text-red-700 font-semibold my-2'>$56.00</h3>
            <hr />
            <div className='flex items-center justify-evenly mt-4 gap-5 *:text-blue-700 *:text-lg'>
              <AiOutlineHeart
                onClick={() => dispatch(addToWishlist(product))}
                className='text-lg cursor-pointer'
              />
              <Link to={`/product/${product?._id}`}>
                <FaEye className='text-2xl cursor-pointer' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProductCollection;
