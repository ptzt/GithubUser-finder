import React from "react";

interface DarkModeProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeComponent: React.FC<DarkModeProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <div className={`flex items-center`}>
      <button
        className={`toggle-button relative h-6 w-12 rounded-full transition duration-300 focus:outline-none ${
          darkMode ? "bg-gray-600" : "bg-gray-300"
        }`}
        onClick={toggleDarkMode}
      >
        <span
          className={`dot absolute left-1 top-1 h-4 w-4 transform rounded-full bg-white transition duration-300 ${
            darkMode ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <span className="ml-2 text-sm font-bold text-blue-950 dark:text-white">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};

export default DarkModeComponent;
