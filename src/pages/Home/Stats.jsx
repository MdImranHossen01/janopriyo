import React from 'react';
// Importing icons from Font Awesome via react-icons
import { FaShippingFast, FaPhoneAlt, FaHeadset, FaExchangeAlt } from 'react-icons/fa';

// A reusable component for each individual stat item to keep the code clean
const StatItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
      {/* The icon component is passed as a prop */}
      {icon}
    </div>
    <div>
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-gray-200 text-sm">{subtitle}</p>
    </div>
  </div>
);

const Stats = () => {
  return (
    // Main container with the green background
    <div className="bg-[#8bc34a] py-8">
      <div className="container mx-auto px-4">
        {/* Responsive grid for the stat items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <StatItem 
            icon={<FaShippingFast className="text-[#8bc34a]" size={28} />}
            title="Free Shipping"
            subtitle="Worldwide"
          />

          <StatItem 
            icon={<FaPhoneAlt className="text-[#8bc34a]" size={24} />}
            title="Helpline"
            subtitle="+(000)123-4567"
          />

          <StatItem 
            icon={<FaHeadset className="text-[#8bc34a]" size={28} />}
            title="24x7 Support"
            subtitle="Free For Customers"
          />

          <StatItem 
            icon={<FaExchangeAlt className="text-[#8bc34a]" size={24} />}
            title="Returns"
            subtitle="30 Days Free Exchanges"
          />

        </div>
      </div>
    </div>
  );
};

export default Stats;