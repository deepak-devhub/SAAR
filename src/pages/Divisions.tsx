import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

export default function Divisions() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches Home page
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Our Divisions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches Home page
            }}
            className="text-xl md:text-2xl text-white/90"
          >
            Two powerful divisions, one shared vision
          </motion.p>
        </div>
      </section>

      <Section background="primary">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
            }}
            className="text-3xl md:text-4xl font-bold text-gold-500 mb-4"
          >
            Our Divisions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.5, 
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
            }}
            className="text-lg text-gray-300"
          >
            Two powerful divisions working together to deliver excellence
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
            }}
          >
            <Link to="/consultancy">
              <Card hover className="h-full">
              <div className="aspect-video bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-200 p-8">
                  <div className="text-center">
                    <Building2 className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">SAAR Engineering Consultancy</h3>
                    <p className="text-gray-200">Innovative MEP Solutions</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-secondary-900">
                <p className="text-gray-300 mb-4">
                  A full-service MEP design consultancy offering HVAC, Electrical, Plumbing, and Fire Fighting 
                  design services for residential, commercial, and industrial projects.
                </p>
                <div className="flex items-center text-gold-500 font-semibold">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </Card>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
            }}
          >
            <Link to="/academy">
              <Card hover className="h-full bg-secondary-900">
              <div className="aspect-video bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-200 p-8">
                  <div className="text-center">
                    <GraduationCap className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">SAAR MEP Academy</h3>
                    <p className="text-gray-200">World-Class Technical Training</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  A professional training institute providing job-oriented MEP design and drafting programs 
                  for engineers and technicians.
                </p>
                <div className="flex items-center text-gold-500 font-semibold">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </Card>
            </Link>
          </motion.div>
        </div>
      </Section>



    </>
  );
}


