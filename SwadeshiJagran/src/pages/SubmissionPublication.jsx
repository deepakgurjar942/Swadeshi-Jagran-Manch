import React, { useState } from "react";
import Footer from "../layouts/Footer";

const SubmissionPublication = () => {
  const [activeSection, setActiveSection] = useState("summary");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-amber-50/20 to-white">
        {/* Hero Section */}
        <div className="container-fluid pt-28 pb-8 flex flex-col items-center px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 max-w-4xl">
            <div className="inline-block relative">
              <h1 className="font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl mb-6 relative z-10">
                SUBMISSION GUIDELINES
              </h1>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-amber-500 to-amber-600 mt-4 rounded-full"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-48 h-1 bg-gradient-to-r from-amber-300 to-transparent rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 italic font-serif mt-6 leading-relaxed">
              Follow our guidelines to prepare and submit your monograph for publication
            </p>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden bg-white shadow-md sticky top-20 z-10">
          <div className="flex overflow-x-auto px-4 py-2">
            <button
              onClick={() => setActiveSection("summary")}
              className={`px-4 py-2 rounded-lg mr-2 whitespace-nowrap ${activeSection === "summary" ? "bg-amber-500 text-white" : "bg-amber-100 text-amber-700"}`}
            >
              Key Points
            </button>
            <button
              onClick={() => setActiveSection("details")}
              className={`px-4 py-2 rounded-lg mr-2 whitespace-nowrap ${activeSection === "details" ? "bg-amber-500 text-white" : "bg-amber-100 text-amber-700"}`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveSection("figures")}
              className={`px-4 py-2 rounded-lg mr-2 whitespace-nowrap ${activeSection === "figures" ? "bg-amber-500 text-white" : "bg-amber-100 text-amber-700"}`}
            >
              Figures & Tables
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Section */}
            <div className="lg:col-span-3 space-y-6">
              {/* Header */}
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 md:p-8 border border-amber-100">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  Monograph Preparation Guidelines
                </h1>
                <p className="text-gray-600 mb-6 text-base md:text-lg">
                  Please adhere strictly to the monograph preparation guidelines.
                  Once your monograph is ready, submit it online using the button below.
                </p>
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-base md:text-lg">
                  Submit a Monograph
                </button>
              </div>

              {/* Summary of Key Points - Mobile/Desktop */}
              <div className={`lg:block ${activeSection !== "summary" ? "hidden lg:block" : ""}`}>
                <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 md:p-8 border border-amber-100">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </span>
                    SUMMARY OF KEY POINTS
                  </h2>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      {text: "Ensure your monograph is in grammatically and scientifically correct English."},
                      {text: "Microsoft Word; Times Roman font size 12; Justified alignment; 1.5 line spacing; 1-inch (2.54 cm) margin; Lines are numbered."},
                      {text: "A maximum of four authors is allowed. This is non-negotiable."},
                      {text: "9,000 – 11,000 words, inclusive of the abstract, figure legends, tables, and references. Monographs shorter than 9,000 words will not be considered."},
                      {text: "The maximum number of individual figures is five, irrespective of manuscript length. However, exception can be made upon request. Figures can be multi-panel. All figures may be in color. At least one figure is obligatory."},
                      {text: "The manuscript can have up to three tables. No table should exceed one page in portrait or 1.5 pages in landscape. If tables contain references, these references must also appear in the text in sequential order."},
                      {text: "Only two levels allowed.", subItems: [
                        "Primary heading: Capitalized and bold.",
                        "Secondary heading: Normal font and bold."
                      ]},
                      {text: "Minimize the use of abbreviations. Only use abbreviations that appear at least four times in the text and define them on their first appearance."},
                      {text: "Follow APA style."}
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-amber-500 text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1 flex-shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <span><strong>{["Language", "File format", "Number of Authors", "Word Limit", "Figures", "Tables", "Headings", "Abbreviations", "References"][index]}:</strong> {item.text}</span>
                          {item.subItems && (
                            <ul className="ml-4 mt-2 space-y-1">
                              {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex} className="flex items-start">
                                  <span className="text-amber-500 mr-2">•</span>
                                  <span>{subItem}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Detailed Instructions - Mobile/Desktop */}
              <div className={`lg:block ${activeSection !== "details" ? "hidden lg:block" : ""}`}>
                <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 md:p-8 border border-amber-100">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </span>
                    DETAILED INSTRUCTIONS
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p className="text-amber-700 font-medium mb-4">
                      (All components are mandatory unless marked as 'optional'). Organize the monograph as follows:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {[
                        {title: "Title", content: "A concise title representing the main idea. For instance, 'Gene X in Prostate Cancer' is preferable over 'The Role of Gene X in Prostate Cancer.'"},
                        {title: "Authors", content: "List full names (first name, then last name) of all authors separated by commas. Use superscripts for different affiliations. Do not use 'and' before the last author. Include affiliations and countries, separated by semi-colons."},
                        {title: "Author for Correspondence", content: "Mention the full name, primary affiliation, country, and email."},
                        {title: "Abstract", content: "One paragraph without references or subheadings, between 150 and 200 words. Ensure the abstract is not shorter than 150 words."},
                        {title: "Keywords", content: "List 5-10 in alphabetical order, separated by semi-colons."},
                        {title: "Running Title", content: "Maximum of 50 characters, excluding spaces."},
                        {title: "Introduction", content: "Use only the term 'Introduction' and avoid adding subheadings beneath it. Include references."},
                        {title: "Contents", content: "Present the content under various headings as suitable. Adhere to the guidelines on heading styles."},
                        {title: "Future Directions (Optional)", content: "If added, title it 'Future Directions.'"},
                        {title: "Conclusion", content: "Title it 'Conclusion' and refrain from using alternate terms like 'Conclusions' or 'Concluding remarks.'"},
                        {title: "Acknowledgment (Optional)", content: "If you do not have acknowledgments, skip this section. Recognize colleagues or funding sources here."},
                        {title: "Conflict of Interest", content: "Specify any conflicts. If none, use: 'The authors declare that they have no potential conflict of interest concerning the research, authorship, and/or publication of this manuscript.'"},
                        {title: "Copyright Statement", content: "Please copy and paste the following as it is. Do not modify: 'The authors confirm that the materials included in this chapter do not violate copyright laws...'"},
                        {title: "References", content: "Cite using the APA style. Ensure citations are in numerical order in parentheses and match the order at the end of the manuscript."}
                      ].map((item, index) => (
                        <div key={index} className="bg-amber-50 p-3 md:p-4 rounded-xl border border-amber-200">
                          <h3 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{item.title}</h3>
                          <p className="text-xs md:text-sm">{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Figures & Tables Section - Mobile/Desktop */}
              <div className={`lg:block ${activeSection !== "figures" ? "hidden lg:block" : ""}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Figures */}
                  <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-5 md:p-6 border border-amber-100">
                    <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-800 flex items-center">
                      <span className="bg-amber-100 text-amber-600 p-1 md:p-2 rounded-lg mr-2 md:mr-3">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </span>
                      Figures
                    </h2>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                      {[
                        "Figures inserted immediately after the references.",
                        "Each figure identified in the text as Figure 1, Figure 2 etc. (not Fig.1, Fig. 2).",
                        "Figure referenced in the text in sequential order.",
                        "Multi-panel figures should be made into one figure.",
                        "Multi-panel figures labeled in Caps – Figure 1 A, 1 B, 1C not Figure 1a, 1b, 1c.",
                        "Figure legends given immediately below the figure.",
                        "Figure legend should be stand-alone.",
                        "Abbreviations used in figures expanded at the end of the legend in alphabetical order.",
                        "High resolution TIFF images (min 300 dpi) uploaded separately during submission."
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tables */}
                  <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-5 md:p-6 border border-amber-100">
                    <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-800 flex items-center">
                      <span className="bg-amber-100 text-amber-600 p-1 md:p-2 rounded-lg mr-2 md:mr-3">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                      </span>
                      Tables
                    </h2>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                      {[
                        "Tables inserted immediately after the references or the figures, if relevant.",
                        "Created with the 'insert table' function of Microsoft Word.",
                        "A table should not exceed a single page.",
                        "Page margins: 3.5 cm (1.37 inches) at the top and bottom, and 2 cm (0.75 inches) at left and right.",
                        "Can be portrait or landscape.",
                        "Each table identified in the text as Table 1 or Table 2.",
                        "Identified in sequential order.",
                        "Each table has a title.",
                        "Any relevant explanation given below the table.",
                        "If there are references in the Table, they should also be identified in the text in sequential order."
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-5 md:p-6 border border-amber-100 sticky top-28">
                <h2 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">Publications</h2>
                <p className="text-xs md:text-sm text-gray-600 mb-4">Most read last week</p>

                <div className="mb-5">
                  <h3 className="text-sm md:text-base font-medium mb-2 text-gray-700">User Search</h3>
                  <input
                    type="text"
                    placeholder="Search by name..."
                    className="w-full px-3 md:px-4 py-2 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
                  />
                  <button className="mt-2 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 text-sm md:text-base">
                    Search
                  </button>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm md:text-base font-medium mb-2 text-gray-700">Quick Links</h3>
                  <ul className="space-y-2">
                    {[
                      {text: "Author Guidelines", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},
                      {text: "Submission Timeline", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},
                      {text: "Review Process", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},
                      {text: "Publication Ethics", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}
                    ].map((item, index) => (
                      <li key={index}>
                        <a href="#" className="text-xs md:text-sm text-amber-600 hover:text-amber-700 flex items-center">
                          <svg className="w-3 h-3 md:w-4 md:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                          </svg>
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubmissionPublication;