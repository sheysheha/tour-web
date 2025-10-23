'use client';
import { useState, useEffect, useCallback } from 'react';
import { Search, Menu, X, ChevronRight, Heart, Clock, ChevronLeft } from 'lucide-react';
import { MapPin, Globe, Sun, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { Compass, Phone, Mail, ChevronDown, Facebook, Instagram, Twitter } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
  const [isHovered, setIsHovered] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRounTripsClicked,setIsRoundTripsClicked]=useState(false);
  const [favorites, setFavorites] = useState({});
  const getCardClasses = (size) => {
    switch (size) {
      case 'lg':
        return 'md:col-span-2 md:row-span-2';
      case 'md':
        return 'md:col-span-1 md:row-span-1';
      case 'sm':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  const packages = [
    {
      id: 1,
      title: "Cultural Triangle Explorer",
      description: "Discover ancient ruins and UNESCO heritage sites",
      price: "$699",
      duration: "5 days",
      location: "Anuradhapura, Sigiriya, Polonnaruwa",
      persons: "2-6",
      rating: 4.8,
      imageUrl: "/tour1.jpg"
    },
    {
      id: 2,
      title: "Coastal Paradise Tour",
      description: "Beautiful beaches and marine wildlife experiences",
      price: "$799",
      duration: "6 days",
      location: "Mirissa, Unawatuna, Bentota",
      persons: "2-4",
      rating: 4.9,
      imageUrl: "/unawatuna.jpg"
    },
    {
      id: 3,
      title: "Hill Country Adventure",
      description: "Tea plantations, misty mountains and scenic train rides",
      price: "$649",
      duration: "4 days",
      location: "Nuwara Eliya, Ella, Kandy",
      persons: "2-8",
      rating: 4.7,
      imageUrl: "/ella.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const carouselItems = [
    {
      id: 1,
      country: 'Lap Lanka Tours',
      tagline: 'Discover Sri Lanka with Experts',
      description: 'Welcome to Lap Lanka Tours — your gateway to exploring Sri Lanka’s hidden gems, cultural wonders, and breathtaking landscapes. Let’s create unforgettable memories together!',
      image: '/ella-train.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      country: 'Sigiriya',
      tagline: 'Climb the Iconic Lion Rock Fortress',
      description: 'Discover ancient engineering and breathtaking views atop Sri Lanka’s most legendary monument.',
      image: '/sigiya-solo-traveler.jpg',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      country: 'Kandy',
      tagline: 'Feel the Spiritual Pulse of the Island',
      description: 'Walk through sacred grounds and witness the cultural heart of Sri Lanka at the Temple of the Tooth.',
      image: '/temple-of-the-tooth.jpg',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 4,
      country: 'Dambulla',
      tagline: 'Explore the Golden Cave Temples',
      description: 'Marvel at ancient art and spiritual serenity hidden within rock-carved sanctuaries.',
      image: '/dambulla.jpg',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 5,
      country: 'Colombo',
      tagline: 'Where Culture Meets the Capital',
      description: 'Uncover bustling markets, colonial charm, and modern life in Sri Lanka’s vibrant capital.',
      image: '/colombo-sri-lanka.jpg',
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 6,
      country: 'Hatton',
      tagline: 'Journey Through Misty Tea Country',
      description: 'Relax on a scenic train ride through lush plantations and serene hills in the central highlands.',
      image: '/train-journey-hatton-hill-country-sri-lanka.jpg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 7,
      country: 'Mirissa',
      tagline: 'Tropical Waters & Underwater Wonders',
      description: 'Snorkel, swim, and discover marine life along the golden shores of southern Sri Lanka.',
      image: '/Mirissa_Diving_and_Snorkelling.jpg',
      color: 'from-teal-500 to-blue-600'
    },
  ];



  const popularDestinations = [
    {
      id: 1,
      name: "Ella",
      image: "ella-train.jpg",
      rating: "4.9",
      bestFor: "Scenic Train Rides & Waterfalls",
      size: "lg"
    },
    {
      id: 2,
      name: "Sigiriya",
      image: "sigiriya.png",
      rating: "4.8",
      bestFor: "Historical Rock Fortress & Wildlife",
      size: "md"
    },
    {
      id: 3,
      name: "Mirissa",
      image: "beach.jpg",
      rating: "4.7",
      bestFor: "Beaches & Whale Watching",
      size: "sm"
    },
    {
      id: 4,
      name: "Kandy",
      image: "temple-of-the-tooth.jpg",
      rating: "4.6",
      bestFor: "Temple of the Tooth & Cultural Shows",
      size: "md"
    },
    {
      id: 5,
      name: "Galle",
      image: "galle-lighthouse.png",
      rating: "4.8",
      bestFor: "Dutch Fort & Colonial Heritage",
      size: "md"
    },
    {
      id: 6,
      name: "Yala",
      image: "Leopard.jpg",
      rating: "4.5",
      bestFor: "National Park & Wildlife Safari",
      size: "sm"
    },
    {
      id: 7,
      name: "Dambulla",
      image: "dambulla.jpg",
      rating: "4.7",
      bestFor: "Cave Temple & Ancient Ruins",
      size: "md"
    },
    {
      id: 8,
      name: "Nuwara Eliya",
      image: "nuwaraeliya.jpg",
      rating: "4.5",
      bestFor: "Tea Plantations & Gardens",
      size: "lg"
    },
    {
      id: 9,
      name: "Polonnaruwa",
      image: "seema-malaka-temple.png",
      rating: "4.6",
      bestFor: "Ancient City & Archeological Sites",
      size: "sm"
    },
    {
      id: 10,
      name: "Anuradhapura",
      image: "polonnaruwa.jpg",
      rating: "4.7",
      bestFor: "Sacred City & Buddhist Monuments",
      size: "md"
    },
    {
      id: 11,
      name: "Hikkaduwa",
      image: "hikkaduwa.jpg",
      rating: "4.7",
      bestFor: "Cave Temple & Ancient Ruins",
      size: "md"
    },
    {
      id: 12,
      name: "Arugmbay",
      image: "surfing-argambay.jpg",
      rating: "4.7",
      bestFor: "Cave Temple & Ancient Ruins",
      size: "md"
    },

  ];

  const [activeDropdown, setActiveDropdown] = useState(null);



  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const nextSlide = useCallback(() => {
  if (!isAnimating) {
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 800);
  }
}, [isAnimating, carouselItems.length]);
  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
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
  }, 5000);

  return () => clearInterval(interval);
}, [nextSlide]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section with Carousel */}
      <section className="relative text-white overflow-hidden">
        {/* Carousel */}
        <div className="relative h-96 md:h-screen max-h-screen overflow-hidden">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                ? 'opacity-100 translate-x-0 z-10'
                : index === (currentSlide + 1) % carouselItems.length || (currentSlide === carouselItems.length - 1 && index === 0)
                  ? 'opacity-0 translate-x-full z-0'
                  : 'opacity-0 -translate-x-full z-0'
                }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-70`}></div>

              <Image
              width={1200}
              height={800}
                src={item.image}
                alt={item.country}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
                <div className={`transform transition-all duration-700 ease-in-out ${index === currentSlide ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0'
                  }`}>
                  <h2 className="text-6xl md:text-8xl font-bold mb-2 tracking-tight">{item.country}</h2>
                  <p className="text-2xl md:text-3xl font-medium mb-4">{item.tagline}</p>
                  <p className="text-xl max-w-2xl mx-auto mb-8">{item.description}</p>
                  <button className="mt-4 bg-white opacity-80 text-gray-800 hover:bg-white hover:opacity-100 transition-colors px-8 py-3 rounded-full font-bold shadow-lg transform hover:scale-105 transition-transform">
                    Explore {item.country}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          {/* <button 
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
          </button> */}

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
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Search Bar */}
        {/* <div className="absolute bottom-12 left-0 right-0 mx-auto max-w-2xl px-4 z-30">
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
        </div> */}
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why Choose <span className="text-cyan-600">Lap Lanka Tours</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center mx-12">

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition-transform hover:scale-105">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Local Expertise</h3>
              <p className="text-sm text-gray-600">Guided by locals who know every hidden gem of Sri Lanka.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition-transform hover:scale-105">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Globe className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Custom Itineraries</h3>
              <p className="text-sm text-gray-600">Trips designed around your interests, budget, and pace.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition-transform hover:scale-105">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <Sun className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Tropical Escapes</h3>
              <p className="text-sm text-gray-600">From serene beaches to misty mountains — we cover it all.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition-transform hover:scale-105">
              <div className="bg-pink-100 p-4 rounded-full mb-4">
                <Star className="text-pink-500" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">5-Star Reviews</h3>
              <p className="text-sm text-gray-600">Loved by travelers worldwide for our friendly service and unique tours.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition-transform hover:scale-105">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <ShieldCheck className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Trusted & Safe</h3>
              <p className="text-sm text-gray-600">Licensed guides, verified partners, and safe transport options.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden px-4 sm:px-8 lg:px-12">
        {/* Full background image with dark overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            width={1600}
            height={900}
            src='/ella-train.jpg'
            alt="bg image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        </div>

        {/* Main content */}
        <div className="relative z-20 max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 px-2 sm:px-0">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Explore Sri Lanka
              </h2>
              <p className="text-cyan-100">
                Discover the pearl of the Indian Ocean
              </p>
            </div>
            <Link
              href="/about"
              className="group flex items-center mt-4 md:mt-0 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              View all
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 auto-rows-auto">
            {popularDestinations.map((dest) => (
              <div
                key={dest.id}
                className={`group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-500 ${getCardClasses(dest.size)}`}
              >
                <Link href={`#${dest.name.toLowerCase()}`} className="block h-full">
                  <div className="relative h-full min-h-48 overflow-hidden">
                    <Image
                      width={320}
                      height={320}
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(dest.id);
                      }}
                      className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all duration-300 z-10"
                    >
                      <Heart
                        size={18}
                        className={`${favorites[dest.id] ? 'fill-red-500 text-red-500' : 'text-white'} transition-colors`}
                      />
                    </button>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <div className="flex items-center space-x-2">
                        <MapPin size={18} className="text-white flex-shrink-0" />
                        <h3 className="text-lg md:text-xl font-bold text-white truncate">{dest.name}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
<ServicesSection/>
     


      {/* Newsletter */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Get Travel Inspiration</h2>
          <p className="text-gray-600 mb-8">Sign up for our newsletter and receive exclusive deals, travel tips, and more.</p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>


    </div>
  );
}
