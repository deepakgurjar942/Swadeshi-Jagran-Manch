import React, { useState, useEffect } from 'react';

const Photos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
    <div className='py-28'>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 font-sans overflow-hidden">
      {/* Background text above the images */}
      <div className="fixed top-70 left-0 right-0 flex items-center justify-center pointer-events-none z-0">
        <div className="text-6xl md:text-8xl font-bold text-gray-600 opacity-40 select-none whitespace-nowrap">
          LESSER KNOWN WONDERS 
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
    </div>
    </div>
  );
};

export default Photos;