import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, Globe, GraduationCap, Users, CheckCircle, 
  ArrowRight, Building2
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import TestimonialSlider from '../components/ui/TestimonialSlider';

const testimonials = [
  {
    id: 1,
    name: 'Construction Firm Representative',
    role: 'Project Partner',
    company: 'SAAR Project Related Construction Firm',
    text: "SAAR's MEP design services exceeded our expectations — efficient, compliant, and well-coordinated.",
    type: 'client' as const,
  },
  {
    id: 2,
    name: 'SAAR MEP Academy Alumnus',
    role: 'MEP Design Engineer',
    text: "The Academy's training gave me real project exposure — I got placed in a leading MEP firm within 2 months.",
    type: 'student' as const,
  },
  {
    id: 3,
    name: 'Construction Firm Representative',
    role: 'Project Partner',
    company: 'SAAR Project Related Construction Firm',
    text: 'Working with SAAR has been a game-changer. Their value engineering approach saved us significant costs while maintaining the highest quality standards.',
    type: 'client' as const,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Headline and Two Portfolio Cards */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing
        }}
        className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(184, 134, 11, 0.2), rgba(0, 0, 0, 0.5), black)',
          }}
        />

          {/* Floating gold particles */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-500/30 rounded-full"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0, 0.5, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            {/* Hero Headline and Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="text-center mb-16 max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-500 mb-6">
                Engineering Excellence. Educating the Future.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                SAAR Group delivers innovative MEP engineering solutions and world-class 
                technical training through its two specialized divisions — SAAR Engineering Consultancy 
                and SAAR MEP Academy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultancy">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Explore Consultancy
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </Button>
                </Link>
                <Link to="/academy">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Visit Academy
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Two Portfolio Cards */}
            

          </div>

          
      </motion.section>

      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">
            Our Divisions
          </h2>
          <p className="text-lg text-gray-300">
            Two powerful divisions working together to deliver excellence
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto ">
          <Link to="/consultancy">
            <Card hover className="h-full ">
              <div className="aspect-video bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-200 p-8">
                  <div className="text-center ">
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
        </div>
      </Section>

      {/* About SAAR Group Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
            }}
            className="text-3xl md:text-4xl font-bold text-gold-500 mb-6"
          >
            About SAAR Group
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              delay: 0.1, 
              duration: 0.5, 
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
            }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Founded by experienced MEP engineers, SAAR Group is a multidisciplinary organization 
            based in UAE & India, offering both professional MEP consultancy services and industry-oriented 
            training programs. Our mission is to bridge the gap between engineering practice and education 
            & designing world-class building systems while developing the next generation of MEP professionals.
          </motion.p>
        </div>
      </Section>


      {/* Core Strengths */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">
            Core Strengths
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Award, title: '15+ Years', subtitle: 'Experience' },
            { icon: Globe, title: 'UAE & India', subtitle: 'Projects' },
            { icon: GraduationCap, title: 'Accredited', subtitle: 'Training Programs' },
            { icon: Users, title: 'Skilled', subtitle: 'Faculty' },
            { icon: CheckCircle, title: 'Quality, Integrity', subtitle: 'Innovation' },
          ].map((strength, index) => {
            const Icon = strength.icon;
            return (
              <motion.div
                key={strength.title}
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
                <div className="w-20 h-20 mx-auto mb-4 bg-gold-900/20 rounded-full flex items-center justify-center border border-gold-700/30">
                  <Icon className="w-10 h-10 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-400 mb-1">{strength.title}</h3>
                <p className="text-gray-300">{strength.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

            {/* Call-to-Action */}
            <Section background="primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether you need reliable MEP design solutions or want to build your engineering career 
            — SAAR is your trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultancy">
              <Button variant="primary" className="w-full sm:w-auto">
                Work with SAAR Engineering Consultancy
              </Button>
            </Link>
            <Link to="/academy">
              <Button variant="secondary" className="w-full sm:w-auto">
                Enroll at SAAR MEP Academy
              </Button>
            </Link>
          </div>
        </div>
      </Section>

            {/* Client & Partner Logos */}
            <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">
            Our Clients & Partners
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {['NMDC', 'ICAD', 'KEZAD', 'Euromech'].map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-24 bg-secondary-900 rounded-lg flex items-center justify-center border border-gold-800/20"
            >
              <span className="text-gold-400 font-semibold text-lg">{client}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">
            What Our Clients & Students Say
          </h2>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </Section>




    </>
  );
}

