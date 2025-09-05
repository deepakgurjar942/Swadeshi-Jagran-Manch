import React, { useEffect } from 'react';
import Footer from '../layouts/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Introduction = () => {
  const { scrollTo } = useSmoothScroll();
  
    useEffect(() => {
      scrollTo(0, { duration: 1 });
    }, [scrollTo]);
  return (
    <>
      <div className="container-fluid mt-36 flex flex-col items-center px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-3xl">
          <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl mb-6 relative inline-block">
            INTRODUCTION
            <div className="absolute left-1/2 transform -translate-x-1/2 w-55 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 mt-4 rounded-full"></div>
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-32 h-0.5 bg-gradient-to-r from-amber-300 to-transparent rounded-full"></div> */}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 italic font-serif">
            Embracing the legacy of selfreliance- that shaped our nation's destiny
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 lg:p-12">
          <div className="text-gray-800 leading-relaxed text-base md:text-lg lg:text-xl">
            <p className="mb-8 font-serif text-xl md:text-2xl text-gray-700 italic border-l-4 border-amber-500 pl-6 py-3 bg-amber-50/30 rounded-r-lg">
              "The concept of <strong className="text-amber-600">Swadeshi</strong> is more than 150 years old. It was a guiding
              force for the Indian freedom struggle..."
            </p>

            <div className="space-y-8">
              <p className="leading-8">
                The concept of <strong className="text-amber-600 font-semibold">Swadeshi</strong> is more than 150 years old. It was a guiding
                force for the Indian freedom struggle under the visionary leadership
                of <strong className="text-gray-900">Lokmanya Tilak, Veer Savarkar, Shri Aurobindo and Mahatma Gandhi.</strong>
              </p>

              <p className="leading-8">
                Even decades after independence from British Colonialism it was felt
                that for total economic freedom it is essential to make Swadeshi a way
                of life. To make people aware of the ongoing economic imperialism,
                organizations like <strong className="text-gray-900">Bharatiya Mazdoor Sangh (BMS), Bharatiya Kisan
                Sangh (BKS), Akhil Bharatiya Vidyarthi Parishad (ABVP)</strong> etc. started a
                massive campaign for Swadeshi in 1980s.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 md:p-8 rounded-xl border-l-4 border-amber-400 shadow-sm">
                <p className="mb-0 text-amber-900 leading-8">
                  This movement helped in spreading awareness among the masses about the importance of Swadeshi
                  as a way of life. To give this movement a concrete form, it was
                  decided to establish <strong className="text-amber-700">Swadeshi Jagaran Manch (SJM)</strong>. Accordingly, <strong className="text-amber-700">SJM
                  came into existence on November 22, 1991 at Nagpur</strong>.
                </p>
              </div>

              <p className="leading-8">
                Representatives of five national level organisations including <strong className="text-gray-900">BMS, ABVP, BKS, Akhil
                Bharatiya Grahak Panchayat (ABGP) & Sahkar Bharati</strong> took this decision
                in the presence of <strong className="text-gray-900">Shri Dottopant Thengdi</strong>, founder of BMS and BKS. For
                proper execution of movement a Central Committee was formed and <strong className="text-gray-900">Dr.
                M.G. Bokare</strong> (Ex Vice Chancellor, Nagpur University) was given the
                responsibility of convener.
              </p>

              <p className="leading-8">
                On 12 January 1992, Birth Anniversary of Swami Vivekanand, the first massive campaign against the economic
                policy of central government started. People from all walks of life
                with distinct ideologies came together on the SJM platform to fight
                against economic imperialism.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    Associated Organizations
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1.5">•</span>
                      <span>Vanvasi Kalyan Ashram</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1.5">•</span>
                      <span>Vidya Bharati</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1.5">•</span>
                      <span>Rashtra Sevika Samiti</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1.5">•</span>
                      <span>Bharatiya Sikshan Mandal</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    Current Reach
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1.5">•</span>
                      <span>All-India network up to district level</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1.5">•</span>
                      <span>Block level presence in some districts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1.5">•</span>
                      <span>Monthly publications in Hindi & English</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="leading-8">
                Subsequently literature on Swadeshi, intellectual property rights, GATT and economic imperialism of
                multinationals was published and distributed to popularize the cause
                of SJM. Later on many other organizations joined the forces for
                <strong className="text-amber-600"> Swadeshi like Vanvasi Kalyan Ashram, Vidya Bharati, Rashtra Sevika
                Samiti, Bharatiya Sikshan Mandal</strong> etc.
              </p>

              <div className="bg-gradient-to-r from-gray-50 to-amber-50 p-6 md:p-8 rounded-xl border-l-4 border-amber-300 shadow-sm">
                <p className="leading-8 text-gray-800">
                  Today SJM has become an all-encompassing movement with more than 15 organizations associated
                  with it and has many other dimensions to its credit. Swadeshi Jagaran
                  Manch has an all-India network of sub units up to district level
                  across the country. In some districts our units have reached up to
                  block level. SJM is progressively reaching geographical and social
                  spread of the country.
                </p>
              </div>

              <p className="leading-8">
                At the same time SJM is actively coordinating with all those people and organizations that believe in Swadeshi
                ideology, and in the process has become an important link between the
                lowest strata of the society and policy planners and opinion makers at
                the national level.
              </p>

              <p className="leading-8">
                Promotion of Swadeshi products, arranging help in development of professionals, cultural & value oriented Indian
                Corporate Structure, Swadeshi Patrika is being published a monthly
                magazine in Hindi as well as in English. Swadeshi Jagran Manch has
                emerged as a forceful mobilization, with a vision and action plan for
                a truly self reliant Bharat and equitable world order that nobody can
                afford to ignore.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto pb-17 mt-14 text-center">
          <div className="relative">
            <svg className="w-12 h-12 text-amber-400 opacity-30 absolute -top-6 -left-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl pt-5 md:text-2xl italic text-gray-700 font-light leading-relaxed">
              "Swadeshi is not merely an economic strategy, but a way of life that embraces self-reliance, cultural pride, and national prosperity"
            </blockquote>
            <svg className="w-12 h-12 text-amber-400 opacity-30 absolute -bottom-6 -right-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Introduction;