import React from 'react';

// 1. Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

// 2. Import Swiper's CSS styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Banner = () => {
  // Array of your image URLs
  const images = [
    "https://i.ibb.co/tpFW4x8j/1.png",
    "https://i.ibb.co/JR3zphHN/2.png",
    "https://i.ibb.co/7JsDmmrD/3.png"
  ];

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-md">
      <Swiper
        // 3. Configure Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds per slide
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true, // Allows clicking on the dots to navigate
        }}
        className="w-full h-full"
      >
        {/* 4. Map over your images to create slides */}
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Overlay (this stays the same) */}
      
    </div>
  );
};

export default Banner;