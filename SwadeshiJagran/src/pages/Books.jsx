import React, { useState } from 'react';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
import { categories } from '../services/categories';
import { recentNews } from '../services/recentNews';
import { popularNews } from '../services/popularNews';
import { usePagination } from '../hooks/usePagination';


const Books = () => {
      const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        setShowPlayButton(false);
    };
       
  // Sample book data
  const books = [
    {
      id: 1,
      title: "Economic Sovereignty in Modern India",
      author: "Dr. Ashwani Mahajan",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      downloadLink: "#",
      year: "2023"
    },
    {
      id: 2,
      title: "Sustainable Development Practices",
      author: "Prof. Ramesh Kumar",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      downloadLink: "#",
      year: "2023"
    },
    {
      id: 3,
      title: "Traditional Indian Economic Systems",
      author: "Dr. Meera Sharma",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      downloadLink: "#",
      year: "2022"
    },
    {
      id: 4,
      title: "Indigenous Solutions for Modern Problems",
      author: "Dr. Vikram Singh",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      downloadLink: "#",
      year: "2022"
    },
    {
      id: 5,
      title: "Swadeshi Movement: Then and Now",
      author: "Prof. Anjali Patel",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      downloadLink: "#",
      year: "2021"
    },
    {
      id: 6,
      title: "Cultural Preservation in Globalization",
      author: "Dr. Sanjay Verma",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      downloadLink: "#",
      year: "2021"
    },
    {
      id: 7,
      title: "Environmental Economics",
      author: "Dr. Priya Joshi",
      image: "https://images.unsplash.com/photo-1531901599634-8b059634e824?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      downloadLink: "#",
      year: "2020"
    },
    {
      id: 8,
      title: "Policy Making for Self-Reliance",
      author: "Dr. Rajesh Khanna",
      image: "https://images.unsplash.com/photo-1558901357-ca41e027e43a?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      downloadLink: "#",
      year: "2020"
    },
    {
      id: 9,
      title: "Traditional Knowledge Systems",
      author: "Dr. Sunita Reddy",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      downloadLink: "#",
      year: "2019"
    }
  ];
 const {
            currentPage,
            totalPages,
            currentItems,
            paginate,
            getPageNumbers,
        } = usePagination({ items: books, itemsPerPage: 6 });
  const handleCardClick = (bookId) => {
    // Handle card click - could navigate to book detail page
    console.log(`Book ${bookId} clicked`);
  };

  const handleDownload = (e, bookTitle, downloadLink) => {
    e.stopPropagation(); // Prevent triggering card click when downloading
    console.log(`Downloading ${bookTitle} from ${downloadLink}`);
    // Actual download logic would go here
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-amber-50/20 to-white">
        {/* Hero Section */}

       
        <div className="container-fluid pt-28 flex flex-col items-center px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 max-w-4xl">
            <div className="inline-block relative">
              <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl mb-8 relative z-10">
                BOOKS & PUBLICATIONS
              </h1>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-amber-500 to-amber-600 mt-4 rounded-full"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-48 h-1 bg-gradient-to-r from-amber-300 to-transparent rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif mt-8 leading-relaxed">
              Explore our collection of publications on economic sovereignty and sustainable development
            </p>
          </div>
        </div>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Left Content - 3/4 width */}
                        <div className="lg:col-span-3">
        {/* Books Grid Section */}
          <div className="bg-white rounded-3xl mb-15 shadow-xl p-8 md:p-12 border border-amber-100">
            {/* Search and Filter Section */}
            <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search books by title, author, or topic..."
                  className="block w-full pl-10 pr-4 py-3 border border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-3">
                <select className="border border-amber-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>All Years</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                </select>
                
                <select className="border border-amber-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>All Categories</option>
                  <option>Economics</option>
                  <option>Politics</option>
                  <option>Environment</option>
                  <option>Culture</option>
                </select>
              </div>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((book) => (
                <div 
                  key={book.id} 
                  className="bg-white rounded-2xl border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden group"
                  onClick={() => handleCardClick(book.id)}
                >
                  {/* Book Cover Image */}
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {book.year}
                    </div>
                  </div>
                  
                  {/* Book Details */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{book.author}</p>
                    
                    {/* Download Button */}
                    <button 
                      onClick={(e) => handleDownload(e, book.title, book.downloadLink)}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-2 px-4 rounded-xl flex items-center justify-center transition-all duration-300 group/download"
                    >
                      <svg className="w-5 h-5 mr-2 group-hover/download:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                      Download PDF
                    </button>
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

          </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r shadow-xl from-amber-50 to-amber-100 rounded-3xl p-10 border border-amber-200">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Our Publications
          </h3>
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            Discover our extensive collection of books and publications focused on economic sovereignty, 
            sustainable development, and indigenous solutions. Each publication represents rigorous research 
            and thoughtful analysis aimed at promoting self-reliance and cultural preservation.
          </p>
        </div>
             {/* Featured Content Section */}
                            <div className="bg-white mt-13 rounded-3xl shadow-2xl p-8 border border-amber-100 mb-8">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                                    <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </span>
                                    Featured Educational Content
                                </h2>

                                <div className="flex rounded-2xl overflow-hidden bg-white h-auto md:h-90 transform transition-all duration-300">
                                    {/* Video Section */}
                                    <div className="w-full h-74 md:h-full p-4 relative group">
                                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md transition-all duration-500 transform group-hover:shadow-xl">
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                <div className="text-center">
                                                    <svg className="w-12 h-12 text-amber-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <p className="text-gray-600">Educational video content coming soon</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                            Coming Soon
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
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

      </div>
      <Footer/>
    </>
  );
};

export default Books;