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
        <section className="max-w-7xl mx-auto pb-10 ">

       
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

        {/* Books Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-amber-100">
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
         </section>
                     {/* Top Picks Section */}
            <section className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="flex flex-col w-full md:w-7/12">
                    <h2 className="text-2xl font-bold pb-2 mb-2 relative inline-block">
                        TOP PICKS
                        <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transform translate-y-1"></div>
                    </h2>
                    <div className="h-90 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl">
                        <img
                            src="https://www.swadeshionline.in/assets/uploads/photo-370.jpg"
                            alt="Top Picks"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                    <p className="mt-4 text-gray-600 text-sm">
                        Discover our carefully selected favorites just for you
                    </p>
                </div>

                <div className="flex flex-col mt-5 w-full md:w-5/12">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">स्वदेशी-विदेशी प्रोडक्ट्स लिस्ट</h3>
                    <Link
                        to="https://www.swadeshionline.in/assets/pdf/swadeshi-videshi_products.pdf"
                        className="cursor-pointer group relative block"
                    >
                        <div className="h-80 w-full overflow-hidden rounded-xl shadow-md transition-all duration-500 group-hover:shadow-lg">
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

                    <p className="mt-4 text-gray-600 text-sm">
                        Explore our comprehensive list of Swadeshi and Videshi products
                    </p>
                </div>
            </section>
            {/* Categories Section */}
            <section className="bg-white rounded-xl p-6 md:p-8 w-full">
                {/* Title */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Categories</h2>
                    <p className="text-gray-500 text-sm md:text-base">Explore our wide range of categories</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
                </div>

                {/* Grid Layout with 4 columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col items-center p-5 rounded-xl bg-gradient-to-b from-white to-gray-50 border border-gray-100 hover:border-transparent shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image Container with subtle gradient border */}
                            <div className="relative mb-4">
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Category Title */}
                            <span className="text-gray-700 font-semibold text-sm md:text-base text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                {cat.title}
                            </span>

                            {/* Subtle hover indicator */}
                            <div className="w-0 group-hover:w-5 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                {/* <div className="text-center mt-8">
    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg">
      View All Categories
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div> */}
            </section>
            {/* Recent News section */}

            <section className="bg-white shadow-lg p-6 md:p-8">
                {/* Header with icon and action button */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Recent News</h2>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                        View all
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* 3-column grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentNews.map((item, idx) => (
                        <div
                            key={idx}
                            className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-40">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-3 left-3">
                                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">News</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {item.desc || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">{item.date || "May 15, 2023"}</span>
                                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Popular News Section */}
            <section className="bg-white shadow-lg p-6 md:p-8">
                {/* Header with icon and action button */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Popular News</h2>
                    </div>
                    <button className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center gap-1">
                        View all
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* 3-column grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularNews.map((item, idx) => (
                        <div
                            key={idx}
                            className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image with popular badge */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                {/* Popular badge with ranking */}
                                {/* <div className="absolute top-3 left-3 flex items-center">
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>#{idx + 1} Popular</span>
            </div>
          </div> */}

                                {/* View count */}
                                {/* <div className="absolute top-3 right-3">
            <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              {Math.floor(Math.random() * 1000) + 500}
            </span>
          </div> */}
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                                    {item.title}
                                </h3>

                                {/* Meta information */}
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item.date || "May 15, 2023"}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        <span>By Admin</span>
                                    </div>
                                </div>

                                <button className="w-full bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* latest print and on media section */}
            <section className="py-12 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-3">
                            Featured Content
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our latest magazine edition and featured video content
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white h-auto md:h-[500px] transform transition-all duration-300 hover:shadow-xl">

                        {/* Left Magazine Side */}
                        <div className="md:w-1/2 w-full h-64 md:h-full p-4 md:p-6 relative group">
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
                                        className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                                        <div className="p-5 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-xl font-bold mb-2">Latest Edition</h3>
                                            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                                Click to view the full magazine
                                            </p>
                                            <div className="flex items-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                                <span className="text-sm mr-2">View now</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                New Issue
                            </div>
                        </div>

                        {/* Right Video Side */}
                        <div className="md:w-1/2 w-full h-64 md:h-full p-4 md:p-6 relative group">
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md transition-all duration-500 transform group-hover:shadow-xl">
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    poster="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                >
                                    <source src="your-video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {showPlayButton && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                                        onClick={handlePlayPause}
                                    >
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 animate-pulse">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h3 className="text-xl font-bold mb-1">Featured Video</h3>
                                    <p className="text-sm">Discover the latest trends in fashion and design</p>
                                </div>
                            </div>

                            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                Trending
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 space-x-4">
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                            Magazine
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                            Video
                        </div>
                    </div>
                </div>
            </section>
      </div>
      <Footer/>
    </>
  );
};

export default Books;