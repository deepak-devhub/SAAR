import { motion } from 'framer-motion';
import { Briefcase, Mail, Users, GraduationCap, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const positions = [
  {
    title: 'MEP Design Engineers',
    department: 'Engineering',
    description: 'We are seeking experienced MEP Design Engineers with expertise in HVAC, electrical, or plumbing systems design. Candidates should have strong technical skills and experience with BIM software.',
    requirements: [
      'Bachelor\'s degree in Mechanical/Electrical Engineering',
      '3+ years of MEP design experience',
      'Proficiency in AutoCAD, Revit MEP',
      'Knowledge of local and international codes',
    ],
  },
  {
    title: 'Electrical / Mechanical / HVAC Designers & Draftsmen',
    department: 'Design',
    description: 'Join our design team as a Designer or Draftsman specializing in electrical, mechanical, or HVAC systems. Work on diverse projects and grow your career with us.',
    requirements: [
      'Diploma or degree in relevant field',
      '2+ years of drafting/design experience',
      'Strong AutoCAD and Revit skills',
      'Attention to detail and accuracy',
    ],
  },
  {
    title: 'Trainers (HVAC, Electrical, Plumbing)',
    department: 'Academy',
    description: 'Share your expertise as a trainer at SAAR MEP Academy. We need experienced professionals to teach HVAC, Electrical, or Plumbing design courses.',
    requirements: [
      '5+ years of industry experience',
      'Strong communication and teaching skills',
      'Passion for education and mentorship',
      'Relevant certifications preferred',
    ],
  },
  {
    title: 'Internships for Students',
    department: 'All Departments',
    description: 'We offer internship opportunities for engineering students to gain real-world experience in MEP design and consultancy. Learn from industry experts and work on live projects.',
    requirements: [
      'Currently pursuing engineering degree',
      'Interest in MEP engineering',
      'Basic knowledge of AutoCAD',
      'Willingness to learn and grow',
    ],
  },
];

export default function Careers() {
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
            Join Our Growing Team
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
            Build Your Career with SAAR Group
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-6">
              Why Work with SAAR Group?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              At SAAR Group, we believe in fostering talent and providing opportunities for 
              professional growth. Whether you're an experienced engineer, a skilled designer, 
              or a student looking to start your career, we have a place for you in our 
              dynamic team.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Users className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gold-500 mb-2">Collaborative Environment</h3>
                <p className="text-sm text-gray-300">Work with talented professionals</p>
              </div>
              <div className="text-center">
                <GraduationCap className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gold-500 mb-2">Continuous Learning</h3>
                <p className="text-sm text-gray-300">Grow your skills and expertise</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gold-500 mb-2">Diverse Projects</h3>
                <p className="text-sm text-gray-300">Work on exciting challenges</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">Open Positions</h2>
          <p className="text-lg text-gray-300">
            Explore current opportunities to join our team
          </p>
        </div>
        <div className="max-w-5xl mx-auto space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
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
              <Card hover className='bg-secondary-900'>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gold-500 mb-2">{position.title}</h3>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                    <Briefcase className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gold-500 mb-3">Requirements:</p>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-gold-500 mr-2 mt-1">•</span>
                          {req}
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
      <Section>
        <div className="max-w-4xl mx-auto text-center">
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
            <div className="bg-gradient-to-br rounded-2xl p-12">
              <Mail className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">
                Ready to Apply?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Send your resume to our careers team. We're always looking for talented 
                individuals to join our growing team.
              </p>
              <a href="mailto:careers@saargroup.com">
                <Button variant="primary" className="w-full sm:w-auto">
                  <Mail className="w-5 h-5 mr-2 inline" />
                  Send Resume to careers@saargroup.com
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

