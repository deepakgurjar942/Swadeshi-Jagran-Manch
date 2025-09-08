import { useState, useEffect, useRef } from "react";
import { authors } from "../services/authors";
import { posts } from "../services/allPosts";
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
import { categories } from '../services/categories';
import { recentNews } from '../services/recentNews';
import { popularNews } from '../services/popularNews';
import { usePagination } from "../hooks/usePagination";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const AllPostPage = () => {
  const [selectedAuthor, setSelectedAuthor] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // For author section
  const [authorSearch, setAuthorSearch] = useState("");
  const [filteredAuthors, setFilteredAuthors] = useState(authors);
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // Use filteredPosts instead of posts for pagination
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
    paginate,
    getPageNumbers,
  } = usePagination({ items: filteredPosts, itemsPerPage: 6 });

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowPlayButton(false);
  };
  const { scrollTo } = useSmoothScroll();

  // useEffect(() => {
  //   scrollTo(0, { duration: 1 });
  // }, [scrollTo]);
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter posts based on selected author and search query
  useEffect(() => {
    let result = posts;
    // Filter by author
    if (selectedAuthor !== "all") {
      const authorName = authors.find(a => a.id === selectedAuthor)?.name;
      result = result.filter(post => post.author === authorName);
    }

    // Filter by search query if implemented
    if (searchQuery) {
      result = result.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(result);
    // Check if setCurrentPage is a function before calling it
    if (typeof setCurrentPage === 'function') {
      setCurrentPage(1); // Reset to first page when filters change
    }
  }, [selectedAuthor, searchQuery, setCurrentPage]);

  // Filter authors based on search
  useEffect(() => {
    if (authorSearch) {
      const filtered = authors.filter(author =>
        author.name.toLowerCase().includes(authorSearch.toLowerCase())
      );
      setFilteredAuthors(filtered);
    } else {
      setFilteredAuthors(authors);
    }
  }, [authorSearch]);

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

  const clearAuthorSearch = () => {
    setAuthorSearch("");
    setShowLeftButton(false);
    setShowRightButton(true);
  };

  const handleChange = (e) => {
    setShowRightButton(true);
    setAuthorSearch(e.target.value)
  }

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
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-pink-500 to-pink-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-yellow-500 to-yellow-600',
      'bg-gradient-to-r from-indigo-500 to-indigo-600',
      'bg-gradient-to-r from-teal-500 to-teal-600',
      'bg-gradient-to-r from-orange-500 to-orange-600'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-8xl mt-42 mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Authors Section */}
          {/* Left Content - 3/4 width */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow p-6 mb-10 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Browse by Author</h2>
              {/* Author Search */}
              <div className="flex justify-center mb-6 relative max-w-2xl mx-auto">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-650" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search authors by name..."
                    value={authorSearch}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white/70 backdrop-blur-sm"
                  />
                  {authorSearch && (
                    <button
                      onClick={clearAuthorSearch}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      <svg className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Horizontal Scroll Authors */}
              <div className="relative">
                {/* Left Button */}
                {showLeftButton && (
                  <button
                    onClick={() => slide("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 z-10 transition-opacity duration-300 -ml-4 backdrop-blur-sm"
                    aria-label="Scroll left"
                  >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                )}

                <div
                  ref={scrollRef}
                  className="overflow-x-auto scrollbar-hide scroll-smooth py-2"
                  onScroll={checkScrollPosition}
                >
                  <div className="flex space-x-5 pb-4">
                    {filteredAuthors.length > 0 ? (
                      filteredAuthors.map((author, id) => (
                        <button
                          key={author.id}
                          onClick={() => setSelectedAuthor(author.id)}
                          className={`flex-shrink-0 w-64 cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border ${selectedAuthor === author.id
                            ? 'border-blue-500 ring-2 ring-blue-500/20'
                            : 'border-gray-100 hover:border-gray-200'
                            }`}
                        >
                          <div className="p-5">
                            <div className="flex items-center">
                              <div className={`rounded-full ${generateColorFromName(author.name)} h-14 w-14 mr-4 flex items-center justify-center text-white font-bold shadow-inner`}>
                                {getInitials(author.name)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-justify text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                                  {author.name}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="w-full py-6 text-center">
                        <p className="text-gray-500 text-lg">No authors found matching your search.</p>
                        <button
                          onClick={clearAuthorSearch}
                          className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 z-10 transition-opacity duration-300 -mr-4 backdrop-blur-sm"
                    aria-label="Scroll right"
                  >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Results Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedAuthor === "all" ? "All Articles" : `Articles by ${authors.find(a => a.id === selectedAuthor)?.name}`}
              </h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-500">
                  Showing <span className="font-medium">{(currentPage - 1) * 6 + 1}-{Math.min(currentPage * 6, filteredPosts.length)}</span> of <span className="font-medium">{filteredPosts.length}</span> results
                </p>
              </div>
            </div>

            {/* Posts Grid */}
            {isLoading ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
                    <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300"></div>
                    <div className="p-5">
                      <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-3"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-2/3 mb-4"></div>
                      <div className="flex justify-between">
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/3"></div>
                        <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                  {currentItems.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                          {post.category}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-14 overflow-hidden group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-3 h-16">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-sm text-blue-600 font-medium">{post.author}</span>
                          <button className="text-sm text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-2">
                      {/* Previous Button */}
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>

                      {/* Page Numbers */}
                      {getPageNumbers().map((number, index) => (
                        number === '...' ? (
                          <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                            ...
                          </span>
                        ) : (
                          <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`px-4 py-2 rounded-lg border transition-colors ${currentPage === number
                              ? 'bg-red-600 border-red-600 text-white'
                              : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                              }`}
                          >
                            {number}
                          </button>
                        )
                      ))}

                      {/* Next Button */}
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                )}
              </>

            ) : (
              <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No articles found</h3>
                <p className="text-gray-500 mb-6">Try selecting a different author or search term</p>
                <button
                  onClick={() => {
                    setSelectedAuthor("all");
                    setSearchQuery("");
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
          {/* Right Sidebar - 1/4 width */}
          {/* Right Sidebar - 1/4 width */}
          <div className="lg:col-span-1 space-y-8">
            {/* product list */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">स्वदेशी-विदेशी प्रोडक्ट्स लिस्ट</h3>
              <Link
                to="https://www.swadeshionline.in/assets/pdf/swadeshi-videshi_products.pdf"
                className="cursor-pointer group relative block"
              >
                <div className="h-80 w-full overflow-hidden rounded-xl shadow-md transition-all duration-500 group-hover:shadow-lg ">
                  <img
                    src="https://www.swadeshionline.in/assets/images/comodity.jpg"
                    alt="Products List"
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                    <span className="text-white font-medium text-center">View Product List</span>
                  </div>
                </div>
              </Link>
            </div>
            {/* Categories */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-amber-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                </span>
                Categories
              </h2>
              <div className="space-y-3">
                {categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center p-3 rounded-lg hover:bg-amber-50 transition-colors duration-200 cursor-pointer group">
                    <img src={cat.img} alt={cat.title} className="w-8 h-8 rounded-full object-cover mr-3" />
                    <span className="text-gray-700 group-hover:text-amber-600 transition-colors">{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* latest in print */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-amber-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </span>
                Latest in Print
              </h2>
              <a
                href="https://www.swadeshionline.in/assets/uploads/magazine-22-07-2025-465.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer h-full rounded-xl overflow-hidden shadow-md transition-all duration-500 transform group-hover:shadow-xl"
              >
                <div className="relative h-full">
                  <img
                    src="https://www.swadeshionline.in/assets/uploads/thumb-22-07-2025-465.jpg"
                    alt="swadeshi print"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-h极速赛车开奖结果记录over:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-5 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold mb-2">Latest Educational Edition</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        Click to view the full educational magazine
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                New Issue
              </div>
            </div>
            {/* Recent News */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-amber-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </span>
                Recent News
              </h2>
              <div className="space-y-4">
                {recentNews.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 group cursor-pointer">
                    <img src={item.img} alt={item.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-2">{item.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{item.date || "May 15, 2023"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular News */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-amber-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </span>
                Popular News
              </h2>
              <div className="space-y-4">
                {popularNews.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="relative">
                      <img src={item.img} alt={item.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                      <div className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-2">{item.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{item.date || "May 15, 2023"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />

      {/* Hidden scrollbar styles - Fixed JSX issue */}
      <style>
        {`
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Chrome, Safari and Opera */
          }
        `}
      </style>
    </div>
  );
};

export default AllPostPage;