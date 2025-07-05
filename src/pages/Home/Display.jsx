import React from 'react';

// A reusable card component to keep the code clean and maintainable
const DisplayCard = ({ imageSrc, title, description, bgColor, buttonColor, imageAlt }) => {
    return (
        // The main container for a single card with a shadow and rounded corners
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            
            {/* Left side: Image */}
            <div className="w-1/2 flex-shrink-0">
                <img 
                    src={imageSrc} 
                    alt={imageAlt} 
                    className="w-full h-48 object-cover" 
                />
            </div>

            {/* Right side: Content with the curved edge */}
            <div 
                className={`w-1/2 flex flex-col items-center justify-center text-center p-4 ${bgColor}`}
                // This inline style creates the large curve on the left side
                style={{ borderTopLeftRadius: '9999px', borderBottomLeftRadius: '9999px' }}
            >
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                <p className="mt-1 text-lg text-gray-700">{description}</p>
                <button className={`text-white font-bold py-2 px-6 rounded-full mt-4 ${buttonColor} hover:opacity-90 transition-opacity`}>
                    Buy Now
                </button>
            </div>
        </div>
    );
};


const Display = () => {
  return (
    // Section container with padding
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Responsive grid for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Veggies */}
          <DisplayCard 
            imageSrc="https://placehold.co/300x300/FFFFFF/000000?text=Carrots"
            imageAlt="A pile of fresh carrots"
            title="Veggies"
            description="100% Organic Products"
            bgColor="bg-rose-200"
            buttonColor="bg-orange-500"
          />

          {/* Card 2: Fruits */}
          <DisplayCard 
            imageSrc="https://placehold.co/300x300/FFFFFF/000000?text=Oranges"
            imageAlt="Fresh oranges"
            title="Fruits"
            description="100% Fresh Products"
            bgColor="bg-amber-200"
            buttonColor="bg-orange-500"
          />

        </div>
      </div>
    </div>
  );
};

export default Display;