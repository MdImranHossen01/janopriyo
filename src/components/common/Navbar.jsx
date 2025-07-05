import React, { useState } from 'react';
import { Search, Heart, GitCompare, User, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-[#b9a978] text-white font-sans">
      {/* Top bar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mr-4"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Mobile search button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden mr-4"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Logo - moves to center on mobile */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-center lg:text-left flex-grow lg:flex-grow-0">
            Janopriyo Shop
          </div>

          {/* Search Bar - hidden on mobile unless activated */}
          <div className={`${isSearchOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-16 left-0 right-0 lg:top-auto lg:left-auto lg:right-auto bg-[#b9a978] lg:bg-transparent z-10 px-4 py-2 lg:px-0 lg:py-0 lg:w-1/3`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your keyword ..."
                className="w-full bg-white text-gray-700 py-2 px-4 rounded-md focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* User actions - hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <a href="#" className="hover:text-yellow-300 hidden xl:block">Wish list</a>
            <a href="#" className="hover:text-yellow-300 hidden xl:block">Compare</a>
            <a href="#" className="flex items-center hover:text-yellow-300">
              <User size={20} className="xl:hidden" />
              <span className="hidden xl:inline">Your Account</span>
              <ChevronDown size={16} className="ml-1 hidden xl:inline" />
            </a>
            <a href="#" className="flex items-center hover:text-yellow-300 hidden xl:flex">
              USD <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="flex items-center relative hover:text-yellow-300">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
              <span className="ml-2 hidden xl:inline">Cart</span>
              <ChevronDown size={16} className="ml-1 hidden xl:inline" />
            </a>
          </div>

          {/* Mobile cart icon */}
          <div className="lg:hidden ml-4">
            <a href="#" className="flex items-center relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar - hidden on mobile */}
      <div className="border-t border-white/20 hidden lg:block">
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
          <div className="text-sm font-bold text-yellow-300 hidden xl:block">
            FREE 1 - 2 DAY SHIPPING OVER $49!
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#a89868] w-full absolute z-20">
          <nav className="flex flex-col text-sm font-medium">
            <a href="#" className="flex items-center py-3 px-6 border-b border-white/10 hover:bg-[#b9a978]">
              Shop by category <ChevronDown size={16} className="ml-auto" />
            </a>
            <a href="#" className="flex items-center py-3 px-6 border-b border-white/10 hover:bg-[#b9a978]">
              Home <ChevronDown size={16} className="ml-auto" />
            </a>
            <a href="#" className="flex items-center py-3 px-6 border-b border-white/10 hover:bg-[#b9a978]">
              Shop Layout <ChevronDown size={16} className="ml-auto" />
            </a>
            <a href="#" className="flex items-center py-3 px-6 border-b border-white/10 hover:bg-[#b9a978]">
              Pages <ChevronDown size={16} className="ml-auto" />
            </a>
            <a href="#" className="flex items-center py-3 px-6 border-b border-white/10 hover:bg-[#b9a978]">
              Blog <ChevronDown size={16} className="ml-auto" />
            </a>
            <a href="#" className="flex items-center py-3 px-6 hover:bg-[#b9a978]">
              Contact Us
            </a>
            <div className="py-3 px-6 border-t border-white/10 text-yellow-300 font-bold">
              FREE 1 - 2 DAY SHIPPING OVER $49!
            </div>
            <div className="flex items-center justify-around py-4 px-6 border-t border-white/10">
              <a href="#" className="flex flex-col items-center">
                <Heart size={20} />
                <span className="text-xs mt-1">Wishlist</span>
              </a>
              <a href="#" className="flex flex-col items-center">
                <GitCompare size={20} />
                <span className="text-xs mt-1">Compare</span>
              </a>
              <a href="#" className="flex flex-col items-center">
                <User size={20} />
                <span className="text-xs mt-1">Account</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;