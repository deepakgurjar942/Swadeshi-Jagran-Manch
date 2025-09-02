import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const ResourcesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to="/resource-center"
        className="px-4 py-2 text-gray-100 hover:text-indiaSaffron transition-colors duration-200 text-sm font-medium flex items-center space-x-1"
      >
        <span>Resources Center</span>
        <FaCaretDown
          className={`text-xs transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Link>

      <div
        className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 transition-all duration-300 ease-in-out z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="py-1">
          <Link
            to="/category/national-events"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            National Events
          </Link>
          <Link
            to="/category/sb-abhiyan"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Swavlambi Bharat Abhiyan
          </Link>
          <Link
            to="/category/resolution"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
              Resolution
          </Link>
          <Link
            to="/category/press-releases"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Press Releases
          </Link>
           <Link
            to="/category/news-wire"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            News Wire
          </Link>
           <Link
            to="/allpost"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Articles By Author
          </Link> 
          <Link
            to="/category/editorial"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Editorial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropdown;