'use client';
import { useState, useEffect } from 'react';
import { Search, MapPin, Globe, Sun, Compass, Menu, X, ChevronRight, Heart, Clock, ChevronLeft } from 'lucide-react';

export default function TravelAppHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const carouselItems = [
    { 
      id: 1, 
      country: 'Japan', 
      tagline: 'Where tradition meets innovation',
      description: 'Experience the perfect blend of ancient temples and futuristic cities',
      image: '/api/placeholder/1200/600',
      color: 'from-red-500 to-pink-500'
    },
    { 
      id: 2, 
      country: 'Italy', 
      tagline: 'Discover the cradle of culture',
      description: 'Immerse yourself in art, history, and world-renowned cuisine',
      image: '/api/placeholder/1200/600',
      color: 'from-green-500 to-blue-500'
    },
    { 
      id: 3, 
      country: 'New Zealand', 
      tagline: 'Adventure awaits at every turn',
      description: 'Explore breathtaking landscapes from mountains to beaches',
      image: '/api/placeholder/1200/600',
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      id: 4, 
      country: 'Morocco', 
      tagline: 'A feast for the senses',
      description: 'Vibrant markets, stunning architecture, and desert adventures',
      image: '/api/placeholder/1200/600',
      color: 'from-yellow-500 to-orange-500'
    },
  ];
  
  const popularDestinations = [
    { id: 1, name: 'Bali, Indonesia', image: '/api/placeholder/400/300', rating: 4.8 },
    { id: 2, name: 'Paris, France', image: '/api/placeholder/400/300', rating: 4.7 },
    { id: 3, name: 'Tokyo, Japan', image: '/api/placeholder/400/300', rating: 4.9 },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 700);
    }
  };
  
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 700);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Compass className="text-blue-500" size={28} />
            <span className="text-xl font-bold text-gray-800">Wanderlust</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-blue-500 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Explore</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Trips</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Bookings</a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Sign In
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-blue-500 font-medium py-2">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 py-2">Explore</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 py-2">Trips</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 py-2">Bookings</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors w-full">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section with Carousel */}
      <section className="relative text-white overflow-hidden">
        {/* Carousel */}
        <div className="relative h-96 md:h-screen max-h-screen overflow-hidden">
          {carouselItems.map((item, index) => (
            <div 
              key={item.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0 z-10' 
                  : index === (currentSlide + 1) % carouselItems.length || (currentSlide === carouselItems.length - 1 && index === 0)
                    ? 'opacity-0 translate-x-full z-0' 
                    : 'opacity-0 -translate-x-full z-0'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-70`}></div>
              <img 
                src={item.image} 
                alt={item.country} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
                <div className={`transform transition-all duration-700 ease-in-out ${
                  index === currentSlide ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0'
                }`}>
                  <h2 className="text-6xl md:text-8xl font-bold mb-2 tracking-tight">{item.country}</h2>
                  <p className="text-2xl md:text-3xl font-medium mb-4">{item.tagline}</p>
                  <p className="text-xl max-w-2xl mx-auto mb-8">{item.description}</p>
                  <button className="mt-4 bg-white text-gray-800 hover:bg-gray-100 transition-colors px-8 py-3 rounded-full font-bold shadow-lg transform hover:scale-105 transition-transform">
                    Explore {item.country}
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 focus:outline-none transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 focus:outline-none transition-all"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicator Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 700);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-2xl px-4 z-30">
          <div className="relative">
            <input
              type="text"
              placeholder="Where would you like to go?"
              className="w-full px-4 py-3 pr-12 rounded-lg text-gray-800 shadow-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-3 text-gray-500 hover:text-blue-500">
              <Search size={20} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <MapPin className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart Travel Planning</h3>
              <p className="text-gray-600">Personalized itineraries based on your preferences and travel style.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Globe className="text-green-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Exclusive Deals</h3>
              <p className="text-gray-600">Access to special prices on flights, hotels, and activities worldwide.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <Sun className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Travel Community</h3>
              <p className="text-gray-600">Connect with fellow travelers and share your experiences and tips.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Popular Destinations</h2>
            <a href="#" className="flex items-center text-blue-500 font-medium hover:underline">
              View all <ChevronRight size={16} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((dest) => (
              <div key={dest.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
                  <button className="absolute top-2 right-2 p-2 bg-white bg-opacity-70 rounded-full">
                    <Heart size={20} className="text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{dest.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-gray-700">{dest.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Clock size={16} className="mr-1" />
                    <span>Best time to visit: June-September</span>
                  </div>
                  <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 mx-auto">Download our app now and start planning your dream vacation with ease.</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.707,9.293l-5-5a1,1,0,0,0-1.414,0l-5,5A1,1,0,0,0,7.707,10.707L11,7.414V19a1,1,0,0,0,2,0V7.414l3.293,3.293a1,1,0,0,0,1.414-1.414Z" />
              </svg>
              Download for iOS
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.707,9.293l-5-5a1,1,0,0,0-1.414,0l-5,5A1,1,0,0,0,7.707,10.707L11,7.414V19a1,1,0,0,0,2,0V7.414l3.293,3.293a1,1,0,0,0,1.414-1.414Z" />
              </svg>
              Download for Android
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Get Travel Inspiration</h2>
          <p className="text-gray-600 mb-8">Sign up for our newsletter and receive exclusive deals, travel tips, and more.</p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Compass size={24} />
                <span className="text-xl font-bold">Wanderlust</span>
              </div>
              <p className="text-gray-400">Your trusted companion for unforgettable journeys around the world.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}