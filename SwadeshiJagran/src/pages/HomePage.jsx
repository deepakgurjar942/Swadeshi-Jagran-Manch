import React, { useState, useEffect } from "react";

const Pormarth = () => {
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDestination, setCurrentDestination] = useState(0);
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
        "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "ADVENTURE AWAITS",
      subtitle: "experience the thrill",
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
      name: "Delhi",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "The historic capital with a blend of ancient and modern",
    },
    {
      name: "Rishikesh",
      image:
       "https://img.freepik.com/premium-photo/view-ganga-river-embankment-lakshman-jhula-bridge-tera-manzil-temple-rishikesh-india_617018-17.jpg?w=1480",
      description: "Yoga capital of the world on the banks of Ganges",
    },
    {
      name: "Varanasi",
      image:
        "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "One of the world's oldest living cities",
    },
    {
      name: "Jaipur",
      image:
        "https://images.unsplash.com/photo-1477581265664-b1e27c6731a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "The Pink City with magnificent palaces and forts",
    },
    {
      name: "Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Sun, sand and Portuguese heritage",
    },
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
  const goToNext = () => {
    setCurrentDestination((prev) =>
      prev === destinations.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentDestination((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );
  };

  const goToDestination = (index) => {
    setCurrentDestination(index);
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
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
              className={`w-3 h-3 rounded-full ${
                currentSlide === index
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">DESTINATIONS</h2>
          <p className="text-gray-600">for every bucket list</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main destination display */}
          <div className="h-full md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-8 relative">
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

            {/* Navigation arrows */}
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

            {/* Indicator dots */}
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
          </div>

          {/* Thumbnail navigation */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`relative h-24 md:h-32 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  currentDestination === index
                    ? "ring-4 ring-amber-500"
                    : "opacity-80 hover:opacity-100"
                }`}
                onClick={() => goToDestination(index)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm md:text-base text-center px-1">
                    {destination.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            ATTRACTIONS
          </h2>
          <p className="text-center text-gray-600 mb-12">
            — worth a thousand stories —
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {[
              "The Golden Temple",
              "Shanti Stupa",
              "Tulip Garden",
              "Explans",
              "Rohtang Pass",
            ].map((attraction) => (
              <div
                key={attraction}
                className="bg-white rounded-lg shadow p-4 text-center h-32 flex items-center justify-center"
              >
                <h3 className="font-semibold">{attraction}</h3>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="text-amber-600 font-semibold hover:underline">
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* Travel Diaries Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            TRAVEL DIARIES
          </h2>
          <p className="text-center text-gray-600 mb-12">for every passion</p>

          <div className="flex justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-amber-600 text-white rounded-full">
              Interests
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-full">
              Regions
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                region: "Punjab",
                category: "Heritage",
                title: "Discovering Amritsar differently",
              },
              {
                region: "Rajasthan",
                category: "Heritage",
                title:
                  "7 Best Jaipur viewpoints – where to go for Jaipur sunset views",
              },
              {
                region: "Sikkim",
                category: "Nature",
                title: "Postcards from Sikkim - Where nature smiles!",
              },
              {
                region: "Tamil Nadu",
                category: "Heritage",
                title: "Places to see in central Tamil Nadu",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">
                    {item.region} | {item.category}
                  </p>
                  <h3 className="font-semibold mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-amber-600 font-semibold hover:underline">
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* Itineraries Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            ITINERARIES
          </h2>
          <p className="text-center text-gray-600 mb-8">
            that beckon every traveller
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-amber-600 text-white rounded-full">
              Region
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-full">
              Interest
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-full">
              Trip Length
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                duration: "2 Days",
                place: "Mangalore",
                description: "A scenic exploration of coastal Mangalore",
              },
              {
                duration: "2 Days",
                place: "Jalandhar",
                description:
                  "Jalandhar: cultural expedition through Punjab's heart",
              },
              {
                duration: "2 Days",
                place: "Ayodhya",
                description: "A spiritual getaway in Ayodhya",
              },
              {
                duration: "2 Days",
                place: "Tirupati",
                description: "A land of beauty and spiritual divinity",
              },
              {
                duration: "2 Days",
                place: "Ajmer",
                description: "Ajmer serenity escape",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-bold">{item.duration}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.place}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-amber-600 font-semibold hover:underline">
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* Lesser Known Wonders Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            LESSER KNOWN WONDERS
          </h2>

          <div className="bg-gray-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Sarmoli</h3>
            <p className="text-gray-600 mb-4">The enchanting Himalayan haven</p>
            <p className="text-sm text-gray-500">Uttarakhand</p>
          </div>

          <div className="text-center mt-8">
            <button className="text-amber-600 font-semibold hover:underline">
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* Exquisite Crafts Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            EXQUISITE CRAFTS
          </h2>
          <p className="text-center text-gray-600 mb-12">
            — of timeless tradition —
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { region: "Jammu and Kashmir", craft: "Walnut Wood Carving" },
              { region: "Karnataka", craft: "Channapatna Toys & Dolls" },
              { region: "Kerala", craft: "Aranmula Kannadi" },
              {
                region: "Madhya Pradesh",
                craft: "Bagh Prints of Madhya Pradesh",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg mb-2">{item.region}</h3>
                <p className="text-gray-600">{item.craft}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-amber-600 font-semibold hover:underline">
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Incredible India</h3>
            <div className="flex gap-4 mb-6">
              {["f", "X", "in"].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick links</h4>
            <ul className="space-y-2">
              {[
                "Attractions",
                "Experiences",
                "Festivals and Events",
                "FAQs",
                "Incredible India Content Hub",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-amber-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="mb-4">
              Sign up for exciting news, learn more about our events and get
              great travel ideas.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 py-2 rounded font-semibold"
              >
                Subscribe now
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 flex flex-wrap justify-between">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-amber-400">
              Terms of Use
            </a>
            <a href="#" className="hover:text-amber-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400">
              Contact Us
            </a>
          </div>
          <p>Ministry of Tourism, Government of India</p>
        </div>
      </footer>
    </div>
  );
};

export default Pormarth;
