import { useState } from 'react';
import { motion } from 'framer-motion';
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
  // Get the first 3 testimonials to always show
  const visibleTestimonials = testimonials.slice(0, 3);
  
  // Track which card is in the middle position
  // rotation = 0: card[0] in middle, card[1] right, card[2] left
  // rotation = 1: card[1] in middle, card[2] right, card[0] left  
  // rotation = 2: card[2] in middle, card[0] right, card[1] left
  const [rotation, setRotation] = useState(1); // Start with card 1 in middle

  // Get which position (0=left, 1=middle, 2=right) a card index should be displayed at
  const getCardPosition = (cardIndex: number) => {
    // Calculate relative position: how many steps ahead/behind the middle card
    const relativePos = (cardIndex - rotation + 3) % 3;
    // relativePos 0 = middle, 1 = right, 2 = left
    return relativePos === 0 ? 1 : relativePos === 1 ? 2 : 0;
  };

  const next = () => {
    // Rotate: left→right, middle→left, right→middle
    // This means the card currently in middle goes to left, right goes to middle, left goes to right
    setRotation((prev) => (prev + 1) % 3);
  };

  const prev = () => {
    // Reverse rotation: right→left, middle→right, left→middle
    setRotation((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="relative overflow-hidden h-[320px]">
        <div className="flex items-stretch gap-4 md:gap-6 relative h-full">
          {visibleTestimonials.map((testimonial, cardIndex) => {
            const position = getCardPosition(cardIndex);
            const isMiddle = position === 1;
            
            const flexOrder = position + 1;
            
            return (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  order: flexOrder,
                  opacity: isMiddle ? 2 : 1,
                  zIndex: isMiddle ? 2 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
                className="flex-1 w-full h-full min-w-0"
                style={{
                  order: flexOrder,
                }}
              >
                <div className="bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8 h-full w-full flex flex-col min-h-0">
                  <Quote className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] text-primary-600 mb-4 flex-shrink-0" />
                  <p className="text-base md:text-lg text-white mb-2 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="font-semibold text-gray-400 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      {testimonial.type === 'client' ? 'Client' : 'Student'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prev}
          className="group p-2 rounded-full bg-gray-900 shadow-md hover:bg-primary-600 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
        </button>
        <div className="flex gap-2">
          {visibleTestimonials.map((_, cardIndex) => {
            const isActive = rotation === cardIndex; // Card in middle position
            return (
              <button
                key={cardIndex}
                onClick={() => setRotation(cardIndex)}
                className={`w-2 h-2 rounded-full transition-all ${
                  isActive ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${cardIndex + 1}`}
              />
            );
          })}
        </div>
        <button
          onClick={next}
          className="group p-2 rounded-full bg-gray-900 shadow-md hover:bg-primary-600 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}

