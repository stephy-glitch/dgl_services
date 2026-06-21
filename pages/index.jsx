import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MessageCircle, Home, ShoppingBag, Info, Send, MapPin, Clock, Star, Users } from 'lucide-react';

export default function MultiServiceWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello, I'm ${contactForm.name}. ${contactForm.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleEmailContact = () => {
    const emailBody = `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nMessage: ${contactForm.message}`;
    window.location.href = `mailto:contact@multiservices.com?subject=Service Inquiry&body=${encodeURIComponent(emailBody)}`;
  };

  const businessInfo = {
    phone: '+91 9876543210',
    whatsapp: '919876543210',
    email: 'contact@multiservices.com',
    instagram: '@multiservices_dindigul',
    location: 'Dindigul, Tamil Nadu',
    pincode: '624001'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50 border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">MultiServices</h1>
                <p className="text-xs text-blue-600">Your Complete Solution</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition"
              >
                <Home size={20} /> Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition"
              >
                <ShoppingBag size={20} /> Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition"
              >
                <Info size={20} /> About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold hover:shadow-lg transition"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-800"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t-2 border-blue-200 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 rounded font-semibold"
              >
                🏠 Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 rounded font-semibold"
              >
                🛍️ Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 rounded font-semibold"
              >
                ℹ️ About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 bg-blue-500 text-white rounded font-semibold"
              >
                📞 Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Your One-Stop
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Service Hub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional tailoring, insurance solutions, real estate expertise, and English training all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl transform hover:scale-105 transition text-lg"
            >
              Explore Services →
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-3 border-blue-500 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition text-lg"
            >
              Get in Touch
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-600">1000+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-pink-500">
              <div className="text-3xl font-bold text-pink-600">4</div>
              <div className="text-gray-600 text-sm">Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Our <span className="text-blue-600">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tailoring Service */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition border-l-4 border-pink-500 p-8">
              <div className="text-5xl mb-4">✂️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ladies & Gents Tailoring</h3>
              <p className="text-pink-600 font-semibold mb-4">Premium Custom Tailoring Services</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">School Uniforms</p>
                    <p className="text-gray-600 text-sm">Custom-fit uniforms for all schools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Formal Dress & Suits</p>
                    <p className="text-gray-600 text-sm">Professional attire for all occasions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Chudi & Traditional Wear</p>
                    <p className="text-gray-600 text-sm">Authentic Indian traditional clothing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Blouse Tailoring</p>
                    <p className="text-gray-600 text-sm">Designer blouses with perfect fit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Aari Work & Embroidery</p>
                    <p className="text-gray-600 text-sm">Beautiful hand embroidery designs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Tailoring Classes</p>
                    <p className="text-gray-600 text-sm">Learn tailoring from experts</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition"
              >
                Learn More →
              </button>
            </div>

            {/* Insurance Service */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition border-l-4 border-blue-500 p-8">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">LIC & Medical Insurance</h3>
              <p className="text-blue-600 font-semibold mb-4">Authorized Insurance Agent</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Life Insurance Plans</p>
                    <p className="text-gray-600 text-sm">Comprehensive coverage for your family</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Term Insurance</p>
                    <p className="text-gray-600 text-sm">Affordable term plans with high coverage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Medical Insurance</p>
                    <p className="text-gray-600 text-sm">Health coverage for you and your family</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Health Coverage</p>
                    <p className="text-gray-600 text-sm">Protection against medical expenses</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Premium Comparison</p>
                    <p className="text-gray-600 text-sm">Find the best plans at best prices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Claim Assistance</p>
                    <p className="text-gray-600 text-sm">Help with easy claim processing</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition"
              >
                Learn More →
              </button>
            </div>

            {/* Real Estate Service */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition border-l-4 border-green-500 p-8">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Real Estate Services</h3>
              <p className="text-green-600 font-semibold mb-4">Experienced Property Expert</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Residential Properties</p>
                    <p className="text-gray-600 text-sm">Find your dream home in Dindigul</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Commercial Spaces</p>
                    <p className="text-gray-600 text-sm">Prime business locations available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Property Consultation</p>
                    <p className="text-gray-600 text-sm">Expert advice on property investment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Market Analysis</p>
                    <p className="text-gray-600 text-sm">Current market trends and prices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Documentation Support</p>
                    <p className="text-gray-600 text-sm">Complete legal documentation help</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Investment Guidance</p>
                    <p className="text-gray-600 text-sm">Smart investment strategies</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg transition"
              >
                Learn More →
              </button>
            </div>

            {/* English Training Service */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition border-l-4 border-purple-500 p-8">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Spoken English Training</h3>
              <p className="text-purple-600 font-semibold mb-4">Professional Language Coaching</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Spoken English Classes</p>
                    <p className="text-gray-600 text-sm">Conversational English for all levels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Grammar Mastery</p>
                    <p className="text-gray-600 text-sm">Complete grammar rules and practice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Pronunciation Training</p>
                    <p className="text-gray-600 text-sm">Perfect accent and clear speech</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Personality Development</p>
                    <p className="text-gray-600 text-sm">Build confidence and communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Interview Preparation</p>
                    <p className="text-gray-600 text-sm">Get ready for job interviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Online & Offline Classes</p>
                    <p className="text-gray-600 text-sm">Flexible learning options available</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Why Choose <span className="text-blue-600">Us</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <Star size={40} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">15+ Years</h3>
              <p className="text-gray-600">Trusted experience in all services</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <Users size={40} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">1000+ Clients</h3>
              <p className="text-gray-600">Happy and satisfied customers</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <Clock size={40} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Service</h3>
              <p className="text-gray-600">Fast and reliable service delivery</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <ShoppingBag size={40} className="text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">4 Services</h3>
              <p className="text-gray-600">All your needs in one place</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Get In <span className="text-blue-600">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-4">
                  <Phone size={32} className="text-blue-600" />
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">Call Us</p>
                    <a href={`tel:${businessInfo.phone}`} className="text-xl font-bold text-blue-600 hover:underline">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center gap-4">
                  <MessageCircle size={32} className="text-green-600" />
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">WhatsApp Us</p>
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp}?text=Hello%20I%20need%20more%20information`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-green-600 hover:underline"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center gap-4">
                  <Mail size={32} className="text-purple-600" />
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">Email Us</p>
                    <a href={`mailto:${businessInfo.email}`} className="text-xl font-bold text-purple-600 hover:underline break-all">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
                <div className="flex items-center gap-4">
                  <MapPin size={32} className="text-pink-600" />
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">Location</p>
                    <p className="text-lg font-bold text-pink-600">{businessInfo.location}</p>
                    <p className="text-sm text-gray-600">Pincode: {businessInfo.pincode}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell us about your service inquiry"
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleEmailContact}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <Mail size={20} /> Send Email
                  </button>
                  <button
                    type="button"
                    onClick={handleContactSubmit}
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} /> WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#services" className="hover:text-white transition">Tailoring</a></li>
                <li><a href="#services" className="hover:text-white transition">Insurance</a></li>
                <li><a href="#services" className="hover:text-white transition">Real Estate</a></li>
                <li><a href="#services" className="hover:text-white transition">English Training</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📞 {businessInfo.phone}</li>
                <li>📧 {businessInfo.email}</li>
                <li>📍 {businessInfo.location}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <a
                href={`https://instagram.com/${businessInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition"
              >
                {businessInfo.instagram}
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 MultiServices Pro. All rights reserved.</p>
            <p>Serving Dindigul with quality services since 2009.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
