import React, { useState } from "react";
import Footer from "../layouts/Footer";

const editorialBoard = [
  {
    name: "Phool Chand",
    mobile: "9810575915",
    email: "phoolchand@ss.du.ac.in",
    profile: "https://www.du.ac.in/index.php?id=171&mid=5565",
    designation:
      "Professor, Department of Economics at PGDAV College(Eve.), University of Delhi",
  },
  {
    name: "Dr. Apoorva Gupta",
    mobile: "",
    email: "apoorvagupta@ss.du.ac.in",
    profile: "https://www.du.ac.in/index.php?id=171&mid=5583",
    designation:
      "Assistant Professor, Department of Economics at Hansraj College, University of Delhi",
  },
  {
    name: "Dr. Vineet Kumar",
    mobile: "9871031933",
    email: "vineet@ss.du.ac.in",
    profile: "https://www.du.ac.in/index.php?id=171&mid=5571",
    designation:
      "Assistant Professor, Department of Political Science at Atma Ram Sanatan Dharma College, University of Delhi",
  },
  {
    name: "Shri Anil Sharma",
    mobile: "9818618201",
    email: "anilsharma@ss.du.ac.in",
    profile: "",
    designation: "Professor, Indira Gandhi National Open University",
  },
  {
    name: "Dr. Amit Nandan",
    mobile: "9871019134",
    email: "amitnandan@ss.du.ac.in",
    profile: "https://www.du.ac.in/index.php?id=171&mid=5595",
    designation:
      "Assistant Professor, Department of Economics at Motilal Nehru College(Eve.), University of Delhi",
  },
  {
    name: "Vacant",
    mobile: "",
    email: "",
    profile: "",
    designation: "",
  },
];

const EditorialBoardPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredBoard = editorialBoard.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-amber-50/20 to-white">
        {/* Hero Section */}
        <div className="container-fluid pt-28 flex flex-col items-center px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 max-w-4xl">
            <div className="inline-block relative">
              <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl mb-8 relative z-10">
                EDITORIAL BOARD
              </h1>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-amber-500 to-amber-600 mt-4 rounded-full"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-48 h-1 bg-gradient-to-r from-amber-300 to-transparent rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif mt-8 leading-relaxed">
              Meet our distinguished editorial board members who guide our publications
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-100">
                {/* Search Section */}
                <div className="mb-10">
                  <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search board members by name or designation..."
                      className="block w-full pl-10 pr-4 py-3 border border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Board Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredBoard.map((member, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-amber-100 shadow-md hover:shadow-lg transition-all duration-300 p-6"
                    >
                      {member.name !== "Vacant" ? (
                        <>
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">{member.name}</h3>
                          {member.designation && (
                            <p className="text-sm text-gray-600 mb-4">
                              {member.designation}
                            </p>
                          )}
                          <div className="space-y-2">
                            {member.mobile && (
                              <div className="flex items-center text-sm text-gray-600">
                                <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                {member.mobile}
                              </div>
                            )}
                            {member.email && (
                              <div className="flex items-center text-sm text-gray-600">
                                <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <a
                                  href={`mailto:${member.email}`}
                                  className="text-blue-600 hover:underline"
                                >
                                  {member.email}
                                </a>
                              </div>
                            )}
                            {member.profile && (
                              <div className="flex items-center text-sm text-gray-600">
                                <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                                <a
                                  href={member.profile}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  View Profile
                                </a>
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <div className="bg-amber-100 text-amber-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-600">Position Vacant</h3>
                          <p className="text-gray-500 mt-2">We're looking for qualified candidates</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-10 mb-10 bg-gradient-to-r from-amber-50 to-amber-100 rounded-3xl p-10 border border-amber-200">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Our Editorial Board
          </h3>
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            Our distinguished editorial board comprises experts from various fields who guide our publication's 
            direction, ensure academic rigor, and maintain the highest standards of scholarship. Each member 
            brings unique expertise and perspective to our journal.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default EditorialBoardPage;