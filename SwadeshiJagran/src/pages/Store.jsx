// components/Store.jsx
import React, { useState, useEffect } from 'react';
import StoreList from '../services/store';
 
const Store = () => {
  const {data,loading,error}  = StoreList();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
 
    const stores = data || [];

  const nextSlide = () => {
    if (showAll) return;
    setCurrentIndex(prev => (prev + 4 >= stores.length ? 0 : prev + 4));
  };
 
  const prevSlide = () => {
    if (showAll) return;
    setCurrentIndex(prev => (prev - 4 < 0 ? Math.max(0, stores.length - 4) : prev - 4));
  };
 
  const toggleViewAll = () => {
    setShowAll(!showAll);
    setCurrentIndex(0);
  };
 
  const displayedStores = showAll ? stores : stores.slice(currentIndex, currentIndex + 4);
 
  if (loading) {
    return (
      <section className="bg-white rounded-2xl p-8 w-full shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-saffron">Recommended Stores</h2>
          <p className="text-gray-500">Discover our trusted partner stores</p>
        </div>
        <div className="flex justify-center items-center min-h-60">
          <div className="animate-spin rounded-full h-14 w-14 border-4 border-saffron border-t-transparent"></div>
        </div>
      </section>
    );
  }
 
  return (
    <section className="bg-white rounded-2xl p-8 w-full shadow-xl">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-saffron">Recommended Stores</h2>
        <p className="text-gray-500">Discover our trusted partner stores</p>
        <div className="w-20 h-1 bg-saffron mx-auto mt-3 rounded-full"></div>
      </div>
 
      {/* Store Grid with Enhanced Navigation Buttons */}
      <div className="relative">
      {/* Left Navigation Button - Enhanced */}
{!showAll && stores.length > 4 && (
  <button
    onClick={prevSlide}
    className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 
               w-12 h-12 bg-white border-2 border-saffron rounded-full 
               flex items-center justify-center shadow-lg
               hover:bg-blue-900 hover:text-white 
               transition-all duration-300 group"
    aria-label="Previous stores"
  >
    <svg 
      className="w-6 h-6 text-saffron group-hover:text-white transition-colors" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
)}
 
        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedStores.map(store => (
            <div key={store.id} className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 group transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src={store.logo_full_url}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {store.name}
                </span> */}
                {/* <span className="absolute top-3 right-3 bg-saffron text-white text-xs px-3 py-1 rounded-full font-medium">
                  ⭐ {store.ratings}
                </span> */}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-saffron transition-colors duration-300">
                  {store.name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mt-1">{store.address}</p>
                <div className="flex justify-between items-center mt-4">
                  {/* <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
                    📍 {store.distance}
                  </span> */}
                  {/* <button className="text-gray-400 hover:text-saffron transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
 
        {/* Right Navigation Button - Enhanced */}
        {!showAll && stores.length > 4 && (
  <button
    onClick={nextSlide}
    className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 
               w-12 h-12 bg-white border-2 border-saffron rounded-full 
               flex items-center justify-center shadow-lg
               hover:bg-blue-900 hover:text-white 
               transition-all duration-300 group"
    aria-label="Next stores"
  >
    <svg 
      className="w-6 h-6 text-saffron group-hover:text-white transition-colors" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
)}
 
      </div>
 
      {/* View All Button */}
      <div className="text-center mt-10">
        <button
          onClick={toggleViewAll}
          className="px-8 py-3 bg-green-600 text-white rounded-full font-medium 
                     hover:bg-green-700 transition-all duration-300 
                     shadow-md hover:shadow-lg transform hover:scale-105"
        >
          {showAll ? 'Show Less Stores' : `View All Stores (${stores.length})`}
        </button>
      </div>
 
      {/* Navigation Dots Indicator */}
      {!showAll && stores.length > 4 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(stores.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 4)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === Math.floor(currentIndex / 4) 
                  ? 'bg-saffron scale-125' 
                  : 'bg-gray-300 hover:bg-saffron/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
 
export default Store;