import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";

const AllPostPage = () => {
  const authors = [
    { name: "Dr. Ashwani Mahajan", role: "Economics Professor", posts: 24 },
    { name: "Dr. Surya Prakash Agarwal", role: "Political Analyst", posts: 18 },
    { name: "Dr. Bhagwat Ram Agarwal", role: "History Scholar", posts: 32 },
    { name: "Devindra Sharma", role: "Environmental Writer", posts: 15 },
    { name: "S. Gurumurthy", role: "Columnist", posts: 29 },
    { name: "Alok Singh", role: "Technology Expert", posts: 12 },
    { name: "KK Srivastava", role: "Foreign Affairs Analyst", posts: 21 },
    { name: "Dr. Jaya Kakkar", role: "Health Specialist", posts: 17 },
    { name: "Dr. Vandana Shiva", role: "Environmental Activist", posts: 38 },
    { name: "Anil Tiwari", role: "Educationist", posts: 14 },
    { name: "Prof. Bhagwati Prakash Sharma", role: "Sociology Professor", posts: 26 },
    { name: "Indra Shekhar Singh", role: "Agriculture Expert", posts: 19 },
    { name: "Vinod Johri", role: "Business Analyst", posts: 22 },
    { name: "Prof. Nandini Kapur Sinha", role: "Literature Professor", posts: 16 },
    { name: "Mahadevyya Karadalli", role: "Cultural Writer", posts: 13 },
    { name: "Vikram Upadhyay", role: "Legal Analyst", posts: 20 },
    { name: "Anil Javalekar", role: "Science Communicator", posts: 11 },
    { name: "Dr. Vamraj Kumar", role: "Medical Researcher", posts: 25 },
    { name: "Dr. Jaya Sharma", role: "Gender Studies Expert", posts: 18 },
    { name: "Dr. Dinesh Prasad Mishra", role: "Public Policy Analyst", posts: 23 },
    { name: "Bharat Dogra", role: "Development Journalist", posts: 35 },
    { name: "Prahlad Sabnani", role: "Art Critic", posts: 14 },
    { name: "Dr. S. Lingamurthy", role: "Linguistics Professor", posts: 17 },
    { name: "Shivanand Lal", role: "Philosophy Writer", posts: 16 },
    { name: "Swadesh Samvad", role: "Media Collective", posts: 28 },
    { name: "Vikas Sinha", role: "Investigative Journalist", posts: 19 },
    { name: "Dr. Sumit Dahiya", role: "Climate Scientist", posts: 22 },
    { name: "Dulichand Kaliraman", role: "Folklore Researcher", posts: 15 },
  ];

  const [search, setSearch] = useState("");
  const [filteredAuthors, setFilteredAuthors] = useState(authors);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter authors based on search
  useEffect(() => {
    if (search) {
      const filtered = authors.filter(author => 
        author.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredAuthors(filtered);
    } else {
      setFilteredAuthors(authors);
    }
  }, [search]);

  // Check scroll position to show/hide navigation buttons
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      checkScrollPosition(); // Initial check
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const slide = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const clearSearch = () => {
    setSearch("");
  };

  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Function to generate a color based on author's name
  const generateColorFromName = (name) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
      'bg-pink-500', 'bg-red-500', 'bg-yellow-500', 
      'bg-indigo-500', 'bg-teal-500', 'bg-orange-500'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Authors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our esteemed authors who have contributed their knowledge and expertise across various domains.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10 relative max-w-2xl mx-auto">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search authors by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
            {search && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        {/* Horizontal Scroll Authors */}
        <div className="relative mb-8">
          {/* Left Button */}
          {showLeftButton && (
            <button
              onClick={() => slide("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 z-10 transition-opacity duration-300 -ml-4"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}

          <div
            // ref={scrollRef}
            className="overflow-x-auto scrollbar-hide py-2"
            onScroll={checkScrollPosition}
          >
            <div className="flex space-x-6 pb-4">
              {isLoading ? (
                // Skeleton loading state
                Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 bg-white rounded-2xl shadow p-5 animate-pulse"
                  >
                    <div className="flex items-center">
                      <div className="rounded-full bg-gray-200 h-12 w-12 mr-4"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : filteredAuthors.length > 0 ? (
                filteredAuthors.map((author, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className={`rounded-full ${generateColorFromName(author.name)} h-12 w-12 mr-4 flex items-center justify-center text-white font-bold`}>
                          {getInitials(author.name)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                            {author.name}
                          </h3>
                          <p className="text-sm text-gray-500 truncate">{author.role}</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{author.posts} articles</span>
                          <button className="text-blue-600 hover:text-blue-800 font-medium">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full py-12 text-center">
                  <p className="text-gray-500 text-lg">No authors found matching your search.</p>
                  <button 
                    onClick={clearSearch}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Button */}
          {showRightButton && (
            <button
              onClick={() => slide("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 z-10 transition-opacity duration-300 -mr-4"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          )}
        </div>

        {/* Dots indicator */}
        {/* <div className="flex justify-center space-x-2 mb-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
              aria-label={`Go to page ${index + 1}`}
            ></button>
          ))}
        </div> */}

        {/* Button */}
        {/* <div className="flex justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-0.5">
            View All Authors
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default AllPostPage;