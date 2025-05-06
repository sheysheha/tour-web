import React from "react";
import { Compass, Users, Award, MapPin, Calendar, Smile, Mail, Phone, Clock, CheckCircle } from "lucide-react";

// Importing the ModernNavbar component (assume it's in a separate file)
// import ModernNavbar from "./ModernNavbar";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar would go here */}
      {/* <ModernNavbar /> */}
      {/* Hero Section */}
      <section className="relative bg-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-500 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        <div className=" mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About LAP Lanka Tours</h1>
            <p className="text-xl text-cyan-100 mb-8">Discover the heart and soul behind Sri Lanka's premier tour experience</p>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10 md:py-16">
        <div className=" mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="/sigiriya-group.jpg" alt="Sri Lankan landscape" className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-cyan-600 font-bold text-4xl">15+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="mb-4 flex items-center">
                <div className="w-12 h-1 bg-cyan-500 rounded-full mr-4"></div>
                <h2 className="text-lg font-medium text-cyan-600">Our Story</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Crafting Memorable Journeys Since 2010</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                LAP Lanka Tours began with a passion for sharing the authentic beauty of Sri Lanka with the world.
                What started as a small family business has grown into one of the island's most trusted tour operators,
                yet we've never lost our commitment to personalized service and sustainable tourism.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team consists of local experts who know every hidden gem and cultural nuance of this
                beautiful island. We believe in creating experiences that connect travelers with the real
                Sri Lanka – its people, traditions, landscapes, and vibrant culture.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-cyan-100 p-3 rounded-full">
                    <Users size={24} className="text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Expert Local Guides</h4>
                    <p className="text-gray-600 text-sm">Passionate storytellers who bring Sri Lanka to life</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-cyan-100 p-3 rounded-full">
                    <Award size={24} className="text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Trusted Travel Experts</h4>
                    <p className="text-gray-600 text-sm">Committed to providing reliable and memorable experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 flex items-center justify-center">
              <div className="w-12 h-1 bg-cyan-500 rounded-full mr-4"></div>
              <h2 className="text-lg font-medium text-cyan-600">Our Values</h2>
              <div className="w-12 h-1 bg-cyan-500 rounded-full ml-4"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Principles That Guide Us</h3>
            <p className="text-gray-600">
              At LAP Lanka Tours, our core values shape every experience we create and every interaction we have with our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Smile size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Customer Happiness</h4>
              <p className="text-gray-600">
                Your satisfaction is our priority. We go above and beyond to ensure every moment of your journey exceeds expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Authentic Experiences</h4>
              <p className="text-gray-600">
                We create journeys that connect you with the true essence of Sri Lanka, beyond the typical tourist attractions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Responsible Tourism</h4>
              <p className="text-gray-600">
                We're committed to sustainable practices that respect local communities and preserve Sri Lanka's natural beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className=" mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 flex items-center justify-center">
              <div className="w-12 h-1 bg-cyan-500 rounded-full mr-4"></div>
              <h2 className="text-lg font-medium text-cyan-600">Our Team</h2>
              <div className="w-12 h-1 bg-cyan-500 rounded-full ml-4"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Meet The Experts</h3>
            <p className="text-gray-600">
              Our passionate team of travel specialists is the heart of LAP Lanka Tours.
              Each member brings unique expertise and a deep love for Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative">
                <img src="/charm.jpg" alt="Team member" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <Mail size={16} className="text-cyan-600" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <Phone size={16} className="text-cyan-600" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 text-lg mb-1">Chamod Perera</h4>
                <p className="text-cyan-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years in tourism, Priya brings unparalleled knowledge and passion to every tour.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative">
                <img src="/charm.jpg" alt="Team member" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t  opacity-0 group-hover:opacity-70 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <Mail size={16} className="text-cyan-600" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <Phone size={16} className="text-cyan-600" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 text-lg mb-1">Chamod Perera</h4>
                <p className="text-cyan-600 mb-3">Head Tour Guide</p>
                <p className="text-gray-600 text-sm">
                  An expert in Sri Lankan history and wildlife with 15 years of guiding experience.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative">
                <img src="/charm.jpg" alt="Team member" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <Mail size={16} className="text-cyan-600" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <Phone size={16} className="text-cyan-600" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 text-lg mb-1">Chamod Perera</h4>
                <p className="text-cyan-600 mb-3">Travel Consultant</p>
                <p className="text-gray-600 text-sm">
                  Specializes in crafting custom itineraries that perfectly match our clients' desires.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative">
                <img src="/charm.jpg" alt="Team member" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <Mail size={16} className="text-cyan-600" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-cyan-100 transition-colors">
                      <Phone size={16} className="text-cyan-600" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 text-lg mb-1">Raj Mendis</h4>
                <p className="text-cyan-600 mb-3">Customer Relations</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to ensuring every guest receives personalized attention and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-10"></div>
        <div className=" mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-cyan-100 uppercase tracking-wider text-sm">Happy Travelers</div>
            </div>

            <div className="p-6">
              <div className="text-5xl font-bold mb-2">250+</div>
              <div className="text-cyan-100 uppercase tracking-wider text-sm">Custom Tours</div>
            </div>

            <div className="p-6">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-cyan-100 uppercase tracking-wider text-sm">Years Experience</div>
            </div>

            <div className="p-6">
              <div className="text-5xl font-bold mb-2">80+</div>
              <div className="text-cyan-100 uppercase tracking-wider text-sm">Locations to Visit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className=" mx-auto px-4 ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 flex items-center justify-center">
              <div className="w-12 h-1 bg-cyan-500 rounded-full mr-4"></div>
              <h2 className="text-lg font-medium text-cyan-600">Testimonials</h2>
              <div className="w-12 h-1 bg-cyan-500 rounded-full ml-4"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">What Our Clients Say</h3>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what travelers have to say about their experience with LAP Lanka Tours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {/* Testimonial 1 */}
            <div className=" bg-white p-8 rounded-lg shadow-md ">
              <div className="flex items-center mb-4">
                <div className="text-cyan-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Our two-week adventure with LAP Lanka Tours was absolutely magical. The attention to detail and personalized service made us feel like VIPs throughout our journey."
              </p>
              <div className=" flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="sam.jpg" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah & James</h4>
                  <p className="text-sm text-gray-500">Australia</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className=" bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-cyan-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "The cultural insights provided by our guide Amal were incredible. We left with not just photos but a deep appreciation for Sri Lankan heritage."
              </p>
              <div className=" flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/micheal.jpg" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Michael Johnson</h4>
                  <p className="text-sm text-gray-500">United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className=" bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-cyan-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "As a solo female traveler, safety was my priority. LAP Lanka Tours made me feel secure while still providing authentic adventures off the beaten path."
              </p>
              <div className=" flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/solo-traveller.jpg" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Elena Rodriguez</h4>
                  <p className="text-sm text-gray-500">Spain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-500 text-white">
        <div className=" mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Sri Lanka with Us?</h3>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's start planning your perfect Sri Lankan adventure today. Our team is ready to craft a journey that's uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-white text-cyan-600 px-8 py-3 rounded-full font-medium hover:bg-cyan-50 transition-colors shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/tour-packages"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-cyan-700 hover:bg-opacity-10 transition-colors"
            >
              View Tour Packages
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-100">
        <div className=" mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="mr-4 bg-cyan-100 p-3 rounded-full">
                <MapPin size={24} className="text-cyan-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Our Location</h4>
                <p className="text-gray-600">
                  123 Galle Road, Colombo 03<br />
                  Sri Lanka
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="mr-4 bg-cyan-100 p-3 rounded-full">
                <Phone size={24} className="text-cyan-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Contact Us</h4>
                <p className="text-gray-600">
                  Phone: +94 123 456 789<br />
                  Email: info@laplankatours.com
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="mr-4 bg-cyan-100 p-3 rounded-full">
                <Clock size={24} className="text-cyan-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Opening Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 9am - 6pm<br />
                  Saturday: 10am - 4pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer would go here */}
    </div>
  );
};

export default AboutPage;