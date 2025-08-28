import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Footer from "../layouts/Footer";
const Pormarth = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDestination, setCurrentDestination] = useState(0);

  const recentNews = [
    {
      title: "कहानी भारतीय समोसे और जलेबी की",
      img: "https://www.swadeshionline.in/assets/uploads/news-1779.jpeg",
    },
    {
      title: "भारत बना दुनिया का चौथा सबसे अधिक समानता वाला देश",
      img: "https://www.swadeshionline.in/assets/uploads/news-1778.jpg",
    },
    {
      title: "स्वदेशी सैन्य तकनीकी और नवाचार",
      img: "https://www.swadeshionline.in/assets/uploads/news-1777.jpg",
    },
  ];

  const popularNews = [
    {
      title: "वर्तमान दौर में संयुक्त राष्ट्र संघ की प्रासंगिकता",
      img: "https://www.swadeshionline.in/assets/uploads/news-343.jpg",
    },
    {
      title: "स्वावलंबी भारत अभियान",
      img: "https://www.swadeshionline.in/assets/uploads/news-858.jpg",
    },
    {
      title: "कोई सपना नहीं, हकीकत है आत्मनिर्भर-भारत",
      img: "https://www.swadeshionline.in/assets/uploads/news-239.jpg",
    },
  ];

  const categories = [
    {
      title: "Education",
      img: "https://www.swadeshionline.in/assets/uploads/news-1225.jpg",
    },
    {
      title: "Environment",
      img: "https://www.swadeshionline.in/assets/uploads/news-884.jpg",
    },
    {
      title: "GM Food",
      img: "https://www.swadeshionline.in/assets/uploads/news-373.jpg",
    },
    {
      title: "National Events",
      img: "https://www.swadeshionline.in/assets/uploads/news-1047.jpg",
    },
    {
      title: "Movements",
      img: "https://media.newindianexpress.com/newindianexpress%2F2025-08-10%2Fc7cmtvug%2F20250810194240.jpg?w=1200&auto=format%2Ccompress&fit=max",
    },
    {
      title: "Tourist Guide",
      img: "https://img.freepik.com/free-photo/couple-tourists-searching-some-entertainments_329181-13762.jpg?t=st=1756290231~exp=1756293831~hmac=283baa2583196bf4bacc648da250fd36aece8e7b80ceff8b5b0a604e74f1a48c&w=1480",
    },
    {
      title: "Covid Guide",
      img: "https://img.freepik.com/free-photo/asia-female-receptionist-conducting-wear-protective-face-mask-use-infrared-thermometer-checker-temperature-gun-customer-s-forehead-before-enter-office-lifestyle-new-normal-after-corona-virus_7861-2610.jpg?t=st=1756290371~exp=1756293971~hmac=c7c19ea8ebb13b52e74835f77068156a7df1f8291898c6d73c1d31e2cd06844d&w=1480",
    },
    {
      title: "Press Releases",
      img: "https://img.freepik.com/free-photo/person-conducting-interview_23-2149037944.jpg?ga=GA1.1.1568188790.1748154404&semt=ais_hybrid&w=740&q=80",
    },
  ];

  const articles = [
    {
      img: "https://www.swadeshionline.in/assets/uploads/news-1761.jpg",
      title: "किसानों की आमदनी बढ़ाने का जरिया है पीएम कुसुम योजना",
      desc: "योजना की खास बातें हैं कि किसान अपनी बंजर या खेतों के लायक नहीं रही जमीन पर 500 किलो वाट से 2 मेगावाट क्षमता के सौर ऊर्जा संयंत्र लगा सकते हैं...",
      lang: "hi",
    },
    {
      img: "https://www.swadeshionline.in/assets/uploads/news-1676.jpg",
      title: "Why India should have a ‘sin tax’ on ultra-processed foods",
      desc: "Ultra-processed foods, apart from aggravating lifestyle diseases like obesity, diabetes, endocrine disruptions, cardiac issues, and high blood pressure...",
      lang: "en",
    },
    {
      img: "https://www.swadeshionline.in/assets/uploads/news-1655.jpg",
      title: "National Turmeric Board in Nizamabad becomes a reality",
      desc: "The long-cherished dream of Telangana turmeric farmers is set to become a reality with the formal inauguration of the National Turmeric Board...",
      lang: "en",
    },
    {
      img: "https://www.swadeshionline.in/assets/uploads/news-1537.jpg",
      title: "कृषि चक्र: उत्पादन, शोध, निवेश और तकनीक",
      desc: "समय की आवश्यकता है कि किसानों के हित में आवश्यक वस्तु अधिनियम को सरकार को उपयुक्तता ताप के लिए आवश्यक वस्तुओं की कमी को नियंत्रित करने में सक्षम बनाया जाए...",
      lang: "hi",
    },
  ];
  const gmDebate = [
    {
      img: "https://www.swadeshionline.in/assets/uploads/news-1131.jpg",
      title: "डॉक्टरों ने जीएम सरसों को बताया पर्यावरण प्रतिरोधी",
      desc: "देशभर के 100 से अधिक डॉक्टरों ने जीएम सरसों को लेकर प्रधानमंत्री मोदी को पत्र लिखा है। डॉक्टरों ने पीएम मोदी से आग्रह किया है कि आनुवंशिक रूप से संशोधित सरसों...",
      lang: "hi",
    },
    {
      img: "https://www.swadeshionline.in/assets/uploads/news-1124.jpg",
      title: "GM fundamentalists can’t even give one valid argument: Dr. Mahajan",
      desc: "‘We don’t need GM mustard to improve yields, we just have to rely on varieties that are already growing in India,’ says Mahajan. — Indra Shekhar...",
      lang: "en",
    },
    {
      img: "https://www.swadeshionline.in/assets/uploads/news-1118.jpg",
      title: "Why govt’s policy shift on GM crops may run into rough weather",
      desc: "The Union government’s green signal for genetically modified (GM) herbicide tolerant (HT) mustard, Dhara Mustard Hybrid-11 (DMH-11), buttressed by...",
      lang: "en",
    },
    {
      img: "https://www.swadeshionline.in/assets/uploads/news-1103.jpg",
      title: "जीएम सरसों के पौधों को उखाड़े जाने की उच्चतम न्यायालय से मांग",
      desc: "आनुवांशिक रूप से संवर्धित (जीएम) फसलों के खिलाफ अभियान चलाने वाले संगठनों की तरफ से बुधवार को उच्चतम न्यायालय में कहा गया कि पर्यावरणीय परीक्षण मंजूरी मिलने के...",
      lang: "hi",
    },
  ];
  const slides = [
    {
      image:
        "https://img.freepik.com/premium-photo/view-ganga-river-embankment-lakshman-jhula-bridge-tera-manzil-temple-rishikesh-india_617018-17.jpg?w=1480",
      title: "PORMARTH",
      subtitle: "to the sacred ghats of Rishikesh",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "SPIRITUAL RETREAT",
      subtitle: "find your inner peace",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "CULTURAL HERITAGE",
      subtitle: "discover ancient traditions",
    },
  ];
  const destinations = [
    {
      name: "भारत बना दुनिया का चौथा सबसे अधिक समानता वाला देश",
      image:
        "https://www.swadeshionline.in/assets/uploads/news-1778.jpg",
      description: "The historic capital with a blend of ancient and modern",
    },
    {
      name: "स्वदेशी सैन्य तकनीकी और नवाचार",
      image:
        "https://www.swadeshionline.in/assets/uploads/news-1777.jpg",
      description: "Yoga capital of the world on the banks of Ganges",
    },
    {
      name: "भारत पर बढ़ता दुनिया का भरोसाः भारत और ब्रिटेन ने किये मुक्त व्यापार समझौते पर हस्ताक्षर",
      image:
      "https://www.swadeshionline.in/assets/uploads/news-1776.jpg",
      description: "One of the world's oldest living cities",
    },
    // {
    //   name: "Jaipur",
    //   image:
    //     "https://images.unsplash.com/photo-1477581265664-b1e27c6731a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //   description: "The Pink City with magnificent palaces and forts",
    // },
    // {
    //   name: "Goa",
    //   image:
    //     "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //   description: "Sun, sand and Portuguese heritage",
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToDestination = (index) => {
    setCurrentDestination(index);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {slides[currentSlide].subtitle}
          </p>

          {/* <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['India 360', 'Adventurer', 'Nature', 'Wildlife', 'Heritage', 'Spiritual'].map((tag) => (
            <span key={tag} className=" bg-opacity-20 px-4 py-2 rounded-full text-sm">{tag}</span>
          ))}
        </div> */}

          {/* <div className="mb-8">
          <p className="text-2xl mb-4">Namaste ▲ how can I guide you?</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Book Your Travel
          </button>
        </div> */}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 z-20 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-4 z-20 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index
                ? "bg-amber-500"
                : "bg-white bg-opacity-50"
                }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      {/* Destinations Section */}
      <section className="relative py-16 px-4 md:px-8 bg-gray-50">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">DESTINATIONS</h2>
          <p className="text-gray-600">for every bucket list</p>
        </div> */}

        <div className="max-w-7xl mx-auto">
          {/* Main destination display */}
          {/* <div className="h-full md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-8 relative">
            <img
              src={destinations[currentDestination].image}
              alt={destinations[currentDestination].name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {destinations[currentDestination].name}
              </h3>
              <p className="text-lg md:text-xl">
                {destinations[currentDestination].description}
              </p>
            </div>

            Navigation arrows
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
              aria-label="Previous destination"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
              aria-label="Next destination"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            Indicator dots
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentDestination === index ? "bg-amber-500" : "bg-white"
                  }`}
                  onClick={() => goToDestination(index)}
                  aria-label={`Go to ${destinations[index].name}`}
                />
              ))}
            </div>
          </div> */}

          {/* Thumbnail navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`relative h-24 md:h-60 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${currentDestination === index
                  ? " ring-amber-500"
                  : "opacity-80 hover:opacity-100"
                  }`}
                onClick={() => goToDestination(index)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
                <div className="absolute inset-0  flex items-end">
                  <span className="text-white bg-gray-600 font-semi w-full text-sm md:text-base px-1">
                    {destination.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="flex flex-col md:flex-row gap-6 p-6">
        <div className="flex flex-col w-full md:w-7/12">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">TOP PICKS</h2>
          <div className="h-80 w-full overflow-hidden rounded-lg shadow-md">
            <img
              src="https://www.swadeshionline.in/assets/uploads/photo-370.jpg"
              alt="Top Picks"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col mt-3 w-full md:w-5/12">
          <h3 className="text-lg font-semibold mb-4">स्वदेशी-विदेशी प्रोडक्ट्स लिस्ट</h3>
          <Link to="https://www.swadeshionline.in/assets/pdf/swadeshi-videshi_products.pdf" className=" cursore-pointer ">
            <div className="h-80 w-full overflow-hidden rounded-md">
              <img
                src="https://www.swadeshionline.in/assets/images/comodity.jpg"
                alt="Products List"
                className="w-full h-full"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Agriculture Section */}

      <section className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl ">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">AGRICULTURE</h2>
            <div className="h-1 w-33 bg-green-500 mt-2  mx-auto rounded-full"></div>
          </div>
          <button className="text-green-600 hover:text-green-800 font-medium flex items-center gap-1">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Articles List - 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start gap-5 p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image with subtle frame */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border-2 border-white shadow-md"
                />
                <div className="absolute -inset-1 border border-green-200 rounded-xl -z-10"></div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-sm hover:shadow-md flex items-center gap-1">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GM Debate Section */}

      <section className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl ">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">GM DEBATE</h2>
            <div className="w-28 h-1 bg-gradient-to-r from-amber-200 to-amber-900 mx-auto mt-2"></div>
          </div>
          <button className="text-green-600 hover:text-green-800 font-medium flex items-center gap-1">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Articles List - 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gmDebate.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start gap-5 p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image with subtle frame */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border-2 border-white shadow-md"
                />
                <div className="absolute -inset-1 border border-green-200 rounded-xl -z-10"></div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-sm hover:shadow-md flex items-center gap-1">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* category section */}
      <section className="bg-white rounded-xl p-6 md:p-8 w-full">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Categories</h2>
          <p className="text-gray-500 text-sm md:text-base">Explore our wide range of categories</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Grid Layout with 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center p-5 rounded-xl bg-gradient-to-b from-white to-gray-50 border border-gray-100 hover:border-transparent shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container with subtle gradient border */}
              <div className="relative mb-4">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Category Title */}
              <span className="text-gray-700 font-semibold text-sm md:text-base text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {cat.title}
              </span>

              {/* Subtle hover indicator */}
              <div className="w-0 group-hover:w-5 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-8">
    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg">
      View All Categories
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div> */}
      </section>
      {/* Recent News section */}

      <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        {/* Header with icon and action button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Recent News</h2>
          </div>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* 3-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentNews.map((item, idx) => (
            <div
              key={idx}
              className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-40">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">News</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.desc || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.date || "May 15, 2023"}</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular News Section */}
      <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        {/* Header with icon and action button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Popular News</h2>
          </div>
          <button className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center gap-1">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* 3-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularNews.map((item, idx) => (
            <div
              key={idx}
              className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image with popular badge */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Popular badge with ranking */}
                {/* <div className="absolute top-3 left-3 flex items-center">
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>#{idx + 1} Popular</span>
            </div>
          </div> */}

                {/* View count */}
                {/* <div className="absolute top-3 right-3">
            <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              {Math.floor(Math.random() * 1000) + 500}
            </span>
          </div> */}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>

                {/* Meta information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{item.date || "May 15, 2023"}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span>By Admin</span>
                  </div>
                </div>

                <button className="w-full bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Pormarth;