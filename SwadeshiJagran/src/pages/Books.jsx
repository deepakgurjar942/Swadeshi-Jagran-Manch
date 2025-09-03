import React from 'react';
import Footer from '../layouts/Footer';

const Books = () => {
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
        <div className="container-fluid pt-28 pb-12 flex flex-col items-center px-4 sm:px-6 lg:px-12">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-100">
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
              {books.map((book) => (
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

            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="inline-flex items-center px-8 py-3 border border-amber-300 text-amber-600 font-medium rounded-2xl hover:bg-amber-50 transition-all duration-300">
                Load More Books
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-amber-50 to-amber-100 rounded-3xl p-10 border border-amber-200">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Our Publications
          </h3>
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            Discover our extensive collection of books and publications focused on economic sovereignty, 
            sustainable development, and indigenous solutions. Each publication represents rigorous research 
            and thoughtful analysis aimed at promoting self-reliance and cultural preservation.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Books;