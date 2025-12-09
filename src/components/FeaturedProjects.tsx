import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing projects and skills with modern design.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourportfolio.com"
    },
    {
      title: "FlipCoinz",
      description: "Stock market website with live trade updates and analysis features.",
      technologies: ["JavaScript", "CSS Grid", "HTML5"],
      githubUrl: "https://github.com/yourusername/flipcoinz",
      liveUrl: "https://flipcoinz.demo.com"
    },
    // Add more projects
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}