import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `relative px-1 py-2 text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-[#f9fafb] font-medium transition-colors duration-200 ${
              isActive 
                ? 'text-[#3b82f6] dark:text-[#60a5fa] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#3b82f6] dark:after:bg-[#60a5fa] after:rounded-full' 
                : ''
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}