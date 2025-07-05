import React from 'react';

const Discount = () => {
  return (
    // Main container with a light green background and padding
    <div className="bg-[#e6f7d5] py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Responsive grid for the two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Column 1: Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Special Discount For All Grocery Products
            </h2>
            <p className="text-gray-600 mt-4 text-base">
              Turpis tincidunt id aliquet risus feugiat. Pretium vulputate sapien nec sagittis aliquam. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Amet risus nullam eget felis eget nunc lobortis mattis aliquam.
            </p>
            <button className="bg-[#8bc34a] text-white font-bold py-3 px-8 rounded-full mt-8 hover:bg-[#7ab33a] transition-colors duration-300">
              Buy Now
            </button>
          </div>

          {/* Column 2: Image */}
          <div className="flex justify-center">
            {/* Replace with your actual image. Using a placeholder for demonstration. */}
            <img 
              src="https://i.ibb.co/990Rx3j4/Yellow-and-Beige-Illustrative-Independence-Day-Sale-Instagram-Post.png" 
              alt="discount"
              className="rounded-lg w-full max-w-sm lg:max-w-md"
            />
          </div>

        </div>
      </div>

      {/* Optional: Decorative image in the corner */}
      <img 
        src="https://placehold.co/150x150/e6f7d5/000000?text=Food+Sketch" 
        alt="Decorative food sketch"
        className="absolute bottom-0 left-4 w-24 h-24 opacity-30 hidden lg:block"
      />
    </div>
  );
};

export default Discount;