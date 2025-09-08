import React from 'react'
import Footer from '../layouts/Footer'

const AimAndScope = () => {
  return (
    <>
      <div className="min-h-screen mt-12 bg-gradient-to-b from-amber-50/20 to-white">
        {/* Hero Section */}
        <div className="container-fluid pt-28 pb-12 flex flex-col items-center px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 max-w-4xl">
            <div className="inline-block relative">
              <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl mb-8 relative z-10">
                AIM & SCOPE
              </h1>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-amber-500 to-amber-600 mt-4 rounded-full"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-48 h-1 bg-gradient-to-r from-amber-300 to-transparent rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif mt-8 leading-relaxed">
              Understanding our mission and the breadth of our scholarly focus
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-100">
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </span>
                  Our Aim
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  In today's dynamic world, humanity is faced with constantly changing technologies 
                  (Artificial Intelligence, Robots, Drones etc), making lives easier while simultaneously 
                  disrupting livelihoods and businesses. Geo-politics is evolving rapidly, increasingly 
                  influenced by economics rather than diplomacy alone.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Trans-National Corporations (TNCs) are shaping economic policies, sometimes necessitating 
                  adjustments to fiscal and monetary approaches in response to the changing world order. 
                  Across the global landscape—whether in financial architecture, multilateralism, or international 
                  alignments—significant transformation is occurring. Climate Change presents yet another 
                  critical challenge, compelling humanity to adapt technologies, lifestyles, and energy policies.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 mb-12 border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Our Mission</h3>
                <p className="text-amber-700">
                  In response to these emerging situations, this Monograph Serial represents a humble effort to 
                  produce literature focused on humanity's needs, selecting topics of contemporary importance 
                  while considering both national interests and the broader welfare of humanity.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  Our Scope
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  This Monograph Series focuses on critical areas shaping our world, including:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-amber-700 mb-2">Economics & Trade</h4>
                    <p className="text-gray-600 text-sm">Analysis of economic systems, trade relationships, and market dynamics</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-amber-700 mb-2">Geo-Politics</h4>
                    <p className="text-gray-600 text-sm">Examination of international relations and political power in geographical context</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-amber-700 mb-2">Global World Order</h4>
                    <p className="text-gray-600 text-sm">Study of international systems, governance, and power structures</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-amber-700 mb-2">Multilateral Institutions</h4>
                    <p className="text-gray-600 text-sm">Analysis of international organizations and their role in global governance</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-amber-700 mb-2">Environmental Issues</h4>
                    <p className="text-gray-600 text-sm">Research on ecological challenges and sustainable solutions</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-amber-700 mb-2">Emerging Technologies</h4>
                    <p className="text-gray-600 text-sm">Examination of technological advancements and their societal impacts</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
                <div className="bg-gradient-to-r mt-10  from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                  <p className="text-amber-100">
                    This initiative represents a dedicated effort to publish literature that benefits students, 
                    academics, and policy makers alike, providing valuable insights into the complex challenges 
                    and opportunities of our time.
                  </p>
                </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AimAndScope