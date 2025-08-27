import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const StandOnIssue = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to="/stand-on-issue"
        className="px-4 py-2 text-gray-100 hover:text-indiaSaffron transition-colors duration-200 text-sm font-medium flex items-center space-x-1"
      >
        <span>Stand On Issue</span>
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
            to="/stand-on-issue/education"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link
            to="/stand-on-issue/environment"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Environment
          </Link>
          <Link
            to="/stand-on-issue/agriculture"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Agriculture
          </Link>
          <Link
            to="/stand-on-issue/retail-trade"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Retail Trade
          </Link>
          <Link
            to="/stand-on-issue/gm-debate"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            GM Debate
          </Link>
          <Link
            to="/stand-on-issue/ipr"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            IPR
          </Link> 
          <Link
            to="/stand-on-issue/food"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Food
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StandOnIssue;