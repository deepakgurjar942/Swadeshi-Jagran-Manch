import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const Publication = () => {
  const [isOpen, setIsOpen] = useState(false);
const location = useLocation();
  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to="/publication"
        className={`px-4 py-2 rounded-full text-gray-100 hover:text-indiaSaffron transition-colors duration-200 text-sm font-medium flex items-center space-x-1 ${
                location.pathname === "/publication" ||
                location.pathname.startsWith("/publication/hindi-patrika") ||
                location.pathname.startsWith("/publication/english-patrika") ||
                location.pathname.startsWith("/publication/books") ||
                location.pathname.startsWith("/category/blog")
                  ? "text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-amber-500/20"
              } `}
      >
        <span>Publication</span>
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
            to="/publication/hindi-patrika"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Hindi Patrika
          </Link>
          <Link
            to="/publication/english-patrika"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            English Patrika
          </Link>
          <Link
            to="/publication/books"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Books
          </Link>
          <Link
            to="category/blog"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Publication;