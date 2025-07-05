import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

// Accordion Item Component
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <span>
          {isOpen ? <FiMinus className="text-gray-600" /> : <FiPlus className="text-gray-500" />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 px-2 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

// Main FAQ Page Component
const Faq = () => {
  const faqData = [
    {
      question: 'How do I place an order on Janopriyo Shop?',
      answer: 'To place an order, simply browse our products, select the items you want, add them to your cart, and proceed to checkout. You will need to provide your shipping address and payment information to complete the order.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept a variety of payment methods including bKash, Nagad, Rocket, and other mobile banking services, as well as Cash on Delivery (COD) for most locations in Bangladesh.'
    },
    {
      question: 'What are your delivery charges?',
      answer: 'Delivery charges vary based on your location. Inside Dhaka, the charge is ৳60. For locations outside Dhaka, the charge is ৳120. You will see the final shipping cost at checkout.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Deliveries inside Dhaka typically take 2-3 business days. For addresses outside Dhaka, it may take 5-7 business days. You will receive a tracking number once your order has been shipped.'
    },
    {
      question: 'What is your return and exchange policy?',
      answer: 'We have a 7-day return policy for unused and unopened items. If you receive a damaged or incorrect product, please contact our customer service within 48 hours with a photo of the item. We will arrange for a return or exchange.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, we will send you an SMS and an email containing your tracking number and a link to the courier\'s website. You can use this to track the status of your delivery.'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-2">Find answers to the most common questions about Janopriyo Shop.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          {faqData.map((item, index) => (
            <Accordion key={index} title={item.question}>
              <p>{item.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;