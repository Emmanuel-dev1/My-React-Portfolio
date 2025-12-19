// src/components/Hero.tsx
import { Link } from 'react-router-dom';
// Update the import path based on your actual file structure
import profileImage from '../assets/profile.png'; // Profile Image path

export default function Hero() {
  return (
    <section className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Emmanuel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2">
              Software Engineering Student & Developer
            </p>
            <p className="text-gray-500 dark:text-gray-500 mb-8 max-w-2xl">
              Passionate about building innovative solutions and creating meaningful digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="border border-gray-300 dark:border-gray-700 hover:border-blue-500 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Get in Touch
              </Link>
            </div>

          </div>

          {/* Right Column - Profile Image - BIGGER SIZE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image Container - INCREASED SIZE */}
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Emmanuel - Software Engineering Student & Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    // Show a placeholder background
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.backgroundColor = '#3b82f6';
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                      parent.innerHTML = '<span class="text-white text-4xl font-bold">E</span>';
                    }
                  }}
                />
              </div>
              
              {/* Optional decorative element - Adjusted for bigger image */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-blue-500 dark:bg-blue-600 rounded-full -z-10 opacity-20"></div>
              <div className="absolute -top-3 -left-3 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-blue-400 dark:bg-blue-500 rounded-full -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
