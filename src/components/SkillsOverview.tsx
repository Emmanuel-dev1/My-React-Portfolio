export default function SkillsOverview() {
  const skills = [
    "JavaScript", "TypeScript", "React", "HTML5", "CSS3", 
    "Tailwind CSS", "Node.js", "Git", "Python", "Java"
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}