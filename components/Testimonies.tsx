import React from "react";

// Types
interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  text: string;
  avatarBg: "blue" | "red" | "green" | "purple" | "yellow";
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

interface AvatarProps {
  src: string;
  alt: string;
  bgColor: "blue" | "red" | "green" | "purple" | "yellow";
}

// Avatar component
const Avatar: React.FC<AvatarProps> = ({ src, alt, bgColor }) => {
  const colorVariants = {
    blue: "bg-blue-100 border-blue-200",
    red: "bg-red-100 border-red-200",
    green: "bg-green-100 border-green-200",
    purple: "bg-purple-100 border-purple-200",
    yellow: "bg-yellow-100 border-yellow-200",
  };

  const innerColorVariants = {
    blue: "bg-blue-400",
    red: "bg-red-400",
    green: "bg-green-400",
    purple: "bg-purple-400",
    yellow: "bg-yellow-400",
  };

  return (
    <div
      className={`w-12 h-12 ${colorVariants[bgColor]} rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}
    >
      <div
        className={`w-8 h-8 ${innerColorVariants[bgColor]} rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

// Testimonial Card component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <article className="  rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 cursor-pointer">
      {/* Profile Section */}
      <header className="flex items-center space-x-3 mb-4">
        <Avatar
          src={testimonial.avatar}
          alt={testimonial.name}
          bgColor={testimonial.avatarBg}
        />
        <div>
          <h4 className="font-semibold text-[#000000] transition-colors duration-300 group-hover:text-gray-700">
            {testimonial.name}
          </h4>
        </div>
      </header>

      {/* Testimonial Content */}
      <blockquote className="text-[#896F50] text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
        "{testimonial.text}"
      </blockquote>
    </article>
  );
};

// Main Testimonials component
const Testimonials: React.FC = () => {
  // Testimonials data - easily manageable and extendable
  const testimonialsData: Testimonial[] = [
    {
      id: "1",
      name: "Grace Nduium",
      avatar: "/grace.png",
      text: "I highly recommend this institution. The educators are talented and creative and create a supportive and engaging learning environment. I thought I could never learn to code. I can't express how much it helped me build a few projects.",
      avatarBg: "blue",
    },
    {
      id: "2",
      name: "Charles Arcthong",
      avatar: "/charlie.png",
      text: "I highly recommend this institution. The educators are talented and creative and create a supportive and engaging learning environment. I thought I could never learn to code. I can't express how much it helped everyone.",
      avatarBg: "red",
    },
    {
      id: "3",
      name: "Amarachi Nwachukwu",
      avatar: "/amarachi.png",
      text: "I highly recommend this institution. The educators are talented and creative and create a supportive and engaging learning environment. I thought I could never learn to code. I can't express how much it helped build a few more.",
      avatarBg: "green",
    },
  ];

  return (
    <section className="mb-16  py-16 -mx-4">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#141414] mb-4 transition-all duration-500 hover:text-gray-700">
            See what our students are saying
          </h2>
          <div className="w-24 h-1 bg-[#6f4a1c] mx-auto rounded-full"></div>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
