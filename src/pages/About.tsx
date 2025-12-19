import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function About() {
  const navigate = useNavigate();
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Jest'] },
  ];

  // Function to handle CV download
  const handleDownloadCV = () => {
    try {
      // Method 1: Direct link to the file in public folder
      // First, try with a direct path (if you move it to public folder)
      const cvPath = '/CV.pdf'; // If you move CV.pdf to public folder
      
      // Method 2: Using a relative path from src/assets
      const cvPath2 = '/src/assets/CV.pdf'; // Direct path to your file
      
      // Create a temporary link
      const link = document.createElement('a');
      link.href = cvPath2; // Try the direct path first
      link.download = 'Emmanuel_Owusu_Jnr_CV.pdf'; // Custom filename for download
      link.target = '_blank'; // Open in new tab
      link.rel = 'noopener noreferrer';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Success message
      console.log('CV download initiated');
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      
      // Fallback: Open in new tab if download doesn't work
      window.open('/src/assets/CV.pdf', '_blank');
      
      // Alternative: Show a message
      alert('Opening CV in new tab. If download doesn\'t start, right-click and "Save link as..."');
    }
  };

  // Function to navigate to contact page
  const handleContactMe = () => {
    navigate('/contact');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">
          About Me
        </h1>
        <p className="text-xl text-[#6b7280] dark:text-[#d1d5db] max-w-3xl mx-auto">
          Passionate developer creating digital experiences that make a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Story */}
        <div>
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">
              My Journey
            </h2>
            <p className="text-[#6b7280] dark:text-[#d1d5db] mb-4">
              Hello! I'm a passionate frontend developer with {new Date().getFullYear() - 2023}+ years of experience building web applications. My journey started with a curiosity about how websites work, which evolved into a career creating digital solutions.
            </p>
            <p className="text-[#6b7280] dark:text-[#d1d5db] mb-4">
              I specialize in React, TypeScript, and modern web technologies. I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.
            </p>
            <p className="text-[#6b7280] dark:text-[#d1d5db]">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through blog posts and tutorials.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </button>
            
            {/* Contact Me Button */}
            <button
              onClick={handleContactMe}
              className="border border-gray-300 dark:border-gray-700 hover:border-blue-500 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-[#111827] dark:text-[#f9fafb]">
            Skills & Technologies
          </h2>
          
          <div className="space-y-8">
            {skills.map((skillCategory) => (
              <div key={skillCategory.category}>
                <h3 className="text-lg font-semibold mb-4 text-[#374151] dark:text-[#d1d5db]">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#f0f9ff] dark:bg-[#1e3a8a] text-[#0369a1] dark:text-[#93c5fd] rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="text-center p-4 bg-[#f9fafb] dark:bg-[#1f2937] rounded-lg">
              <div className="text-2xl font-bold text-[#3b82f6] dark:text-[#60a5fa]">
                {new Date().getFullYear() - 2023}+
              </div>
              <div className="text-sm text-[#6b7280] dark:text-[#9ca3af] mt-1">
                Years Experience
              </div>
            </div>
            <div className="text-center p-4 bg-[#f9fafb] dark:bg-[#1f2937] rounded-lg">
              <div className="text-2xl font-bold text-[#10b981] dark:text-[#34d399]">
                15+
              </div>
              <div className="text-sm text-[#6b7280] dark:text-[#9ca3af] mt-1">
                Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8 text-[#111827] dark:text-[#f9fafb]">
          Education & Experience
        </h2>
        
        <div className="space-y-6">
          {[
            {
              period: '2022 - Present',
              title: 'Senior Frontend Developer',
              company: 'Tech Innovations Inc.',
              description: 'Leading frontend development for enterprise applications.',
            },
            {
              period: '2020 - 2022',
              title: 'Full Stack Developer',
              company: 'Digital Solutions Agency',
              description: 'Developed full-stack applications for various clients.',
            },
            {
              period: '2018 - 2020',
              title: 'Frontend Developer',
              company: 'Startup Studio',
              description: 'Built responsive web applications using React.',
            },
            {
              period: '2014 - 2018',
              title: 'Computer Science',
              company: 'University of Technology',
              description: 'Bachelor of Science in Computer Science',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-6 p-6 bg-[#f9fafb] dark:bg-[#1f2937] rounded-xl"
            >
              <div className="px-4 py-2 bg-[#3b82f6] dark:bg-[#60a5fa] text-white rounded-lg font-medium min-w-[120px] text-center">
                {item.period}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111827] dark:text-[#f9fafb]">
                  {item.title}
                </h3>
                <p className="text-[#3b82f6] dark:text-[#60a5fa] font-medium mb-2">
                  {item.company}
                </p>
                <p className="text-[#6b7280] dark:text-[#d1d5db]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}