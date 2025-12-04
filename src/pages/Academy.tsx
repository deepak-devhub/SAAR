import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Users, Briefcase, Award, 
  ArrowRight, FileText, ChevronLeft, ChevronRight, Quote
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

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
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % studentTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + studentTestimonials.length) % studentTestimonials.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            SAAR MEP Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary-100"
          >
            World-Class Technical Training
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6">About SAAR MEP Academy</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              SAAR MEP Academy, based in Thrissur, Kerala, India, is dedicated to providing 
              comprehensive technical training in MEP design and engineering. Our mission is 
              to bridge the gap between academic knowledge and industry requirements, preparing 
              students for successful careers in the MEP industry.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We offer a wide range of courses from professional diplomas to specialized 
              training programs, all designed with industry input to ensure relevance and 
              practical applicability. Our curriculum combines theoretical knowledge with 
              hands-on project experience, giving students the confidence and skills needed 
              to excel in their careers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With certified faculty, industry partnerships, and placement support, SAAR MEP 
              Academy is your gateway to a successful career in MEP engineering.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Courses Grid */}
      <Section background="gray">
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
              transition={{ delay: index * 0.05, duration: 0.4 }}
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
                transition={{ delay: index * 0.1, duration: 0.4 }}
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

      {/* Testimonials */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">Student Testimonials</h2>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary-900 rounded-2xl shadow-xl p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-primary-600 mb-6" />
              <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
                "{studentTestimonials[currentTestimonialIndex].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-400">
                    {studentTestimonials[currentTestimonialIndex].name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {studentTestimonials[currentTestimonialIndex].role}
                  </p>
                </div>
                <span className="px-3 py-1 bg-gray-200 text-black rounded-full text-xs font-medium">
                  Student
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - You can style these manually */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-secondary-900 shadow-md hover:bg-gold-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600 hover:text-black" />
            </button>
            <div className="flex gap-2">
              {studentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonialIndex ? 'bg-gold-500 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-secondary-900 shadow-md hover:bg-gold-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary-600 hover:text-black" />
            </button>
          </div>
        </div>
      </Section>

      {/* CTAs */}
      <Section>
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
    </>
  );
}

