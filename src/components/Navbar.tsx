import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GitBranch, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "خانه" },
    { path: "/chapter1", label: "فصل اول: مقدمات" },
    { path: "/chapter2", label: "فصل دوم: نصب و ترمینال" },
    { path: "/chapter3", label: "فصل سوم: Repository و Commands" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex w-full justify-between lg:justify-start items-center gap-x-8 py-4">
          <Link to="/" className="flex items-center gap-x-2 space-x-reverse">
            <GitBranch className="w-8 h-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-800">آموزش Git</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-x-4 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "bg-primary-600 text-purple-700"
                    : "text-gray-700 hover:bg-primary-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-y-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md  transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "bg-primary-600 text-purple-600"
                    : "text-gray-700 hover:bg-primary-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
