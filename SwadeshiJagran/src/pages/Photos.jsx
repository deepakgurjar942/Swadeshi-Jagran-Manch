import React, { useState, useEffect } from 'react';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
import { useCategories } from '../services/useCategories';
import { recentNews } from '../services/recentNews';
import { popularNews } from '../services/popularNews';
const Photos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { categories, loading, error } = useCategories();
  
  // Sample images with state information
  const images = [
    {
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      title: "Mountain Peaks",
      description: "Majestic Himalayan ranges at sunrise",
      event: "Uttarakhand",
      eventInfo: "Uttarakhand, known as the 'Land of the Gods', is famous for its picturesque Himalayan landscapes, sacred temples, and hill stations. It's home to the source of the Ganges and Yamuna rivers."
    },
    {
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      title: "Village Life",
      description: "Traditional homes in the Himalayan foothills",
      event: "Himachal Pradesh",
      eventInfo: "Himachal Pradesh is characterized by its breathtaking mountain scenery, apple orchards, and ancient temples. It's a popular destination for adventure sports like trekking, skiing, and paragliding."
    },
    {
      url: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      title: "Forest Trails",
      description: "Lush green paths through pristine wilderness",
      event: "Kerala",
      eventInfo: "Kerala, known as 'God's Own Country', is famous for its tranquil backwaters, lush green landscapes, Ayurvedic treatments, and rich cultural heritage. It has the highest literacy rate in India."
    },
    {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      title: "Alpine Meadows",
      description: "Colorful flowers in high-altitude meadows",
      event: "Sikkim",
      eventInfo: "Sikkim is a small but stunning state known for its biodiversity, Buddhist monasteries, and the third highest mountain in the world, Kanchenjunga. It was the first organic state in India."
    },
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      title: "Mountain Lake",
      description: "Crystal clear waters reflecting the peaks",
      event: "Jammu & Kashmir",
      eventInfo: "Jammu & Kashmir is renowned for its stunning valleys, serene lakes, and beautiful gardens. Often called 'Paradise on Earth', it's famous for Dal Lake, houseboats, and saffron fields."
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (  
    <div>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 font-sans overflow-hidden">
        {/* Main Content */}
                <div className="max-w-8xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Left Content - 3/4 width */}
                        <div className="lg:col-span-3">
      {/* Background text above the images */}
      <div className="fixed top-70 left-0 right-0 flex items-center justify-center pointer-events-none z-0">
        <div className="text-6xl md:text-8xl font-bold text-gray-600 opacity-40 select-none whitespace-nowrap">
          {/* LESSER KNOWN WONDERS  */}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 pt-4">
            Discover India's Beauty
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the enchanting landscapes and cultures through these captivating photographs
          </p>
        </div>

        {/* Image slider */}
        <div className="relative w-full max-w-4xl mx-auto h-96 md:h-[600px] overflow-hidden rounded-lg shadow-lg mb-16 mt-20">
          <div 
            className="w-full h-full bg-center bg-cover transition-all duration-700 ease-in-out"
            style={{ backgroundImage: `url(${images[currentIndex].url})` }}
          >
            {/* Text overlay with semi-transparent background */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {images[currentIndex].title}
              </h2>
              <p className="text-gray-200">
                {images[currentIndex].description}
              </p>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Image indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  slideIndex === currentIndex ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Dynamic State Information Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 mb-16 transition-all duration-500">
          <div className="text-center mb-6">
            <span className="inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">
              Currently Viewing
            </span>
            <h2 className="text-3xl font-light text-gray-800">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-600">
                {images[currentIndex].event}
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            <div className="md:col-span-2 space-y-4">
              <p className="leading-relaxed">
                {images[currentIndex].eventInfo}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Travel Tips:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Best time to visit: October to March</li>
                  <li>Don't miss: Local cuisine and cultural festivals</li>
                  <li>Travel light but include warm clothing</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-2">Quick Facts:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Capital: {images[currentIndex].event === "Uttarakhand" ? "Dehradun" : 
                                 images[currentIndex].event === "Himachal Pradesh" ? "Shimla" : 
                                 images[currentIndex].event === "Kerala" ? "Thiruvananthapuram" : 
                                 images[currentIndex].event === "Sikkim" ? "Gangtok" : "Srinagar"}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Best time to visit: Oct-Mar</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>Famous for: {images[currentIndex].event === "Uttarakhand" ? "Spiritual Tourism" : 
                                      images[currentIndex].event === "Himachal Pradesh" ? "Hill Stations" : 
                                      images[currentIndex].event === "Kerala" ? "Backwaters" : 
                                      images[currentIndex].event === "Sikkim" ? "Biodiversity" : "Natural Beauty"}</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 flex justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full">
                  Explore {images[currentIndex].event}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional gallery section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
            Explore More events
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`relative h-32 md:h-40 bg-cover bg-center rounded-lg cursor-pointer transition-all duration-300 transform ${
                  index === currentIndex ? 'ring-2 ring-amber-500 scale-105' : 'hover:scale-105'
                }`}
                style={{ backgroundImage: `url(${image.url})` }}
                onClick={() => goToSlide(index)}
              >
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-end p-3">
                  <span className="text-white text-sm font-medium truncate">{image.event}</span>
                </div>
                {index === currentIndex && (
                  <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
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
                            <div className="bg-white mt-53 rounded-3xl shadow-2xl p-6 border border-amber-100">
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
                                        {categories.slice(5, 17).map((cat) => (
                                            <div key={cat.id} className="flex items-center p-3 rounded-lg hover:bg-amber-50 transition-colors duration-200 cursor-pointer group">
                                                <img src={cat.image_full_url} alt={cat.name} className="w-8 h-8 rounded-full object-cover mr-3" />
                                                <span className="text-gray-700 group-hover:text-amber-600 transition-colors">{cat.name}</span>
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
    </div>
  );
};

export default Photos;