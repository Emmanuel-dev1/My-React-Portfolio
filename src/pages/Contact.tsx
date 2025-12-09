import { useState } from 'react';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'owusuemmanuel0246@gmail.com',
      link: 'mailto:owusuemmanuel0246@gmail.com',
      icon: (
        <svg className="w-7 h-7 fill-current text-[#3b82f6] dark:text-[#60a5fa]" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/owusu-emmanuel-junior-04000b337',
      link: 'https://www.linkedin.com/in/owusu-emmanuel-junior-04000b337/?trk=opento_sprofile_topcard',
      icon: (
        <svg className="w-7 h-7 fill-current text-[#3b82f6] dark:text-[#60a5fa]" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      title: 'GitHub',
      value: 'github.com/Emmanuel-dev1',
      link: 'https://github.com/Emmanuel-dev1',
      icon: (
        <svg className="w-7 h-7 fill-current text-gray-700 dark:text-gray-300" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      title: 'Location',
      value: 'Germany',
      link: null,
      icon: (
        <svg className="w-7 h-7 fill-current text-gray-700 dark:text-gray-300" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">
          Get In Touch
        </h1>
        <p className="text-xl text-[#6b7280] dark:text-[#d1d5db] max-w-3xl mx-auto">
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="bg-[#ffffff] dark:bg-[#111827] border border-[#e5e7eb] dark:border-[#374151] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-[#111827] dark:text-[#f9fafb]">
              Send a Message
            </h2>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-[#d1fae5] dark:bg-[#065f46] text-[#065f46] dark:text-[#d1fae5] rounded-lg">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#374151] dark:text-[#d1d5db]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f9fafb] dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[#111827] dark:text-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#60a5fa] focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#374151] dark:text-[#d1d5db]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f9fafb] dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[#111827] dark:text-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#60a5fa] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-[#374151] dark:text-[#d1d5db]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f9fafb] dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[#111827] dark:text-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#60a5fa] focus:border-transparent transition-all"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#374151] dark:text-[#d1d5db]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#f9fafb] dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[#111827] dark:text-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:focus:ring-[#60a5fa] focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-8 text-[#111827] dark:text-[#f9fafb]">
                Contact Information
              </h2>
              <p className="text-[#6b7280] dark:text-[#d1d5db] mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className={`flex items-start gap-4 p-6 bg-[#f9fafb] dark:bg-[#1f2937] rounded-xl ${
                    info.link ? 'cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#374151] transition-colors' : ''
                  }`}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111827] dark:text-[#f9fafb]">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[#3b82f6] dark:text-[#60a5fa] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#6b7280] dark:text-[#d1d5db]">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {[
                  {
                    question: 'What is your typical response time?',
                    answer: 'I usually respond within 24 hours on weekdays.',
                  },
                  {
                    question: 'Do you work with international clients?',
                    answer: 'Yes, I work with clients from all over the world.',
                  },
                  {
                    question: 'What are your rates?',
                    answer: 'Rates vary based on project scope. Contact me for a custom quote.',
                  },
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-[#e5e7eb] dark:border-[#374151] rounded-lg p-4"
                  >
                    <summary className="font-medium text-[#111827] dark:text-[#f9fafb] cursor-pointer list-none">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-[#6b7280] dark:text-[#d1d5db]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}