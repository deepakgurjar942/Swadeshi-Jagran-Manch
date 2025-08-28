import React from "react";
import Footer from "../layouts/Footer";

const MovementPage = () => {
  // Timeline data for better organization
  const timelineEvents = [
    {
      year: "1991",
      events: ["SJM established on November 22 at Nagpur"]
    },
    {
      year: "1992",
      events: [
        "Mass awareness program begins on Swami Vivekanand's birth anniversary (Jan 12)",
        "First major public meeting in Mumbai (Nov 22)",
        "Primary literature on Swadeshi circulated"
      ]
    },
    {
      year: "1993",
      events: [
        "First national convention in New Delhi (Sept 4-5) with 622 delegates",
        "Meeting at Nagpur decides to boycott MNC products (Nov 15)"
      ]
    },
    {
      year: "1994",
      events: [
        "First National Council meeting in Pune (Apr 2-3)",
        "Massive mass-awakening program with 183,401 workers organized"
      ]
    },
    {
      year: "1995",
      events: [
        "Second National Council meeting in Madras",
        "Conference against cattle-meat export in Hyderabad",
        "Movement against Enron Corp power deal",
        "Publication of Swadeshi Patrika begins",
        "Second national convention in Calcutta"
      ]
    },
    {
      year: "1996-1999",
      events: [
        "Jal Yatra against deep-sea fishing licenses",
        "National Workshop on Development Concept",
        "Third National Convention in Varanasi",
        "Swadeshi Chetna Yatras across the country",
        "Swadeshi Mela at Pragati Maidan, Delhi"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto mt-28 px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            THE SWADESHI MOVEMENT
          </h1>
          <div className="w-70 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey of economic independence and national self-reliance that continues to shape India's destiny
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Historical Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((period, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-start">
                  {/* Year marker */}
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-amber-500 text-white font-bold text-lg z-10 absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2">
                    {period.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} mt-2`}>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                      <ul className="space-y-2">
                        {period.events.map((event, eventIndex) => (
                          <li key={eventIndex} className="text-gray-700">
                            • {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Content Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">The Movement in Detail</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              SJM came into existence on <strong className="text-amber-600">22 November 1991 at Nagpur</strong> and within a
              short period it started its activities on a warfront. On the birth
              anniversary of Swami Vivekanand, <strong className="text-amber-600">12 January 1992</strong> the struggle against
              the economic imperialism began in the form of mass awareness
              programme.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <p>
                In this campaign the changes in the economic policies,
                devaluation of rupee and interference of external powers in the
                policy-making decisions and their collective harmful impacts on Indian
                economy were exposed to the public.
              </p>
            </div>

            <p>
              Around the same time primary literature on Swadeshi was circulated in the different states. Later
              on various related topics were covered & published on a regular basis.
              Among them the prominent ones are:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Key Publications</h3>
                <ul className="space-y-2">
                  <li>• "The Third Alternative" by Shri Dattapant Thengdi</li>
                  <li>• "The Menace of Multinationals" by Shri Dayakrishna</li>
                  <li>• "Hindu Economics" by Dr. M.G. Boakare</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Major Campaigns</h3>
                <ul className="space-y-2">
                  <li>• Boycott of MNC products (Pepsi, Coke, Colgate)</li>
                  <li>• Opposition to Duncal's Draft</li>
                  <li>• Movement against Enron power deal</li>
                  <li>• Cattle wealth preservation</li>
                </ul>
              </div>
            </div>

            <p>
              The first major public meeting of SJM was organised at Mumbai on 22 November 1992,
              which was addressed by prominent thinkers and national level workers.
              This meeting proved that people from different ideological backgrounds
              were willing to share the platform of SJM on an all-concerning issue
              like Swadeshi.
            </p>

            <p>
              The first national convention was held at New Delhi on September 4-5, 1993; which had 622 delegates attend. Before that many
              associate organisations of SJM like BMS, ABVP, BKS, ABGP etc. carried
              out their own action programmes for spreading awareness about harmful
              effects of Duncal's Draft.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Significant Achievements</h3>
              <ul className="space-y-2">
                <li>• 372 Swadeshi Depots opened across the country</li>
                <li>• Over 30 million pamphlets distributed</li>
                <li>• Successful opposition to the Enron deal saving ₹2200+ crores</li>
                <li>• Nationwide network established up to district level</li>
              </ul>
            </div>

            <p>
              The movement continued to gain momentum with various initiatives including
              the Jal Yatra against deep-sea fishing licenses, Swadeshi Chetna Yatras,
              and the organization of the first Swadeshi Mela at Pragati Maidan in 1999
              which was inaugurated by Prime Minister Atal Bihari Vajpayee.
            </p>

            <p className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border">
              Today, the Swadeshi Jagaran Manch stands as a testament to the power of
              organized public action against economic imperialism, continuing to
              champion the cause of self-reliance and national economic sovereignty.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl italic text-gray-700 max-w-4xl mx-auto p-8 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl">
            "The Swadeshi movement is not just about economic policies; it's about
            reclaiming our national soul and securing our economic destiny"
          </blockquote>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MovementPage;