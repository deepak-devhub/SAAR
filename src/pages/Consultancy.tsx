import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, Wind, Zap, Droplets, Cpu, Shield, 
  Leaf, FileCheck, Users, TrendingUp, ArrowRight, Eye 
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const services = [
  { icon: Wind, title: 'Mechanical (HVAC & Firefighting)', description: 'Complete HVAC system design and firefighting solutions' },
  { icon: Zap, title: 'Electrical System Design', description: 'Comprehensive electrical design and power distribution' },
  { icon: Droplets, title: 'Plumbing System Design', description: 'Efficient plumbing and water management systems' },
  { icon: Cpu, title: 'ELV System Design', description: 'Extra Low Voltage systems including security and communication' },
  { icon: Shield, title: 'FLS System Design', description: 'Fire Life Safety systems and emergency response' },
  { icon: Building2, title: 'BIM & Coordination', description: 'Building Information Modeling and multi-disciplinary coordination' },
];

const highlights = [
  { icon: Leaf, title: 'Sustainability', description: 'Eco-friendly designs that reduce environmental impact' },
  { icon: FileCheck, title: 'Code Compliance', description: 'Full adherence to local and international standards' },
  { icon: Users, title: 'Experienced Team', description: '15+ years of combined industry expertise' },
  { icon: TrendingUp, title: 'Value Engineering', description: 'Optimized solutions that maximize value' },
];

const projects = [
  {
    title: 'NMDC Extension Project',
    location: 'ICAD',
    description: 'Large-scale commercial extension with comprehensive MEP systems',
  },
  {
    title: 'Euromech Industrial Facility',
    location: 'KEZAD',
    description: 'Industrial MEP design for manufacturing facility',
  },
  {
    title: 'Foodhub Industrial Facility',
    location: 'KEZAD',
    description: 'Specialized MEP systems for food processing facility',
  },
];

export default function Consultancy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 text-white">
  
        <div className="relative z-10 text-center px-4">
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
            SAAR Engineering Consultancy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches Home page
            }}
            className="text-xl md:text-2xl text-primary-100"
          >
            Innovative MEP Engineering Solutions
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <Section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6 text-center">About Our Consultancy</h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p className="text-left md:text-justify break-words">
                SAAR Engineering Consultancy LLC is a leading MEP engineering firm based in 
                Sharjah Media City, UAE, with extensive experience delivering comprehensive 
                mechanical, electrical, and plumbing design solutions for projects across 
                the UAE and India.
              </p>
              <p className="text-left md:text-justify break-words">
                Our team of experienced engineers brings over 15 years of combined expertise 
                in designing sustainable, code-compliant MEP systems for commercial, industrial, 
                and infrastructure projects. We are committed to delivering innovative solutions 
                that optimize performance, reduce costs, and minimize environmental impact.
              </p>
              <p className="text-left md:text-justify break-words">
                <strong>Credentials:</strong> Licensed engineering consultancy with certifications 
                in sustainable design, BIM coordination, and international code compliance.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">Our Services</h2>
          <p className="text-lg text-gray-300">
            Comprehensive MEP engineering solutions for all project types
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5, 
                  ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
                }}
              >
                <Card hover>
                  <div className="p-6">
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gold-500 mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Why Choose SAAR */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">Why Choose SAAR</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5, 
                  ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
                }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gold-500 mb-2">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-300">
            Recent projects showcasing our engineering excellence
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 mb-4"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gold-500 mb-2">{project.title}</h3>
                  <p className="text-sm text-gold-500 mb-2">{project.location}</p>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTAs */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" className="w-full sm:w-auto">
                Request a Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="w-full sm:w-auto">
                <Eye className="w-5 h-5 mr-2 inline" />
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}


