import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRupeeSign,
} from "react-icons/fa";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    phone: "",
    kshetra: "",
    prant: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const kshetraOptions = [
    "Select Kshetra",
    "North Kshetra",
    "South Kshetra",
    "East Kshetra",
    "West Kshetra",
    "Central Kshetra",
  ];

  const prantOptions = [
    "Select Prant",
    "Uttar Prant",
    "Dakshin Prant",
    "Purva Prant",
    "Paschim Prant",
    "Madhya Prant",
  ];

  const genderOptions = ["Select Gender", "Male", "Female", "Other"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.gender || formData.gender === "Select Gender")
      newErrors.gender = "Please select gender";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!formData.kshetra || formData.kshetra === "Select Kshetra")
      newErrors.kshetra = "Please select Kshetra";
    if (!formData.prant || formData.prant === "Select Prant")
      newErrors.prant = "Please select Prant";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);

        setTimeout(() => {
          setFormData({
            fullName: "",
            gender: "",
            email: "",
            phone: "",
            kshetra: "",
            prant: "",
            address: "",
          });
          setIsSuccess(false);
        }, 3000);
      }, 2000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="mt-24">
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-white text-center">
            <h1 className="text-xl font-bold">Membership Registration</h1>
            <p className="text-sm mt-1">
              Join our community and become a member today
            </p>
          </div>

          <div className="p-6">
            {isSuccess ? (
              <div className="text-center py-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Registration Successful!
                </h2>
                <p className="text-sm text-gray-600">
                  Thank you for registering. Your membership will be activated
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:ring-1 ${
                        errors.fullName
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-orange-200 focus:border-orange-500"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-1 ${
                      errors.gender
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-orange-200 focus:border-orange-500"
                    }`}
                  >
                    {genderOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.gender}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:ring-1 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-orange-200 focus:border-orange-500"
                      }`}
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:ring-1 ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-orange-200 focus:border-orange-500"
                      }`}
                      placeholder="Enter your phone"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Kshetra */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kshetra
                  </label>
                  <select
                    name="kshetra"
                    value={formData.kshetra}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-1 ${
                      errors.kshetra
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-orange-200 focus:border-orange-500"
                    }`}
                  >
                    {kshetraOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  {errors.kshetra && (
                    <p className="mt-1 text-xs text-red-600">{errors.kshetra}</p>
                  )}
                </div>

                {/* Prant */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prant
                  </label>
                  <select
                    name="prant"
                    value={formData.prant}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-1 ${
                      errors.prant
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-orange-200 focus:border-orange-500"
                    }`}
                  >
                    {prantOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  {errors.prant && (
                    <p className="mt-1 text-xs text-red-600">{errors.prant}</p>
                  )}
                </div>

                {/* Address */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={2}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:ring-1 ${
                        errors.address
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-orange-200 focus:border-orange-500"
                      }`}
                      placeholder="Enter your complete address"
                    />
                  </div>
                  {errors.address && (
                    <p className="mt-1 text-xs text-red-600">{errors.address}</p>
                  )}
                </div>

                {/* Payment */}
                <div className="col-span-2 bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-orange-100 p-1.5 rounded-full mr-2">
                        <FaRupeeSign className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-orange-800">
                          Membership Fee
                        </p>
                        <p className="text-xs text-orange-600">
                          One-time payment
                        </p>
                      </div>
                    </div>
                    <div className="text-md font-bold text-orange-800">₹10</div>
                  </div>
                </div>

                {/* Submit */}
                <div className="col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-2 px-4 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md transition disabled:opacity-70"
                  >
                    {isSubmitting ? "Processing..." : "Register & Pay ₹10"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-600">
          <p>
            Your information is secure and will not be shared with third
            parties.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MembershipForm;
