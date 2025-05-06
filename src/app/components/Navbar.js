'use client'
import React from 'react'
import Link from 'next/link'
import { Phone, Mail, Facebook, Instagram, Twitter, Compass, ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
      };
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
<>
<div className="bg-cyan-600 text-white">
        <div className="mx-auto px-6 py-2">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Phone size={16} className="mr-1" />
                <span>+94 764 944 774</span>
              </div>
              <div className="hidden sm:flex items-center">
                <Mail size={16} className="mr-1" />
                <span>info@laplankatours.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-cyan-200">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-cyan-200">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-cyan-200">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className=" mx-auto px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                <Compass className="text-white" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800">LAP Lanka</span>
                <span className="text-xs text-cyan-600 -mt-1">Discover Paradise</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/home" className="px-3 py-2 rounded-md text-cyan-600 font-medium hover:bg-cyan-50 transition-colors">Home</Link>
              
              <div className="relative group">
                <button 
                  className="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50 transition-colors flex items-center"
                  onClick={() => toggleDropdown('destinations')}
                >
                  Destinations <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="py-1">
                    <Link href="/destinations/beaches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">Beaches</Link>
                    <Link href="/destinations/mountains" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">Mountains</Link>
                    <Link href="/destinations/cultural-sites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">Cultural Sites</Link>
                  </div>
                </div>
              </div>
              
              {/* <div className="relative group">
                <button 
                  className="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50 transition-colors flex items-center"
                  onClick={() => toggleDropdown('packages')}
                >
                  Tour Packages <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="py-1">
                    <Link href="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">Adventure Tours</Link> 
                    <Link href="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">Cultural Tours</Link> 
                    <Link href="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">Beach Getaways</Link> 
                    <Link href="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">Family Packages</Link> 
                    <Link href="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50">Honeymoon Specials</Link> 
                  </div>
                </div>
              </div> */}
              <Link href="/tour-packages" className="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50 transition-colors">Tour Packages</Link> 
              <Link href="/wish" className="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50 transition-colors">Bookings</Link> 
              <Link href="/about" className="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50 transition-colors">About Us</Link> 
              <Link href="/wish" className="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50 transition-colors">Contact</Link> 
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/about" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all">
                Book Now
              </Link> 
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden text-gray-600 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-1">
                <Link href="/about" className="px-3 py-2 rounded-md text-cyan-600 font-medium hover:bg-cyan-50">Home</Link> 
                
                <div className="relative">
                  <button 
                    className="w-full px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50 flex justify-between items-center"
                    onClick={() => toggleDropdown('mobile-destinations')}
                  >
                    Destinations 
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${activeDropdown === 'mobile-destinations' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {activeDropdown === 'mobile-destinations' && (
                    <div className="pl-4 py-2 space-y-1">
                      <Link href="/destinations/beaches" className="block px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-md">Beaches</Link> 
                      <Link href="/destinations/mountains" className="block px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-md">Mountains</Link> 
                      <Link href="/destinations/cultural-sites" className="block px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-md">Cultural Sites</Link> 
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <button 
                    className="w-full px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50 flex justify-between items-center"
                    onClick={() => toggleDropdown('mobile-packages')}
                  >
                    Tour Packages 
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${activeDropdown === 'mobile-packages' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {activeDropdown === 'mobile-packages' && (
                    <div className="pl-4 py-2 space-y-1">
                      <Link href="/about" className="block px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-md">Adventure Tours</Link> 
                      <Link href="/about" className="block px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-md">Cultural Tours</Link> 
                      <Link href="/about" className="block px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-md">Beach Getaways</Link> 
                      <Link href="/about" className="block px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-md">Family Packages</Link> 
                      <Link href="/about" className="block px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 rounded-md">Honeymoon Specials</Link> 
                    </div>
                  )}
                </div>
                
                <Link href="/wish" className="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50">Bookings</Link> 
                <Link href="/about" className="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50">About Us</Link> 
                <Link href="/wish" className="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-cyan-50">Contact</Link> 
                
                <div className="pt-2">
                  <Link href="/about" className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-full font-medium text-center">
                    Book Now
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
</>  )
}
