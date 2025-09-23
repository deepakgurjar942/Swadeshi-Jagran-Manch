import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="mt-10">
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      {/* Header */}
      <div className="pt-28 pb-12 flex flex-col items-center px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl">
          <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl mb-4 drop-shadow-[0_3px_3px_rgba(251,191,36,0.5)]">
            Contact <span className="text-amber-600">Us</span>
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6 shadow-lg shadow-amber-200/60"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Get in touch with{" "}
            <span className="font-semibold text-amber-600">
              Swadeshi Jagran Manch
            </span>
            . We welcome your suggestions and questions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(251,191,36,0.2)] p-8 md:p-12 border border-amber-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>

            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 shadow-md shadow-green-200/50">
                Your message has been sent successfully! We will contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="subscription">Subscription Related</option>
                    <option value="publication">Publication Related</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback/Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
                  placeholder="Tell us how we can help you"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all transform hover:-translate-y-1 hover:scale-105 shadow-lg shadow-amber-400/40"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(251,191,36,0.2)] p-8 md:p-12 border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span>
                    Dharmakshetra, Shiv Shakti Mandir, Babu Genu Marg, Sector 8,
                    Rama Krishna Puram, New Delhi, Delhi 110022
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-amber-600" /> +91 92122 09009
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-amber-600" />{" "}
                  ashwanimahajan@rediffmail.com
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-amber-600" /> Mon - Fri: 9:00 AM
                  - 5:00 PM | Sat: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(251,191,36,0.2)] p-8 border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center hover:bg-amber-100 hover:scale-110 hover:rotate-6 transition transform shadow-md shadow-amber-200/50"
                >
                  <Twitter className="w-6 h-6 text-amber-600" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center hover:bg-amber-100 hover:scale-110 hover:-rotate-6 transition transform shadow-md shadow-amber-200/50"
                >
                  <Instagram className="w-6 h-6 text-amber-600" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center hover:bg-amber-100 hover:scale-110 hover:rotate-6 transition transform shadow-md shadow-amber-200/50"
                >
                  <Facebook className="w-6 h-6 text-amber-600" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center hover:bg-amber-100 hover:scale-110 hover:-rotate-6 transition transform shadow-md shadow-amber-200/50"
                >
                  <Youtube className="w-6 h-6 text-amber-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(251,191,36,0.2)] p-8 md:p-12 border border-amber-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-amber-700 mb-2">
                How long does it take to get a response?
              </h3>
              <p className="text-gray-600">
                We strive to respond within 2 business days. For urgent matters,
                please call our hotline.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-amber-700 mb-2">
                What documents do I need to bring for in-person services?
              </h3>
              <p className="text-gray-600">
                Requirements vary. Please bring ID, proof of address, and any
                relevant documents.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-amber-700 mb-2">
                Are your facilities accessible?
              </h3>
              <p className="text-gray-600">
                Yes, all our facilities are wheelchair accessible. Contact us in
                advance if you need accommodations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-amber-700 mb-2">
                Do you offer services in multiple languages?
              </h3>
              <p className="text-gray-600">
                Yes, we provide interpretation services. Let us know your
                language needs when you contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
