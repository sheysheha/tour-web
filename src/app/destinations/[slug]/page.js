'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Map, Users, Compass, Info, Clock, Star, Heart } from 'lucide-react';

// Mock destination data - in a real app this would come from an API or database
const destinationsData = {
  'beaches': {
    name: 'Tropical Beaches',
    heroImage: '/beach-dp.jpg',
    description: 'Sri Lanka boasts over 1,600 km of sun-kissed coastline, offering a paradise for beach lovers. From the surfer’s haven of Arugam Bay to the tranquil shores of Nilaveli, each beach presents unique experiences. Engage in activities like snorkeling with turtles in Unawatuna, whale watching in Mirissa, or simply basking under the tropical sun.',
    highlights: [
      'Arugam Bay – World-renowned surfing destination',
      'Mirissa – Prime spot for whale watching and vibrant nightlife',
      'Nilaveli – Serene beach ideal for relaxation and snorkeling'
    ],
    images: ['/beach1.jpg', '/beach2.jpg', '/beach3.jpg', '/beach4.jpg', '/beach5.jpg', '/scuba-diver.jpg'],
    rating: 4.8,
    activities: ['Surfing', 'Snorkeling', 'Whale Watching', 'Sunbathing', 'Beach Volleyball'],
    bestTimeToVisit: 'November to April (Southwest coast), May to September (East coast)',
    duration: '5-7 days recommended',
    relatedDestinations: ['mountains', 'cultural-sites']
  },
  'mountains': {
    name: 'Majestic Mountains',
    heroImage: '/mountatin-dp.jpg',
    description: 'The central highlands of Sri Lanka are a haven for nature enthusiasts and adventure seekers. Explore misty peaks, lush tea plantations, and rich biodiversity. Hike through Horton Plains, visit the iconic Adam’s Peak, or enjoy the scenic beauty of Ella’s landscapes.',
    highlights: [
      'Horton Plains – Home to the famous World’s End cliff',
      'Adam’s Peak – Sacred pilgrimage site with panoramic views',
      'Ella – Picturesque town surrounded by tea estates and waterfalls'
    ],
    images: ['/mountain-village.jpg', '/tourist-looking-at-sigiriya.jpg', '/mount.jpg', '/hike-view-point.jpg', '/camping.jpg', '/rock-climbing.png'],
    rating: 4.9,
    activities: ['Hiking', 'Tea Plantation Tours', 'Bird Watching', 'Camping', 'Photography'],
    bestTimeToVisit: 'December to April',
    duration: '7-10 days recommended',
    relatedDestinations: ['beaches', 'cultural-sites']
  },
  'cultural-sites': {
    name: 'Cultural Heritage Sites',
    heroImage: '/cult-dp.jpg',
    description: 'Immerse yourself in Sri Lanka’s rich history by visiting its UNESCO World Heritage Sites. Discover ancient cities, sacred temples, and colonial architecture that narrate tales of a bygone era. Experience the cultural triangle encompassing Anuradhapura, Polonnaruwa, and Kandy.',
    highlights: [
      'Sigiriya Rock Fortress – Ancient palace atop a massive rock',
      'Temple of the Tooth – Sacred Buddhist temple in Kandy',
      'Dambulla Cave Temple – Complex of cave temples with exquisite murals'
    ],
    images: ['/cult1.jpg', '/anupura.jpg', '/sigiriya.png', '/cult4.jpg', '/cult5.jpg', '/polonnaruwa.jpg'],
    rating: 4.7,
    activities: ['Historical Tours', 'Temple Visits', 'Cultural Festivals', 'Museum Exploration', 'Traditional Dance Performances'],
    bestTimeToVisit: 'Year-round, with festivals in July and August',
    duration: '4-6 days recommended',
    relatedDestinations: ['mountains', 'waterfalls']
  },
  'waterfalls': {
    name: 'Enchanting Waterfalls',
    heroImage: '/waterfalls-dp.jpg',
    description: 'Sri Lanka’s diverse terrain is adorned with numerous waterfalls cascading through lush forests and tea-covered hills. From the towering Bambarakanda Falls to the scenic Ravana Falls, these natural wonders offer breathtaking views and refreshing experiences.',
    highlights: [
      'Bambarakanda Falls – Tallest waterfall in Sri Lanka at 263 meters',
      'Ravana Falls – Easily accessible and steeped in legend',
      'Diyaluma Falls – Second highest, featuring natural pools for swimming'
    ],
    images: ['/waterfall1.jpg', '/waterfall2.jpg', '/waterfall3.jpg', '/waterfall4.jpg', '/waterfall5.jpg', '/waterfall6.jpg'],
    rating: 4.8,
    activities: ['Hiking', 'Swimming', 'Photography', 'Nature Walks', 'Picnicking'],
    bestTimeToVisit: 'May to September',
    duration: '3-5 days recommended',
    relatedDestinations: ['mountains', 'cultural-sites']
  }
};


export default function DestinationPage() {
  const params = useParams();
  const [destination, setDestination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // In a real app, this would fetch data from an API
    if (params.slug && destinationsData[params.slug]) {
      setDestination(destinationsData[params.slug]);
      setIsLoading(false);
    } else {
      // Handle invalid slug
      setIsLoading(false);
    }
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 w-32 bg-cyan-200 rounded mb-4"></div>
          <div className="h-64 w-full max-w-4xl bg-cyan-100 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Destination Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn't find the destination you're looking for.</p>
        <Link href="/destinations" className="px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors">
          Browse All Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-cyan-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image 
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{destination.name}</h1>
            <div className="flex items-center text-white">
              <Star className="fill-yellow-400 stroke-yellow-400 mr-1" size={18} />
              <span className="mr-2">{destination.rating}/5</span>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="ml-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <Heart 
                  size={20} 
                  className={isFavorite ? "fill-red-500 stroke-red-500" : "stroke-white"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-10 px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About this destination</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{destination.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center mr-3 mt-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                      </span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Activities</h3>
                <div className="flex flex-wrap gap-2">
                  {destination.activities.map((activity, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Gallery Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {destination.images.map((item) => (
                  <div key={item} className="relative h-40 rounded-lg overflow-hidden">
                    <Image 
                      src={item}
                      alt="Destination gallery image"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Trip Planning */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 ">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Plan Your Trip</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-cyan-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Best Time to Visit</h4>
                    <p className="text-gray-600 text-sm">{destination.bestTimeToVisit}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-cyan-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Recommended Duration</h4>
                    <p className="text-gray-600 text-sm">{destination.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Map className="w-5 h-5 text-cyan-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Explore Map</h4>
                    <p className="text-gray-600 text-sm">View on interactive map</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-cyan-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Guided Tours</h4>
                    <p className="text-gray-600 text-sm">View available tours</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md font-medium hover:from-cyan-600 hover:to-teal-600 transition-colors flex items-center justify-center">
                <Compass className="mr-2" size={18} />
                Start Planning
              </button>
            </div>

            {/* Related Destinations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">You May Also Like</h3>
              <div className="space-y-4">
                {destination.relatedDestinations.map((related, index) => (
                  <Link href={`/destinations/${related}`} key={index}>
                    <div className="flex items-center p-3 rounded-lg hover:bg-cyan-50 transition-colors">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden">
                        <Image 
                          src={`/api/placeholder/100/100`}
                          alt="Related destination"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-800">{related.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h4>
                        <p className="text-sm text-gray-500">Explore more</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}