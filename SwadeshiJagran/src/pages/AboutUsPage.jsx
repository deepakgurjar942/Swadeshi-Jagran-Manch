import React, { useState } from 'react'
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom';
import { useCategories } from '../services/useCategories';
import { recentNews } from '../services/recentNews';
import { popularNews } from '../services/popularNews';
import { usePagination } from '../hooks/usePagination';
import StoreList from '../services/store';
const AboutUsPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const { categories, loading, error } = useCategories();
    const {data} = StoreList();
    console.log("store data",data);
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        setShowPlayButton(false);
    };
    return (
        <>
        
            <div className="min-h-screen mt-6 bg-gradient-to-b from-amber-50/20 to-white">
                {/* about us section */}

                {/* Hero Section */}

                    <div className="container-fluid pt-28 flex flex-col items-center px-4 sm:px-6 lg:px-12">
                        <div className="text-center mb-12 max-w-4xl">
                            <div className="inline-block relative">
                                <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl mb-8 relative z-10">
                                    ABOUT US
                                </h1>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-amber-500 to-amber-600 mt-4 rounded-full"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-48 h-1 bg-gradient-to-r from-amber-300 to-transparent rounded-full"></div>
                            </div>
                            <p className="text-xl md:text-2xl text-gray-700 italic font-serif mt-8 leading-relaxed">
                                Preserving economic sovereignty through the Swadeshi movement
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Left Content - 3/4 width */}
                            <div className="lg:col-span-3">
                                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-100">
                                    {/* History Section */}
                                    <div className="mb-16">
                                        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                                            <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                  <path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  d="M12 8v4l3 3
     m6 -3
     a9 9 0 1 1 -18 0
     a9 9 0 1 1 18 0z"
/>

                                                </svg>
                                            </span>
                                            Our History
                                        </h2>
                                        <div className="prose prose-lg max-w-none text-gray-700">
                                            <p className="mb-6">
                                                The concept of Swadeshi is more than 150 years old. It was a guiding force for the Indian freedom struggle under the visionary leadership of Lokmanya Tilak, Veer Savarkar, Shri Aurobindo and Mahatama Gandhi.
                                            </p>
                                            <p className="mb-6">
                                                Even decades after independence from British Colonialism it was felt that for total economic freedom it is essential to make Swadeshi a way of life. To make people aware of the on going economic imperialism, organizations like Bharatiya Mazdoor Sangh (BMS), Bharatiya Kisan Sangh (BKS), Akhil Bharatiya Vidyarthi Parishad (ABVP) etc. started a massive campaign for Swadeshi in 1980s.
                                            </p>
                                            <p className="mb-6">
                                                This movement helped in spreading awareness among the masses about the importance of Swadeshi as a way of life. To give this movement a concrete form, It was decided to establish Swadeshi Jagaran Manch (SJM). Accordingly, SJM came into existence on November 22, 1991 at Nagpur.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Foundation Section */}
                                    <div className="mb-16">
                                        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                                            <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                                </svg>
                                            </span>
                                            Our Foundation
                                        </h2>
                                        <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-200 mb-8">
                                            <p className="text-amber-700 font-medium text-center">
                                                Representatives of five national level organisations including BMS, ABVP, BKS, Akhil Bharatiya Grahak Panchayat (ABGP) & Sahkar Bharati took this decision in the presence of Shri Dottopant Thengdi, founder of BMS and BKS.
                                            </p>
                                        </div>
                                        <div className="prose prose-lg max-w-none text-gray-700">
                                            <p className="mb-6">
                                                For proper execution of movement a Central Committee was formed and Dr. M.G. Bokare (Ex Vice Chancellor, Nagpur University) was given the responsibility of convener. On 12 January 1992, Birth Anniversary of Swami Vivekanand, the first massive campaign against the economic policy of central government started.
                                            </p>
                                            <p className="mb-6">
                                                People from all walks of life with distinct ideologies came together on the SJM platform to fight against economic imperialism. Subsequently literature on Swadeshi, intellectual property rights. GATT and economic imperialism of multinationals was published and distributed to popularize the cause of SJM.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Growth Section */}
                                    <div className="mb-16">
                                        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                                            <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                                </svg>
                                            </span>
                                            Our Growth
                                        </h2>
                                        <div className="prose prose-lg max-w-none text-gray-700">
                                            <p className="mb-6">
                                                Later on many other organizations joined the forces for Swadeshi like Vanvasi Kalyan Ashram, Vidya Bharati, Rashtra Sevika Samiti, Bharatiya Sikshan Mandal etc. Today SJM has become an all-encompassing movement with more than 15 organizations associated with it and has many other dimensions to its credit.
                                            </p>
                                            <p className="mb-6">
                                                Swadeshi Jagaran Manch has an all India network of sub units up to district level across the country. In some districts our units have reached up to block level. SJM is progressively reaching geographical and social spread of the country.
                                            </p>
                                            <p className="mb-6">
                                                At the same time SJM is actively coordinating with all those people and organizations that believe in Swadeshi ideology, and in the process has become an important link between the lowest strata of the society and policy planners and opinion makers at the national level.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mission Section */}
                                    <div className="mb-16">
                                        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                                            <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                                </svg>
                                            </span>
                                            Our Mission
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                                                <h3 className="font-semibold text-amber-700 mb-3 text-lg">Promotion of Swadeshi</h3>
                                                <p className="text-gray-700">Promotion of Swadeshi products, arranging help in development of professionals, cultural & value oriented Indian Corporate Structure.</p>
                                            </div>
                                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                                                <h3 className="font-semibold text-amber-700 mb-3 text-lg">Publications</h3>
                                                <p className="text-gray-700">Swadeshi Patrika is being published as a monthly magazine in Hindi as well as in English.</p>
                                            </div>
                                        </div>
                                        <div className="prose prose-lg max-w-none text-gray-700">
                                            <p>
                                                Swadeshi Jagran Manch has emerged as a forceful mobilization, with a vision and action plan for a truly self reliant Bharat and equitable world order that nobody can afford to ignore.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Additional Sections */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Vision Section */}
                                        <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-6 border border-amber-300">
                                            <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                </svg>
                                                Our Vision
                                            </h3>
                                            <p className="text-amber-700">
                                                A self-reliant India where economic sovereignty is preserved and Swadeshi is embraced as a way of life by all citizens.
                                            </p>
                                        </div>

                                        {/* Values Section */}
                                        <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-6 border border-amber-300">
                                            <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                                </svg>
                                                Our Values
                                            </h3>
                                            <p className="text-amber-700">
                                                Economic sovereignty, cultural preservation, self-reliance, and equitable development for all sections of society.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* Right Sidebar - 1/4 width */}
                            <div className="lg:col-span-1 space-y-8">
                                {/* product list */}
                                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-amber-100">
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800">स्वदेशी-विदेशी प्रोडक्ट्स लिस्ट</h3>
                                    <Link
                                        to="https://www.swadeshionline.in/assets/pdf/swadeshi-videshi_products.pdf"
                                        className="cursor-pointer group relative block"
                                    >
                                        <div className="h-80 w-full overflow-hidden rounded-xl shadow-md transition-all duration-500 group-hover:shadow-lg ">
                                            <img
                                                src="https://www.swadeshionline.in/assets/images/comodity.jpg"
                                                alt="Products List"
                                                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                                                <span className="text-white font-medium text-center">View Product List</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* Categories */}
                                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-amber-100">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                        <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                                            </svg>
                                        </span>
                                        Categories
                                    </h2>
                                    <div className="space-y-3">
                                        {categories.slice(5, 17).map((cat) => (
                                            <div key={cat.id} className="flex items-center p-3 rounded-lg hover:bg-amber-50 transition-colors duration-200 cursor-pointer group">
                                                <img src={cat.image_full_url} alt={cat.name} className="w-8 h-8 rounded-full object-cover mr-3" />
                                                <span className="text-gray-700 group-hover:text-amber-600 transition-colors">{cat.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* latest in print */}
                                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-amber-100">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                        <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                                            </svg>
                                        </span>
                                        Latest in Print
                                    </h2>
                                    <a
                                        href="https://www.swadeshionline.in/assets/uploads/magazine-22-07-2025-465.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block cursor-pointer h-full rounded-xl overflow-hidden shadow-md transition-all duration-500 transform group-hover:shadow-xl"
                                    >
                                        <div className="relative h-full">
                                            <img
                                                src="https://www.swadeshionline.in/assets/uploads/thumb-22-07-2025-465.jpg"
                                                alt="swadeshi print"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-h极速赛车开奖结果记录over:opacity-100 transition-opacity duration-500 flex items-end">
                                                <div className="p-5 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                    <h3 className="text-xl font-bold mb-2">Latest Educational Edition</h3>
                                                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                                        Click to view the full educational magazine
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        New Issue
                                    </div>
                                </div>
                                {/* Recent News */}
                                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-amber-100">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                        <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                                            </svg>
                                        </span>
                                        Recent News
                                    </h2>
                                    <div className="space-y-4">
                                        {recentNews.slice(0, 3).map((item, idx) => (
                                            <div key={idx} className="flex items-start space-x-3 group cursor-pointer">
                                                <img src={item.img} alt={item.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-2">{item.title}</h3>
                                                    <p className="text-xs text-gray-500 mt-1">{item.date || "May 15, 2023"}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Popular News */}
                                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-amber-100">
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                        <span className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                            </svg>
                                        </span>
                                        Popular News
                                    </h2>
                                    <div className="space-y-4">
                                        {popularNews.slice(0, 3).map((item, idx) => (
                                            <div key={idx} className="flex items-start space-x-3 group cursor-pointer">
                                                <div className="relative">
                                                    <img src={item.img} alt={item.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                                                    <div className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                                        {idx + 1}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-2">{item.title}</h3>
                                                    <p className="text-xs text-gray-500 mt-1">{item.date || "May 15, 2023"}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/*footer section  */}
                <Footer />
            </div>
        </>
    )
}

export default AboutUsPage