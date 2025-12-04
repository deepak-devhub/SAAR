import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import Section from '../components/ui/Section';
import ContactForm from '../components/ui/ContactForm';

export default function Contact() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Get in Touch with SAAR Group
          </motion.p>
        </div>
      </section>

      {/* Split Screen: Form + Map */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gold-500 mb-6">Send Us a Message</h2>
            <p className="text-gray-300 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <ContactForm />
          </motion.div>

          {/* Right: Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gold-500 mb-6">Our Locations</h2>
              
              {/* UAE Office */}
              <div className="bg-secondary-900 rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gold-500 mb-4">UAE Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">
                      SAAR Engineering Consultancy LLC<br />
                      Sharjah Media City, UAE
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <a href="tel:+971XXXXXXXXX" className="text-gray-300 hover:text-gold-500">
                      +971 XX XXX XXXX
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <a href="mailto:info@saargroup.com" className="text-gray-300 hover:text-gold-500">
                      info@saargroup.com
                    </a>
                  </div>
                </div>
              </div>

              {/* India Office */}
              <div className="bg-secondary-900 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gold-500 mb-4">India Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">
                      SAAR MEP Academy<br />
                      Thrissur, Kerala, India
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                    <a href="tel:+91XXXXXXXXXX" className="text-gray-300 hover:text-gold-500">
                      +91 XXXX XXX XXX
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                    <a href="mailto:careers@saargroup.com" className="text-gray-300 hover:text-gold-500">
                      careers@saargroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-gray-200 rounded-xl overflow-hidden" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1234567890123!2d55.12345678901234!3d25.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjQiTiA1NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAAR Group Locations"
              ></iframe>
            </div>

            {/* Social Media Icons */}
            <div>
              <h3 className="text-lg font-semibold text-gold-500 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 hover:bg-primary-600 text-primary-600 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}


