import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, Users, Briefcase, Award, 
  ArrowRight, FileText
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import TestimonialSlider from '../components/ui/TestimonialSlider';

const courses = [
  { title: 'Professional Diploma in MEP Design', duration: '12 Months' },
  { title: 'HVAC Design & Drafting', duration: '3 Months' },
  { title: 'Electrical Design & Drafting', duration: '3 Months' },
  { title: 'Plumbing & Firefighting Design & Drafting', duration: '3 Months' },
  { title: 'Revit MEP (BIM)', duration: '2 Months' },
  { title: 'AutoCAD Training', duration: '1 Month' },
  { title: 'Crash Courses / Workshops / Industrial Training', duration: 'Flexible' },
  { title: 'Corporate Upskilling Programs', duration: 'Custom' },
  { title: 'Online Self-Paced Courses', duration: 'Flexible' },
];

const features = [
  { icon: BookOpen, title: 'Project-based Learning', description: 'Real-world projects and case studies' },
  { icon: Users, title: 'Industry Mentorship', description: 'Guidance from experienced professionals' },
  { icon: Briefcase, title: 'Placement Support', description: 'Career assistance and job placement' },
  { icon: Award, title: 'Certified Faculty', description: 'Expert instructors with industry experience' },
];

const studentTestimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'MEP Design Engineer',
    text: 'The Professional Diploma program gave me the confidence and skills to excel in my career. The hands-on training with real projects was invaluable.',
    type: 'student' as const,
  },
  {
    id: 2,
    name: 'Sarah Ahmed',
    role: 'HVAC Designer',
    text: 'SAAR MEP Academy\'s Revit MEP course transformed my career. The instructors are knowledgeable and the curriculum is industry-relevant.',
    type: 'student' as const,
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Electrical Design Engineer',
    text: 'The placement support and industry connections I gained through the academy helped me land my dream job. Highly recommended!',
    type: 'student' as const,
  },
];

export default function Academy() {
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
            SAAR MEP Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches Home page
            }}
            className="text-xl md:text-2xl text-secondary-100"
          >
            World-Class Technical Training
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <Section >
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
            <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6 text-center">About SAAR MEP Academy</h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p className="text-left md:text-justify break-words">
                SAAR MEP Academy, based in Thrissur, Kerala, India, is dedicated to providing 
                comprehensive technical training in MEP design and engineering. Our mission is 
                to bridge the gap between academic knowledge and industry requirements, preparing 
                students for successful careers in the MEP industry.
              </p>
              <p className="text-left md:text-justify break-words">
                We offer a wide range of courses from professional diplomas to specialized 
                training programs, all designed with industry input to ensure relevance and 
                practical applicability. Our curriculum combines theoretical knowledge with 
                hands-on project experience, giving students the confidence and skills needed 
                to excel in their careers.
              </p>
              <p className="text-left md:text-justify break-words">
                With certified faculty, industry partnerships, and placement support, SAAR MEP 
                Academy is your gateway to a successful career in MEP engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Courses Grid */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">Our Courses</h2>
          <p className="text-lg text-gray-300">
            Comprehensive training programs for every career stage
          </p>
        </div>
        <div className=" p-6 rounded-xl shadow-lg grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                delay: index * 0.05, 
                duration: 0.5, 
                ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
              }}
              className="h-full"
            >
              <Card hover className='bg-secondary-900 h-full flex flex-col'>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <BookOpen className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <span className="text-sm text-black bg-primary-600 px-2 py-1 rounded">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-300 flex-grow">{course.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">Why Choose SAAR MEP Academy</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
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
                <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-10 h-10 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-gold-500 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

            {/* CTAs */}
            <Section background="primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Take the first step towards a successful career in MEP engineering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="w-full sm:w-auto">
                <FileText className="w-5 h-5 mr-2 inline" />
                View Course Details
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" className="w-full sm:w-auto">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">Student Testimonials</h2>
        </div>
        <TestimonialSlider testimonials={studentTestimonials} />
      </Section>


    </>
  );
}

