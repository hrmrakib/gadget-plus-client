import React from "react";
import {
  FaGavel,
  FaUserCircle,
  FaShoppingCart,
  FaCreditCard,
  FaLock,
  FaExclamationTriangle,
  FaBalanceScale,
} from "react-icons/fa";

const termsSections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing or using the TechGadgetry website and services, you agree
        to be bound by these Terms and Conditions. If you do not agree to all
        the terms and conditions, you must not use our website or services.
      </p>
    ),
    icon: <FaGavel className='h-6 w-6 text-blue-500' />,
  },
  {
    id: "account",
    title: "User Accounts",
    content: (
      <>
        <p>
          To access certain features of our website, you may be required to
          create an account. You are responsible for divtaining the
          confidentiality of your account information and for all activities
          that occur under your account. You agree to:
        </p>
        <ul className='list-disc pl-5 mt-2'>
          <li>
            Provide accurate and complete information when creating your account
          </li>
          <li>Update your information to keep it accurate and current</li>
          <li>Notify us immediately of any unauthorized use of your account</li>
        </ul>
      </>
    ),
    icon: <FaUserCircle className='h-6 w-6 text-green-500' />,
  },
  {
    id: "purchases",
    title: "Purchases and Payments",
    content: (
      <>
        <p>
          When making a purchase on our website, you agree to provide current,
          complete, and accurate purchase and account information. You agree to
          promptly update your account and other information so that we can
          complete your transactions and contact you as needed.
        </p>
        <p className='mt-2'>
          We reserve the right to refuse any order you place with us. We may, in
          our sole discretion, limit or cancel quantities purchased per person,
          per household, or per order.
        </p>
      </>
    ),
    icon: <FaShoppingCart className='h-6 w-6 text-yellow-500' />,
  },
  {
    id: "payment",
    title: "Payment Information",
    content: (
      <p>
        All payments are processed securely through our payment service
        providers. We do not store your full credit card information on our
        servers. By submitting your payment information, you authorize us to
        charge your card for the total amount of your purchase.
      </p>
    ),
    icon: <FaCreditCard className='h-6 w-6 text-red-500' />,
  },
  {
    id: "privacy",
    title: "Privacy and Data Protection",
    content: (
      <p>
        Your use of our website and services is also governed by our Privacy
        Policy. Please review our Privacy Policy to understand our practices
        regarding the collection, use, and disclosure of your personal
        information.
      </p>
    ),
    icon: <FaLock className='h-6 w-6 text-purple-500' />,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <p>
        TechGadgetry and its affiliates will not be liable for any indirect,
        incidental, special, consequential, or punitive damages resulting from
        your use of or inability to use our website or services, or from any
        products purchased through our website.
      </p>
    ),
    icon: <FaExclamationTriangle className='h-6 w-6 text-orange-500' />,
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>
        These Terms and Conditions are governed by and construed in accordance
        with the laws of [Your Jurisdiction], without regard to its conflict of
        law principles.
      </p>
    ),
    icon: <FaBalanceScale className='h-6 w-6 text-indigo-500' />,
  },
];

const TableOfContents = () => (
  <nav className='mb-8 p-4 bg-[#080808] rounded-lg'>
    <h2 className='text-lg font-semibold mb-2 text-gray-100 border-b pb-1'>
      Table of Contents
    </h2>
    <ul className='space-y-1'>
      {termsSections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`} className='text-blue-600 hover:underline'>
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const TermsSection = ({ section }) => (
  <section id={section.id} className='mb-8'>
    <h2 className='text-xl font-semibold mb-4 flex items-center'>
      {section.icon}
      <span className='ml-2 text-gray-200'>{section.title}</span>
    </h2>
    <div className='text-gray-300'>{section.content}</div>
  </section>
);

const TermAndCondition = () => {
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
              <FaGavel className='h-8 w-8 text-blue-600 mr-3' />
              <h2 className='text-2xl font-bold text-gray-100'>
                Terms and Conditions
              </h2>
            </div>

            <div className='bg-[#080808] shadow overflow-hidden sm:rounded-lg p-6'>
              <p className='mb-4 text-gray-200'>
                Welcome to TechGadgetry. These Terms and Conditions govern your
                use of our website and services. Please read them carefully
                before using our website or making a purchase.
              </p>

              <p className='mb-4 text-gray-300'>
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <TableOfContents />

              {termsSections.map((section) => (
                <TermsSection key={section.id} section={section} />
              ))}

              <section className='mt-8'>
                <h2 className='text-xl font-semibold mb-4 text-gray-200'>
                  Contact Us
                </h2>
                <p className='text-gray-300'>
                  If you have any questions about these Terms and Conditions,
                  please contact us at:
                </p>
                <p className='mt-2 text-gray-100'>
                  <strong>Email:</strong> legal@techgadgetry.com
                </p>
                <p className='text-gray-100'>
                  <strong>Address:</strong> 123 Gadget Street, Tech City, 12345
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
