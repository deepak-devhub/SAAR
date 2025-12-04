import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'secondary';
}

export default function Section({ 
  children, 
  className = '', 
  id,
  background = 'white' 
}: SectionProps) {
  const backgrounds = {
    white: 'bg-black',
    gray: 'bg-gray-900',
    primary: 'bg-gold-900/10',
    secondary: 'bg-secondary-800',
  };

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

