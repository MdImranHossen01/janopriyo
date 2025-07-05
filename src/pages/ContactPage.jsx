import React from 'react';
// Using Feather icons from react-icons for a clean, modern look
import { FiPhone, FiHeadphones, FiLock, FiMail, FiChevronRight, FiUser } from 'react-icons/fi';

// A reusable component for the top contact detail cards
const ContactDetailCard = ({ icon, title, details }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="text-gray-500 mb-3">{icon}</div>
    <h3 className="font-semibold text-gray-800 uppercase tracking-wider">{title}</h3>
    <div className="text-gray-500 mt-1">
      {details.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  </div>
);

// A reusable component for form inputs to keep the code clean
const FormInput = ({ icon, type, placeholder, name, required = false }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </span>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#b9a978]/50 focus:border-[#b9a978]"
    />
  </div>
);


const ContactPage = () => {
  return (
    <div className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-sm text-gray-500 mb-12">
          <a href="/" className="hover:text-gray-800">Home</a>
          <FiChevronRight className="mx-2" size={16} />
          <span>Contact us</span>
        </div>

        {/* Section 1: Contact Detail */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-800 uppercase tracking-widest">Contact Detail</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 border-t border-b border-gray-200 py-8">
            <ContactDetailCard
              icon={<FiPhone size={32} />}
              title="Phone"
              details={["+84 011223000", "+84 011223000"]}
            />
            <ContactDetailCard
              icon={<FiHeadphones size={32} />}
              title="Address"
              details={["1800 Abbot Kinney Blvd. Unit D, Venice"]}
            />
            <ContactDetailCard
              icon={<FiLock size={32} />}
              title="Email"
              details={["support@example.com", "example@email.com"]}
            />
          </div>
        </div>

        {/* Section 2: Get In Touch With Us */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800 uppercase tracking-widest">Get In Touch With Us</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui mea.
          </p>

          {/* Contact Form */}
          <form className="mt-8 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <FormInput icon={<FiUser />} type="text" name="name" placeholder="Name" />
              <FormInput icon={<FiMail />} type="email" name="email" placeholder="Email *" required={true} />
              <FormInput icon={<FiPhone />} type="tel" name="phone" placeholder="Phone number" />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your message"
                rows="6"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#b9a978]/50 focus:border-[#b9a978]"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#b9a978] text-white font-semibold py-3 px-12 rounded-md hover:bg-[#a89868] transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;