import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className='min-h-screen bg-[#080808] flex flex-col'>
      <div className='bg-[#080808] shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>TechGadgetry</h1>
        </div>
      </div>

      <div className='flex-grow'>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <h2 className='text-2xl font-bold text-gray-100 mb-6'>
              Contact Us
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='bg-transparent shadow overflow-hidden sm:rounded-lg'>
                <div className='px-4 py-5 sm:p-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-100'>
                    Get in Touch
                  </h3>
                  <p className='mt-1 max-w-2xl text-sm text-gray-200'>
                    We'd love to hear from you. Fill out the form and we'll get
                    back to you as soon as possible.
                  </p>
                  <form onSubmit={handleSubmit} className='mt-5 space-y-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-300'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className='mt-1 py-2 px-2 bg-[#1c1b1b] text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md outline-none'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-300'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='mt-1 py-2 px-2 bg-[#1c1b1b] text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md outline-none'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='subject'
                        className='block text-sm font-medium text-gray-300'
                      >
                        Subject
                      </label>
                      <input
                        type='text'
                        name='subject'
                        id='subject'
                        className='mt-1 py-2 px-2 bg-[#1c1b1b] text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md outline-none'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-300'
                      >
                        Message
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        rows={4}
                        className='mt-1 py-2 px-2 bg-[#1c1b1b] text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md outline-none'
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <FaPaperPlane className='mr-2 h-5 w-5' />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='bg-[#080808] shadow overflow-hidden sm:rounded-lg'>
                  <div className='px-4 py-5 sm:p-6'>
                    <h3 className='text-lg leading-6 font-medium text-gray-100'>
                      Our Location
                    </h3>
                    <div className='mt-2 max-w-xl text-sm text-gray-300'>
                      <p>
                        Visit our store to see our latest gadgets in person!
                      </p>
                    </div>
                    <div className='mt-3 text-sm'>
                      <div className='flex items-center'>
                        <FaMapMarkerAlt className='h-5 w-5 text-gray-300 mr-2' />
                        <span className='text-gray-200'>
                          123 Gadget Street, Tech City, 1845
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-[#080808] shadow overflow-hidden sm:rounded-lg'>
                  <div className='px-4 py-5 sm:p-6'>
                    <h3 className='text-lg leading-6 font-medium text-gray-300'>
                      Contact Information
                    </h3>
                    <div className='mt-2 max-w-xl text-sm text-gray-300'>
                      <p>Reach out to us via phone or email.</p>
                    </div>
                    <div className='mt-3 text-sm'>
                      <div className='flex items-center mb-2'>
                        <FaPhone className='h-5 w-5 text-gray-200 mr-2' />
                        <span className='text-gray-200'>+1 (555) 123-4567</span>
                      </div>
                      <div className='flex items-center'>
                        <FaEnvelope className='h-5 w-5 text-gray-200 mr-2' />
                        <span className='text-gray-200'>
                          support@gadget-plus.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-[#080808] shadow overflow-hidden sm:rounded-lg'>
                  <div className='px-4 py-5 sm:p-6'>
                    <h3 className='text-lg leading-6 font-medium text-gray-100'>
                      Business Hours
                    </h3>
                    <div className='mt-2 max-w-xl text-sm text-gray-500'>
                      <div className='flex items-center mb-2'>
                        <FaClock className='h-5 w-5 text-gray-300 mr-2' />
                        <span className='text-gray-200'>
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className='flex items-center mb-2'>
                        <FaClock className='h-5 w-5 text-gray-300 mr-2' />
                        <span className='text-gray-200'>
                          Saturday: 10:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <FaClock className='h-5 w-5 text-gray-300 mr-2' />
                        <span className='text-gray-200'>Sunday: Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
