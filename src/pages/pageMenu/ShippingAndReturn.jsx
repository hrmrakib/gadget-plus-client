import React from "react";
import {
  FaTruck,
  FaExchangeAlt,
  FaBoxOpen,
  FaGlobe,
  FaMoneyBillWave,
  FaQuestionCircle,
  FaShippingFast,
} from "react-icons/fa";

const shippingPolicySections = [
  {
    id: "domestic-shipping",
    title: "Domestic Shipping",
    content: (
      <>
        <p>
          We offer free standard shipping on all domestic orders over $50. For
          orders under $50, a flat rate of $5.99 applies.
        </p>
        <ul className='list-disc pl-5 mt-2'>
          <li>
            Standard Shipping (3-5 business days): Free for orders over $50,
            otherwise $5.99
          </li>
          <li>Express Shipping (1-2 business days): $14.99</li>
          <li>Next Day Shipping (1 business day): $24.99</li>
        </ul>
      </>
    ),
    icon: <FaTruck className='h-6 w-6 text-blue-500' />,
  },
  {
    id: "international-shipping",
    title: "International Shipping",
    content: (
      <>
        <p>
          We ship to most countries worldwide. International shipping rates are
          calculated based on the destination country, package weight, and
          dimensions.
        </p>
        <ul className='list-disc pl-5 mt-2'>
          <li>
            Standard International (7-14 business days): Rates start at $19.99
          </li>
          <li>
            Express International (3-5 business days): Rates start at $39.99
          </li>
        </ul>
        <p className='mt-2'>
          Please note that international orders may be subject to import duties
          and taxes, which are the responsibility of the recipient.
        </p>
      </>
    ),
    icon: <FaGlobe className='h-6 w-6 text-green-500' />,
  },
  {
    id: "order-tracking",
    title: "Order Tracking",
    content: (
      <p>
        Once your order has been shipped, you will receive a confirmation email
        with a tracking number. You can use this number to track your package on
        our website or directly through the carrier's website.
      </p>
    ),
    icon: <FaShippingFast className='h-6 w-6 text-purple-500' />,
  },
];

const returnPolicySections = [
  {
    id: "return-policy",
    title: "Return Policy",
    content: (
      <>
        <p>
          We offer a 30-day return policy for most items. To be eligible for a
          return, your item must be unused and in the same condition that you
          received it. It must also be in the original packaging.
        </p>
        <p className='mt-2'>
          Please note that some items are non-returnable for hygienic reasons,
          such as earphones and certain wearable devices. These will be clearly
          marked on the product page.
        </p>
      </>
    ),
    icon: <FaExchangeAlt className='h-6 w-6 text-yellow-500' />,
  },
  {
    id: "return-process",
    title: "Return Process",
    content: (
      <ol className='list-decimal pl-5'>
        <li>
          Initiate a return request through your account or by contacting our
          customer support.
        </li>
        <li>
          You will receive a Return Merchandise Authorization (RMA) number and
          return instructions.
        </li>
        <li>Pack the item securely in its original packaging.</li>
        <li>Include the RMA number on the outside of the package.</li>
        <li>
          Ship the package to the address provided in the return instructions.
        </li>
      </ol>
    ),
    icon: <FaBoxOpen className='h-6 w-6 text-red-500' />,
  },
  {
    id: "refunds",
    title: "Refunds",
    content: (
      <>
        <p>
          Once we receive and inspect your return, we will notify you of the
          approval or rejection of your refund.
        </p>
        <p className='mt-2'>
          If approved, your refund will be processed, and a credit will
          automatically be applied to your original method of payment within
          5-10 business days.
        </p>
      </>
    ),
    icon: <FaMoneyBillWave className='h-6 w-6 text-green-500' />,
  },
];

const TableOfContents = ({ sections }) => (
  <nav className='mb-8 p-4 bg-[#080808] rounded-lg'>
    <h2 className='text-lg font-semibold mb-2 text-gray-100 border-b pb-1'>
      Table of Contents
    </h2>
    <ul className='space-y-1'>
      {sections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`} className='text-blue-600 hover:underline'>
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const PolicySection = ({ section }) => (
  <section id={section.id} className='mb-8'>
    <h2 className='text-xl font-semibold mb-4 flex items-center'>
      {section.icon}
      <span className='ml-2 text-gray-200'>{section.title}</span>
    </h2>
    <div className='text-gray-300'>{section.content}</div>
  </section>
);

const ShippingAndReturn = () => {
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
              <FaTruck className='h-8 w-8 text-blue-600 mr-3' />
              <h2 className='text-2xl font-bold text-gray-100'>
                Shipping & Returns
              </h2>
            </div>

            <div className='bg-[#080808] shadow overflow-hidden sm:rounded-lg p-6'>
              <p className='mb-4 text-gray-100'>
                At TechGadgetry, we strive to make your shopping experience as
                smooth as possible. Please review our shipping and return
                policies below.
              </p>

              <h3 className='text-xl font-semibold mb-4 text-gray-200'>
                Shipping Policy
              </h3>
              <TableOfContents sections={shippingPolicySections} />
              {shippingPolicySections.map((section) => (
                <PolicySection key={section.id} section={section} />
              ))}

              <h3 className='text-xl font-semibold mb-4 mt-12'>
                Return Policy
              </h3>
              <TableOfContents sections={returnPolicySections} />
              {returnPolicySections.map((section) => (
                <PolicySection key={section.id} section={section} />
              ))}

              <section className='mt-8'>
                <h2 className='text-xl font-semibold mb-4 flex items-center'>
                  <FaQuestionCircle className='h-6 w-6 text-blue-500 mr-2' />
                  <span className='text-gray-100'>Need Help?</span>
                </h2>
                <p className='text-gray-300'>
                  If you have any questions about our shipping or return
                  policies, please don't hesitate to contact our customer
                  support team:
                </p>
                <p className='mt-2 text-gray-300'>
                  <strong>Email:</strong> support@techgadgetry.com
                </p>
                <p className='text-gray-300'>
                  <strong>Phone:</strong> 1-800-TECH-GADGET (1-800-832-4423)
                </p>
                <p className='text-gray-300'>
                  <strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAndReturn;
