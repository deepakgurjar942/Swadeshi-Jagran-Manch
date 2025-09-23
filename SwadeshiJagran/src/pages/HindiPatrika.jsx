import { useState, useEffect } from 'react';
import Footer from '../layouts/Footer';

const HindiPatrika = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Sample data with image paths
  const publicationsData = {
    2024: [
      {
        id: 1,
        title: "स्वदेशी आंदोलन: इतिहास और वर्तमान",
        description: "स्वदेशी आंदोलन के इतिहास और वर्तमान संदर्भ में इसकी प्रासंगिकता पर विशेष लेख",
        image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "मार्च 2024",
        pages: "24",
        readTime: "15 min"
      },
      {
        id: 2,
        title: "ग्रामीण अर्थव्यवस्था: चुनौतियाँ और समाधान",
        description: "भारत की ग्रामीण अर्थव्यवस्था की मौजूदा चुनौतियों और संभावित समाधानों पर केंद्रित अंक",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "फरवरी 2024",
        pages: "32",
        readTime: "20 min"
      },
      {
        id: 3,
        title: "पारंपरिक कृषि पद्धतियाँ",
        description: "आधुनिक समय में पारंपरिक कृषि पद्धतियों की उपयोगिता और महत्व पर विशेषांक",
        image: "https://images.unsplash.com/photo-1624371066606-cb8933c2c39c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "जनवरी 2024",
        pages: "28",
        readTime: "18 min"
      }
    ],
    2023: [
      {
        id: 4,
        title: "भारतीय शिक्षा नीति: नए आयाम",
        description: "नई शिक्षा नीति और भारतीय ज्ञान परंपरा के समन्वय पर केंद्रित विशेष लेख",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "दिसंबर 2023",
        pages: "36",
        readTime: "25 min"
      },
      {
        id: 5,
        title: "स्वदेशी तकनीक: संभावनाएँ और चुनौतियाँ",
        description: "तकनीक के क्षेत्र में स्वदेशी नवाचारों की संभावनाओं पर केंद्रित अंक",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "नवंबर 2023",
        pages: "30",
        readTime: "22 min"
      },
      {
        id: 6,
        title: "सांस्कृतिक राष्ट्रवाद: एक दृष्टिकोण",
        description: "समकालीन संदर्भ में सांस्कृतिक राष्ट्रवाद की अवधारणा पर विमर्श",
        image: "https://images.unsplash.com/photo-1541123356219-284ebe98a8e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "अक्टूबर 2023",
        pages: "26",
        readTime: "17 min"
      },
      {
        id: 7,
        title: "योग और आयुर्वेद: वैश्विक प्रासंगिकता",
        description: "योग और आयुर्वेद की वैश्विक स्वीकार्यता और उसके आर्थिक पहलू",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80",
        date: "सितंबर 2023",
        pages: "34",
        readTime: "24 min"
      },
      {
        id: 8,
        title: "स्वदेशी उद्योग: संकट और संभावनाएं",
        description: "कोरोना काल में स्वदेशी उद्योगों पर पड़े प्रभाव और भविष्य की राह",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "अगस्त 2023",
        pages: "29",
        readTime: "19 min"
      },
      {
        id: 9,
        title: "डिजिटल भारत और स्वदेशी तकनीक",
        description: "डिजिटल इंडिया मिशन में स्वदेशी तकनीक की भूमिका और महत्व",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "जुलाई 2023",
        pages: "31",
        readTime: "21 min"
      }
    ],
    2022: [
      {
        id: 10,
        title: "मेक इन इंडिया: सफलता और चुनौतियाँ",
        description: "मेक इन इंडिया अभियान की सफलता, चुनौतियाँ और भविष्य की रणनीति",
        image: "https://images.unsplash.com/photo-1597674919392-9448d70fcb5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "जून 2022",
        pages: "27",
        readTime: "16 min"
      },
      {
        id: 11,
        title: "ग्राम स्वराज: गाँधी का सपना",
        description: "महात्मा गाँधी के ग्राम स्वराज के सपने और वर्तमान संदर्भ",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "मई 2022",
        pages: "33",
        readTime: "23 min"
      },
      {
        id: 12,
        title: "पंचायती राज: स्थानीय स्वशासन",
        description: "पंचायती राज व्यवस्था और स्थानीय स्वशासन की वर्तमान स्थिति",
        image: "https://images.unsplash.com/photo-1592520113018-180c8bc831c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "अप्रैल 2022",
        pages: "25",
        readTime: "15 min"
      }
    ]
  };

  // Generate years from 2000 to current year
  const years = Array.from({length: new Date().getFullYear() - 1999}, (_, i) => 2000 + i);

  // Filter publications based on search query
  useEffect(() => {
    setIsLoading(true);
    let publications = publicationsData[selectedYear] || [];
    
    if (searchQuery) {
      publications = publications.filter(pub => 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredPublications(publications);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [selectedYear, searchQuery]);

  return (
    <> 
    <div className='mt-10'>
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
                हिंदी पत्रिका
              </h1>
            </div>
            <div className="h-2 w-40 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif mt-8 leading-relaxed">
              स्वदेशी चिंतन और राष्ट्रीय विमर्श की मासिक पत्रिका
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
              स्वदेशी जागरण मंच की नवीनतम अपडेट के लिए सदस्यता लें - पंजीकरण करें
            </h2>
            <button className="bg-white text-amber-700 font-semibold px-8 py-3 rounded-xl hover:bg-amber-50 transition-all transform hover:-translate-y-1 shadow-md relative z-10">
              अभी पंजीकरण करें
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-amber-100">
            {/* Search Bar */}
            <div className="mb-12">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="अंक खोजें..."
                  className="w-full p-4 pl-14 pr-10 rounded-2xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="w-6 h-6 text-amber-500 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>

            {/* Year Selector */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">वर्ष चुनें</h2>
              
              <div className="flex flex-wrap justify-center gap-3 mb-10">
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
                  {selectedYear} के अंक
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-8"></div>
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
                          {pub.pages} पृष्ठ
                        </div>
                        <div className="absolute bottom-3 left-4 bg-amber-500 text-white text-sm font-medium px-3 py-1 rounded-full z-20">
                          {pub.date}
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="font-semibold text-xl text-gray-800 mb-3 leading-tight group-hover:text-amber-700 transition-colors">{pub.title}</h4>
                        <p className="text-gray-600 mb-4">{pub.description}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-sm text-amber-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                            </svg>
                            {pub.readTime} पढ़ने का समय
                          </span>
                          <button className="text-amber-600 font-medium flex items-center group-hover:underline">
                            अधिक जानें
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
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">कोई अंक उपलब्ध नहीं है</h3>
                  <p className="text-gray-500">कृपया अन्य वर्ष चुनें या खोज शब्द बदलें</p>
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
              <div className="text-gray-600">मासिक अंक</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">200+</div>
              <div className="text-gray-600">लेखक</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">5000+</div>
              <div className="text-gray-600">पाठक</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">24</div>
              <div className="text-gray-600">वर्ष</div>
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
                <h2 className="text-3xl font-bold mb-4">हिंदी पत्रिका का विशेष अंक</h2>
                <p className="text-amber-100 mb-6">
                  स्वदेशी आंदोलन के 100 वर्ष: ऐतिहासिक संदर्भ और वर्तमान परिदृश्य पर विशेष अंक जल्द ही आ रहा है
                </p>
                <button className="bg-white text-amber-700 font-semibold px-6 py-2 rounded-lg hover:bg-amber-50 transition-colors">
                  अधिक जानकारी
                </button>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80" 
                    alt="Special Edition" 
                    className="rounded-2xl shadow-2xl w-full max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-300"
                  />
                  <div className="absolute -inset-3 border-2 border-amber-300 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-5xl mx-auto mt-16 mb-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-10 border border-amber-200 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-200/30 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-amber-300/30 rounded-full"></div>
          
          <div className="text-center relative z-10">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              हिंदी पत्रिका के बारे में
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              हिंदी पत्रिका स्वदेशी जागरण फाउंडेशन का एक प्रमुख प्रकाशन है जो राष्ट्रीय हित, 
              आर्थिक संप्रभुता और सांस्कृतिक पहचान से जुड़े मुद्दों पर केंद्रित है। 
              यह पत्रिका प्रतिमाह प्रकाशित होती है और देशभर के विद्वानों, चिंतकों और शोधार्थियों 
              के लेखों को प्रकाशित करती है।
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M13 7h-2v6h6v-2h-4z"/>
                </svg>
                <span>मासिक प्रकाशन</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
                <span>विचार विमर्श</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
                <span>राष्ट्रीय विमर्श</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">नवीनतम अपडेट प्राप्त करें</h3>
            <p className="text-amber-100 mb-6">हमारे न्यूज़लेटर की सदस्यता लें और महत्वपूर्ण जानकारी सीधे अपने इनबॉक्स में प्राप्त करें</p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="आपका ईमेल पता" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button className="bg-white text-amber-700 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors whitespace-nowrap">
                सदस्यता लें
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
    </>
  );
};

export default HindiPatrika;