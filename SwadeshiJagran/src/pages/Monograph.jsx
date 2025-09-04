import React from 'react';
import Footer from '../layouts/Footer';

const Monograph = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-amber-50/20 to-white">
        {/* Hero Section */}
        <div className="container-fluid pt-32 pb-16 flex flex-col items-center px-4 sm:px-6 lg:px-12">
          <div className="text-center  max-w-6xl">
            <div className="inline-block relative">
              <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl mb-8 relative z-10">
                MONOGRAPH
              </h1>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-52 h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
              {/* <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-48 h-1 bg-gradient-to-r from-amber-300 to-transparent rounded-full"></div> */}
            </div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif mt-8 leading-relaxed">
              Contemporary Swadeshi - Exploring Indigenous Solutions
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-amber-100">
            {/* Opening Quote */}
            <div className="mb-12 text-center">
              <div className="relative inline-block">
                <svg className="w-16 h-16 text-amber-400 opacity-20 absolute -top-4 -left-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-serif text-2xl md:text-3xl text-gray-800 italic border-l-4 border-amber-500 pl-8 py-4 bg-amber-50/50 rounded-r-2xl relative z-10">
                  "A bi-monthly publication dedicated to exploring economic sovereignty, 
                  sustainable development, and indigenous solutions to modern challenges"
                </p>
                <svg className="w-16 h-16 text-amber-400 opacity-20 absolute -bottom-4 -right-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Publication Details */}
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Publisher
                    </h3>
                    <p className="text-lg text-gray-800 font-medium">
                      Swadeshi Jagaran Foundation
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Chief Editor
                    </h3>
                    <p className="text-lg text-gray-800 font-medium">
                      Dr. Ashwani Mahajan
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Starting Year
                    </h3>
                    <p className="text-lg text-gray-800 font-medium">2024</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Frequency
                    </h3>
                    <p className="text-lg text-gray-800 font-medium">Bi-Monthly</p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Subjects
                    </h3>
                    <p className="text-lg text-gray-800 font-medium">
                      Economics, Political Science, Environment, International Relations
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Format & Language
                    </h3>
                    <p className="text-lg text-gray-800 font-medium">Online | English</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Contact
                    </h3>
                    <p className="text-lg text-gray-800 font-medium">
                      Phone: 92122090090
                    </p>
                    <p className="text-lg text-gray-800 font-medium">
                      Email: ashwanimahajan@rediffmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="mt-12 pt-10 border-t border-amber-200">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Address
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Dharmakshetra, Shiv Shakti Mandir, Babu Genu Marg, Sector 8, 
                    Rama Krishna Puram, New Delhi, Delhi 110022
                  </p>
                </div>
              </div>
            </div>

            {/* Website Link */}
            <div className="mt-10 bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Visit Our Website
                  </h3>
                  <a 
                    href="https://www.swadeshionline.in/monograph/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-800 font-medium transition-colors text-lg"
                  >
                    https://www.swadeshionline.in/monograph/
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-12 text-center">
              <a
                href="https://www.swadeshionline.in/monograph/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-2xl shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all transform hover:-translate-y-1 text-lg"
              >
                Explore Monograph Publications
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-6xl mx-auto mt-16 bg-gradient-to-r mb-10 from-amber-50 to-amber-100 rounded-3xl p-10 border border-amber-200">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            About Monograph
          </h3>
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            Monograph: Contemporary Swadeshi is a prestigious bi-monthly publication dedicated to 
            exploring economic sovereignty, sustainable development, and indigenous solutions to 
            modern challenges. Through rigorous research and insightful analysis, we aim to 
            promote the principles of self-reliance and cultural preservation in a globalized world.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Monograph;