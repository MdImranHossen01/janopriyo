import React from 'react';
// Import icons from the 'react-icons/fa' (Font Awesome) set
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

// This helper component for links remains the same
const FooterLink = ({ href = '#', children }) => (
  <li className="flex items-center mb-2">
    <FaChevronRight className="text-gray-400 mr-2" />
    <a href={href} className="text-gray-300 hover:text-white transition-colors">
      {children}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white pt-16 pb-4 font-sans relative">
      {/* The main content of the footer */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Contact Info & Socials */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-yellow-400">Janopriyo Shop</span>
              <span className="text-sm font-normal block text-gray-300">Experience Best Online Shop</span>
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0" size={20} />
                <span>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3" size={20} />
                <span>423-845-5570</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" size={20} />
                <span>random@email.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaPinterest /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2: Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
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
            <h3 className="text-lg font-semibold mb-4">Support</h3>
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
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul>
              <FooterLink>Search Terms</FooterLink>
              <FooterLink>Advanced Search</FooterLink>
              <FooterLink>Helps & Faqs</FooterLink>
              <FooterLink>Store Location</FooterLink>
              <FooterLink>Orders & Returns</FooterLink>
            </ul>
          </div>
        </div>
      </div>

     

      
    </footer>
  );
};

export default Footer;