import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing with: ${email}`);
        setEmail("");
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Brand Section */}
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                        Swadeshi Jagaran Manch
                    </h3>
                    <p className="text-gray-300 mb-6">
                        The Swadeshi Jagaran Manch is a economic and cultural organisation founded in 1991. It promotes national self reliance.
                    </p>
                    <div className="flex gap-3 mb-6">
                        {[
                            {
                                icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                                name: "Twitter"
                            },
                            {
                                icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                                name: "Facebook"
                            },
                            {
                                icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                                name: "Instagram"
                            }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-amber-600 flex items-center justify-center transition-colors duration-300 group"
                                aria-label={social.name}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform"
                                >
                                    <path d={social.icon} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                {/* <div className="md:col-span-1">
                    <h4 className="font-bold mb-4 text-lg border-l-4 border-amber-500 pl-2">Quick Links</h4>
                    <ul className="space-y-3">
                        {[
                            "Attractions",
                            "Experiences",
                            "Festivals and Events",
                            "FAQs",
                            "Incredible India Content Hub",
                        ].map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* Contact Info */}
                <div className="md:col-span-1">
                    <h4 className="font-bold mb-4 text-lg border-l-4 border-amber-500 pl-2">Contact Info</h4>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300">
                                Dharmakshetra, Shiv Shakti Mandir, Babu Genu Marg, Sector 8, Rama Krishna Puram, New Delhi-110022</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="text-gray-300">011 2618 4595</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className="text-gray-300">
                                info@swadeshionline.in</span>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="md:col-span-1">
                    <h4 className="font-bold mb-4 text-lg border-l-4 border-amber-500 pl-2">Newsletter</h4>
                    <p className="text-gray-300 mb-4">
                        Sign up for exciting news, In order to get the updates about the website, please subscribe to our newsletter.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-lg text-white pr-12 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute right-3 top-3.5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-amber-500/20"
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                <div className="flex gap-6 mb-4 md:mb-0">
                    {[
                        { name: "Terms of Use", path: "/terms" },
                        { name: "Privacy Policy", path: "/privacy" },
                        { name: "Cancellation & Refund", path: "/cancellation-refund" },
                        { name: "Shipping & Delivery", path: "/shipping-delivery" },
                        { name: "Contact Us", path: "/contact" }

                    ].map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Swadeshi Jagran Manch | Powered by</p>
            </div>
        </footer>
    );
};

export default Footer;