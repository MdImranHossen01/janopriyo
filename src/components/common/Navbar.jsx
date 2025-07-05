import React from 'react';
import { Search, Heart, GitCompare, User, ShoppingCart, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-[#b9a978] text-white font-sans">
      {/* Top bar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-4xl font-bold tracking-wider">
            Janopriyo Shop
          </div>

          {/* Search Bar */}
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Enter your keyword ..."
              className="w-full bg-white text-gray-700 py-2 px-4 rounded-md focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="hover:text-yellow-300">Wish list</a>
            <a href="#" className="hover:text-yellow-300">Compare</a>
            <a href="#" className="flex items-center hover:text-yellow-300">
              Your Account <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center hover:text-yellow-300">
              USD <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center relative hover:text-yellow-300">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
              <span className="ml-2">Cart</span>
              <ChevronDown size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <nav className="flex space-x-8 text-sm font-medium">
            <a href="#" className="flex items-center bg-[#a89868] py-4 px-6">
              Shop by category <ChevronDown size={16} className="ml-2" />
            </a>
            <a href="#" className="flex items-center py-4 hover:text-yellow-300">
              Home <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center py-4 hover:text-yellow-300">
              Shop Layout <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center py-4 hover:text-yellow-300">
              Pages <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center py-4 hover:text-yellow-300">
              Blog <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center py-4 hover:text-yellow-300">
              Contact Us
            </a>
          </nav>
          <div className="text-sm font-bold text-yellow-300">
            FREE 1 - 2 DAY SHIPPING OVER $49!
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;