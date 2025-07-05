import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaTwitter, 
  FaFacebookF, 
  FaPinterest, 
  FaInstagram, 
  FaChevronRight, 
  FaArrowUp 
} from 'react-icons/fa';

const FooterLink = ({ href = '#', children }) => (
  <li className="flex items-center mb-2">
    <FaChevronRight className="text-gray-400 mr-2 text-xs md:text-sm" />
    <a href={href} className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
      {children}
    </a>
  </li>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#252525] text-white pt-12 pb-8 md:pt-16 md:pb-4 font-sans relative">
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-colors z-50"
        aria-label="Back to top"
      >
        <FaArrowUp size={18} />
      </button>

      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Column 1: Contact Info & Socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              <span className="text-yellow-400">Janopriyo Shop</span>
              <span className="text-xs md:text-sm font-normal block text-gray-300 mt-1">
                Experience Best Online Shop
              </span>
            </h2>
            <ul className="text-gray-300 space-y-2 md:space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0" size={16} />
                <span className="text-xs md:text-sm">
                  No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 md:mr-3" size={16} />
                <span className="text-xs md:text-sm">423-845-5570</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 md:mr-3" size={16} />
                <span className="text-xs md:text-sm">random@email.com</span>
              </li>
            </ul>
            <div className="flex space-x-3 md:space-x-4 mt-4 md:mt-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                <FaPinterest />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Help */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Help</h3>
            <ul>
              <FooterLink>Search</FooterLink>
              <FooterLink>Help</FooterLink>
              <FooterLink>Information</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Shipping Information</FooterLink>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Support</h3>
            <ul>
              <FooterLink>Contact</FooterLink>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Refund & Returns</FooterLink>
              <FooterLink>Deliveries</FooterLink>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Information</h3>
            <ul>
              <FooterLink>Search Terms</FooterLink>
              <FooterLink>Advanced Search</FooterLink>
              <FooterLink>Helps & Faqs</FooterLink>
              <FooterLink>Store Location</FooterLink>
              <FooterLink>Orders & Returns</FooterLink>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Janopriyo Shop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;