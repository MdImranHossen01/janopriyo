import React from 'react';
// Importing the paper plane icon from Font Awesome
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  return (
    // Main container with a light green background and relative positioning for images
    <div className="bg-[#e6f7d5] py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Decorative image on the left (optional) */}
        {/* Replace with your own image. Using a placeholder for demonstration. */}
        <img 
          src="https://placehold.co/150x150/e6f7d5/000000?text=Food+Sketch" 
          alt="Decorative food sketch"
          className="absolute top-1/2 left-10 -translate-y-1/2 w-24 h-24 opacity-30 hidden lg:block"
        />

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Subscribe To Our Emails
          </h2>
          
          {/* Subscription form */}
          <form 
            className="max-w-md mx-auto mt-6"
            onSubmit={(e) => e.preventDefault()} // Prevents page reload on submit
          >
            <div className="flex items-center bg-white rounded-full shadow-md p-1">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full py-3 px-4 text-gray-700 bg-transparent focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-[#8bc34a] text-white font-semibold rounded-full py-3 px-6 hover:bg-[#7ab33a] transition-colors flex items-center space-x-2"
              >
                <span>Subscribe</span>
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>

        {/* Decorative image on the right (optional) */}
        {/* Replace with your own image. Using a placeholder for demonstration. */}
        <img 
          src="https://placehold.co/200x200/e6f7d5/000000?text=Veggie+Basket" 
          alt="Basket of vegetables"
          className="absolute top-1/2 right-10 -translate-y-1/2 w-32 h-32 hidden lg:block"
        />

      </div>
    </div>
  );
};

export default Newsletter;