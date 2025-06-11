import React, { useState } from 'react';
import {
  Home,
  User,
  Code2,
  FolderOpen,
  Briefcase,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: <Home size={22} className="text-indigo-300" /> },
  { id: 'about', label: 'About', icon: <User size={22} className="text-pink-300" /> },
  { id: 'skills', label: 'Skills', icon: <Code2 size={22} className="text-yellow-300" /> },
  { id: 'projects', label: 'Projects', icon: <FolderOpen size={22} className="text-green-300" /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={22} className="text-red-300" /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={22} className="text-blue-300" /> },
];

function Sidebar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-[70px] sm:w-[80px] md:w-[100px]' : 'w-0'
      } overflow-hidden bg-[#1e1e2f] dark:bg-[#12121b] backdrop-blur-md shadow-xl border-r border-white/10`}
    >
      <div className="relative h-full flex flex-col items-center py-6">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 right-[-40px] bg-[#1e1e2f] dark:bg-[#12121b] p-2 rounded-full shadow-md z-50"
        >
          {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </button>

        {/* Navigation */}
        {isOpen && (
          <nav className="mt-12 space-y-6 flex flex-col items-center">
            {navItems.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="group relative p-3 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {icon}
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                  {label}
                </span>
              </button>
            ))}
          </nav>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
