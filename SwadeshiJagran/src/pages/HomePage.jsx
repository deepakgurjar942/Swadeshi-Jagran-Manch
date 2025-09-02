import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { categories } from '../services/categories';
import { recentNews } from '../services/recentNews';
import { popularNews } from '../services/popularNews';
import { slides} from '../services/slides';
import { agriculture } from '../services/agriculture';
import { gmDebate } from '../services/gmDebate';
import { destinations } from '../services/destinations';

import Footer from "../layouts/Footer";
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDestination, setCurrentDestination] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowPlayButton(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToDestination = (index) => {
    setCurrentDestination(index);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {slides[currentSlide].subtitle}
          </p>

          {/* <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['India 360', 'Adventurer', 'Nature', 'Wildlife', 'Heritage', 'Spiritual'].map((tag) => (
            <span key={tag} className=" bg-opacity-20 px-4 py-2 rounded-full text-sm">{tag}</span>
          ))}
        </div> */}

          {/* <div className="mb-8">
          <p className="text-2xl mb-4">Namaste ▲ how can I guide you?</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Book Your Travel
          </button>
        </div> */}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 z-20 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-4 z-20 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index
                ? "bg-amber-500"
                : "bg-white bg-opacity-50"
                }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      {/* Destinations Section */}
      <section className="relative py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Thumbnail navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`relative h-24 md:h-60 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 transform ${currentDestination === index
                    ? " scale-105 shadow-xl"
                    : "opacity-90 hover:opacity-100 hover:scale-102 hover:shadow-lg"
                  }`}
                onClick={() => goToDestination(index)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white font-semibold text-sm md:text-base px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full">
                    {destination.name}
                  </span>
                </div>
                {/* {currentDestination === index && (
            <div className="absolute top-3 right-3 w-3 h-3  rounded-full animate-pulse"></div>
          )} */}
              </div>
            ))}
          </div>
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

      {/* Agriculture Section */}

      <section className="p-8 bg-gradient-to-br from-green-50 to-white shadow-sm">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-10">
          <div className="relative">
            <h2 className="text-4xl font-bold text-gray-800">AGRICULTURE</h2>
            {/* <div className="h-1 w-26 bg-gradient-to-r from-green-500 to-green-600 mt-3 rounded-full"></div> */}
            <div className="absolute -bottom-2 left-0 w-44 h-1 bg-gradient-to-r from-green-300 to-transparent rounded-full"></div>
          </div>
          <button className="text-green-600 hover:text-green-800 font-medium flex items-center gap-2 group transition-all duration-300 px-4 py-2 rounded-lg hover:bg-green-50">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Articles List - 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {agriculture.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image with subtle frame */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 rounded-xl object-cover border-2 border-white shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute -inset-1.5 border border-green-100 rounded-xl -z-10 group-hover:border-green-200 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-3 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm px-5 py-2.5 rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-sm hover:shadow-md flex items-center gap-2 group/btn">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GM Debate Section */}

      <section className="p-8 bg-gradient-to-br from-amber-50/40 to-white shadow-inner">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-10">
          <div className="relative">
            <h2 className="text-4xl font-bold text-gray-800 tracking-tight">GM DEBATE</h2>
            {/* <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 mx-auto mt-3"></div> */}
            <div className="absolute -bottom-2 left-0 w-40 h-1 bg-gradient-to-r from-amber-200 to-transparent rounded-full"></div>
          </div>
          <button className="text-amber-700 hover:text-amber-900 font-medium flex items-center gap-2 group transition-all duration-300 px-4 py-2.5 rounded-xl hover:bg-amber-100/50">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Articles List - 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {gmDebate.slice(0,4).map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-white border border-amber-100/60 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image with subtle frame */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 rounded-xl object-cover border-2 border-white shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute -inset-1.5 border border-amber-100 rounded-xl -z-10 group-hover:border-amber-200 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-3 text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm px-5 py-2.5 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-sm hover:shadow-md flex items-center gap-2 group/btn">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* category section */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default HomePage;