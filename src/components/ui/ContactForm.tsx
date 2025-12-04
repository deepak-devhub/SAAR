import { useForm } from 'react-hook-form';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // In a real application, this would send to an API
    console.log('Form submitted:', data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="bg-secondary-900 w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your full name"
           
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="bg-secondary-900 w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject *
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject', { required: 'Subject is required' })}
          className="bg-secondary-900 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="What is this regarding?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <textarea
            id="message"
            rows={6}
            {...register('message', { required: 'Message is required' })}
            className="bg-secondary-900 w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            placeholder="Tell us how we can help..."
          />
        </div>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

