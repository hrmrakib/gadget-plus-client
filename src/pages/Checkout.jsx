import React, { useState } from "react";
import { useSelector } from "react-redux";
import useTotalCost from "../hooks/useTotalCost";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const cartProducts = useSelector((state) => state.cart.carts);
  const { totalCost } = useTotalCost();
  const { id } = useParams();

  let product;

  if (id) {
    product = cartProducts.find((product) => product._id === id);
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "credit-card",
  });

  const [selectedCard, setSelectedCard] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData);
    alert("Checkout completed! (This is a demo)");
  };

  const taxes = ((totalCost / 100) * 1.15).toFixed(2);

  console.log(id, product);

  return (
    <div className='min-h-screen bg-[#080808] py-12 my-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-extrabold text-gray-100 mb-8 text-center'>
          Checkout
        </h1>
        <div className='bg-[#080808] shadow overflow-hidden sm:rounded-lg'>
          <div className='flex flex-col lg:flex-row'>
            {/* Left side - User Information Form */}
            <div className='lg:w-2/3 p-6'>
              <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium text-white'
                    >
                      First name
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      id='firstName'
                      required
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent'
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder='First name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-medium text-white'
                    >
                      Last name
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      id='lastName'
                      required
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent'
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder='Last name'
                    />
                  </div>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-white'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      required
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent'
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder='Email'
                    />
                  </div>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='address'
                      className='block text-sm font-medium text-white'
                    >
                      Address
                    </label>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      required
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent'
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder='Address'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='city'
                      className='block text-sm font-medium text-white'
                    >
                      City
                    </label>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      required
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent'
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder='City'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='state'
                      className='block text-sm font-medium text-white'
                    >
                      State / Province
                    </label>
                    <input
                      type='text'
                      name='state'
                      id='state'
                      required
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent'
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder='State / Province'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='zipCode'
                      className='block text-sm font-medium text-white'
                    >
                      ZIP / Postal code
                    </label>
                    <input
                      type='text'
                      name='zipCode'
                      id='zipCode'
                      required
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent'
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder='ZIP / Postal code'
                    />
                  </div>
                </div>

                {/* product payment */}
                <div className='mt-6 border-t border-blue-600 pt-4'>
                  <label className='block text-sm font-medium text-white mb-2'>
                    Payment Method
                  </label>
                  <div className='space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
                    <div className='flex items-center'>
                      <input
                        id='credit-card'
                        name='paymentMethod'
                        type='radio'
                        checked={formData.paymentMethod === "credit-card"}
                        onChange={handleInputChange}
                        onClick={() => setSelectedCard("Credit")}
                        value='credit-card'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                      />
                      <label
                        htmlFor='credit-card'
                        className='ml-3 block text-sm font-medium text-white'
                      >
                        Credit Card
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='paypal'
                        name='paymentMethod'
                        type='radio'
                        checked={formData.paymentMethod === "paypal"}
                        onChange={handleInputChange}
                        value='paypal'
                        onClick={() => setSelectedCard("Paypal")}
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                      />
                      <label
                        htmlFor='paypal'
                        className='ml-3 block text-sm font-medium text-white'
                      >
                        PayPal
                      </label>
                    </div>
                  </div>

                  {/* card input form */}
                  <div className='my-5'>
                    <input
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent'
                      type='text'
                      placeholder={`${selectedCard} card number`}
                    />

                    <div className='my-6 flex items-center gap-5'>
                      <input
                        className='block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent'
                        type='text'
                        placeholder='Expiry date (DD/MM/YYYY)'
                      />
                      <input
                        className='block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white bg-transparent'
                        type='text'
                        placeholder='Security code'
                      />
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <button
                    type='submit'
                    className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Complete Purchase
                  </button>
                </div>
              </form>
            </div>

            {/* Right side - Product Information */}
            <div className='lg:w-1/3 bg-[#080808] p-6 border-t lg:border-t-0 lg:border-l border-gray-200'>
              <h2 className='text-lg font-medium text-gray-100 mb-4'>
                Order Summary
              </h2>
              {id ? (
                <div>
                  <div className='flex items-center mb-4'>
                    <div className='relative'>
                      <img
                        src={product?.img}
                        alt='Product'
                        className='w-20 h-20 object-cover rounded'
                      />
                      <p className='absolute -top-3 -right-2 p-2 w-max h-max text-sm font-medium text-gray-100 border bg-slate-900 opacity-80 rounded-full'>
                        {product?.orderCount}
                      </p>
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-sm font-medium text-gray-200'>
                        {product?.title}
                      </h3>
                      <p className='mt-1 text-sm text-gray-100'>
                        High-tech device for modern living
                      </p>
                    </div>
                  </div>
                  <div className='border-t border-gray-200 pt-4 mt-4'>
                    <div className='flex justify-between items-center mb-2'>
                      <p className='text-sm text-gray-100'>Subtotal</p>
                      <p className='text-sm font-medium text-gray-200'>
                        ${product?.price}
                      </p>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                      <p className='text-sm text-gray-100'>Shipping</p>
                      <p className='text-sm font-medium text-gray-200'>$9.99</p>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                      <p className='text-sm text-gray-100'>Taxes</p>
                      <p className='text-sm font-medium text-gray-200'>
                        $12.00
                      </p>
                    </div>
                    <div className='flex justify-between items-center mt-4 pt-4 border-t border-gray-200'>
                      <p className='text-base font-medium text-gray-300'>
                        Total
                      </p>
                      <p className='text-base font-medium text-gray-300'>
                        ${Number(product?.price) + 9.99 + 12.0}
                      </p>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <div className='flex items-center'>
                      {/* <Truck className='h-5 w-5 text-green-500' /> */}
                      <p className='ml-2 text-sm text-gray-300'>
                        Free shipping on orders over $100
                      </p>
                    </div>
                    <div className='flex items-center mt-2'>
                      {/* <CreditCard className='h-5 w-5 text-green-500' /> */}
                      <p className='ml-2 text-sm text-gray-300'>
                        Secure payment processing
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    {cartProducts?.map((product) => (
                      <div className='flex items-center mb-4'>
                        <div className='relative'>
                          <img
                            src={product?.img}
                            alt='Product'
                            className='w-20 h-20 object-cover rounded'
                          />
                          <p className='absolute -top-3 -right-2 p-2 w-max h-max text-sm font-medium text-gray-100 border bg-slate-900 opacity-80 rounded-full'>
                            {product?.orderCount}
                          </p>
                        </div>
                        <div className='ml-4'>
                          <h3 className='text-sm font-medium text-gray-200'>
                            {product?.title}
                          </h3>
                          <p className='mt-1 text-sm text-gray-100'>
                            High-tech device for modern living
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className='border-t border-gray-200 pt-4 mt-4'>
                      <div className='flex justify-between items-center mb-2'>
                        <p className='text-sm text-gray-100'>Subtotal</p>
                        <p className='text-sm font-medium text-gray-200'>
                          ${totalCost}
                        </p>
                      </div>
                      <div className='flex justify-between items-center mb-2'>
                        <p className='text-sm text-gray-100'>Shipping</p>
                        <p className='text-sm font-medium text-gray-200'>
                          ${totalCost >= 1000 ? 0 : 9.99}
                        </p>
                      </div>
                      <div className='flex justify-between items-center mb-2'>
                        <p className='text-sm text-gray-100'>Taxes</p>
                        <p className='text-sm font-medium text-gray-200'>
                          ${taxes}
                        </p>
                      </div>
                      <div className='flex justify-between items-center mt-4 pt-4 border-t border-gray-200'>
                        <p className='text-base font-medium text-gray-300'>
                          Total
                        </p>
                        <p className='text-base font-medium text-gray-300'>
                          $
                          {(
                            totalCost +
                            (totalCost >= 1000 ? 0 : 9.99) +
                            (totalCost / 100) * 1.15
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className='mt-6'>
                      <div className='flex items-center'>
                        {/* <Truck className='h-5 w-5 text-green-500' /> */}
                        <p className='ml-2 text-sm text-gray-300'>
                          Free shipping on orders over $1000
                        </p>
                      </div>
                      <div className='flex items-center mt-2'>
                        {/* <CreditCard className='h-5 w-5 text-green-500' /> */}
                        <p className='ml-2 text-sm text-gray-300'>
                          Secure payment processing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
