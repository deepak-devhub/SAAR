import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  text: string;
  type: 'client' | 'student';
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
        >
          <Quote className="w-12 h-12 text-primary-600 mb-6" />
            <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
            "{testimonials[currentIndex].text}"
          </p>
          <div className="flex items-center justify-between">
            <div>
                  <p className="font-semibold text-gray-400">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-gray-400">
                {testimonials[currentIndex].role}
                {testimonials[currentIndex].company && `, ${testimonials[currentIndex].company}`}
              </p>
            </div>
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
              {testimonials[currentIndex].type === 'client' ? 'Client' : 'Student'}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prev}
            className="p-2 rounded-full bg-gray-900 shadow-md hover:bg-primary-600 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-primary-600 hover:text-white" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2  rounded-full transition-all ${
                index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full bg-gray-900 shadow-md hover:bg-primary-600 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-primary-600 hover:text-white" />
        </button>
      </div>
    </div>
  );
}

