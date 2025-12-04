import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, MapPin, ArrowRight, FileText } from 'lucide-react';
import { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NMDC Extension Project',
    location: 'ICAD',
    type: 'Commercial',
    description: 'Large-scale commercial extension project requiring comprehensive MEP systems design including HVAC, electrical, plumbing, and fire safety systems.',
    highlights: [
      'Sustainable HVAC design with energy efficiency focus',
      'Complete electrical distribution system',
      'Advanced fire safety and life safety systems',
      'BIM coordination across all disciplines',
    ],
  },
  {
    id: 2,
    title: 'Euromech Industrial Facility',
    location: 'KEZAD',
    type: 'Industrial',
    description: 'Industrial manufacturing facility with specialized MEP requirements including process cooling, high-power electrical systems, and industrial plumbing.',
    highlights: [
      'Specialized HVAC for manufacturing processes',
      'High-capacity electrical systems',
      'Industrial-grade plumbing and drainage',
      'Value engineering optimization',
    ],
  },
  {
    id: 3,
    title: 'Foodhub Industrial Facility',
    location: 'KEZAD',
    type: 'Industrial',
    description: 'Food processing facility requiring specialized MEP systems including cold storage HVAC, food-grade plumbing, and critical power systems.',
    highlights: [
      'Cold storage and refrigeration systems',
      'Food-grade plumbing and water treatment',
      'Critical power and backup systems',
      'Code compliance for food industry',
    ],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type.toLowerCase() === filter.toLowerCase());

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
            Our Projects
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
            Showcasing Engineering Excellence
          </motion.p>
        </div>
      </section>

      {/* Projects Gallery */}
      <Section>
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'commercial', 'industrial'].map((filterType, index) => (
            <motion.button
              key={filterType}
              onClick={() => setFilter(filterType)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
              }}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === filterType
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-900 text-gray-300 hover:bg-primary-600'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
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
              <Card hover className="h-full flex flex-col bg-secondary-900">
                <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <Building2 className="w-16 h-16 opacity-80" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-primary-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.type}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gold-500 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gold-500 mb-2">Key Highlights:</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <span className="text-gold-500 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="!pt-8 md:!pt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how we can bring your vision to life with our engineering expertise
          </p>
          <Link to="/contact">
            <Button variant="primary" className="w-full sm:w-auto">
              <FileText className="w-5 h-5 mr-2 inline" />
              Request a Proposal
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}


