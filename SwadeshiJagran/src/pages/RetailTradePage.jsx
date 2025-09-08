import React, { useState } from 'react';
import { retailTrade } from '../services/retailTrade';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
import { categories } from '../services/categories';
import { recentNews } from '../services/recentNews';
import { popularNews } from '../services/popularNews';
import { usePagination } from '../hooks/usePagination';

const RetailTradePage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const {
        currentPage,
        totalPages,
        currentItems,
        paginate,
        getPageNumbers,
    } = usePagination({ items: retailTrade, itemsPerPage: 6 });

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        setShowPlayButton(false);
    };

    return (
        <>
            <div className="min-h-screen mt-12 bg-gradient-to-b from-amber-50/20 to-white">
                {/* Hero Section */}
                <div className="container-fluid pt-28 pb-12 flex flex-col items-center px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-12 max-w-4xl">
                        <div className="inline-block relative">
                            <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl mb-8 relative z-10">
                                Retail Trade Articles
                            </h1>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-amber-500 to-amber-600 mt-4 rounded-full"></div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-48 h-1 bg-gradient-to-r from-amber-300 to-transparent rounded-full"></div>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-700 italic font-serif mt-8 leading-relaxed">
                            Explore insightful articles on retail trade, economic independence, and sustainable commerce curated by industry experts and thought leaders.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Left Content - 3/4 width */}
                        <div className="lg:col-span-3">
                            {/* Education Articles Grid */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-100 mb-8">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                                    <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v8"></path>
                                        </svg>
                                    </span>
                                    Latest Retail Trade Articles
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {currentItems.map(article => (
                                        <div key={article.id} className="bg-white rounded-2xl border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                                            <div className="relative overflow-hidden h-48">
                                                <img
                                                    src={article.img}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                    Retail Trade
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <h3 className="font-semibold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                    {article.description}
                                                </p>
                                                <div className="flex items-center justify-between border-t border-amber-100 pt-4">
                                                    <span className="text-xs text-gray-500 flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                        </svg>
                                                        {article.date || 'Recent'}
                                                    </span>
                                                    <button className="text-amber-600 hover:text-amber-800 text-sm font-medium flex items-center group/btn transition-all">
                                                        Read more
                                                        <svg className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center mt-8">
                                        <nav className="flex items-center space-x-2">
                                            <button
                                                onClick={() => paginate(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="px-3 py-2 rounded-lg border border-amber-200 text-amber-600 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                                </svg>
                                            </button>

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
                                                            ? 'bg-amber-500 border-amber-500 text-white'
                                                            : 'border-amber-200 text-amber-600 hover:bg-amber-50'
                                                            }`}
                                                    >
                                                        {number}
                                                    </button>
                                                )
                                            ))}

                                            <button
                                                onClick={() => paginate(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="px-3 py-2 rounded-lg border border-amber-200 text-amber-600 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </button>
                                        </nav>
                                    </div>
                                )}
                            </div>

                            {/* Featured Content Section */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-100 mb-8">
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
            <Footer />
        </>
    );
};

export default RetailTradePage;