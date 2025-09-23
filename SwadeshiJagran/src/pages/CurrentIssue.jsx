import React from "react";
import Footer from "../layouts/Footer";

const CurrentIssue = () => {
  const issues = [
    {
      title: "Chinese's BRI: A Threat to the Nations' Sovereignty",
      date: "January 20, 2025",
      author: "Dr. Rajesh Kumar",
      summary: "An in-depth analysis of how China's Belt and Road Initiative impacts national sovereignty of participating countries.",
      image: "https://images.unsplash.com/photo-1586074299757-d8956365c7d9?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
      downloadLink: "#"
    },
  ];

  return (
    <>
      <div className="min-h-screen mt-12 bg-gradient-to-b from-amber-50/20 to-white">
        {/* Hero Section */}
        <div className="container-fluid pt-28 pb-12 flex flex-col items-center px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 max-w-4xl">
            <div className="inline-block relative">
              <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl mb-8 relative z-10">
                CURRENT ISSUE
              </h1>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-amber-500 to-amber-600 mt-4 rounded-full"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-48 h-1 bg-gradient-to-r from-amber-300 to-transparent rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif mt-8 leading-relaxed">
              Explore our latest publications and research findings
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-amber-100">
            {/* Featured Issue */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </span>
                Featured Issue
              </h2>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src={issues[0].image}
                      alt={issues[0].title}
                      className="w-full h-48 object-cover rounded-xl shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{issues[0].title}</h3>
                    <p className="text-amber-600 font-medium mb-3">{issues[0].date} • {issues[0].author}</p>
                    <p className="text-gray-600 mb-4">{issues[0].summary}</p>
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        Read Article
                      </button>
                      <button className="border border-amber-500 text-amber-600 px-5 py-2 rounded-xl hover:bg-amber-50 transition-all duration-300 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Issues Table */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </span>
                All Issues
              </h2>

              <div className="overflow-x-auto rounded-xl border border-amber-200 shadow-sm">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold text-sm md:text-base">Title</th>
                      <th className="px-6 py-4 text-left font-semibold text-sm md:text-base">Date</th>
                      <th className="px-6 py-4 text-left font-semibold text-sm md:text-base">Author</th>
                      <th className="px-6 py-4 text-left font-semibold text-sm md:text-base">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {issues.map((issue, index) => (
                      <tr key={index} className="border-t border-amber-100 hover:bg-amber-50/50 transition-colors duration-200">
                        <td className="px-6 py-4 text-gray-800 font-medium text-sm md:text-base">
                          {issue.title}
                        </td>
                        <td className="px-6 py-4 text-gray-600 text-sm md:text-base">{issue.date}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm md:text-base">{issue.author}</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button className="bg-amber-100 text-amber-700 px-3 py-1 rounded-lg hover:bg-amber-200 transition-colors duration-200 text-sm md:text-base flex items-center">
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5
     c4.478 0 8.268 2.943 9.542 7
     -1.274 4.057 -5.064 7 -9.542 7
     -4.477 0 -8.268 -2.943 -9.542 -7z"
                                />

                              </svg>
                              View
                            </button>
                            <button className="bg-amber-500 text-white px-3 py-1 rounded-lg hover:bg-amber-600 transition-colors duration-200 text-sm md:text-base flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                              </svg>
                              Download
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-2">
                <button className="p-2 rounded-lg border border-amber-200 text-amber-600 hover:bg-amber-50 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <button className="w-10 h-10 rounded-lg bg-amber-500 text-white font-medium">1</button>
                <button className="w-10 h-10 rounded-lg border border-amber-200 text-amber-600 hover:bg-amber-50 transition-colors duration-200">2</button>
                <button className="w-10 h-10 rounded-lg border border-amber-200 text-amber-600 hover:bg-amber-50 transition-colors duration-200">3</button>

                <button className="p-2 rounded-lg border border-amber-200 text-amber-600 hover:bg-amber-50 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </nav>
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                About Our Publications
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Our journal features cutting-edge research and analysis on economic sovereignty,
                geopolitical issues, and sustainable development. Each issue is meticulously
                curated by our editorial board to ensure the highest standards of academic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CurrentIssue;