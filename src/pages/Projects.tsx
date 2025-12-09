import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured' | 'web' | 'mobile'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'web') return project.technologies.includes('React') || project.technologies.includes('Next.js');
    if (filter === 'mobile') return project.technologies.includes('React Native');
    return true;
  });

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">
          My Projects
        </h1>
        <p className="text-xl text-[#6b7280] dark:text-[#d1d5db] max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each project represents a unique challenge and learning opportunity.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'featured', label: 'Featured' },
          { id: 'web', label: 'Web Apps' },
          { id: 'mobile', label: 'Mobile Apps' },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setFilter(id as any)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
              filter === id
                ? 'bg-[#3b82f6] dark:bg-[#60a5fa] text-white'
                : 'bg-[#f3f4f6] dark:bg-[#1f2937] text-[#6b7280] dark:text-[#d1d5db] hover:bg-[#e5e7eb] dark:hover:bg-[#374151]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            featured={project.featured}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-6">📭</div>
          <h3 className="text-2xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">
            No projects found
          </h3>
          <p className="text-[#6b7280] dark:text-[#d1d5db]">
            Try selecting a different filter category
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-[#f9fafb] dark:bg-[#1f2937] rounded-xl">
          <div className="text-3xl font-bold text-[#3b82f6] dark:text-[#60a5fa] mb-2">
            {projects.length}+
          </div>
          <div className="text-[#6b7280] dark:text-[#d1d5db]">Projects Completed</div>
        </div>
        <div className="text-center p-6 bg-[#f9fafb] dark:bg-[#1f2937] rounded-xl">
          <div className="text-3xl font-bold text-[#10b981] dark:text-[#34d399] mb-2">
            100%
          </div>
          <div className="text-[#6b7280] dark:text-[#d1d5db]">Client Satisfaction</div>
        </div>
        <div className="text-center p-6 bg-[#f9fafb] dark:bg-[#1f2937] rounded-xl">
          <div className="text-3xl font-bold text-[#8b5cf6] dark:text-[#a78bfa] mb-2">
            15+
          </div>
          <div className="text-[#6b7280] dark:text-[#d1d5db]">Technologies Used</div>
        </div>
      </div>
    </div>
  );
}