"use client";

import React, { useState } from "react";

import {
  Check,
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CreditCard,
  Calendar,
  Clock,
} from "lucide-react";

// Types
interface CourseFeature {
  id: number;
  text: string;
  isIncluded: boolean;
}

interface CourseData {
  id: number;
  title: string;
  startDate: string;
  description: string;
  duration: number;
  durationType: string;
  price: number;
  features: CourseFeature[];
}

interface RegistrationData {
  studentName: string;
  email: string;
  phoneNumber: string;
  address: string;
  whatsappNumber: string;
}
// Declare paystack type
declare global {
  interface Window {
    PaystackPop: {
      setup: (options: any) => {
        openIframe: () => void;
      };
    };
  }
}
// Your Original Course Component with onClick added
const Course: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "courses" | "registration" | "payment"
  >("courses");
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    studentName: "",
    email: "",
    phoneNumber: "",
    address: "",
    whatsappNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [paystackLoaded, setPaystackLoaded] = useState(false);

  // Load Paystack script
  React.useEffect(() => {
    const loadPaystack = () => {
      if (window.PaystackPop) {
        setPaystackLoaded(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.async = true;
      script.onload = () => setPaystackLoaded(true);
      document.body.appendChild(script);
    };
    loadPaystack();
  }, []);
  const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  // Course data array (your original data with prices added)
  const courses: CourseData[] = [
    {
      id: 1,
      title: "Machine Learning",
      startDate: "Starting Jan 25, 2025",
      description:
        "An accelerator that helps creators build skills, a portfolio, and get hired by brands.",
      duration: 15,
      durationType: "Weeks",
      price: 150000, // 1500 NGN in kobo
      features: [
        {
          id: 1,
          text: "How to shoot clean videos using your phone",
          isIncluded: true,
        },
        {
          id: 2,
          text: "Framing, lighting, and setting as your content space",
          isIncluded: true,
        },
        {
          id: 3,
          text: "Intro to video storytelling for social media",
          isIncluded: true,
        },
        {
          id: 4,
          text: "Working with brand guidelines & moodboards",
          isIncluded: true,
        },
        {
          id: 5,
          text: "Personal Branding & Niche Clearly\nPosition yourself as a credible, memorable creator with a niche that stands out",
          isIncluded: true,
        },
        {
          id: 6,
          text: "Monetizing Your Skillset\nExplore career paths agency work, influencer deals, or starting your own business",
          isIncluded: true,
        },
      ],
    },
    {
      id: 2,
      title: "Deep Learning",
      startDate: "Starting Feb 15, 2025",
      description:
        "An advanced accelerator that helps creators build skills, a portfolio, and get hired by brands.",
      duration: 10,
      durationType: "Weeks",
      price: 200000, // 2000 NGN in kobo
      features: [
        {
          id: 1,
          text: "How to shoot clean video using your phone",
          isIncluded: true,
        },
        {
          id: 2,
          text: "Framing, lighting, and setting as your content space",
          isIncluded: true,
        },
        {
          id: 3,
          text: "Intro to video storytelling for social media",
          isIncluded: true,
        },
        {
          id: 4,
          text: "Working with brand guidelines & moodboards",
          isIncluded: true,
        },
        {
          id: 5,
          text: "Personal Branding & Niche Clearly\nPosition yourself as a credible, memorable creator with a niche that stands out",
          isIncluded: true,
        },
        {
          id: 6,
          text: "Monetizing Your Skillset\nExplore career paths against work, influencer deals, or starting your own business",
          isIncluded: true,
        },
      ],
    },
  ];

  // onClick function for Register Now button
  const handleRegisterNowClick = (course: CourseData) => {
    setSelectedCourse(course);
    setCurrentPage("registration");
  };

  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    setRegistrationData((prev) => ({ ...prev, [field]: value }));
  };

  const formatPrice = (priceInKobo: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(priceInKobo / 100);
  };

  const validateForm = () => {
    const { studentName, email, phoneNumber, address, whatsappNumber } =
      registrationData;
    return studentName && email && phoneNumber && address && whatsappNumber;
  };

  const handleProceedToPayment = () => {
    if (!validateForm()) {
      alert("Please fill in all required fields");
      return;
    }
    setCurrentPage("payment");
  };

  const handlePayment = async () => {
    if (!selectedCourse) return;

    setIsLoading(true);

    try {
      const paystackLoaded = (window as any).PaystackPop;

      if (!paystackLoaded) {
        alert("Payment system not loaded. Please refresh the page.");
        setIsLoading(false);
        return;
      }

      const handler = paystackLoaded.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email: registrationData.email,
        amount: selectedCourse.price,
        currency: "NGN",
        ref: "course_reg_" + Math.floor(Math.random() * 1000000000 + 1),
        metadata: {
          custom_fields: [
            {
              display_name: "Student Name",
              variable_name: "student_name",
              value: registrationData.studentName,
            },
            {
              display_name: "Course",
              variable_name: "course",
              value: selectedCourse.title,
            },
            {
              display_name: "Phone Number",
              variable_name: "phone_number",
              value: registrationData.phoneNumber,
            },
            {
              display_name: "WhatsApp",
              variable_name: "whatsapp",
              value: registrationData.whatsappNumber,
            },
            {
              display_name: "Address",
              variable_name: "address",
              value: registrationData.address,
            },
          ],
        },
        callback: function (response: any) {
          alert(
            "Payment successful! Registration completed. Transaction reference: " +
              response.reference
          );
          console.log("Registration Data:", registrationData);
          console.log("Payment Response:", response);
          setIsLoading(false);
          // Reset and go back to courses
          setRegistrationData({
            studentName: "",
            email: "",
            phoneNumber: "",
            address: "",
            whatsappNumber: "",
          });
          setCurrentPage("courses");
        },
        onClose: function () {
          setIsLoading(false);
        },
      });

      handler.openIframe();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
      setIsLoading(false);
    }
  };

  // Your Original Course Display (with onClick added)
  if (currentPage === "courses") {
    return (
      <section className="mb-8 md:mb-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 order-2 sm:order-1">
                  {course.title}
                </h3>
                <span className="bg-gray-900 text-white px-3 py-1.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium text-center order-1 sm:order-2 self-start sm:self-auto">
                  {course.startDate}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {course.description}
              </p>

              {/* Duration */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400">
                    {course.duration}
                  </span>
                  <span className="text-amber-400 text-base sm:text-lg font-medium">
                    {course.durationType}
                  </span>
                </div>
              </div>

              {/* Register Button - ADDED ONCLICK FUNCTION */}
              <button
                onClick={() => handleRegisterNowClick(course)}
                className="w-full bg-amber-800 text-white py-3 sm:py-3.5 px-6 rounded-lg sm:rounded-xl hover:bg-amber-900 active:bg-amber-950 transition-colors font-medium mb-4 sm:mb-6 text-sm sm:text-base focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Register Now
              </button>

              {/* Features List */}
              <div className="space-y-5">
                {course.features.map((feature) => (
                  <div key={feature.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      {feature.isIncluded ? (
                        <div className="flex-shrink-0 mt-0.5">
                          <img src="/check.png" className="h-5 w-5" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-300 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <span
                      className={`text-xs sm:text-sm whitespace-pre-line leading-relaxed ${
                        feature.isIncluded ? "text-[#1D1001]" : "text-[#1D1001]"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // NEW COURSE REGISTRATION PAGE
  if (currentPage === "registration") {
    return (
      <>
        <script src="https://js.paystack.co/v1/inline.js"></script>
        <div className="min-h-screen bg-inherit py-8 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <button
                onClick={() => setCurrentPage("courses")}
                className="flex items-center text-[#1D1001] hover:text-amber-600 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Courses
              </button>

              <div className="bg-[#6f4a1c] rounded-2xl p-6 text-white shadow-sm">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                  Course Registration
                </h1>
                {selectedCourse && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 rounded-xl p-4">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {selectedCourse.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-sm opacity-90">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {selectedCourse.startDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {selectedCourse.duration}{" "}
                          {selectedCourse.durationType}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {formatPrice(selectedCourse.price)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#1D1001]">
                  Student Information
                </h2>
                <div className="text-sm text-gray-500">* Required fields</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Student Name */}
                <div>
                  <label className="block text-sm font-medium text-[#1D1001] mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Student Name *
                  </label>
                  <input
                    type="text"
                    value={registrationData.studentName}
                    onChange={(e) =>
                      handleInputChange("studentName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-gray-400"
                    placeholder="Enter student full name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#1D1001] mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    value={registrationData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-gray-400"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-[#1D1001] mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={registrationData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-gray-400"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-sm font-medium text-[#1D1001] mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={registrationData.whatsappNumber}
                    onChange={(e) =>
                      handleInputChange("whatsappNumber", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-gray-400"
                    placeholder="Enter WhatsApp number"
                    required
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#1D1001] mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Address *
                  </label>
                  <textarea
                    value={registrationData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-gray-400 resize-none"
                    placeholder="Enter full address"
                    required
                  />
                </div>
              </div>

              {/* Proceed to Payment Button */}
              <div className="mt-8">
                <button
                  onClick={handleProceedToPayment}
                  disabled={!validateForm()}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300  ${
                    validateForm()
                      ? "bg-green-700 hover:bg-green-600 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // NEW PAYMENT PAGE
  if (currentPage === "payment") {
    return (
      <div className="min-h-screen bg-inherit py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => setCurrentPage("registration")}
              className="flex items-center text-[#1D1001] hover:text-amber-200 transition-colors mb-6 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Registration
            </button>

            <div className="text-center text-white mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#1D1001]">
                Complete Payment
              </h1>
              <p className="text-gray-500">
                Secure payment powered by Paystack
              </p>
            </div>
          </div>

          {/* Payment Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            {selectedCourse && (
              <>
                {/* Course Summary */}
                <div className="bg-[#6f4a1c] text-white p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold mb-2">
                    {selectedCourse.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm opacity-90 mb-4">
                    <span>{selectedCourse.startDate}</span>
                    <span>
                      {selectedCourse.duration} {selectedCourse.durationType}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      {formatPrice(selectedCourse.price)}
                    </div>
                  </div>
                </div>

                {/* Student Details */}
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <h4 className="font-semibold text-[#1D1001] mb-4">
                    Student Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Name:</span>
                      <div className="text-[#1D1001]">
                        {registrationData.studentName}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Email:</span>
                      <div className="text-[#1D1001]">
                        {registrationData.email}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Phone:</span>
                      <div className="text-[#1D1001]">
                        {registrationData.phoneNumber}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">
                        WhatsApp:
                      </span>
                      <div className="text-[#1D1001]">
                        {registrationData.whatsappNumber}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="font-medium text-gray-600">
                        Address:
                      </span>
                      <div className="text-[#1D1001]">
                        {registrationData.address}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paystack Status */}
                <div className="mb-4 text-center">
                  <div
                    className={`text-sm ${
                      paystackLoaded ? "text-green-600" : "text-orange-600"
                    }`}
                  >
                    {paystackLoaded
                      ? "✅ Payment system ready"
                      : "⏳ Loading payment system..."}
                  </div>
                </div>

                {/* Pay Now Button */}
                <button
                  onClick={handlePayment}
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform  ${
                    isLoading
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-green-700 text-white "
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                      Processing Payment...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <CreditCard className="w-6 h-6 mr-2" />
                      Pay Now with Paystack
                    </div>
                  )}
                </button>

                <div className="mt-4 text-center text-xs text-gray-500">
                  🔒 Your payment information is secure and encrypted
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Course;
