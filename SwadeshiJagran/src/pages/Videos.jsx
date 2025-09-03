import React, { useState } from 'react';

const GovernmentEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Digital India Summit 2023",
      description: "National conference on digital transformation and e-governance initiatives",
      date: "15 Nov 2023",
      duration: "2:45:18",
      thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      category: "Conference",
      department: "Ministry of Electronics & IT",
      location: "New Delhi",
      attendees: "1,200",
      status: "Completed"
    },
    {
      id: 2,
      title: "Smart Cities Mission Review",
      description: "Progress review meeting for the Smart Cities Mission across 100 cities",
      date: "28 Oct 2023",
      duration: "1:52:45",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      category: "Meeting",
      department: "Ministry of Housing & Urban Affairs",
      location: "Virtual",
      attendees: "350",
      status: "Completed"
    },
    {
      id: 3,
      title: "National Education Policy Workshop",
      description: "Stakeholder consultation workshop for implementing NEP 2020",
      date: "5 Dec 2023",
      duration: "3:15:22",
      thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      category: "Workshop",
      department: "Ministry of Education",
      location: "Hyderabad",
      attendees: "850",
      status: "Upcoming"
    },
    {
      id: 4,
      title: "Agricultural Innovation Fair",
      description: "Showcasing technological innovations in agriculture and farming practices",
      date: "20 Sep 2023",
      duration: "4:30:10",
      thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      category: "Exhibition",
      department: "Ministry of Agriculture",
      location: "Pune",
      attendees: "2,500",
      status: "Completed"
    },
    {
      id: 5,
      title: "Healthcare Infrastructure Summit",
      description: "Discussion on strengthening India's healthcare infrastructure and systems",
      date: "8 Jan 2024",
      duration: "2:15:38",
      thumbnail: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      category: "Summit",
      department: "Ministry of Health & Family Welfare",
      location: "Mumbai",
      attendees: "900",
      status: "Upcoming"
    },
    {
      id: 6,
      title: "Renewable Energy Conference",
      description: "National conference on renewable energy initiatives and future roadmap",
      date: "12 Nov 2023",
      duration: "3:45:12",
      thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80",
      category: "Conference",
      department: "Ministry of New & Renewable Energy",
      location: "Bengaluru",
      attendees: "1,100",
      status: "Completed"
    }
  ];

  const categories = ['All', 'Conference', 'Meeting', 'Workshop', 'Exhibition', 'Summit'];
  
  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  const featuredEvent = filteredEvents[selectedEvent];

  return (
    <div className="mt-28">
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 font-sans">
      {/* Header with Government Identity */}
      <header className="max-w-6xl mx-auto mb-12 bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-[#F17140] text-white rounded-xl h-16 w-16 flex items-center justify-center mr-4 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Government Events Portal</h1>
              <p className="text-[#F17140] font-medium">Transparency • Accountability • Governance</p>
            </div>
          </div>
          <div className="bg-[#FEF6F2] text-[#F17140] px-4 py-2 rounded-lg text-sm border border-[#FFE4D5]">
            <span className="font-semibold">Official Portal</span> • Government of India
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Government Events & Conferences</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access recordings of important government events, conferences, and meetings
          </p>
        </div>

        {/* Featured Event Section */}
        <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Video/Image Section */}
            <div className="md:w-2/3 relative">
              <div className="relative w-full h-0 pb-[56.25%] bg-gray-800">
                <img 
                  src={featuredEvent.thumbnail} 
                  alt={featuredEvent.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button className="bg-[#F17140] hover:bg-[#E06536] text-white rounded-full p-3 md:p-4 shadow-lg transform hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${featuredEvent.status === 'Completed' ? 'bg-[#ECFDF5] text-[#047857]' : 'bg-[#FEF6F2] text-[#F17140]'}`}>
                    {featuredEvent.status}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Event Details */}
            <div className="md:w-1/3 p-6">
              <div className="mb-4">
                <span className="bg-[#FEF6F2] text-[#F17140] text-xs font-semibold px-2 py-1 rounded">
                  {featuredEvent.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{featuredEvent.title}</h2>
              <p className="text-gray-600 mb-4">{featuredEvent.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-[#F17140]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{featuredEvent.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-[#F17140]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{featuredEvent.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-[#F17140]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  <span>{featuredEvent.attendees} attendees</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-[#F17140]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                  <span>Organized by: {featuredEvent.department}</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="bg-[#F17140] hover:bg-[#E06536] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Watch Video
                </button>
                <button className="border border-[#F17140] text-[#F17140] hover:bg-[#FEF6F2] px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-[#F17140] text-white shadow-md' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#F17140]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Government Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border-l-4 ${
                  event.status === 'Completed' ? 'border-[#10B981]' : 'border-[#F17140]'
                }`}
                onClick={() => setSelectedEvent(index)}
              >
                <div className="relative">
                  <div className="w-full h-40 overflow-hidden">
                    <img 
                      src={event.thumbnail} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${event.status === 'Completed' ? 'bg-[#ECFDF5] text-[#047857]' : 'bg-[#FEF6F2] text-[#F17140]'}`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {event.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 line-clamp-1">{event.title}</h3>
                    <span className="bg-[#FEF6F2] text-[#F17140] text-xs font-semibold px-2 py-1 rounded">
                      {event.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
                  <div className="flex items-center text-xs text-gray-500 justify-between">
                    <span>{event.date}</span>
                    <span>{event.department}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Upcoming Events</h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.filter(event => event.status === 'Upcoming').map(event => (
                <div key={event.id} className="border-l-4 border-[#F17140] pl-4 py-2">
                  <h3 className="font-semibold text-gray-800">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <svg className="w-4 h-4 mr-1 text-[#F17140]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <svg className="w-4 h-4 mr-1 text-[#F17140]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <button className="mt-2 text-[#F17140] hover:text-[#E06536] text-sm font-medium flex items-center">
                    Register Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white rounded-xl shadow-sm p-6 text-center text-gray-600 text-sm">
          <p>Government Events Portal • Ministry of Information and Broadcasting</p>
          <p className="mt-2">© 2023 Government of India. All rights reserved.</p>
        </footer>
      </div>
    </div>
    </div>
  );
};

export default GovernmentEvents;