import React from 'react';
import Footer from '../layouts/Footer';

const Introduction = () => {
  return (
    <>
    <div className="container-fluid mt-28 flex flex-col items-center px-4 sm:px-6 lg:px-12">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl mb-6 relative">
          INTRODUCTION
          <div className="flex items-center transform translate-x-3/7 w-70 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mt-3"></div>
        </h1>
        <p className="text-lg text-gray-600 italic">
          Embracing the legacy of self-reliance that shaped our nation's destiny
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="text-gray-800 leading-relaxed text-lg md:text-xl">
          <p className="mb-6 font-serif text-xl md:text-2xl text-gray-700 italic border-l-4 border-amber-500 pl-6 py-2">
            "The concept of <strong className="text-amber-600">Swadeshi</strong> is more than 150 years old. It was a guiding
            force for the Indian freedom struggle..."
          </p>

          <div className="space-y-6">
            <p>
              The concept of <strong className="text-amber-600 font-semibold">Swadeshi</strong> is more than 150 years old. It was a guiding
              force for the Indian freedom struggle under the visionary leadership
              of <strong className="text-gray-900">Lokmanya Tilak, Veer Savarkar, Shri Aurobindo and Mahatma Gandhi.</strong>
            </p>

            <p>
              Even decades after independence from British Colonialism it was felt
              that for total economic freedom it is essential to make Swadeshi a way
              of life. To make people aware of the ongoing economic imperialism,
              organizations like <strong className="text-gray-900">Bharatiya Mazdoor Sangh (BMS), Bharatiya Kisan
              Sangh (BKS), Akhil Bharatiya Vidyarthi Parishad (ABVP)</strong> etc. started a
              massive campaign for Swadeshi in 1980s.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <p className="mb-0">
                This movement helped in spreading awareness among the masses about the importance of Swadeshi
                as a way of life. To give this movement a concrete form, it was
                decided to establish <strong className="text-amber-600">Swadeshi Jagaran Manch (SJM)</strong>. Accordingly, <strong>SJM
                came into existence on November 22, 1991 at Nagpur</strong>.
              </p>
            </div>

            <p>
              Representatives of five national level organisations including <strong className="text-gray-900">BMS, ABVP, BKS, Akhil
              Bharatiya Grahak Panchayat (ABGP) & Sahkar Bharati</strong> took this decision
              in the presence of <strong className="text-gray-900">Shri Dottopant Thengdi</strong>, founder of BMS and BKS. For
              proper execution of movement a Central Committee was formed and <strong className="text-gray-900">Dr.
              M.G. Bokare</strong> (Ex Vice Chancellor, Nagpur University) was given the
              responsibility of convener.
            </p>

            <p>
              On 12 January 1992, Birth Anniversary of Swami Vivekanand, the first massive campaign against the economic
              policy of central government started. People from all walks of life
              with distinct ideologies came together on the SJM platform to fight
              against economic imperialism.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  Associated Organizations
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vanvasi Kalyan Ashram</li>
                  <li>• Vidya Bharati</li>
                  <li>• Rashtra Sevika Samiti</li>
                  <li>• Bharatiya Sikshan Mandal</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  Current Reach
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• All-India network up to district level</li>
                  <li>• Block level presence in some districts</li>
                  <li>• Monthly publications in Hindi & English</li>
                </ul>
              </div>
            </div>

            <p>
              Subsequently literature on Swadeshi, intellectual property rights, GATT and economic imperialism of
              multinationals was published and distributed to popularize the cause
              of SJM. Later on many other organizations joined the forces for
              <strong className="text-amber-600"> Swadeshi like Vanvasi Kalyan Ashram, Vidya Bharati, Rashtra Sevika
              Samiti, Bharatiya Sikshan Mandal</strong> etc.
            </p>

            <p className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border">
              Today SJM has become an all-encompassing movement with more than 15 organizations associated
              with it and has many other dimensions to its credit. Swadeshi Jagaran
              Manch has an all-India network of sub units up to district level
              across the country. In some districts our units have reached up to
              block level. SJM is progressively reaching geographical and social
              spread of the country.
            </p>

            <p>
              At the same time SJM is actively coordinating with all those people and organizations that believe in Swadeshi
              ideology, and in the process has become an important link between the
              lowest strata of the society and policy planners and opinion makers at
              the national level.
            </p>

            <p>
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
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <blockquote className="text-2xl italic text-gray-700 font-light">
          "Swadeshi is not merely an economic strategy, but a way of life that embraces self-reliance, cultural pride, and national prosperity"
        </blockquote>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Introduction;