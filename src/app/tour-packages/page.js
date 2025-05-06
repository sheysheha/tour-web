'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Map, Calendar, Users, Filter, X, Star, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function page() {
    const [filters, setFilters] = useState({
        destination: '',
        tourType: '',
        duration: '',
        price: '',
    });

    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Sample tour data
    const allTours = [
        {
            id: 1,
            title: "Cultural Heritage Tour",
            description: "Explore Sri Lanka's rich cultural heritage with visits to ancient temples, historical sites, and traditional villages.",
            location: "Kandy, Sigiriya, Anuradhapura",
            duration: "5 Days",
            price: 599,
            rating: 4.9,
            reviews: 124,
            image: "/sigiriya.png",
            tourType: "cultural",
            featured: true,
            highlights: ["UNESCO World Heritage Sites", "Ancient Temples", "Traditional Dance Performances", "Local Cuisine Experience"]
        },
        {
            id: 2,
            title: "Coastal Paradise Excursion",
            description: "Relax on pristine beaches, enjoy water sports, and explore colonial coastal towns on this beach getaway.",
            location: "Mirissa, Unawatuna, Galle",
            duration: "4 Days",
            price: 499,
            rating: 4.8,
            reviews: 96,
            image: "/beach.jpg",
            tourType: "beach",
            featured: true,
            highlights: ["Whale Watching", "Pristine Beaches", "Galle Fort", "Sunset Cruise"]
        },
        {
            id: 3,
            title: "Tea Plantations & Highlands",
            description: "Journey through misty mountains, lush tea plantations and experience the cool climate of Sri Lanka's hill country.",
            location: "Nuwara Eliya, Ella, Haputale",
            duration: "3 Days",
            price: 399,
            rating: 4.7,
            reviews: 85,
            image: "/nuwaraeliya.jpg",
            tourType: "nature",
            featured: true,
            highlights: ["Tea Factory Visit", "Train Ride Through Mountains", "Little Adam's Peak", "Nine Arch Bridge"]
        },
        {
            id: 4,
            title: "Wildlife Safari Adventure",
            description: "Encounter elephants, leopards, and a diverse array of bird species on this exciting wildlife safari through national parks.",
            location: "Yala, Udawalawe, Minneriya",
            duration: "6 Days",
            price: 799,
            rating: 4.9,
            reviews: 110,
            image: "/safari.jpg",
            tourType: "nature",
            featured: true,
            highlights: ["Leopard Spotting", "Elephant Gathering", "Bird Watching", "Camping Experience"]
        },
        {
            id: 5,
            title: "Ayurveda & Wellness Retreat",
            description: "Rejuvenate your mind, body and soul with traditional Ayurvedic treatments and yoga in serene settings.",
            location: "Bentota, Beruwala",
            duration: "7 Days",
            price: 999,
            rating: 4.8,
            reviews: 72,
            image: "/beach5.jpg",
            tourType: "wellness",
            featured: false,
            highlights: ["Ayurvedic Treatments", "Yoga Sessions", "Meditation", "Herbal Gardens Visit"]
        },
        {
            id: 6,
            title: "Adventure Trekking Tour",
            description: "Challenge yourself with exciting treks through rainforests, mountains and spectacular landscapes.",
            location: "Knuckles, Horton Plains, Sinharaja",
            duration: "8 Days",
            price: 899,
            rating: 4.7,
            reviews: 63,
            image: "/camping.jpg",
            tourType: "adventure",
            featured: false,
            highlights: ["Knuckles Mountain Range", "World's End", "Rainforest Exploration", "Waterfall Hikes"]
        },
        {
            id: 7,
            title: "Sri Lankan Culinary Journey",
            description: "Savor the flavors of authentic Sri Lankan cuisine and learn to prepare traditional dishes with local chefs.",
            location: "Colombo, Galle, Kandy",
            duration: "4 Days",
            price: 549,
            rating: 4.6,
            reviews: 48,
            image: "/cult-dp.jpg",
            tourType: "food",
            featured: false,
            highlights: ["Cooking Classes", "Spice Garden Visit", "Street Food Tours", "Tea Tasting"]
        },
        {
            id: 8,
            title: "Island Hopping Experience",
            description: "Explore the small islands around Sri Lanka, with their unique cultures, pristine beaches and coral reefs.",
            location: "Jaffna Islands, Trincomalee",
            duration: "5 Days",
            price: 699,
            rating: 4.8,
            reviews: 52,
            image: "/Leopard.jpg",
            tourType: "adventure",
            featured: false,
            highlights: ["Boat Excursions", "Snorkeling", "Local Island Communities", "Fresh Seafood"]
        },
        {
            id: 9,
            title: "Ancient Kingdoms Explorer",
            description: "Discover the ancient civilizations of Sri Lanka through their majestic ruins, irrigation systems and art.",
            location: "Polonnaruwa, Anuradhapura, Dambulla",
            duration: "6 Days",
            price: 649,
            rating: 4.9,
            reviews: 87,
            image: "/anupura.jpg",
            tourType: "cultural",
            featured: false,
            highlights: ["Ancient Ruins", "Cave Temples", "Sacred Bo Tree", "Rock Fortresses"]
        },
        {
            id: 10,
            title: "Honeymoon Special Package",
            description: "Romantic getaway featuring luxury accommodations, private dining experiences and unforgettable moments.",
            location: "Bentota, Kandy, Ella",
            duration: "7 Days",
            price: 1299,
            rating: 5.0,
            reviews: 41,
            image: "/tuktuk.jpg",
            tourType: "romantic",
            featured: false,
            highlights: ["Luxury Stays", "Private Dinners", "Couples Spa", "Romantic Excursions"]
        },
        {
            id: 11,
            title: "Photography Tour of Sri Lanka",
            description: "Capture the stunning landscapes, wildlife and cultural moments with guidance from professional photographers.",
            location: "Island-wide",
            duration: "10 Days",
            price: 1199,
            rating: 4.8,
            reviews: 35,
            image: "/solo-traveller.jpg",
            tourType: "special",
            featured: false,
            highlights: ["Photography Workshops", "Golden Hour Shoots", "Wildlife Photography", "Portrait Sessions"]
        },
        {
            id: 12,
            title: "Family Adventure Package",
            description: "Fun-filled activities for the whole family, with child-friendly accommodations and educational experiences.",
            location: "Colombo, Bentota, Habarana",
            duration: "6 Days",
            price: 849,
            rating: 4.7,
            reviews: 66,
            image: "/sigiriya-group.jpg",
            tourType: "family",
            featured: false,
            highlights: ["Elephant Orphanage", "Turtle Hatchery", "Water Parks", "Interactive Cultural Activities"]
        },
    ];

    // Filter tours based on selected filters and search query
    const filteredTours = allTours.filter(tour => {
        return (
            (filters.destination === '' || tour.location.toLowerCase().includes(filters.destination.toLowerCase())) &&
            (filters.tourType === '' || tour.tourType === filters.tourType) &&
            (filters.duration === '' || getDurationCategory(tour.duration) === filters.duration) &&
            (filters.price === '' || getPriceCategory(tour.price) === filters.price) &&
            (searchQuery === '' ||
                tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tour.location.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });

    // Helper functions for filtering
    function getDurationCategory(duration) {
        const days = parseInt(duration);
        if (days <= 3) return 'short';
        if (days <= 7) return 'medium';
        return 'long';
    }

    function getPriceCategory(price) {
        if (price < 500) return 'budget';
        if (price < 800) return 'standard';
        return 'luxury';
    }

    // Handle filter changes
    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    // Reset all filters
    const resetFilters = () => {
        setFilters({
            destination: '',
            tourType: '',
            duration: '',
            price: '',
        });
        setSearchQuery('');
    };
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Tours & Packages | Sri Lanka Journeys</title>
                <meta name="description" content="Explore our wide range of guided tours across Sri Lanka - from cultural experiences to wildlife safaris and beach getaways." />
            </Head>

            {/* Page Header */}
            <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                    src="/t-dp.jpg"
                    alt="Sri Lanka Tours"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tours & Packages</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto px-4">
                            Discover our handcrafted tours showcasing the best of Sri Lanka
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-5">
                <div className="mb-3">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                       

                        <button
                            onClick={() => setShowMobileFilters(true)}
                            className="md:hidden bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center"
                        >
                            <Filter className="h-5 w-5 mr-2" /> Filter Tours
                        </button>
                    </div>

                    {/* Desktop Filters */}
                    <div className="hidden md:flex bg-gray-50 rounded-lg p-4 gap-4 flex-wrap">
                        {/* Destination Filter */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Destination</label>
                            <select
                                value={filters.destination}
                                onChange={(e) => handleFilterChange('destination', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            >
                                <option value="">All Destinations</option>
                                <option value="Colombo">Colombo</option>
                                <option value="Kandy">Kandy</option>
                                <option value="Galle">Galle</option>
                                <option value="Ella">Ella</option>
                                <option value="Sigiriya">Sigiriya</option>
                                <option value="Yala">Yala</option>
                            </select>
                        </div>

                        {/* Tour Type Filter */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Tour Type</label>
                            <select
                                value={filters.tourType}
                                onChange={(e) => handleFilterChange('tourType', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            >
                                <option value="">All Types</option>
                                <option value="cultural">Cultural</option>
                                <option value="beach">Beach</option>
                                <option value="nature">Nature</option>
                                <option value="wildlife">Wildlife</option>
                                <option value="adventure">Adventure</option>
                                <option value="wellness">Wellness</option>
                                <option value="food">Food</option>
                                <option value="romantic">Romantic</option>
                                <option value="family">Family</option>
                            </select>
                        </div>

                        {/* Duration Filter */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Duration</label>
                            <select
                                value={filters.duration}
                                onChange={(e) => handleFilterChange('duration', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            >
                                <option value="">Any Duration</option>
                                <option value="short">1-3 Days</option>
                                <option value="medium">4-7 Days</option>
                                <option value="long">8+ Days</option>
                            </select>
                        </div>

                        {/* Price Filter */}
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Price Range</label>
                            <select
                                value={filters.price}
                                onChange={(e) => handleFilterChange('price', e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            >
                                <option value="">Any Price</option>
                                <option value="budget">Budget (Under $500)</option>
                                <option value="standard">Standard ($500-$800)</option>
                                <option value="luxury">Luxury (Over $800)</option>
                            </select>
                        </div>

                        {/* Reset Button */}
                        <div className="flex items-end">
                            <button
                                onClick={resetFilters}
                                className="p-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-300"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Mobile Filters */}
                    {showMobileFilters && (
                        <div className="fixed inset-0 bg-gray-900/50 z-50 flex justify-end">
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                className="bg-white w-4/5 h-full overflow-y-auto p-6"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold">Filter Tours</h3>
                                    <button onClick={() => setShowMobileFilters(false)}>
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* Destination Filter */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                                    <select
                                        value={filters.destination}
                                        onChange={(e) => handleFilterChange('destination', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    >
                                        <option value="">All Destinations</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Kandy">Kandy</option>
                                        <option value="Galle">Galle</option>
                                        <option value="Ella">Ella</option>
                                        <option value="Sigiriya">Sigiriya</option>
                                        <option value="Yala">Yala</option>
                                    </select>
                                </div>

                                {/* Tour Type Filter */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Tour Type</label>
                                    <select
                                        value={filters.tourType}
                                        onChange={(e) => handleFilterChange('tourType', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    >
                                        <option value="">All Types</option>
                                        <option value="cultural">Cultural</option>
                                        <option value="beach">Beach</option>
                                        <option value="nature">Nature</option>
                                        <option value="wildlife">Wildlife</option>
                                        <option value="adventure">Adventure</option>
                                        <option value="wellness">Wellness</option>
                                        <option value="food">Food</option>
                                        <option value="romantic">Romantic</option>
                                        <option value="family">Family</option>
                                    </select>
                                </div>

                                {/* Duration Filter */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                                    <select
                                        value={filters.duration}
                                        onChange={(e) => handleFilterChange('duration', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    >
                                        <option value="">Any Duration</option>
                                        <option value="short">1-3 Days</option>
                                        <option value="medium">4-7 Days</option>
                                        <option value="long">8+ Days</option>
                                    </select>
                                </div>
                                {/* Price Filter */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                                    <select
                                        value={filters.price}
                                        onChange={(e) => handleFilterChange('price', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    >
                                        <option value="">Any Price</option>
                                        <option value="budget">Budget (Under $500)</option>
                                        <option value="standard">Standard ($500-$800)</option>
                                        <option value="luxury">Luxury (Over $800)</option>
                                    </select>
                                </div>
                                {/* Reset Button */}
                                <div className="flex justify-end">
                                    <button
                                        onClick={resetFilters}
                                        className="p-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-300"
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </div>
                {/* Tours List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTours.map(tour => (
                        <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src={tour.image}
                                alt={tour.title}
                                width={800}
                                height={500}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{tour.title}</h2>
                                <p className="text-gray-600 mb-2">{tour.description}</p>
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <Map className="mr-1" /> {tour.location}
                                </div>
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <Calendar className="mr-1" /> {tour.duration}
                                </div>
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <Users className="mr-1" /> {tour.reviews} Reviews
                                </div>
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <Star className="mr-1" /> {tour.rating} / 5
                                </div>
                                <p className="text-lg font-bold text-green-600 mb-4">${tour.price}</p>
                                <Link href={`/tours/${tour.id}`} className="bg-emerald-600 text-white px-4 py-2 rounded-lg block text-center">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
