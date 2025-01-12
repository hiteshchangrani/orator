import { FaHome, FaGithub } from 'react-icons/fa'; // Import icons

function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-200 shadow-lg rounded-lg h-14">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src="logo.svg" alt="Logo" className="w-12 h-12 mr-4" />
        <div className="text-2xl font-bold text-white">Orator</div>
      </div>

      {/* Navigation Links with Capsule Buttons */}
      <div className="flex items-center space-x-4">
        {/* Home Button */}
        <a
          href="#home"
          className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
        >
          <FaHome className="mr-2" />
          Home
        </a>
        
        {/* GitHub Button */}
        <a
          href="https://github.com/hiteshchangrani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Header;
