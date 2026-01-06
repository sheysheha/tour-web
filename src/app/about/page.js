import React from "react";
import { Compass, Users, Award, MapPin, Calendar, Smile, Mail, Phone, Clock, CheckCircle, Linkedin } from "lucide-react";
import Image from "next/image";

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
            <p className="text-xl text-cyan-100 mb-8">Discover the heart and soul behind Sri Lanka&apos;s premier tour experience</p>
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
                  <Image
                    src="/sigiriya-group.jpg"
                    alt="Sri Lankan landscape"
                    width={1200}        // set a numeric width
                    height={800}        // set a numeric height
                    className="w-full h-auto" // keeps responsive sizing
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-cyan-600 font-bold text-4xl">30+</div>
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
                What started as a small family business has grown into one of the island&apos;s most trusted tour operators,
                yet we&apos;ve never lost our commitment to personalized service and sustainable tourism.
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
                We&apos;re committed to sustainable practices that respect local communities and preserve Sri Lanka&apos;s natural beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 flex items-center justify-center">
              <div className="w-12 h-1 bg-cyan-500 rounded-full mr-4"></div>
              <h2 className="text-lg font-medium text-cyan-600">Our Team</h2>
              <div className="w-12 h-1 bg-cyan-500 rounded-full ml-4"></div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Meet The Experts
            </h3>
            <p className="text-gray-600 text-lg">
              Our passionate team of travel specialists is the heart of LAP Lanka Tours.
              Each member brings unique expertise and a deep love for Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="/sam.jpeg"
                    alt="Samantha Perera - Founder & CEO"
                    width={480}
                    height={320}
                    className="w-full h-100 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex space-x-3 justify-center">
                        <a
                          href="mailto:sam@laplanka.com"
                          className="bg-white p-3 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group/icon"
                        >
                          <Mail size={20} className="text-cyan-600 group-hover/icon:text-white transition-colors" />
                        </a>
                        <a
                          href="tel:+94123456789"
                          className="bg-white p-3 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group/icon"
                        >
                          <Phone size={20} className="text-cyan-600 group-hover/icon:text-white transition-colors" />
                        </a>
                        <a
                          href="#"
                          className="bg-white p-3 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group/icon"
                        >
                          <Linkedin size={20} className="text-cyan-600 group-hover/icon:text-white transition-colors" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-bold text-gray-800 text-2xl mb-2">Samantha Perera</h4>
                  <p className="text-cyan-600 font-semibold mb-4 text-lg">Founder & CEO</p>
                  <p className="text-gray-600 leading-relaxed">
                    With over 30 years in tourism, Sam brings unparalleled knowledge and passion to every tour, ensuring unforgettable experiences across Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="/charm.png"
                    width={480}
                    height={320}
                    alt="Chamod Perera - Director"
                    className="w-full h-100 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex space-x-3 justify-center">
                        <a
                          href="mailto:chamod@lapanka.com"
                          className="bg-white p-3 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group/icon"
                        >
                          <Mail size={20} className="text-cyan-600 group-hover/icon:text-white transition-colors" />
                        </a>
                        <a
                          href="tel:+94123456789"
                          className="bg-white p-3 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group/icon"
                        >
                          <Phone size={20} className="text-cyan-600 group-hover/icon:text-white transition-colors" />
                        </a>
                        <a
                          href="#"
                          className="bg-white p-3 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group/icon"
                        >
                          <Linkedin size={20} className="text-cyan-600 group-hover/icon:text-white transition-colors" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-bold text-gray-800 text-2xl mb-2">Chamod Perera</h4>
                  <p className="text-cyan-600 font-semibold mb-4 text-lg">Director</p>
                  <p className="text-gray-600 leading-relaxed">
                    An expert in Sri Lankan history and wildlife with 5 years of guiding experience, bringing stories and nature to life on every adventure.
                  </p>
                </div>
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
              <div className="text-5xl font-bold mb-2">35+</div>
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
              Don&apos;t just take our word for it. Here&apos;s what travelers have to say about their experience with LAP Lanka Tours.
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
                &quot;Our two-week adventure with LAP Lanka Tours was absolutely magical. The attention to detail and personalized service made us feel like VIPs throughout our journey.&quot;
              </p>
              <div className=" flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/sam.jpg" alt="Customer" width={48} height={48} className="w-full h-full object-cover" />
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
                &quot;The cultural insights provided by our guide Sam were incredible. We left with not just photos but a deep appreciation for Sri Lankan heritage.&quot;
              </p>
              <div className=" flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image width={48} height={48} src="/micheal.jpg" alt="Customer" className="w-full h-full object-cover" />
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
                &quot;As a solo female traveler, safety was my priority. LAP Lanka Tours made me feel secure while still providing authentic adventures off the beaten path.&quot;
              </p>
              <div className=" flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image width={48} height={48} src="/solo-traveller.jpg" alt="Customer" className="w-full h-full object-cover" />
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
            Let&apos;s start planning your perfect Sri Lankan adventure today. Our team is ready to craft a journey that&apos;s uniquely yours.
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
                  Colombo<br />
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
                  Phone: +94 76 494 4775 | +94 77 731 4775 <br />
                  Email: laplankatours@gmail.com
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