import React, { useState } from "react";
import {
  FaShieldAlt,
  FaInfoCircle,
  FaUserShield,
  FaCookieBite,
  FaEnvelope,
  FaLock,
  FaQuestionCircle,
} from "react-icons/fa";

const policySections = [
  {
    id: "information-collection",
    title: "Information We Collect",
    content:
      "We collect personal information that you provide to us, such as your name, email address, shipping address, and payment information when you make a purchase. We also automatically collect certain information about your device and how you interact with our website.",
    icon: <FaInfoCircle className='h-6 w-6 text-blue-500' />,
  },
  {
    id: "information-use",
    title: "How We Use Your Information",
    content:
      "We use your information to process your orders, communicate with you about your purchases, improve our services, and send you marketing communications (if you've opted in). We may also use your information to comply with legal obligations and protect our rights.",
    icon: <FaUserShield className='h-6 w-6 text-green-500' />,
  },
  {
    id: "information-sharing",
    title: "Information Sharing and Disclosure",
    content:
      "We do not sell your personal information. We may share your information with service providers who help us operate our business, with your consent, or as required by law. We may also share aggregated or de-identified information that cannot reasonably be used to identify you.",
    icon: <FaEnvelope className='h-6 w-6 text-yellow-500' />,
  },
  {
    id: "data-security",
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure.",
    icon: <FaLock className='h-6 w-6 text-red-500' />,
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    content:
      "We use cookies and similar technologies to enhance your experience on our website, analyze usage patterns, and deliver personalized content. You can control cookies through your browser settings and other tools.",
    icon: <FaCookieBite className='h-6 w-6 text-purple-500' />,
  },
  {
    id: "your-rights",
    title: "Your Rights and Choices",
    content:
      "Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. You can also opt-out of marketing communications and manage your cookie preferences.",
    icon: <FaQuestionCircle className='h-6 w-6 text-indigo-500' />,
  },
];

const TableOfContents = () => (
  <nav className='mb-8 p-4 bg-[#080808] shadow rounded-lg'>
    <h2 className='text-lg font-semibold mb-2 text-gray-100 border-b'>
      Table of Contents
    </h2>
    <ul className='space-y-1'>
      {policySections.map((section) => (
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
      <span className='ml-2 text-gray-100'>{section.title}</span>
    </h2>
    <p className='text-gray-300'>{section.content}</p>
  </section>
);

const PrivacyAndPolicy = () => {
  return (
    <div className='min-h-screen bg-[#080808] flex flex-col'>
      <header className='bg-[#080808] shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-100'>Gadget Plus</h1>
        </div>
      </header>

      <div className='flex-grow'>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='flex items-center mb-6'>
              <FaShieldAlt className='h-8 w-8 text-blue-600 mr-3' />
              <h2 className='text-2xl font-bold text-gray-100'>
                Privacy Policy
              </h2>
            </div>

            <div className='bg-[#080808] shadow overflow-hidden sm:rounded-lg p-6'>
              <p className='mb-4 text-gray-100'>
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className='mb-4 text-gray-200'>
                At TechGadgetry, we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our website and services.
              </p>

              <TableOfContents />

              {policySections.map((section) => (
                <PolicySection key={section.id} section={section} />
              ))}

              <section className='mt-8'>
                <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>
                <p className='text-gray-200'>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p className='mt-2 text-gray-200'>
                  <strong>Email:</strong> privacy@gadget-plus.com
                </p>
                <p className='text-gray-200'>
                  <strong>Address:</strong> 123 Gadget Street, Tech City, 1845
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyAndPolicy;
