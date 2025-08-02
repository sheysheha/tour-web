'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    MapPin, Clock, Camera, Star, Users, Calendar, ArrowRight, 
    Plane, Car, Mountain, Waves, TreePine, Building, Sun, 
    Coffee, Utensils, Hotel, Shield, Phone, MessageCircle,
    ChevronRight, ChevronLeft, Heart, Share2, Info
} from 'lucide-react';

const LocationDetailsPage = () => {
    // This would normally come from URL params or query
    const [currentLocationSlug, setCurrentLocationSlug] = useState('ella');
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [showBookingForm, setShowBookingForm] = useState(false);

    // Sample location data - in real app, this would come from API/CMS
    const locationData = {
        sigiriya: {
            name: "Sigiriya Rock Fortress",
            slug: "sigiriya",
            subtitle: "Ancient Rock Fortress & UNESCO World Heritage Site",
            description: "Rise above the clouds at Sigiriya, Sri Lanka's most iconic archaeological wonder. This 5th-century fortress, built atop a 200-meter granite rock, showcases ancient engineering brilliance and artistic mastery that will leave you breathless.",
            longDescription: "Sigiriya, often called the 'Eighth Wonder of the World,' is a testament to ancient Sri Lankan ingenuity. King Kasyapa built this sky-high palace in 477 AD, complete with elaborate gardens, sophisticated water systems, and world-famous frescoes. The mirror wall, once polished to perfection, still bears ancient graffiti from visitors over 1,000 years ago. Today, climbing the 1,200 steps to the summit rewards you with panoramic views and a deep connection to Sri Lanka's royal heritage.",
            images: [
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1566649950729-0a0d1b4c2a98?w=800&h=600&fit=crop"
            ],
            location: {
                province: "Central Province",
                district: "Matale",
                nearestCity: "Dambulla",
                coordinates: "7.9568° N, 80.7592° E"
            },
            highlights: [
                "1,500-year-old rock fortress",
                "World-famous ancient frescoes",
                "Stunning 360° summit views",
                "UNESCO World Heritage Site",
                "Royal water gardens",
                "Ancient mirror wall graffiti"
            ],
            bestTimeToVisit: {
                months: "December to March",
                weather: "Dry season with comfortable temperatures",
                crowdLevel: "Moderate to High"
            },
            visitInfo: {
                duration: "4-6 hours",
                difficulty: "Moderate (1,200 steps)",
                openHours: "7:00 AM - 5:00 PM",
                entryFee: "$30 for foreigners",
                bestTimeOfDay: "Early morning (7-9 AM) to avoid crowds and heat"
            },
            nearbyAttractions: [
                { name: "Dambulla Cave Temple", distance: "20 km", time: "30 min" },
                { name: "Minneriya National Park", distance: "50 km", time: "1 hour" },
                { name: "Polonnaruwa Ancient City", distance: "70 km", time: "1.5 hours" }
            ],
            ourServices: [
                {
                    title: "Sigiriya Day Tour",
                    description: "Complete day tour with professional guide and transport",
                    duration: "8 hours",
                    price: "From $85",
                    includes: ["Transport", "Professional guide", "Entry tickets", "Lunch"]
                },
                {
                    title: "Cultural Triangle Package",
                    description: "3-day tour covering Sigiriya, Dambulla, and Polonnaruwa",
                    duration: "3 days",
                    price: "From $299",
                    includes: ["Accommodation", "All meals", "Transport", "Guide", "All entries"]
                },
               
            ],
            tips: [
                "Wear comfortable walking shoes with good grip",
                "Bring sun protection and plenty of water",
                "Start early to avoid crowds and heat",
                "Respect the ancient site - no touching frescoes",
                "Photography is allowed but no flash near frescoes"
            ],
            seoData: {
                metaTitle: "Sigiriya Rock Fortress Tours | Expert Guides & Best Prices",
                metaDescription: "Explore Sigiriya with our expert guides. UNESCO World Heritage Site tours from $85. Professional service, best prices, unforgettable experiences.",
                keywords: ["Sigiriya tours", "Rock fortress Sri Lanka", "UNESCO heritage tours", "Sigiriya day trips", "Cultural triangle tours"]
            }
        },
        // Add more locations here...
        ella: {
            name: "Ella",
            slug: "ella",
            subtitle: "Hill Country Paradise & Adventure Hub",
            description: "Discover Ella's magical blend of misty mountains, tea plantations, and adventure activities. This charming hill station offers some of Sri Lanka's most Instagram-worthy views and thrilling experiences.",
            longDescription: "Nestled in Sri Lanka's hill country, Ella captivates visitors with its cool climate, stunning vistas, and laid-back atmosphere. Famous for the iconic Nine Arch Bridge, Little Adam's Peak, and Ella Rock, this small town has become a must-visit destination for nature lovers and adventure seekers. The area's tea plantations offer insight into Sri Lanka's colonial heritage, while modern cafes and restaurants provide the perfect spots to relax and soak in the mountain views.",
            images: [
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1571841542637-8e31d4f3ad3c?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1578922019833-fca5c11a1b6d?w=800&h=600&fit=crop"
            ],
            location: {
                province: "Uva Province",
                district: "Badulla",
                nearestCity: "Bandarawela",
                coordinates: "6.8667° N, 81.0500° E"
            },
            highlights: [
                "Iconic Nine Arch Bridge",
                "Little Adam's Peak hiking",
                "Ella Rock panoramic views",
                "Tea plantation visits",
                "Cool mountain climate",
                "Adventure activities hub"
            ],
            bestTimeToVisit: {
                months: "December to March",
                weather: "Dry season, perfect for hiking",
                crowdLevel: "High (popular Instagram spot)"
            },
            visitInfo: {
                duration: "2-3 days minimum",
                difficulty: "Easy to Moderate",
                altitude: "1,041 meters above sea level",
                temperature: "16-24°C year-round"
            },
            nearbyAttractions: [
                { name: "Ravana Falls", distance: "5 km", time: "15 min" },
                { name: "Lipton's Seat", distance: "30 km", time: "1 hour" },
                { name: "Horton Plains", distance: "40 km", time: "1.5 hours" }
            ],
            ourServices: [
                {
                    title: "Ella Adventure Package",
                    description: "2-day hiking and sightseeing adventure",
                    duration: "2 days",
                    price: "From $159",
                    includes: ["Accommodation", "All hikes", "Transport", "Meals", "Guide"]
                },
                {
                    title: "Train Journey + Ella Tour",
                    description: "Scenic train ride from Kandy to Ella with full tour",
                    duration: "2 days",
                    price: "From $199",
                    includes: ["Train tickets", "Hotel", "All tours", "Meals"]
                },
                {
                    title: "Photography Tour",
                    description: "Capture Ella's best shots with professional guidance",
                    duration: "1 day",
                    price: "From $95",
                    includes: ["Photography guide", "Best viewpoints", "Transport", "Tips"]
                }
            ],
            tips: [
                "Book accommodations early - very popular destination",
                "Wake up early for Nine Arch Bridge photos without crowds",
                "Wear layers - temperature can change quickly",
                "Try fresh tea at local plantations",
                "Respect local communities and environment"
            ],
            seoData: {
                metaTitle: "Ella Hill Country Tours | Nine Arch Bridge & Adventure Activities",
                metaDescription: "Experience Ella's stunning mountain views, famous Nine Arch Bridge, and adventure activities. Expert tours from $95. Book your hill country adventure today!",
                keywords: ["Ella tours", "Nine Arch Bridge", "Hill country Sri Lanka", "Ella Rock hiking", "Tea plantation tours"]
            }
        }
    };

    const currentLocation = locationData[currentLocationSlug];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    // Auto-advance image carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveImageIndex((prev) => 
                prev === currentLocation.images.length - 1 ? 0 : prev + 1
            );
        }, 5000);
        return () => clearInterval(timer);
    }, [currentLocation.images.length]);

    if (!currentLocation) {
        return <div>Location not found</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
            {/* SEO Meta Tags would go in Head component */}
            
            {/* Hero Section with Image Carousel */}
            <section className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={currentLocation.images[activeImageIndex]}
                        alt={currentLocation.name}
                        className="w-full h-full object-cover transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Image Navigation */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <button
                        onClick={() => setActiveImageIndex(prev => 
                            prev === 0 ? currentLocation.images.length - 1 : prev - 1
                        )}
                        className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-all"
                    >
                        <ChevronLeft size={24} />
                    </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <button
                        onClick={() => setActiveImageIndex(prev => 
                            prev === currentLocation.images.length - 1 ? 0 : prev + 1
                        )}
                        className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-all"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto px-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                            {currentLocation.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-100 mb-8 font-light">
                            {currentLocation.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => setShowBookingForm(true)}
                                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                            >
                                Book Your Visit
                            </button>
                            <button className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-lg font-bold transition-all duration-300">
                                Get Custom Quote
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {currentLocation.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                >
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <motion.section variants={itemVariants}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Discover {currentLocation.name}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {currentLocation.description}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {currentLocation.longDescription}
                            </p>
                        </motion.section>

                        {/* Highlights */}
                        <motion.section variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Why Visit {currentLocation.name}?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentLocation.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-md">
                                        <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Our Services */}
                        <motion.section variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Our {currentLocation.name} Tours & Services
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {currentLocation.ourServices.map((service, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="text-xl font-bold text-cyan-800">{service.title}</h4>
                                            <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <Clock size={16} className="mr-2" />
                                            {service.duration}
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.includes.map((item, idx) => (
                                                    <span key={idx} className="bg-cyan-50 text-cyan-700 text-xs px-2 py-1 rounded-full">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                                            Book This Tour
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Travel Tips */}
                        <motion.section variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Expert Travel Tips
                            </h3>
                            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                                <div className="grid grid-cols-1 gap-4">
                                    {currentLocation.tips.map((tip, index) => (
                                        <div key={index} className="flex items-start">
                                            <Info size={16} className="text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{tip}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Quick Info */}
                        <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Visit Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Clock size={18} className="text-cyan-600 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-800">Duration</p>
                                        <p className="text-sm text-gray-600">{currentLocation.visitInfo.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Mountain size={18} className="text-cyan-600 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-800">Difficulty</p>
                                        <p className="text-sm text-gray-600">{currentLocation.visitInfo.difficulty}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Sun size={18} className="text-cyan-600 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-800">Best Time</p>
                                        <p className="text-sm text-gray-600">{currentLocation.bestTimeToVisit.months}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Location Details */}
                        <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Location Details</h3>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-600">
                                    <MapPin size={16} className="mr-2 text-cyan-600" />
                                    <span className="text-sm">{currentLocation.location.province}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Building size={16} className="mr-2 text-cyan-600" />
                                    <span className="text-sm">Near {currentLocation.location.nearestCity}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Nearby Attractions */}
                        <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Nearby Attractions</h3>
                            <div className="space-y-3">
                                {currentLocation.nearbyAttractions.map((attraction, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-gray-700 font-medium">{attraction.name}</span>
                                        <span className="text-sm text-gray-500">{attraction.distance}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Box */}
                        <motion.div variants={itemVariants} className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl p-6 text-white text-center">
                            <Heart size={32} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Ready to Explore?</h3>
                            <p className="text-cyan-100 mb-4">
                                Let us create the perfect {currentLocation.name} experience for you!
                            </p>
                            <div className="space-y-3">
                                <button className="w-full bg-white text-cyan-600 hover:bg-gray-100 font-bold py-2 px-4 rounded-lg transition-colors">
                                    <Phone size={16} className="inline mr-2" />
                                    Call Now
                                </button>
                                <button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-2 px-4 rounded-lg transition-all">
                                    <MessageCircle size={16} className="inline mr-2" />
                                    WhatsApp Us
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Start Your {currentLocation.name} Adventure Today!
                        </h2>
                        <p className="text-xl text-cyan-100 mb-8">
                            Join thousands of satisfied travelers who trusted us with their Sri Lankan dreams
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                                Book Your Tour Now
                            </button>
                            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-bold transition-all duration-300">
                                Get Free Consultation
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default LocationDetailsPage;