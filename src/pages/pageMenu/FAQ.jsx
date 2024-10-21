import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders. Expedited shipping options are available at checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Please note that some items, such as earphones, may have different return policies for hygiene reasons.",
  },
  {
    question: "Do you offer warranty on your products?",
    answer:
      "Yes, all our products come with a standard 1-year manufacturer's warranty. Extended warranty options are available for purchase on select items.",
  },
  {
    question: "Can I cancel or modify my order after it's been placed?",
    answer:
      "You can cancel or modify your order within 1 hour of placing it. After that, we begin processing orders and cannot guarantee changes. Please contact our customer support team as soon as possible if you need to make changes.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination. You can see the exact shipping cost during the checkout process.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this number on our website or the carrier's website to track your package.",
  },
  {
    question: "Are your products new or refurbished?",
    answer:
      "Unless explicitly stated otherwise, all products sold on our website are brand new and come in original packaging. We do offer some certified refurbished products, which are clearly labeled as such.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. For certain regions, we also offer payment options like Google Pay and Amazon Pay.",
  },
];

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-[#080808]'>
      <button
        className='flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className='font-medium text-indigo-400'>{item.question}</span>
        {isOpen ? (
          <FaChevronUp className='h-5 w-5 text-gray-400' />
        ) : (
          <FaChevronDown className='h-5 w-5 text-gray-400' />
        )}
      </button>
      {isOpen && (
        <div className='pb-4 px-6'>
          <p className='text-gray-200'>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className='min-h-screen bg-[#080808] flex flex-col'>
      <div className='bg-[#080808] shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-100'>Gadget Plus</h1>
        </div>
      </div>

      <div className='flex-grow'>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='flex items-center mb-6'>
              <FaQuestionCircle className='h-8 w-8 text-indigo-600 mr-3' />
              <h2 className='text-2xl font-bold text-gray-100'>
                Frequently Asked Questions
              </h2>
            </div>

            <div className='bg-[#080808] shadow overflow-hidden sm:rounded-lg'>
              {faqData.map((item, index) => (
                <FAQItem key={index} item={item} />
              ))}
            </div>

            <div className='mt-8 bg-[#080808] border border-indigo-200 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-indigo-800 mb-2'>
                Still have questions?
              </h3>
              <p className='text-indigo-700 mb-4'>
                If you couldn't find the answer you were looking for, please
                don't hesitate to reach out to our customer support team.
              </p>
              <Link
                to='/contact'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
