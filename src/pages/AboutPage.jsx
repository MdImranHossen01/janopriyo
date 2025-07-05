import React from 'react';
// Corrected Imports: Fi icons from Feather, Fa icon from Font Awesome
import { FiPackage, FiAward } from 'react-icons/fi';
import { FaHeadset } from 'react-icons/fa';

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <div className="bg-rose-100 text-rose-500 p-3 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

// Main About Page Component
const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* --- Hero Section --- */}
      <div className="relative bg-rose-500 text-white py-20 md:py-32 text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://placehold.co/1200x400/000000/FFFFFF?text=Janopriyo+Shop')" }}
        ></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Janopriyo Shop</h1>
          <p className="mt-4 text-lg">Your Trusted Partner for Quality Products in Bangladesh</p>
        </div>
      </div>

      {/* --- Our Story Section --- */}
      <div className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              "Janopriyo" (জনপ্রিয়) means "popular" or "beloved by the people." We started Janopriyo Shop with a simple mission: to bring high-quality, reliable, and affordable products to every doorstep in Bangladesh. 
            </p>
            <p className="text-gray-700">
              In a market full of choices, we wanted to build a brand that you can trust. From the bustling streets of Dhaka to the serene villages across the country, we are committed to making online shopping a seamless and delightful experience for everyone.
            </p>
          </div>
          <div>
            <img 
              src="https://placehold.co/600x400/E2E8F0/4A5568?text=Our+Warehouse" 
              alt="Janopriyo Shop warehouse" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* --- Why Choose Us Section --- */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Shop With Us?</h2>
            <p className="text-gray-600 mt-2">We are dedicated to providing you with the best experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FiAward size={24} />}
              title="Authentic Products"
              text="We source our products from trusted suppliers to guarantee 100% authenticity and quality."
            />
            <FeatureCard 
              icon={<FiPackage size={24} />}
              title="Fast & Reliable Delivery"
              text="With our dedicated delivery network, we ensure your orders reach you quickly and safely, anywhere in Bangladesh."
            />
            <FeatureCard 
              icon={<FaHeadset size={24} />}
              title="Dedicated Support"
              text="Our friendly customer support team is always ready to help you with any questions or concerns."
            />
          </div>
        </div>
      </div>

      {/* --- Call to Action Section --- */}
      <div className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Start Shopping?</h2>
          <p className="text-gray-600 mt-2 mb-6">Explore our wide range of products and find exactly what you need.</p>
          <a
            href="/shop" // Link to your shop page
            className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-600 transition-colors duration-300"
          >
            Explore Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;