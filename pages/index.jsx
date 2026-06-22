import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, ChevronDown, ArrowRight } from 'lucide-react';

export default function MeridianStyleWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">MultiServices</h1>
                <p className="text-xs text-blue-600 font-semibold">Trust Us, We Care</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-semibold transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-semibold transition">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold transition">Contact</a>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-bold hover:shadow-lg transition"
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
            <div className="md:hidden pb-4 border-t border-gray-200 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 font-semibold py-2">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 font-semibold py-2">Services</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-semibold py-2">Contact</a>
              <button
                onClick={handleWhatsApp}
                className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-bold"
              >
                Get Help
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Welcome
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold">
              You can <span className="text-blue-600">TRUST us</span> to give you the best help.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out <span className="font-bold text-gray-900">OUR SERVICES</span> to make your life happy and simple.
            </p>
          </div>

          {/* Quick Benefits */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-2xl transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">✂️ Beautiful Clothes Stitched for You</h3>
              <p className="text-gray-600 text-sm">Professional tailoring for ladies and gents</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600 hover:shadow-2xl transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🛡️ Insurance to Keep Your Family Safe</h3>
              <p className="text-gray-600 text-sm">LIC and medical insurance solutions</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600 hover:shadow-2xl transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🏠 Help to Find a Good House</h3>
              <p className="text-gray-600 text-sm">Experienced real estate in Dindigul</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600 hover:shadow-2xl transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">📚 Classes to Speak English Well</h3>
              <p className="text-gray-600 text-sm">Learn English easily and confidently</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => scrollToSection('services')}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-bold rounded-lg hover:shadow-2xl transform hover:scale-105 transition flex items-center justify-center gap-2 mx-auto"
            >
              Look at OUR SERVICES <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white">
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
                      <h4 className="font-bold text-gray-900 mb-1">Doorstep Service:</h4>
                      <p className="text-gray-700">We can come to your house to take measurements and to teach tailoring classes!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-8 text-center h-full flex flex-col justify-center">
                  <div className="text-9xl mb-6">✂️</div>
                  <p className="text-2xl font-bold text-gray-900 mb-4">Professional Tailoring</p>
                  <p className="text-gray-700 text-lg">Get perfectly fitted clothes delivered to your doorstep</p>
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
                  Authorized LIC and Medical Insurance agent.
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-2">LIC Policy:</h4>
                    <p className="text-gray-700">Save money and keep your family safe for the future.</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-2">Medical Insurance:</h4>
                    <p className="text-gray-700">Get money for hospital bills when you are sick.</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600 flex gap-3">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Doorstep Service:</h4>
                      <p className="text-gray-700">We come to your house to explain the plans easily and do all the paper work.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-8 text-center h-full flex flex-col justify-center">
                  <div className="text-9xl mb-6">🛡️</div>
                  <p className="text-2xl font-bold text-gray-900 mb-4">Family Protection</p>
                  <p className="text-gray-700 text-lg">Authorized insurance for your peace of mind</p>
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
                  Experienced real estate agent in Dindigul.
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
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-8 text-center h-full flex flex-col justify-center">
                  <div className="text-9xl mb-6">🏠</div>
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
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-8 text-center h-full flex flex-col justify-center">
                  <div className="text-9xl mb-6">📚</div>
                  <p className="text-2xl font-bold text-gray-900 mb-4">English Mastery</p>
                  <p className="text-gray-700 text-lg">Learn to speak English confidently and correctly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Call Us Today
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            We are ready to help you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6 text-white hover:bg-opacity-20 transition">
              <MapPin size={40} className="mx-auto mb-4" />
              <h3 className="font-bold mb-2">📍 Address</h3>
              <p className="text-sm text-blue-100">Subathar Lane, Govindapuram, Dindigul, Tamil Nadu 624001</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6 text-white hover:bg-opacity-20 transition cursor-pointer" onClick={handleCall}>
              <Phone size={40} className="mx-auto mb-4" />
              <h3 className="font-bold mb-2">📞 Phone</h3>
              <p className="text-sm text-blue-100">+91 9842151713</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6 text-white hover:bg-opacity-20 transition cursor-pointer" onClick={handleWhatsApp}>
              <MessageCircle size={40} className="mx-auto mb-4" />
              <h3 className="font-bold mb-2">💬 WhatsApp</h3>
              <p className="text-sm text-blue-100">+91 9842151713</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCall}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition text-lg"
            >
              Call Now
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition text-lg"
            >
              Message on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <h3 className="font-bold text-lg">MultiServices</h3>
              </div>
              <p className="text-gray-400">Your trusted partner for all services.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Tailoring</a></li>
                <li><a href="#services" className="hover:text-white transition">Insurance</a></li>
                <li><a href="#services" className="hover:text-white transition">Real Estate</a></li>
                <li><a href="#services" className="hover:text-white transition">English Training</a></li>
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

          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 MultiServices. All rights reserved.</p>
            <p>Trusted by 1000+ happy customers in Dindigul</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
