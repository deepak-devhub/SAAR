import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Rocket, Lightbulb, BookOpen, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function About() {
  const coreValues = [
    {
      icon: Target,
      title: 'Practical Excellence',
      description: 'Delivering real-world solutions that work',
    },
    {
      icon: Rocket,
      title: 'Integrity',
      description: 'Transparent, honest, and ethical in all we do',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing new technologies and methodologies',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Committed to growth and knowledge sharing',
    },
  ];

  return (
    <>
      {/* Hero Banner */}
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
            About SAAR Group
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
            Engineering Excellence. Educating the Future.
          </motion.p>
        </div>
      </section>

      {/* Intro Text */}
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
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6 text-center">
              Overview of SAAR Group
            </h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p className="text-left md:text-justify break-words">
                SAAR Group of Companies is a multidisciplinary organization with a strong presence 
                in both the United Arab Emirates and India. We operate through two distinct yet 
                complementary divisions that work together to advance the MEP engineering industry.
              </p>
              <p className="text-left md:text-justify break-words">
                Our Engineering Consultancy division delivers cutting-edge MEP design solutions 
                for commercial, industrial, and infrastructure projects. Our MEP Academy division 
                provides comprehensive technical training programs that bridge the gap between 
                academic knowledge and industry requirements.
              </p>
              <p className="text-left md:text-justify break-words">
                Together, we create a complete ecosystem that not only designs and delivers 
                exceptional engineering solutions but also develops the talent needed to sustain 
                and grow the industry for years to come.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section background="primary">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
            }}
          >
            <Card>
              <div className="p-8 bg-secondary-900">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gold-500 mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be a leading force in MEP engineering and education, recognized for our 
                  commitment to sustainability, innovation, and reliability. We envision a 
                  future where engineering excellence and quality education work hand-in-hand 
                  to create lasting value for our clients, students, and communities.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
            }}
          >
            <Card>
              <div className="p-8 bg-secondary-900">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gold-500 mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To integrate expertise, practical exposure, and cutting-edge technology in 
                  both design and training. We are committed to delivering sustainable, 
                  code-compliant engineering solutions while empowering the next generation 
                  of MEP professionals through comprehensive, industry-aligned education.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Director's Message */}
      <Section>
        <div className="max-w-6xl mx-auto ">
          <Card>
            <div className="md:flex gap-8 p-8 bg-secondary-900">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-700 to-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  DM
                </div>
              </div>
              <div className="flex-grow">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-primary-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l1.017 2.193c-4.224.859-7.392 3.548-7.392 7.003v4.804h5v6h-8.608zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l1.017 2.193c-4.224.859-7.392 3.548-7.392 7.003v4.804h5v6h-8.608z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-300 italic leading-relaxed mb-4">
                  "At SAAR Group, we believe that true excellence comes from combining 
                  engineering expertise with educational empowerment. Our dual focus on 
                  consultancy and training creates a unique value proposition that benefits 
                  our clients, students, and the industry as a whole."
                </p>
                <p className="font-semibold text-gold-500">— Director, SAAR Group</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">
            Our Core Values
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
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
                <Card>
                  <div className="p-6 text-center bg-secondary-900">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gold-500 mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6">
            Discover Our Divisions
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Learn more about how our Engineering Consultancy and MEP Academy work together 
            to deliver excellence.
          </p>
          <Link to="/divisions">
            <Button variant="primary" className="w-full sm:w-auto">
              Explore Divisions
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

