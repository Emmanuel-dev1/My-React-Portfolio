// Update ProjectCard.tsx with responsive design
export default function ProjectCard({ ...props }) {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Responsive image container */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={props.imageUrl} 
          alt={props.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-1">{props.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {props.description}
        </p>
        
        {/* Responsive tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {props.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {props.technologies.length > 3 && (
            <span className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-full">
              +{props.technologies.length - 3}
            </span>
          )}
        </div>
        
        {/* Links */}
        <div className="flex gap-3">
          {props.liveUrl && (
            <a href={props.liveUrl} className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Live Demo
            </a>
          )}
          {props.githubUrl && (
            <a href={props.githubUrl} className="flex-1 text-center py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}