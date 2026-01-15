import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ isDark, onToggle, theme }) => {
  return (
    <button
      onClick={onToggle}
      className={`${theme.card} ${theme.border} border p-3 rounded-lg ${theme.hover} transition-all duration-200`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-500" />
      )}
    </button>
  );
};

export default ThemeToggle;