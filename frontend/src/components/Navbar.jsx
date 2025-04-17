import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    const initialMode = localStorage.getItem('theme') || 'dark';
    root.classList.toggle('dark', initialMode === 'dark');
    setIsDark(initialMode === 'dark');
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    root.classList.toggle('dark');
    const newTheme = root.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setIsDark(newTheme === 'dark');
  };

  const navLink = "text-sm font-medium hover:text-blue-500 transition";

return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/">
                <img
                    src="/TaskForge.png"
                    alt="TaskForge Logo"
                    className="h-12 w-auto object-contain mx-2"
                />
            </a>
            <nav className="flex space-x-4 items-center">
                <Link className={navLink} to="/">
                    Task Board
                </Link>
                <Link className={navLink} to="/bin">
                    Bin
                </Link>
                <Link className={navLink} to="/login">
                    Login
                </Link>
                <Link className={navLink} to="/signup">
                    Sign Up
                </Link>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded text-yellow-500 hover:text-yellow-400 transition"
                    title="Toggle Dark Mode"
                >
                    {isDark ? '🌙' : '☀️'}
                </button>
            </nav>
        </div>
    </header>
);
}

export default Navbar;
