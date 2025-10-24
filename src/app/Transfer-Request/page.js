"use client"
import React, { useState } from 'react';
import {
  ArrowLeft, MapPin, Clock, Car, Users, Calendar, Plane,
  CheckCircle, Phone, MessageCircle, Shield, Star,
  ChevronRight, Plus, Minus, Info, AlertCircle
} from 'lucide-react';
import LocationDropdown from '@/app/components/LocationDropDown';

const TransferQuotePage = () => {
  const [formData, setFormData] = useState({
    transferType: 'airport-hotel',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: 2,
    luggage: 'standard',
    vehicleType: 'car',
    returnTrip: false,
    returnDate: '',
    returnTime: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    flightNumber: '',
    specialRequests: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showQuote, setShowQuote] = useState(false);
  const allCitiesInSriLanka = [
    'Colombo',
    'Kandy',
    'Galle',
    'Jaffna',
    'Negombo',
    'Anuradhapura',
    'Batticaloa',
    'Trincomalee',
    'Kurunegala',
    'Matara',
    'Ratnapura',
    'Badulla',
    'Nuwara Eliya',
    'Polonnaruwa',
    'Hambantota',
    'Ampara',
    'Mannar',
    'Vavuniya',
    'Kilinochchi',
    'Monaragala',
    'Puttalam',
    'Kalutara',
    'Gampaha',
    'Matale',
    'Airport'
  ];

  const transferTypes = [
    {
      id: 'airport-hotel',
      title: 'Airport ↔ Hotel',
      description: 'Direct transfer between airport and accommodation',
      icon: Plane,
      popular: true
    },
    {
      id: 'hotel-attraction',
      title: 'Hotel ↔ Attraction',
      description: 'Transfer to tourist destinations and sightseeing spots',
      icon: MapPin,
      popular: false
    },
    {
      id: 'city-to-city',
      title: 'City to City',
      description: 'Long-distance transfers between major cities',
      icon: Car,
      popular: false
    }
  ];

  const vehicleTypes = [
    {
      id: 'car',
      name: 'Standard Car',
      capacity: '1-3 passengers',
      luggage: '2-3 bags',
      features: ['Air conditioning', 'Professional driver'],
      priceMultiplier: 1
    },
    {
      id: 'suv',
      name: 'SUV/Van',
      capacity: '4-7 passengers',
      luggage: '4-6 bags',
      features: ['Air conditioning', 'Extra space', 'Professional driver'],
      priceMultiplier: 1.5
    },
    {
      id: 'luxury',
      name: 'Luxury Vehicle',
      capacity: '1-4 passengers',
      luggage: '3-4 bags',
      features: ['Premium comfort', 'Wi-Fi', 'Water bottles', 'Professional driver'],
      priceMultiplier: 2
    }
  ];

  const popularRoutes = [
    { from: 'Colombo Airport (CMB)', to: 'Colombo City', distance: '35 km', duration: '45-60 min', basePrice: 25 },
    { from: 'Colombo Airport (CMB)', to: 'Negombo', distance: '12 km', duration: '20-25 min', basePrice: 15 },
    { from: 'Colombo Airport (CMB)', to: 'Galle', distance: '160 km', duration: '2.5-3 hours', basePrice: 85 },
    { from: 'Colombo Airport (CMB)', to: 'Kandy', distance: '130 km', duration: '3-3.5 hours', basePrice: 75 },
    { from: 'Colombo City', to: 'Sigiriya', distance: '170 km', duration: '3.5-4 hours', basePrice: 90 },
    { from: 'Kandy', to: 'Nuwara Eliya', distance: '80 km', duration: '2.5-3 hours', basePrice: 55 }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateEstimate = () => {
    const baseRoute = popularRoutes.find(route =>
      (route.from.toLowerCase().includes(formData.pickup.toLowerCase()) &&
        route.to.toLowerCase().includes(formData.dropoff.toLowerCase())) ||
      (route.to.toLowerCase().includes(formData.pickup.toLowerCase()) &&
        route.from.toLowerCase().includes(formData.dropoff.toLowerCase()))
    );

    const basePrice = baseRoute ? baseRoute.basePrice : 50; // Default price if route not found
    const vehicleMultiplier = vehicleTypes.find(v => v.id === formData.vehicleType)?.priceMultiplier || 1;
    const returnMultiplier = formData.returnTrip ? 1.8 : 1; // Slight discount for return

    return Math.round(basePrice * vehicleMultiplier * returnMultiplier);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitQuote = () => {
    console.log('Quote submitted:', formData);
    setShowQuote(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Navigation */}
      {/* <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button className="flex items-center text-cyan-600 hover:text-cyan-700 font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </button>
        </div>
      </div> */}

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-4">
        <div className="max-w-4xl mx-auto  text-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Request Transfer Quote</h1>
          <p className="text-lg text-cyan-100 mb-6">
            Get an instant quote for your Sri Lankan transfer needs
          </p>

          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step <= currentStep ? 'bg-white text-cyan-600' : 'bg-cyan-500 text-cyan-200'
                  }`}>
                  {step < currentStep ? <CheckCircle size={20} /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-1 mx-2 ${step < currentStep ? 'bg-white' : 'bg-cyan-500'
                    }`}></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-cyan-100">
            {currentStep === 1 && "Step 1: Transfer Details"}
            {currentStep === 2 && "Step 2: Vehicle & Preferences"}
            {currentStep === 3 && "Step 3: Contact Information"}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-4">
        {/* Step 1: Transfer Details */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl py-4 px-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Transfer Details</h2>

            {/* Transfer Type */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">Transfer Type</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {transferTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => handleInputChange('transferType', type.id)}
                      className={`relative p-4 border-2 rounded-xl transition-all duration-300 text-left ${formData.transferType === type.id
                          ? 'border-cyan-500 bg-cyan-50'
                          : 'border-gray-200 hover:border-cyan-300'
                        }`}
                    >
                      {type.popular && (
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="flex items-center mb-2">
                        <IconComponent size={24} className="mr-3 text-cyan-600" />
                        <h3 className="font-semibold text-gray-800">{type.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Route Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <LocationDropdown
                label="Pickup Location"
                value={formData.pickup}
                onChange={(value) => handleInputChange('pickup', value)}
              />
              <LocationDropdown
                label="Drop-off Location"
                value={formData.dropoff}
                onChange={(value) => handleInputChange('dropoff', value)}
              />
            </div>

            {/* Popular Routes */}
            {/* <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Routes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {popularRoutes.map((route, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleInputChange('pickup', route.from);
                      handleInputChange('dropoff', route.to);
                    }}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition-colors text-left"
                  >
                    <div>
                      <div className="font-medium text-gray-800">{route.from} → {route.to}</div>
                      <div className="text-sm text-gray-600">{route.distance} • {route.duration}</div>
                    </div>
                    <div className="text-cyan-600 font-semibold">${route.basePrice}+</div>
                  </button>
                ))}
              </div>
            </div> */}

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Return Trip */}
            <div className="mb-8">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.returnTrip}
                  onChange={(e) => handleInputChange('returnTrip', e.target.checked)}
                  className="w-5 h-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700 font-medium">Return trip required</span>
              </label>

              {formData.returnTrip && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
                    <input
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) => handleInputChange('returnDate', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Return Time</label>
                    <input
                      type="time"
                      value={formData.returnTime}
                      onChange={(e) => handleInputChange('returnTime', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={nextStep}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center"
              >
                Next Step
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Vehicle & Preferences */}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Vehicle & Preferences</h2>

            {/* Passengers */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">Number of Passengers</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleInputChange('passengers', Math.max(1, formData.passengers - 1))}
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                >
                  <Minus size={16} />
                </button>
                <span className="text-xl font-semibold w-8 text-center">{formData.passengers}</span>
                <button
                  onClick={() => handleInputChange('passengers', Math.min(12, formData.passengers + 1))}
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                >
                  <Plus size={16} />
                </button>
                <span className="text-gray-600 ml-4">passengers</span>
              </div>
            </div>

            {/* Vehicle Type */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">Vehicle Type</label>
              <div className="space-y-4">
                {vehicleTypes.map((vehicle) => (
                  <button
                    key={vehicle.id}
                    onClick={() => handleInputChange('vehicleType', vehicle.id)}
                    className={`w-full p-4 border-2 rounded-xl transition-all duration-300 text-left ${formData.vehicleType === vehicle.id
                        ? 'border-cyan-500 bg-cyan-50'
                        : 'border-gray-200 hover:border-cyan-300'
                      }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{vehicle.name}</h3>
                      <div className="text-cyan-600 font-semibold">
                        ${Math.round(50 * vehicle.priceMultiplier)}+ est.
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        {vehicle.capacity}
                      </div>
                      <div className="flex items-center">
                        <Car size={16} className="mr-2" />
                        {vehicle.luggage}
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Luggage */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">Luggage Requirements</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['light', 'standard', 'heavy'].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleInputChange('luggage', type)}
                    className={`p-4 border-2 rounded-lg transition-all duration-300 text-center ${formData.luggage === type
                        ? 'border-cyan-500 bg-cyan-50'
                        : 'border-gray-200 hover:border-cyan-300'
                      }`}
                  >
                    <div className="font-semibold text-gray-800 capitalize">{type}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {type === 'light' && '1-2 small bags'}
                      {type === 'standard' && '2-4 medium bags'}
                      {type === 'heavy' && '4+ large bags'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center"
              >
                Next Step
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {currentStep === 3 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                    required
                  />
                </div>
              </div>

              {formData.transferType === 'airport-hotel' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Flight Number (Optional)
                    <span className="text-xs text-gray-500 ml-2">For arrival tracking</span>
                  </label>
                  <input
                    type="text"
                    value={formData.flightNumber}
                    onChange={(e) => handleInputChange('flightNumber', e.target.value)}
                    placeholder="e.g., UL123"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  placeholder="Any special requirements, child seats, wheelchair accessibility, etc."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 h-24 focus:outline-none focus:border-cyan-500"
                ></textarea>
              </div>
            </div>

            {/* Quote Preview */}
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Estimated Quote</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Route:</span>
                  <span className="font-medium">{formData.pickup || 'Pickup'} → {formData.dropoff || 'Dropoff'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Vehicle:</span>
                  <span className="font-medium">{vehicleTypes.find(v => v.id === formData.vehicleType)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Passengers:</span>
                  <span className="font-medium">{formData.passengers}</span>
                </div>
                {formData.returnTrip && (
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span className="font-medium">Round Trip</span>
                  </div>
                )}
                <div className="border-t border-cyan-300 pt-2 mt-4">
                  <div className="flex justify-between text-lg font-bold text-cyan-700">
                    <span>Estimated Total:</span>
                    <span>${calculateEstimate()}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-start text-xs text-gray-600">
                <Info size={14} className="mr-1 mt-0.5 flex-shrink-0" />
                <span>Final price may vary based on exact route, traffic conditions, and additional services. This quote is valid for 48 hours.</span>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Previous
              </button>
              <button
                onClick={submitQuote}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
              >
                Request Quote
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quote Confirmation Modal */}
      {showQuote && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Quote Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your transfer request. We&apos;ll send you a detailed quote within 2 hours.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reference ID:</span>
                    <span className="font-medium">TQ{Date.now().toString().slice(-6)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Price:</span>
                    <span className="font-bold text-cyan-600">${calculateEstimate()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setShowQuote(false)}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Continue Browsing
                </button>

                <div className="flex space-x-3">
                  <button className="flex-1 border border-gray-300 hover:border-cyan-600 py-2 px-4 rounded-lg flex items-center justify-center transition-colors text-gray-700">
                    <Phone size={16} className="mr-2" />
                    Call Us
                  </button>
                  <button className="flex-1 border border-gray-300 hover:border-cyan-600 py-2 px-4 rounded-lg flex items-center justify-center transition-colors text-gray-700">
                    <MessageCircle size={16} className="mr-2" />
                    Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Strip */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div className="flex flex-col items-center">
              <Shield size={48} className="mb-4 text-cyan-200" />
              <h3 className="text-xl font-bold mb-2">Safe & Reliable</h3>
              <p className="text-cyan-100">Professional drivers with excellent safety records</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock size={48} className="mb-4 text-cyan-200" />
              <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
              <p className="text-cyan-100">Available round the clock for your convenience</p>
            </div>
            <div className="flex flex-col items-center">
              <Star size={48} className="mb-4 text-cyan-200" />
              <h3 className="text-xl font-bold mb-2">Rated Excellent</h3>
              <p className="text-cyan-100">4.9/5 rating from thousands of satisfied customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferQuotePage;