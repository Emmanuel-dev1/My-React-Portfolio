import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Have a project in mind? I'd love to help bring your ideas to life.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}