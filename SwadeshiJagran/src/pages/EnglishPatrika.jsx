import { useState, useEffect } from 'react';
import Footer from '../layouts/Footer';

const EnglishPatrika = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  // Sample data with image paths
  const publicationsData = {
    2024: [
      {
        id: 1,
        title: "The Swadeshi Movement: Historical Context & Contemporary Relevance",
        description: "An in-depth analysis of the Swadeshi movement's history and its significance in today's globalized economy.",
        image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "March 2024",
        pages: "24",
        readTime: "15 min",
        category: "economics"
      },
      {
        id: 2,
        title: "Rural Economy: Challenges and Sustainable Solutions",
        description: "Examining the current challenges facing India's rural economy and exploring potential sustainable solutions.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "February 2024",
        pages: "32",
        readTime: "20 min",
        category: "development"
      },
      {
        id: 3,
        title: "Traditional Agricultural Practices in Modern Times",
        description: "Exploring the relevance and importance of traditional farming methods in contemporary agriculture.",
        image: "https://images.unsplash.com/photo-1624371066606-cb8933c2c39c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "January 2024",
        pages: "28",
        readTime: "18 min",
        category: "agriculture"
      }
    ],
    2023: [
      {
        id: 4,
        title: "Indian Education Policy: New Dimensions",
        description: "A comprehensive look at how the new education policy integrates with India's knowledge traditions.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "December 2023",
        pages: "36",
        readTime: "25 min",
        category: "education"
      },
      {
        id: 5,
        title: "Indigenous Technology: Possibilities and Challenges",
        description: "Analyzing the potential of homegrown technological innovations in various sectors.",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "November 2023",
        pages: "30",
        readTime: "22 min",
        category: "technology"
      },
      {
        id: 6,
        title: "Cultural Nationalism: A Contemporary Perspective",
        description: "Discussing the concept of cultural nationalism in today's global context.",
        image: "https://images.unsplash.com/photo-1541123356219-284ebe98a8e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "October 2023",
        pages: "26",
        readTime: "17 min",
        category: "culture"
      },
      {
        id: 7,
        title: "Yoga and Ayurveda: Global Relevance",
        description: "Examining the global acceptance of Yoga and Ayurveda and their economic aspects.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1220&q=80",
        date: "September 2023",
        pages: "34",
        readTime: "24 min",
        category: "wellness"
      },
      {
        id: 8,
        title: "Indigenous Industries: Crisis and Opportunities",
        description: "Analyzing the impact of the pandemic on indigenous industries and future pathways.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "August 2023",
        pages: "29",
        readTime: "19 min",
        category: "economics"
      },
      {
        id: 9,
        title: "Digital India and Indigenous Technology",
        description: "Exploring the role and importance of indigenous technology in the Digital India mission.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "July 2023",
        pages: "31",
        readTime: "21 min",
        category: "technology"
      }
    ],
    2022: [
      {
        id: 10,
        title: "Make in India: Successes and Challenges",
        description: "Evaluating the success, challenges and future strategy of the Make in India initiative.",
        image: "https://images.unsplash.com/photo-1597674919392-9448d70fcb5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "June 2022",
        pages: "27",
        readTime: "16 min",
        category: "economics"
      },
      {
        id: 11,
        title: "Village Self-Governance: Gandhi's Dream",
        description: "Revisiting Mahatma Gandhi's vision of village self-governance in contemporary context.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "May 2022",
        pages: "33",
        readTime: "23 min",
        category: "development"
      },
      {
        id: 12,
        title: "Panchayati Raj: Local Self-Governance",
        description: "Examining the current state of Panchayati Raj system and local self-governance.",
        image: "https://images.unsplash.com/photo-1592520113018-180c8bc831c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        date: "April 2022",
        pages: "25",
        readTime: "15 min",
        category: "development"
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'economics', name: 'Economics' },
    { id: 'development', name: 'Development' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'education', name: 'Education' },
    { id: 'technology', name: 'Technology' },
    { id: 'culture', name: 'Culture' },
    { id: 'wellness', name: 'Wellness' }
  ];

  // Generate years from 2000 to current year
  const years = Array.from({length: new Date().getFullYear() - 1999}, (_, i) => 2000 + i);

  // Filter publications based on search query and category
  useEffect(() => {
    setIsLoading(true);
    let publications = publicationsData[selectedYear] || [];
    
    if (searchQuery) {
      publications = publications.filter(pub => 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (activeCategory !== 'all') {
      publications = publications.filter(pub => pub.category === activeCategory);
    }
    
    setFilteredPublications(publications);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [selectedYear, searchQuery, activeCategory]);

  return (
    <div className="mt-10">
      <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-amber-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-amber-500/20 rounded-full animate-float animation-delay-2000"></div>
        
        {/* Hero Section */}
        <div className="container-fluid pt-32 pb-16 flex flex-col items-center px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl">
            <div className="inline-block relative mb-3">
              <div className="absolute -inset-3 bg-amber-100 rounded-full blur opacity-75"></div>
              <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl relative z-10">
                English <span className="text-amber-600">Patrika</span>
              </h1>
            </div>
            <div className="h-2 w-40 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif mt-8 leading-relaxed">
              A monthly journal exploring economic sovereignty, sustainable development, and indigenous solutions
            </p>
          </div>
        </div>

        {/* Subscription Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-400/20 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-amber-300/20 rounded-full"></div>
            <div className="absolute top-4 right-4 opacity-10">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"/>
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 relative z-10">
              Subscribe to Swadeshi Jagran Manch for the latest updates - Register Now
            </h2>
            <button className="bg-white text-amber-700 font-semibold px-8 py-3 rounded-xl hover:bg-amber-50 transition-all transform hover:-translate-y-1 shadow-md relative z-10">
              Register Now
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-amber-100">
            {/* Search and Filter Section */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-8">
                <div className="relative w-full md:max-w-md">
                  <input
                    type="text"
                    placeholder="Search publications..."
                    className="w-full p-4 pl-14 pr-4 rounded-2xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg className="w-6 h-6 text-amber-500 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === category.id
                          ? 'bg-amber-600 text-white shadow-md'
                          : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year Selector */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Year</h2>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-5 py-3 rounded-xl text-center font-medium transition-all transform hover:-translate-y-0.5 ${
                        selectedYear === year
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                          : 'bg-amber-100 text-amber-800 hover:bg-amber-200 shadow-md'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {selectedYear} Publications
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-8"></div>
                </div>
              </div>
            </div>

            {/* Publications Grid */}
            <div>
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-gradient-to-b from-white to-amber-50 rounded-2xl overflow-hidden shadow-md border border-amber-100">
                      <div className="h-52 bg-amber-200 animate-pulse"></div>
                      <div className="p-6">
                        <div className="h-6 bg-amber-200 rounded animate-pulse mb-4"></div>
                        <div className="h-4 bg-amber-200 rounded animate-pulse mb-2"></div>
                        <div className="h-4 bg-amber-200 rounded animate-pulse mb-2 w-3/4"></div>
                        <div className="h-10 bg-amber-200 rounded animate-pulse mt-4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredPublications.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPublications.map((pub) => (
                    <div key={pub.id} className="bg-gradient-to-b from-white to-amber-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 hover:-translate-y-1 group">
                      <div className="h-52 bg-amber-200 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img 
                          src={pub.image} 
                          alt={pub.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 text-amber-700 text-xs font-medium px-2 py-1 rounded-full z-20">
                          {pub.pages} pages
                        </div>
                        <div className="absolute bottom-3 left-4 bg-amber-500 text-white text-sm font-medium px-3 py-1 rounded-full z-20">
                          {pub.date}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-xs font-medium text-amber-600 uppercase tracking-wider mb-2">{pub.category}</div>
                        <h4 className="font-semibold text-xl text-gray-800 mb-3 leading-tight group-hover:text-amber-700 transition-colors">{pub.title}</h4>
                        <p className="text-gray-600 mb-4">{pub.description}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-sm text-amber-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                            </svg>
                            {pub.readTime} read
                          </span>
                          <button className="text-amber-600 font-medium flex items-center group-hover:underline">
                            Read More
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6">
                    <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No publications available</h3>
                  <p className="text-gray-500">Please select a different year or search term</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600">Monthly Issues</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">200+</div>
              <div className="text-gray-600">Authors</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">5000+</div>
              <div className="text-gray-600">Readers</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">24</div>
              <div className="text-gray-600">Years</div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/10 to-amber-900/10"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-4">Special Edition: Digital Sovereignty</h2>
                <p className="text-amber-100 mb-6">
                  Our upcoming special edition explores India's journey toward digital sovereignty, 
                  examining indigenous platforms, data localization, and the future of technology 
                  in the context of economic self-reliance.
                </p>
                <button className="bg-white text-amber-700 font-semibold px-6 py-2 rounded-lg hover:bg-amber-50 transition-colors">
                  Pre-order Now
                </button>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Special Edition" 
                    className="rounded-2xl shadow-2xl w-full max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-300"
                  />
                  <div className="absolute -inset-3 border-2 border-amber-300 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-5xl mx-auto mt-16 mb-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-10 border border-amber-200 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-200/30 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-amber-300/30 rounded-full"></div>
          
          <div className="text-center relative z-10">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              About English Patrika
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              English Patrika is a monthly publication dedicated to exploring economic sovereignty, 
              sustainable development, and indigenous solutions to contemporary challenges. 
              Through rigorous research and insightful analysis, we aim to promote the principles 
              of self-reliance and cultural preservation in a globalized world.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M13 7h-2v6h6v-2h-4z"/>
                </svg>
                <span>Monthly Publications</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
                <span>Thought Leadership</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
                <span>National Discourse</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-amber-100 mb-6">Subscribe to our newsletter for monthly updates and exclusive content</p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button className="bg-white text-amber-700 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default EnglishPatrika;