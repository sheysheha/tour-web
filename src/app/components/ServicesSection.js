import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, Users, ChevronRight, ArrowRight, Car, Plane, Camera, Clock, Phone, CheckCircle, Compass, Link } from 'lucide-react';
import Image from 'next/image';

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState('roundtrips');
    const [isHovered, setIsHovered] = useState(null);

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


    // Round Trip Packages Data
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

    // Transfer Services Data
    const transfers = [
        {
            id: 1,
            title: "Airport ↔ Colombo",
            subtitle: "City Hotels & Business District",
            description: "Direct transfer to Colombo's main hotel areas including Fort, Kollupitiya, and Bambalapitiya.",
            distance: "35 km",
            duration: "45-60 min",

            vehicle: "Car/Van",
            features: ["Meet & Greet", "Free Waiting", "24/7 Available"],
            popular: true
        },
        {
            id: 2,
            title: "Airport ↔ Negombo",
            subtitle: "Beach Hotels & Resorts",
            description: "Quick transfer to Negombo's beautiful beaches and resort areas, perfect for immediate relaxation.",
            distance: "12 km",
            duration: "20-25 min",

            vehicle: "Car/Van",
            features: ["Shortest Route", "Beach Access", "Budget Friendly"],
            popular: true
        },
        {
            id: 3,
            title: "Airport ↔ Galle",
            subtitle: "Southern Coast & Fort City",
            description: "Scenic coastal drive to the historic Dutch fort city and southern beach destinations.",
            distance: "160 km",
            duration: "2.5-3 hours",

            vehicle: "Car/Van",
            features: ["Scenic Route", "Rest Stops", "Professional Driver"],
            popular: false
        },
        // {
        //     id: 4,
        //     title: "Airport ↔ Kandy",
        //     subtitle: "Cultural Capital & Hills",
        //     description: "Journey to the cultural heart of Sri Lanka through scenic mountain roads.",
        //     distance: "130 km",
        //     duration: "3-3.5 hours",

        //     vehicle: "Mountain-ready Vehicle",
        //     features: ["Mountain Views", "Cultural Sites", "Cool Climate"],
        //     popular: false
        // }
    ];

    // Excursion Data
    const excursions = [
        {
            id: 1,
            title: "Colombo City Discovery",
            subtitle: "Capital Highlights Tour",
            description: "Comprehensive city tour covering colonial heritage, modern attractions, and local culture.",
            duration: "4 Hours",
            timeType: "Half Day",

            groupSize: "1-8 people",
            highlights: ["Independence Square", "Gangaramaya Temple", "Pettah Market", "Galle Face Green"],
            includes: ["Professional Guide", "Air-conditioned Vehicle", "Transport", "Hotel Pickup"],
            difficulty: "Easy"
        },
        {
            id: 2,
            title: "Negombo Lagoon Safari",
            subtitle: "Wildlife & Mangroves",
            description: "Boat safari through pristine lagoon ecosystems with diverse bird species and fishing villages.",
            duration: "3 Hours",
            timeType: "Half Day",

            groupSize: "2-12 people",
            highlights: ["200+ Bird Species", "Mangrove Forests", "Traditional Fishing", "Boat Safari"],
            includes: ["Local Guide", "Transport", "Air-conditioned Vehicle", "Hotel Pickup"],
            difficulty: "Easy"
        },
        // {
        //     id: 3,
        //     title: "Pinnawala Elephant Orphanage",
        //     subtitle: "Wildlife Conservation Experience",
        //     description: "Visit the world's largest elephant orphanage and witness feeding, bathing, and care routines.",
        //     duration: "8 Hours",
        //     timeType: "Full Day",

        //     groupSize: "1-15 people",
        //     highlights: ["80+ Elephants", "Feeding Time", "River Bathing", "Baby Elephants"],
        //     includes: ["Entry Tickets", "Lunch", "Transport", "Guide"],
        //     difficulty: "Easy"
        // },
        {
            id: 4,
            title: "Sigiriya Rock Fortress",
            subtitle: "Ancient Wonder Climb",
            description: "Climb the famous Lion Rock fortress and explore 1,500-year-old frescoes and gardens.",
            duration: "10 Hours",
            timeType: "Full Day",

            groupSize: "1-10 people",
            highlights: ["UNESCO World Heritage", "Ancient Frescoes", "Summit Views", "Royal Gardens"],
            includes: ["Transport", "Professional Guide", "Air-conditioned Vehicle", "Hotel Pickup"],
            difficulty: "Moderate"
        }
    ];

    const tabButtons = [
        { id: 'roundtrips', label: 'Round Trip Tours', icon: Compass, description: 'Multi-day adventures' },
        { id: 'transfers', label: 'Transfers', icon: Car, description: 'Point-to-point transport' },
        { id: 'excursions', label: 'Day Excursions', icon: Camera, description: 'Single-day experiences' }
    ];

    return (
        <section className="relative py-0 overflow-hidden bg-gradient-to-b from-cyan-50 to-white">
            <div className="py-12 px-4  md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Main Header */}
                    <div className="text-center mb-8">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        >
                            Our <span className="text-cyan-600">Travel Services</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
                        >
                            Discover Sri Lanka with our comprehensive travel solutions - from multi-day cultural tours to convenient airport transfers and exciting day trips.
                        </motion.p>
                    </div>

                    {/* Enhanced Tab Navigation */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {tabButtons.map((tab) => {
                            const IconComponent = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`group flex justify-center items-center flex-col p-4 rounded-2xl border-2 transition-all duration-300 text-left
                                        ${activeTab === tab.id
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent text-white shadow-gray-400 shadow-md'
                                            : 'bg-white border-gray-200 hover:border-cyan-600 hover:shadow-md text-gray-700'
                                        }`}
                                >
                                    <div className="flex items-center mb-1">
                                        <IconComponent
                                            size={28}
                                            className={`mr-3 ${activeTab === tab.id ? 'text-white' : 'text-cyan-600'}`}
                                        />
                                        <h3 className="text-lg font-semibold">{tab.label}</h3>
                                    </div>
                                    <p className={`text-sm ${activeTab === tab.id ? 'text-blue-100' : 'text-gray-500'}`}>
                                        {tab.description}
                                    </p>
                                </button>

                            );
                        })}
                    </div>

                    {/* Round Trips Content */}
                    {activeTab === 'roundtrips' && (
                        <motion.div
                            key="roundtrips"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="max-w-7xl mx-auto">


                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    {packages.map((pkg) => (
                                        <motion.div
                                            key={pkg.id}
                                            variants={itemVariants}
                                            onMouseEnter={() => setIsHovered(pkg.id)}
                                            onMouseLeave={() => setIsHovered(null)}
                                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                        >
                                            <div className="relative h-48 w-full">
                                                <Image
                                                    src={pkg.imageUrl}
                                                    alt={pkg.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />

                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-cyan-800 mb-2">{pkg.title}</h3>
                                                <p className="text-gray-600 mb-4">{pkg.description}</p>

                                                <div className="flex items-center space-x-1 mb-2 text-amber-500">
                                                    <Star size={16} fill="currentColor" />
                                                    <span className="text-sm font-medium">{pkg.rating}</span>
                                                </div>

                                                <div className="space-y-2 mb-6">
                                                    <div className="flex items-center text-gray-500">
                                                        <MapPin size={16} className="mr-2 text-cyan-600" />
                                                        <span className="text-sm">{pkg.location}</span>
                                                    </div>
                                                    <div className="flex items-center text-gray-500">
                                                        <Calendar size={16} className="mr-2 text-cyan-600" />
                                                        <span className="text-sm">{pkg.duration}</span>
                                                    </div>
                                                    <div className="flex items-center text-gray-500">
                                                        <Users size={16} className="mr-2 text-cyan-600" />
                                                        <span className="text-sm">{pkg.persons} people</span>
                                                    </div>
                                                </div>

                                                <button className={`w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center ${isHovered === pkg.id ? 'bg-cyan-700' : ''}`}>
                                                    View Details
                                                    <ChevronRight size={16} className="ml-1" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="mt-12 text-center"
                                >
                                    <button className="inline-flex items-center justify-center bg-cyan-800 hover:bg-cyan-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                                        View All Packages
                                        <ArrowRight size={18} className="ml-2" />
                                    </button>
                                </motion.div>
                                {/* <div className="sm:hidden fixed bottom-4 left-0 right-0 z-50 px-4">
                                    <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-base font-semibold py-3 rounded-xl shadow-lg transition duration-300">
                                        Inquire Now
                                    </button>
                                </div> */}
                            </div>
                        </motion.div>
                    )}

                    {/* Transfers Content */}
                    {activeTab === 'transfers' && (
                        <motion.div
                            key="transfers"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {transfers.map((transfer) => (
                                    <motion.div
                                        key={transfer.id}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-800">{transfer.title}</h4>
                                                <p className="text-cyan-600 font-medium text-sm">{transfer.subtitle}</p>
                                            </div>
                                            {transfer.popular && (
                                                <span className="ml-2 bg-cyan-600 text-white text-xs px-2 py-1 rounded-full">
                                                    Popular
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{transfer.description}</p>

                                        <div className="space-y-2 text-sm text-gray-600 mb-6">
                                            <div className="flex items-center">
                                                <MapPin size={16} className="mr-2 text-green-600" />
                                                <span>{transfer.distance}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock size={16} className="mr-2 text-orange-600" />
                                                <span>{transfer.duration}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Car size={16} className="mr-2 text-blue-600" />
                                                <span>{transfer.vehicle}</span>
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            className="mt-auto bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                                        >
                                            Request Transfer Quote
                                            <ChevronRight size={16} className="ml-1" />
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 text-center text-white">
                                    <Phone size={32} className="mx-auto mb-3" />
                                    <h4 className="text-2xl font-bold mb-2">Need a Custom Transfer?</h4>
                                    <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
                                        We're available 24/7 to take you anywhere in Sri Lanka. Let us know your needs and we'll arrange it.
                                    </p>
                                    <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                                        Get Custom Quote
                                    </button>
                                </div>
                            </div>

                        </motion.div>
                    )}


                    {/* Excursions Content */}
                    {activeTab === 'excursions' && (
                        <motion.div
                            key="excursions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {excursions.map((excursion) => (
                                    <motion.div
                                        key={excursion.id}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                                    >
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-gray-800 mb-1">{excursion.title}</h4>
                                                <p className="text-cyan-600 font-medium text-sm mb-2">{excursion.subtitle}</p>
                                                <p className="text-gray-600 text-sm leading-relaxed">{excursion.description}</p>
                                            </div>
                                            {/* <div className="text-right ml-4">
                                                <div className="text-3xl font-bold text-cyan-600">${excursion.price}</div>
                                                <div className="text-sm text-gray-500">per person</div>
                                            </div> */}
                                        </div>

                                        {/* Highlights */}
                                        <div className="mb-6">
                                            <p className="text-sm font-medium text-gray-700 mb-3">Tour Highlights:</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {excursion.highlights.map((highlight, index) => (
                                                    <div key={index} className="flex items-center text-sm text-gray-600">
                                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                                                        {highlight}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Includes */}
                                        <div className="mb-6">
                                            <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {excursion.includes.map((item, index) => (
                                                    <span key={index} className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-400">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                            Request Excursion Quote
                                            <ChevronRight size={16} className="ml-1" />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <button className="inline-flex items-center justify-center bg-cyan-800 hover:bg-cyan-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                                    Request an Excursions
                                    <ArrowRight size={18} className="ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;