import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import logoImage from '../../assets/logo.png';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Divisions', href: '/divisions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4 h-6">
              <img 
                src={logoImage} 
                alt="SAAR MEP Academy" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              Designed for Excellence in Engineering & Education
            </p>
            <div className="flex space-x-4 mt-auto">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gold-600 transition-colors text-gray-400 hover:text-black"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-4 h-6 flex items-center">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-gold-400 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* UAE Office */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-4 h-6 flex items-center">UAE Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">SAAR Engineering Consultancy LLC<br />Sharjah Media City, UAE</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <p>+971 XX XXX XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@saargroup.com" className="hover:text-gold-400 transition-colors">
                  info@saargroup.com
                </a>
              </div>
            </div>
          </div>

          {/* India Office */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-4 h-6 flex items-center">India Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">SAAR MEP Academy<br />Thrissur, Kerala, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <p>+91 XXXX XXX XXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:careers@saargroup.com" className="hover:text-gold-400 transition-colors">
                  careers@saargroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-sm space-y-2">
            <p className="text-white font-semibold">
              © 2025 SAAR Group of Companies. All Rights Reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-400">
              <span>SAAR Engineering Consultancy</span>
              <span className="hidden sm:inline">|</span>
              <span>SAAR MEP Academy</span>
            </div>
            <p className="text-gray-500 italic">
              Designed for Excellence in Engineering & Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

