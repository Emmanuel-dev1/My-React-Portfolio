export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing online store operations with real-time analytics and inventory management.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/username/ecommerce-dashboard',
    liveUrl: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Weather Forecast App',
    description: 'Real-time weather application with 7-day forecast, location-based suggestions, and beautiful UI.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/username/weather-app',
    liveUrl: 'https://weather.demo.com',
    featured: false,
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Collaborative task management tool with drag-drop interface, team assignments, and progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/task-manager',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with dark mode, responsive design, and project showcase.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://yourportfolio.com',
    featured: false,
  },
  {
    id: 5,
    title: 'AI Chat Assistant',
    description: 'Intelligent chat assistant powered by OpenAI with conversation history and multiple AI models.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Express.js'],
    githubUrl: 'https://github.com/username/ai-chat',
    featured: true,
  },
  {
    id: 6,
    title: 'Expense Tracker',
    description: 'Personal finance management app with expense categorization, budgeting tools, and visual reports.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Recharts'],
    githubUrl: 'https://github.com/username/expense-tracker',
    liveUrl: 'https://expenses.demo.com',
    featured: false,
  },
];