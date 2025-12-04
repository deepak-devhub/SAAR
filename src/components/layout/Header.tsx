import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import logoImage from '../../assets/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },
    { name: 'Divisions', href: '/divisions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold-800/20 shadow-lg shadow-gold-900/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3 group">
            <motion.img
              src={logoImage}
              alt="SAAR MEP Academy"
              className="h-12 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-gold-500 border-b-2 border-gold-500'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/consultancy">
              <Button variant="outline" className="text-sm">
                Explore Consultancy
              </Button>
            </Link>
            <Link to="/academy">
              <Button variant="primary" className="text-sm">
                Visit Academy
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-gold-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 space-y-4"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'text-gold-500'
                      : 'text-gray-300 hover:text-gold-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t">
                <Link to="/divisions#consultancy" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-sm">
                    Explore Consultancy
                  </Button>
                </Link>
                <Link to="/divisions#academy" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full text-sm">
                    Visit Academy
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

