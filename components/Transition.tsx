"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

// Types
interface PlatformLogo {
  id: number;
  name: string;
  src: string;
  alt: string;
  bgColor?: string;
}

interface CompanyLogo {
  id: number;
  name: string;
  src: string;
  alt: string;
}

// Mock Marquee component since react-fast-marquee isn't available
const MockMarquee: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`flex animate-scroll ${className}`}
      style={{
        animation: "scroll 20s linear infinite",
      }}
    >
      <div className="flex space-x-8 min-w-full">
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

const Transition: React.FC = () => {
  // Platform logos data
  const platformLogos: PlatformLogo[] = [
    {
      id: 1,
      name: "open-ai",
      src: "/open-ai.png",
      alt: "open",
      bgColor: "bg-white",
    },
    {
      id: 2,
      name: "love-ai",
      src: "./love-ai.png",
      alt: "Lovable",
      bgColor: "bg-white",
    },
    {
      id: 3,
      name: "agent",
      src: "/agent.png",
      alt: "Agent",
      bgColor: "bg-white",
    },
    {
      id: 4,
      name: "cluade",
      src: "/cluade.png",
      alt: "Claude",
      bgColor: "bg-white",
    },
  ];

  // Company logos data for marquee
  const companyLogos: CompanyLogo[] = [
    {
      id: 1,
      name: "msword",
      src: "/msword.png",
      alt: "Microsoft",
    },
    {
      id: 2,
      name: "amaazon",
      src: "/amaazon.png",
      alt: "Amazon",
    },
    {
      id: 3,
      name: "google",
      src: "/google.png",
      alt: "Google",
    },
    {
      id: 4,
      name: "shoopify",
      src: "/shoopify.png",
      alt: "Shopify",
    },
    {
      id: 5,
      name: "apple",
      src: "/apple.png",
      alt: "Apple",
    },
  ];

  return (
    <section className="mb-8 md:mb-16 px-4 sm:px-6 lg:px-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12">
        <h2 className="text-[48px] sm:text-4xl lg:text-3xl font-bold text-[#1d1001] text-center sm:text-left">
          Transition into AI Engineering today
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 md:gap-8 lg:gap-12 items-stretch">
        {/* Left Column - Learning with Zinna AI */}
        <div className="bg-[#ffe7d6] rounded-2xl p-6 md:p-8">
          {/* Flex container for text and logos */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-[30px] sm:text-3xl font-bold text-[#141011] mb-4">
                Learn from the Best
              </h3>
              <p className="text-[#5e5d6f] mb-2 text-[18px] leading-relaxed font-normal">
                Stay engaged & learn by doin
              </p>
              <p className="text-[#5e5d6f] text-[18px] font-normal leading-relaxed">
                Actively learn via live discussions. Practical, industry-focused
                AI training designed with input from global tech leaders.
              </p>
            </div>

            {/* Platform Logos Grid */}
            <div className="flex-shrink-0 ">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {platformLogos.map((logo) => (
                  <div
                    key={logo.id}
                    className={`${logo.bgColor} rounded-lg p-2  flex h-30 w-32 items-center justify-center `}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Build a Portfolio That Speaks */}
        <div className="bg-[#eaebff] rounded-2xl p-6 md:p-8 ">
          <div className=" sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6">
            <div className="w-12 h-12 rounded-full   items-center justify-center flex-shrink-0 mx-auto sm:mx-0 ">
              <div className="w-12 h-18   rounded-full flex items-center justify-center">
                <img
                  src="/AI.png"
                  alt="Ai"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" align-text-bottom sm:text-left">
              <h3 className="sm:text-3xl mt-8 font-bold text-[#141011] mb-4">
                Build a Portfolio <br /> That Speaks
              </h3>
              <p className="text-[#5e5d6f] font-normal text-[18px] leading-relaxed mb-2">
                Work on real-world projects to prove your skills.Get Matched to
                Global Opportunities. We don't just teach; we place you in front
                of the right people .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Trusted by Global Brands */}
      <div className="mt-12 md:mt-16 text-center">
        <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold text-sm mb-6">
          Trusted by Global Brands
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Tired of asking family abroad to help you shop? Now you don't have to.
        </p>

        {/* Company Logos - Responsive Marquee */}
        <div className="overflow-hidden rounded-xl py-4 md:py-6">
          <MockMarquee className="py-2">
            {companyLogos.map((logo) => (
              <div key={logo.id}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-24 object-contain"
                />
              </div>
            ))}
          </MockMarquee>
        </div>
      </div>
    </section>
  );
};

export default Transition;
