import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, ExternalLink, ArrowRight } from 'lucide-react';

export default function BusinessWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessInfo = {
    phone: '+91 9876543210',
    email: 'contact@multiservices.com',
    instagram: '@multiservices_dindigul',
    location: 'Dindigul, Tamil Nadu',
    mapCoords: '10.3656° N, 77.9787° E',
    pincode: '624001'
  };

  const services = [
    {
      id: 'tailoring',
      title: 'Ladies & Gents Tailoring',
      subtitle: 'Premium Custom Tailoring Services',
      icon: '✂️',
      color: 'from-pink-500 to-red-500',
      description: 'Professional tailoring for all occasions',
      features: [
        'School Uniforms',
        'Formal Dress & Suits',
        'Chudi & Traditional Wear',
        'All Types of Blouses',
        'Aari Work & Embroidery',
        'Custom Designs',
        'Tailoring Classes Available'
      ],
      details: 'Expertise in all types of garment customization with premium fabric selection. Tailoring classes for beginners to advanced learners.'
    },
    {
      id: 'insurance',
      title: 'LIC & Medical Insurance',
      subtitle: 'Authorized Insurance Agent',
      icon: '🛡️',
      color: 'from-blue-500 to-cyan-500',
      description: 'Comprehensive insurance solutions',
      features: [
        'Life Insurance Plans',
        'Term Insurance',
        'Medical Insurance',
        'Health Coverage',
        'Premium Comparison',
        'Claim Assistance',
        'Trusted LIC Partner'
      ],
      details: 'Authorized LIC agent providing comprehensive insurance solutions with expert guidance.'
    },
    {
      id: 'realestate',
      title: 'Real Estate Services',
      subtitle: 'Experienced Property Expert',
      icon: '🏠',
      color: 'from-green-500 to-emerald-500',
      description: 'Professional real estate solutions',
      features: [
        'Residential Properties',
        'Commercial Spaces',
        'Property Consultation',
        'Market Analysis',
        'Documentation Support',
        'Investment Guidance',
        'Dindigul Specialist'
      ],
      details: 'Years of experience in Dindigul real estate market. Expert guidance for buying, selling, and investment.'
    },
    {
      id: 'english',
      title: 'Spoken English Training',
      subtitle: 'Professional Language Coaching',
      icon: '🎓',
      color: 'from-purple-500 to-indigo-500',
      description: 'Expert language training programs',
      features: [
        'Spoken English Classes',
        'Grammar Mastery',
        'Pronunciation Training',
        'Personality Development',
        'Interview Preparation',
        'Online & Offline Classes',
        'Expert Trainers'
      ],
      details: 'Comprehensive English language training with focus on conversational skills and grammar.'
    }
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div style={{ display: 'none' }}>
        <h1>Ladies Tailoring Dindigul | Gents Tailoring | LIC Insurance Agent | Real Estate Dindigul | Spoken English Classes</h1>
        <p>Premium tailoring services, LIC insurance, real estate agent, and English training in Dindigul. Authorized insurance agent with experienced professionals.</p>
      </div>

      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            MultiServices Pro
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-0 bg-black/90 md:bg-transparent w-full md:w-auto`}>
            <div className="flex flex-col md:flex-row gap-8 p-6 md:p-0">
              {['home', 'tailoring', 'insurance', 'realestate', 'english'].map(item => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item);
                    setIsMenuOpen(false);
                  }}
                  className="text-white capitalize hover:text-cyan-400 transition font-medium text-sm"
                >
                  {item === 'home' ? 'Home' : item === 'tailoring' ? 'Tailoring' : item === 'insurance' ? 'Insurance' : item === 'realestate' ? 'Real Estate' : 'English'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative text-center z-10 px-6">
          <div 
            className="text-7xl md:text-8xl font-black text-white mb-6"
            style={{
              textShadow: `
                3px 3px 0px rgba(34, 211, 238, 0.5),
                6px 6px 0px rgba(236, 72, 153, 0.5),
                9px 9px 0px rgba(139, 92, 246, 0.5),
                12px 12px 20px rgba(0, 0, 0, 0.8)
              `,
              transform: `perspective(1000px) rotateX(${scrollY * 0.05}deg)`
            }}
          >
            Your Trusted
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Partner
            </span>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Tailoring • Insurance • Real Estate • English Training
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition transform duration-300 flex items-center justify-center gap-2 shadow-lg">
              Explore Services <ArrowRight size={20} />
            </button>
            <button className="px-10 py-4 border-2 border-pink-400 text-pink-400 font-bold rounded-full hover:bg-pink-400/10 transition duration-300">
              Contact Now
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 text-xl">✓</span> Authorized LIC Agent
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-400 text-xl">✓</span> 15+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 text-xl">✓</span> 1000+ Happy Clients
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Premium services designed for your lifestyle and financial security
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative"
                style={{
                  transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500`}></div>

                <div className="relative bg-slate-800/50 backdrop-blur-lg p-10 rounded-2xl border border-white/10 group-hover:border-white/20 transition duration-500">
                  <div className="text-6xl mb-4">{service.icon}</div>

                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                    {service.subtitle}
                  </p>

                  <p className="text-gray-400 text-sm mb-6">{service.details}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-3">
                        <span className={`text-lg bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm italic">+ {service.features.length - 4} more features</li>
                    )}
                  </ul>

                  <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-bold rounded-xl hover:scale-105 transition transform duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-4 mb-2 hover:translate-x-2 transition duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <p className="text-white font-bold text-lg">{businessInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-2 hover:translate-x-2 transition duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Us</p>
                    <p className="text-white font-bold text-lg break-all">{businessInfo.email}</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-2 hover:translate-x-2 transition duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-bold">{businessInfo.location}</p>
                    <p className="text-gray-400 text-xs">Pincode: {businessInfo.pincode}</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-2 hover:translate-x-2 transition duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Instagram size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Follow Us</p>
                    <p className="text-white font-bold">{businessInfo.instagram}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-white/10">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-cyan-400" />
                  Our Location
                </h3>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-4 mb-4 h-48 flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <MapPin size={48} className="text-cyan-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Dindigul, Tamil Nadu</p>
                    <p className="text-gray-500 text-xs mt-2">Coordinates: {businessInfo.mapCoords}</p>
                    <p className="text-cyan-400 font-bold mt-3">Open Google Maps</p>
                  </div>
                </div>
                <a 
                  href={`https://maps.google.com/?q=${businessInfo.mapCoords}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:scale-105 transition transform duration-300 flex items-center justify-center gap-2"
                >
                  View on Google Maps <ExternalLink size={16} />
                </a>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-white/10">
                <h3 className="text-white font-bold mb-4">Quick Inquiry</h3>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-2 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-lg hover:scale-105 transition transform duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '15+', label: 'Years of Experience', icon: '⭐' },
              { number: '1000+', label: 'Happy Customers', icon: '😊' },
              { number: '4', label: 'Premium Services', icon: '✨' },
              { number: '24/7', label: 'Customer Support', icon: '📞' }
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl border border-white/10 text-center group-hover:border-white/20 transition duration-500">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black/80 backdrop-blur-lg border-t border-cyan-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition">Tailoring</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Insurance</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Real Estate</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">English Training</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href={`https://instagram.com/${businessInfo.instagram.replace('@', '')}`} className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center hover:scale-110 transition">
                  <Instagram size={20} className="text-white" />
                </a>
                <a href={`tel:${businessInfo.phone}`} className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition">
                  <Phone size={20} className="text-white" />
                </a>
                <a href={`mailto:${businessInfo.email}`} className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center hover:scale-110 transition">
                  <Mail size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 MultiServices Pro. All rights reserved. | Dindigul, Tamil Nadu</p>
            <p className="mt-2 text-xs">SEO Optimized for: Ladies Tailoring • Gents Tailoring • LIC Insurance Agent • Real Estate • Spoken English Classes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
