import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, ChevronDown, ArrowRight, Star, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MeridianStyleWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [selectedAchievementIndex, setSelectedAchievementIndex] = useState(0);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in your services. Can you please help me?";
    window.open(`https://wa.me/919842151713?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919842151713';
  };

  const reviews = [
    { name: 'Priya', stars: 5, text: 'Excellent tailoring service! Highly recommended.' },
    { name: 'Raj Kumar', stars: 5, text: 'Great insurance guidance. Very trustworthy!' },
    { name: 'Meera', stars: 5, text: 'Found my dream home with their help!' },
    { name: 'Arjun', stars: 5, text: 'English classes are amazing. I speak confidently now!' }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Best Service Provider Award 2024',
      description: 'Recognized for excellence in customer service and dedication to quality',
      image: '/achievement-photo-enhanced.jpeg',
      category: 'Award',
      date: '2024'
    },
    {
      id: 2,
      title: 'Community Trust Badge',
      description: 'Awarded for being the most trusted service provider in Dindigul',
      image: '/achievement-photo-enhanced.jpeg',
      category: 'Recognition',
      date: '2024'
    },
    {
      id: 3,
      title: 'Excellence in Service Delivery',
      description: '1000+ satisfied customers and counting',
      image: '/achievement-photo-enhanced.jpeg',
      category: 'Milestone',
      date: '2024'
    }
  ];

  const StarRating = ({ stars }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );

  const nextAchievement = () => {
    setSelectedAchievementIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setSelectedAchievementIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">MultiServices</h1>
                <p className="text-xs text-orange-600 font-semibold">Trust Us, We Care</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <a href="#home" className="text-gray-700 hover:text-orange-600 font-semibold transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 font-semibold transition">Services</a>
              <a href="#achievements" className="text-gray-700 hover:text-orange-600 font-semibold transition">Achievements</a>
              <a href="#reviews" className="text-gray-700 hover:text-orange-600 font-semibold transition">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-semibold transition">Contact</a>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg font-bold hover:shadow-lg transition"
              >
                Get Help
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-orange-200 space-y-3 bg-gradient-to-b from-white to-orange-50">
              <a href="#home" className="block text-gray-700 hover:text-orange-600 font-semibold py-2">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-orange-600 font-semibold py-2">Services</a>
              <a href="#achievements" className="block text-gray-700 hover:text-orange-600 font-semibold py-2">Achievements</a>
              <a href="#reviews" className="block text-gray-700 hover:text-orange-600 font-semibold py-2">Reviews</a>
              <a href="#contact" className="block text-gray-700 hover:text-orange-600 font-semibold py-2">Contact</a>
              <button
                onClick={handleWhatsApp}
                className="w-full px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg font-bold"
              >
                Get Help
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Welcome
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold">
              You can <span className="text-orange-600">TRUST us</span> to give you the best help.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out <span className="font-bold text-gray-900">OUR SERVICES</span> to make your life happy and simple.
            </p>

            {/* Trust Badge */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="fill-yellow-400 text-yellow-400" size={28} />
                  <span className="text-2xl font-black text-orange-600">4.9/5</span>
                </div>
                <p className="text-gray-600 font-semibold">Average Rating</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
                <p className="text-3xl font-black text-amber-600 mb-1">1000+</p>
                <p className="text-gray-600 font-semibold">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Quick Benefits */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-2xl transition hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">✂️ Beautiful Clothes Stitched for You</h3>
              <p className="text-gray-600 text-sm">Professional tailoring for ladies and gents</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-2xl transition hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🛡️ Insurance to Keep Your Family Safe</h3>
              <p className="text-gray-600 text-sm">LIC and medical insurance solutions</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-2xl transition hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🏠 Help to Find a Good House</h3>
              <p className="text-gray-600 text-sm">Experienced real estate in Dindigul</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-2xl transition hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">📚 Classes to Speak English Well</h3>
              <p className="text-gray-600 text-sm">Learn English easily and confidently</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => scrollToSection('services')}
              className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-lg font-bold rounded-lg hover:shadow-2xl transform hover:scale-105 transition flex items-center justify-center gap-2 mx-auto"
            >
              Look at OUR SERVICES <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-gray-900 mb-20">
            Our Services
          </h2>

          {/* Service 1: Tailoring */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
                <div className="text-6xl mb-4">✂️</div>
                <h3 className="text-4xl font-black text-gray-900 mb-4">
                  Beautiful Clothes Stitched for You
                </h3>
                <p className="text-xl text-gray-700 font-semibold mb-6">
                  Good stitching for Ladies and Gents.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-900 mb-2">What We Stitch:</h4>
                    <p className="text-gray-700">School uniforms, office dress, chudidars, and all types of blouses.</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-900 mb-2">Special Work:</h4>
                    <p className="text-gray-700">Beautiful hand-made Aari work.</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-900 mb-2">Learn Stitching:</h4>
                    <p className="text-gray-700">Easy tailoring classes for everyone.</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600 flex gap-3">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Fast & Perfect:</h4>
                      <p className="text-gray-700">We give you beautiful clothes quickly and perfectly.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="service-3d-card bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-8 text-center h-full flex flex-col justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl">
                  <div className="text-9xl mb-6 animate-pulse">✂️</div>
                  <p className="text-2xl font-bold text-gray-900 mb-4">Tailoring Excellence</p>
                  <p className="text-gray-700 text-lg">Professional stitching with precision and care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Insurance */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
              <div className="md:w-1/2">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-4xl font-black text-gray-900 mb-4">
                  Insurance to Keep Your Family Safe
                </h3>
                <p className="text-xl text-gray-700 font-semibold mb-6">
                  Secure your family's future.
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-2">LIC Insurance:</h4>
                    <p className="text-gray-700">Life insurance plans for your family's security.</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-2">Medical Insurance:</h4>
                    <p className="text-gray-700">Complete medical coverage for health safety.</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-2">Easy Process:</h4>
                    <p className="text-gray-700">Simple and quick insurance planning.</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600 flex gap-3">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Trusted Partner:</h4>
                      <p className="text-gray-700">We help you choose the best plans for your family.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="service-3d-card bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-8 text-center h-full flex flex-col justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl">
                  <div className="text-9xl mb-6 animate-pulse">🛡️</div>
                  <p className="text-2xl font-bold text-gray-900 mb-4">Family Protection</p>
                  <p className="text-gray-700 text-lg">Secure your loved ones with trusted insurance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Real Estate */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-4xl font-black text-gray-900 mb-4">
                  Help to Find a Good House
                </h3>
                <p className="text-xl text-gray-700 font-semibold mb-6">
                  Your dream home awaits.
                </p>

                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-bold text-gray-900 mb-2">Buy & Sell:</h4>
                    <p className="text-gray-700">We help you buy or sell houses, land, and shops without any tension.</p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-bold text-gray-900 mb-2">Local Expert:</h4>
                    <p className="text-gray-700">We know Dindigul very well to get you the best price.</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600 flex gap-3">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Doorstep Service:</h4>
                      <p className="text-gray-700">We can come to your home to talk about your property needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="service-3d-card bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-8 text-center h-full flex flex-col justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl">
                  <div className="text-9xl mb-6 animate-pulse">🏠</div>
                  <p className="text-2xl font-bold text-gray-900 mb-4">Your Dream Home</p>
                  <p className="text-gray-700 text-lg">Find the perfect property with expert guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: English */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
              <div className="md:w-1/2">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-4xl font-black text-gray-900 mb-4">
                  Classes to Speak English Well
                </h3>
                <p className="text-xl text-gray-700 font-semibold mb-6">
                  Speak English easily and boldly.
                </p>

                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-bold text-gray-900 mb-2">What You Learn:</h4>
                    <p className="text-gray-700">Good grammar and how to talk in English daily.</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-bold text-gray-900 mb-2">Easy Classes:</h4>
                    <p className="text-gray-700">Choose online classes (on mobile) or offline classes (in person).</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600 flex gap-3">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Flexible Learning:</h4>
                      <p className="text-gray-700">Learn at your own pace with expert instructors.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="service-3d-card bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-8 text-center h-full flex flex-col justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl">
                  <div className="text-9xl mb-6 animate-pulse">📚</div>
                  <p className="text-2xl font-bold text-gray-900 mb-4">English Mastery</p>
                  <p className="text-gray-700 text-lg">Learn to speak English confidently and correctly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - NEW */}
      <section id="achievements" className="py-24 px-4 bg-gradient-to-b from-white via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              🏆 Our Achievements
            </h2>
            <p className="text-xl text-gray-600 font-semibold">
              Recognized for excellence and dedication to serving our community
            </p>
          </div>

          {/* Main Achievement Display */}
          <div className="mb-12 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-300">
            <div className="relative">
              {/* Image Container with overlay */}
              <div className="relative bg-gradient-to-b from-orange-200 to-amber-100 h-96 md:h-96 flex items-center justify-center overflow-hidden">
                <img
                  src={achievements[selectedAchievementIndex].image}
                  alt={achievements[selectedAchievementIndex].title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>

              {/* Achievement Info */}
              <div className="p-8 bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-bold text-sm">
                    {achievements[selectedAchievementIndex].category}
                  </span>
                  <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-bold text-sm">
                    {achievements[selectedAchievementIndex].date}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-3">
                  {achievements[selectedAchievementIndex].title}
                </h3>
                <p className="text-lg text-gray-600">
                  {achievements[selectedAchievementIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-t border-orange-200">
              <button
                onClick={prevAchievement}
                className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all transform hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {achievements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedAchievementIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === selectedAchievementIndex
                        ? 'bg-orange-600 w-8'
                        : 'bg-orange-300 hover:bg-orange-400'
                    }`}
                  ></button>
                ))}
              </div>

              <button
                onClick={nextAchievement}
                className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all transform hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-4xl font-black text-orange-600 mb-2">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in customer service and quality</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-amber-500 hover:shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-4xl font-black text-amber-600 mb-2">⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trust & Quality</h3>
              <p className="text-gray-600">Committed to providing the best service to every customer</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-yellow-500 hover:shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-4xl font-black text-yellow-600 mb-2">💯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+ Satisfied</h3>
              <p className="text-gray-600">Growing community of happy customers who trust us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-4 bg-gradient-to-b from-amber-50 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-gray-900 mb-4">
            ⭐ Customer Reviews
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 font-semibold">
            Trusted by 1000+ happy customers
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-t-4 border-orange-400"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                </div>
                <StarRating stars={review.stars} />
                <p className="text-gray-600 mt-4 italic">"{review.text}"</p>
              </div>
            ))}
          </div>

          {/* Rating Summary */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold text-gray-900">Overall Rating</h3>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={28}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-3xl font-black text-orange-600">4.9/5</span>
              </div>
            </div>
            <p className="text-gray-600">Based on 1000+ customer reviews and satisfaction ratings</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Call Us Today
          </h2>
          <p className="text-xl text-orange-100 mb-12">
            We are ready to help you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCall}
              className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition text-lg shadow-lg"
            >
              Call Now
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition text-lg shadow-lg"
            >
              Message on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section with Google Map */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white via-orange-50 to-amber-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-gray-900 mb-20">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-2xl transition">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MapPin size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">📍 Address</h3>
                      <p className="text-gray-600">Subathar Lane, Palani Road, Dindigul, Tamil Nadu 624001</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-2xl transition cursor-pointer"
                  onClick={handleCall}
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">📞 Phone</h3>
                      <p className="text-gray-600 hover:text-blue-600 transition">+91 9842151713</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div
                  className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-2xl transition cursor-pointer"
                  onClick={handleWhatsApp}
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageCircle size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">💬 WhatsApp</h3>
                      <p className="text-gray-600 hover:text-green-600 transition">+91 9842151713</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-orange-200 hover:shadow-3xl transition h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2573749822!2d77.76817!3d10.36472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b7cbdb7cbbff%3A0x5d5f1c5d5f5f5f5f!2sSubathar%20Lane%2C%20Govindapuram%2C%20Dindigul%2C%20Tamil%20Nadu%20624001!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Additional Info - Updated Hours */}
          <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl shadow-lg p-8 border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Opening Hours</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600"><strong>Monday - Sunday:</strong></p>
                <p className="text-gray-700 text-lg">9:00 AM - 9:00 PM</p>
                <p className="text-gray-600 text-sm mt-2 italic">Also available on phone</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <p className="text-orange-700 font-bold mb-2">💡 Pro Tip:</p>
                <p className="text-gray-600 text-sm">Call or message anytime for urgent needs. We're here to help!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <h3 className="font-bold text-lg">MultiServices</h3>
              </div>
              <p className="text-gray-400">Your trusted partner for all services.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-orange-400 transition">Tailoring</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition">Insurance</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition">Real Estate</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition">English Training</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Dindigul, Tamil Nadu</li>
                <li>📞 9842151713</li>
                <li>💬 WhatsApp Available</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm space-y-2">
            <p>© 2024 MultiServices. All rights reserved.</p>
            <p className="text-orange-400 font-semibold">🏆 Award-Winning Service | ⭐ Trusted by 1000+ happy customers in Dindigul</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
