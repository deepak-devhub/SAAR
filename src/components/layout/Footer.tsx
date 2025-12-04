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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="SAAR MEP Academy" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm mb-4">
              Designed for Excellence in Engineering & Education
            </p>
            <div className="flex space-x-4">
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
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* UAE Office */}
          <div>
            <h3 className="text-white font-semibold mb-4">UAE Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <p>SAAR Engineering Consultancy LLC<br />Sharjah Media City, UAE</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <p>+971 XX XXX XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@saargroup.com" className="hover:text-gold-400">
                  info@saargroup.com
                </a>
              </div>
            </div>
          </div>

          {/* India Office */}
          <div>
            <h3 className="text-white font-semibold mb-4">India Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <p>SAAR MEP Academy<br />Thrissur, Kerala, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <p>+91 XXXX XXX XXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:careers@saargroup.com" className="hover:text-gold-400">
                  careers@saargroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-sm space-y-2">
            <p className="text-white">
              © 2025 SAAR Group of Companies. All Rights Reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-400">
              <span>SAAR Engineering Consultancy</span>
              <span className="hidden sm:inline">|</span>
              <span>SAAR MEP Academy</span>
            </div>
            <p className="text-gray-500">
              Designed for Excellence in Engineering & Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

