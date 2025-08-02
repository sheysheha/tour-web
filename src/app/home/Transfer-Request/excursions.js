"use client"
import React, { useState } from 'react';
import { 
  ArrowLeft, MapPin, Clock, Users, Calendar, Star, 
  Camera, Mountain, Waves, TreePine, Building,
  ChevronRight, Heart, Share2, Filter, Search,
  CheckCircle, Phone, MessageCircle, Shield,
  Car, Plane, Coffee, Utensils, Wifi, Sun
} from 'lucide-react';

const ExcursionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Tours', icon: MapPin },
    { id: 'cultural', name: 'Cultural', icon: Building },
    { id: 'nature', name: 'Nature', icon: TreePine },
    { id: 'adventure', name: 'Adventure', icon: Mountain },
    { id: 'beach', name: 'Beach', icon: Waves },
    { id: 'wildlife', name: 'Wildlife', icon: Camera }
  ];

  const durations = [
    { id: 'all', name: 'Any Duration' },
    { id: 'half-day', name: 'Half Day (4-6 hours)' },
    { id: 'full-day', name: 'Full Day (8-12 hours)' },
    { id: 'multi-day', name: 'Multi-Day (2+ days)' }
  ];

  const excursions = [
    {
      id: 1,
      title: "Sigiriya Rock Fortress & Dambulla Cave Temple",
      category: 'cultural',
      duration: 'full-day',
      price: 85,
      originalPrice: 100,
      rating: 4.9,
      reviews: 234,
      image: "/api/placeholder/400/250",
      location: "Central Province",
      highlights: ["UNESCO World Heritage Sites", "Ancient Frescoes", "Panoramic Views", "Cave Paintings"],
      includes: ["Transportation", "English Guide", "Entrance Fees", "Lunch"],
      groupSize: "2-15 people",
      duration_detail: "10 hours",
      description: "Explore Sri Lanka's most iconic archaeological sites including the legendary Sigiriya Rock Fortress and the ancient Dambulla Cave Temple complex.",
      itinerary: [
        "6:00 AM - Hotel pickup from Colombo",
        "9:30 AM - Arrive at Dambulla Cave Temple",
        "11:00 AM - Sigiriya Rock Fortress climb",
        "1:00 PM - Traditional Sri Lankan lunch",
        "3:00 PM - Village tour & local crafts",
        "6:00 PM - Return journey to Colombo"
      ]
    },
    {
      id: 2,
      title: "Kandy Cultural Triangle Day Tour",
      category: 'cultural',
      duration: 'full-day',
      price: 75,
      originalPrice: 90,
      rating: 4.8,
      reviews: 189,
      image: "/api/placeholder/400/250",
      location: "Kandy",
      highlights: ["Temple of Tooth Relic", "Royal Botanical Gardens", "Traditional Dance Show", "Tea Factory Visit"],
      includes: ["Transportation", "Guide", "All Entrances", "Cultural Show"],
      groupSize: "2-20 people",
      duration_detail: "9 hours",
      description: "Immerse yourself in Sri Lanka's cultural heart with visits to sacred temples, lush gardens, and traditional performances.",
      itinerary: [
        "7:00 AM - Depart from Colombo",
        "10:00 AM - Temple of the Tooth Relic",
        "12:00 PM - Royal Botanical Gardens",
        "2:00 PM - Traditional lunch",
        "4:00 PM - Tea factory & tasting",
        "6:00 PM - Cultural dance performance"
      ]
    },
    {
      id: 3,
      title: "Yala National Park Safari Adventure",
      category: 'wildlife',
      duration: 'full-day',
      price: 95,
      originalPrice: null,
      rating: 4.9,
      reviews: 156,
      image: "/api/placeholder/400/250",
      location: "Southern Province",
      highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching", "Scenic Landscapes"],
      includes: ["4WD Safari Vehicle", "Professional Guide", "Park Fees", "Refreshments"],
      groupSize: "2-6 people",
      duration_detail: "8 hours",
      description: "Embark on an unforgettable safari through Sri Lanka's most famous national park, home to the world's highest density of leopards.",
      itinerary: [
        "5:30 AM - Early morning pickup",
        "6:30 AM - First safari session",
        "10:00 AM - Breakfast break",
        "11:00 AM - Second safari session",
        "2:00 PM - Lunch at safari lodge",
        "4:00 PM - Return journey"
      ]
    },
    {
      id: 4,
      title: "Ella Hill Country & Nine Arch Bridge",
      category: 'nature',
      duration: 'full-day',
      price: 70,
      originalPrice: 85,
      rating: 4.7,
      reviews: 201,
      image: "/api/placeholder/400/250",
      location: "Ella",
      highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Tea Plantations", "Scenic Train Ride"],
      includes: ["Transportation", "Guide", "Train Tickets", "Hiking"],
      groupSize: "2-12 people",
      duration_detail: "11 hours",
      description: "Discover the breathtaking beauty of Sri Lanka's hill country with stunning vistas, colonial architecture, and lush tea estates.",
      itinerary: [
        "6:00 AM - Depart to Ella",
        "9:00 AM - Nine Arch Bridge visit",
        "11:00 AM - Little Adam's Peak hike",
        "1:00 PM - Local lunch",
        "3:00 PM - Tea plantation tour",
        "5:00 PM - Scenic train journey"
      ]
    },
    {
      id: 5,
      title: "Galle Fort & Southern Coast Explorer",
      category: 'cultural',
      duration: 'full-day',
      price: 65,
      originalPrice: null,
      rating: 4.6,
      reviews: 178,
      image: "/api/placeholder/400/250",
      location: "Southern Coast",
      highlights: ["Dutch Colonial Fort", "Historic Lighthouse", "Turtle Hatchery", "Beach Time"],
      includes: ["Transportation", "Guide", "Entrance Fees", "Lunch"],
      groupSize: "2-15 people",
      duration_detail: "9 hours",
      description: "Explore the UNESCO World Heritage Galle Fort and enjoy the pristine beaches of Sri Lanka's southern coastline.",
      itinerary: [
        "7:30 AM - Colombo departure",
        "10:00 AM - Galle Fort exploration",
        "12:30 PM - Seafood lunch",
        "2:00 PM - Turtle hatchery visit",
        "4:00 PM - Beach relaxation",
        "6:00 PM - Return to Colombo"
      ]
    },
    {
      id: 6,
      title: "Adam's Peak Sunrise Trek",
      category: 'adventure',
      duration: 'multi-day',
      price: 120,
      originalPrice: 150,
      rating: 4.8,
      reviews: 92,
      image: "/api/placeholder/400/250",
      location: "Central Highlands",
      highlights: ["Sacred Mountain", "Sunrise Views", "Pilgrimage Trail", "Star Gazing"],
      includes: ["Mountain Guide", "Accommodation", "Meals", "Transport"],
      groupSize: "2-8 people",
      duration_detail: "2 days",
      description: "Challenge yourself with this spiritual journey to the summit of Adam's Peak for an unforgettable sunrise experience.",
      itinerary: [
        "Day 1: Arrive at base, afternoon rest",
        "11:00 PM: Begin night ascent",
        "5:30 AM: Reach summit for sunrise",
        "8:00 AM: Descent begins",
        "12:00 PM: Return to base"
      ]
    },
    {
      id: 7,
      title: "Mirissa Whale Watching & Beach Day",
      category: 'wildlife',
      duration: 'full-day',
      price: 80,
      originalPrice: null,
      rating: 4.5,
      reviews: 145,
      image: "/api/placeholder/400/250",
      location: "Mirissa",
      highlights: ["Blue Whales", "Dolphins", "Pristine Beaches", "Fresh Seafood"],
      includes: ["Boat Trip", "Life Jackets", "Breakfast", "Beach Access"],
      groupSize: "2-25 people",
      duration_detail: "10 hours",
      description: "Witness majestic blue whales and playful dolphins in their natural habitat, followed by relaxation on golden beaches.",
      itinerary: [
        "5:30 AM: Early departure",
        "7:00 AM: Whale watching boat trip",
        "11:00 AM: Return to shore",
        "12:00 PM: Beach lunch",
        "2:00 PM: Beach relaxation",
        "5:00 PM: Return journey"
      ]
    },
    {
      id: 8,
      title: "Polonnaruwa Ancient City Cycling Tour",
      category: 'cultural',
      duration: 'half-day',
      price: 45,
      originalPrice: 55,
      rating: 4.4,
      reviews: 87,
      image: "/api/placeholder/400/250",
      location: "North Central Province",
      highlights: ["Ancient Ruins", "Royal Palace", "Buddha Statues", "Cycling Adventure"],
      includes: ["Bicycle Rental", "Helmet", "Guide", "Water"],
      groupSize: "2-10 people",
      duration_detail: "5 hours",
      description: "Cycle through the ancient capital of Polonnaruwa, exploring magnificent ruins and archaeological treasures.",
      itinerary: [
        "8:00 AM: Meet at Polonnaruwa",
        "8:30 AM: Bicycle briefing",
        "9:00 AM: Royal Palace complex",
        "11:00 AM: Gal Vihara Buddha statues",
        "12:30 PM: Local lunch break"
      ]
    }
  ];

  const filteredExcursions = excursions.filter(excursion => {
    const matchesCategory = selectedCategory === 'all' || excursion.category === selectedCategory;
    const matchesDuration = selectedDuration === 'all' || excursion.duration === selectedDuration;
    const matchesSearch = excursion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         excursion.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesDuration && matchesSearch;
  });

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const [selectedExcursion, setSelectedExcursion] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button className="flex items-center text-cyan-600 hover:text-cyan-700 font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sri Lanka Excursions</h1>
          <p className="text-xl text-cyan-100 mb-8">
            Discover the wonders of Sri Lanka with our carefully curated tours and experiences
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="flex bg-white rounded-full shadow-lg overflow-hidden">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations, activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-800 focus:outline-none"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition-colors flex items-center"
              >
                <Filter size={20} className="mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        {showFilters && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center px-4 py-2 rounded-full border transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-cyan-600 text-white border-cyan-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-cyan-600'
                        }`}
                      >
                        <IconComponent size={16} className="mr-2" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Duration</label>
                <div className="space-y-2">
                  {durations.map((duration) => (
                    <button
                      key={duration.id}
                      onClick={() => setSelectedDuration(duration.id)}
                      className={`block w-full text-left px-4 py-2 rounded-lg border transition-colors ${
                        selectedDuration === duration.id
                          ? 'bg-cyan-600 text-white border-cyan-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-cyan-600'
                      }`}
                    >
                      {duration.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Category Filter */}
        <div className="flex items-center space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-cyan-50 border border-gray-200'
                }`}
              >
                <IconComponent size={18} className="mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredExcursions.length} of {excursions.length} excursions
          </p>
        </div>

        {/* Excursions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExcursions.map((excursion) => (
            <div key={excursion.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-r from-cyan-400 to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Camera size={48} />
                </div>
                {excursion.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${excursion.originalPrice - excursion.price}
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(excursion.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Heart
                    size={20}
                    className={favorites.has(excursion.id) ? 'text-red-500 fill-current' : 'text-gray-400'}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-cyan-600 font-medium">{excursion.location}</span>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{excursion.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({excursion.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                  {excursion.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Clock size={16} className="mr-2" />
                  <span className="mr-4">{excursion.duration_detail}</span>
                  <Users size={16} className="mr-2" />
                  <span>{excursion.groupSize}</span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {excursion.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {excursion.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        +{excursion.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-cyan-600">${excursion.price}</span>
                    {excursion.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">${excursion.originalPrice}</span>
                    )}
                    <span className="text-sm text-gray-600 ml-1">/ person</span>
                  </div>
                  <button
                    onClick={() => setSelectedExcursion(excursion)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                  >
                    View Details
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredExcursions.length === 0 && (
          <div className="text-center py-16">
            <MapPin size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No excursions found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDuration('all');
                setSearchTerm('');
              }}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Excursion Detail Modal */}
      {selectedExcursion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="relative h-64 bg-gradient-to-r from-cyan-400 to-blue-500">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <Camera size={64} />
              </div>
              <button
                onClick={() => setSelectedExcursion(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                ×
              </button>
              {selectedExcursion.originalPrice && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${selectedExcursion.originalPrice - selectedExcursion.price}
                </div>
              )}
            </div>

            <div className="p-8">
              {/* Title and Rating */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedExcursion.title}</h2>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span className="mr-6">{selectedExcursion.location}</span>
                    <Star size={18} className="text-yellow-400 fill-current mr-1" />
                    <span className="font-medium mr-1">{selectedExcursion.rating}</span>
                    <span>({selectedExcursion.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-cyan-600">${selectedExcursion.price}</span>
                    {selectedExcursion.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">${selectedExcursion.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-gray-600">per person</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center">
                  <Clock size={20} className="text-cyan-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-800">Duration</div>
                    <div className="text-sm text-gray-600">{selectedExcursion.duration_detail}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="text-cyan-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-800">Group Size</div>
                    <div className="text-sm text-gray-600">{selectedExcursion.groupSize}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Car size={20} className="text-cyan-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-800">Transport</div>
                    <div className="text-sm text-gray-600">Included</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedExcursion.description}</p>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Highlights</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedExcursion.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What's Included</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedExcursion.includes.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Itinerary</h3>
                <div className="space-y-3">
                  {selectedExcursion.itinerary.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg">
                  Book Now - ${selectedExcursion.price}
                </button>
                <button className="flex-1 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-semibold py-4 px-8 rounded-lg transition-colors">
                  Add to Wishlist
                </button>
                <button className="sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded-lg transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Strip */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white text-center">
            <div className="flex flex-col items-center">
              <Shield size={48} className="mb-4 text-cyan-200" />
              <h3 className="text-lg font-bold mb-2">Safe & Secure</h3>
              <p className="text-cyan-100 text-sm">Licensed guides & insured activities</p>
            </div>
            <div className="flex flex-col items-center">
              <Star size={48} className="mb-4 text-cyan-200" />
              <h3 className="text-lg font-bold mb-2">Highly Rated</h3>
              <p className="text-cyan-100 text-sm">4.8+ average rating from travelers</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone size={48} className="mb-4 text-cyan-200" />
              <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-cyan-100 text-sm">Round-the-clock assistance</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle size={48} className="mb-4 text-cyan-200" />
              <h3 className="text-lg font-bold mb-2">Best Price</h3>
              <p className="text-cyan-100 text-sm">Guaranteed lowest prices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Excursions?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're passionate about showcasing the best of Sri Lanka through authentic, memorable experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Expert Local Guides</h3>
              <p className="text-gray-600 text-sm">
                Our certified guides are locals who know the hidden gems and fascinating stories behind every destination.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Comfortable Transport</h3>
              <p className="text-gray-600 text-sm">
                Air-conditioned vehicles with professional drivers ensure your journey is as enjoyable as the destination.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Small Groups</h3>
              <p className="text-gray-600 text-sm">
                Intimate group sizes ensure personalized attention and a more authentic travel experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Safety First</h3>
              <p className="text-gray-600 text-sm">
                All activities are fully insured with comprehensive safety measures and emergency protocols in place.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Authentic Experiences</h3>
              <p className="text-gray-600 text-sm">
                We focus on genuine cultural interactions and off-the-beaten-path locations for unique memories.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Flexible Booking</h3>
              <p className="text-gray-600 text-sm">
                Easy booking process with flexible cancellation policies and customizable itineraries available.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600">Read reviews from fellow adventurers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">2 days ago</span>
              </div>
              <p className="text-gray-700 mb-4">
                "The Sigiriya tour was absolutely incredible! Our guide was knowledgeable and the views from the top were breathtaking. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cyan-200 rounded-full flex items-center justify-center">
                  <span className="text-cyan-700 font-semibold">SA</span>
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-800">Sarah Anderson</div>
                  <div className="text-sm text-gray-600">United Kingdom</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">1 week ago</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Amazing whale watching experience in Mirissa! We saw blue whales and dolphins. The boat crew was professional and safety-conscious."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cyan-200 rounded-full flex items-center justify-center">
                  <span className="text-cyan-700 font-semibold">MJ</span>
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-800">Michael Johnson</div>
                  <div className="text-sm text-gray-600">Australia</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">2 weeks ago</span>
              </div>
              <p className="text-gray-700 mb-4">
                "The cultural tour of Kandy was perfect! The Temple of the Tooth was magnificent and the tea plantation visit was educational and fun."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cyan-200 rounded-full flex items-center justify-center">
                  <span className="text-cyan-700 font-semibold">LP</span>
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-800">Lisa Patel</div>
                  <div className="text-sm text-gray-600">Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Sri Lankan Adventure?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Book your excursion today and create memories that will last a lifetime
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center">
              <Phone size={20} className="mr-2" />
              Call Us Now
            </button>
            <button className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center">
              <MessageCircle size={20} className="mr-2" />
              Chat with Expert
            </button>
          </div>
          
          <div className="mt-8 text-cyan-100">
            <p className="mb-2">Questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center">
                <MessageCircle size={16} className="mr-2" />
                <span>info@srilankaexcursions.com</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Sri Lanka Excursions</h3>
              <p className="text-gray-300 text-sm mb-4">
                Your trusted partner for authentic Sri Lankan travel experiences since 2015.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">i</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Popular Tours</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Sigiriya & Dambulla</a></li>
                <li><a href="#" className="hover:text-white">Kandy Cultural Tour</a></li>
                <li><a href="#" className="hover:text-white">Yala Safari</a></li>
                <li><a href="#" className="hover:text-white">Ella Hill Country</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Booking Terms</a></li>
                <li><a href="#" className="hover:text-white">Cancellation Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <Phone size={14} className="mr-2" />
                  <span>+94 11 234 5678</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle size={14} className="mr-2" />
                  <span>info@excursions.lk</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={14} className="mr-2 mt-0.5" />
                  <span>123 Galle Road, Colombo 03, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2025 Sri Lanka Excursions. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExcursionPage;