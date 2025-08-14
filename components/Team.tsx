"use client";
import React from "react";

interface StarProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: "sm" | "md" | "lg" | "xl";
  opacity?: number;
  rotation?: number;
  mobileHidden?: boolean;
}

interface HeroData {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Star: React.FC<StarProps> = ({
  top,
  left,
  right,
  bottom,
  size = "md",
  opacity = 1,
  rotation = 0,
  mobileHidden = false,
}) => {
  const sizeClasses = {
    sm: "text-sm sm:text-base md:text-lg",
    md: "text-base sm:text-lg md:text-xl lg:text-2xl",
    lg: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
    xl: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
  };

  const positionStyle = {
    top,
    left,
    right,
    bottom,
    opacity,
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div
      className={`absolute text-white ${
        sizeClasses[size]
      } pointer-events-none select-none animate-pulse ${
        mobileHidden ? "hidden sm:block" : ""
      }`}
      style={positionStyle}
    >
      ✦
    </div>
  );
};

const DataTransitionHero: React.FC = () => {
  const heroData: HeroData = {
    title: "Want To Transition Into Data?",
    description:
      "Camera shy? Let the pros hop in. Our team has generated millions of views across different content types.",
    buttonText: "Speak to our Team",
    onButtonClick: () => console.log("Contact team initiated"),
  };

  const stars: StarProps[] = [
    { top: "1rem", right: "1rem", size: "lg", rotation: 45 },
    { top: "50%", right: "2rem", size: "md", rotation: 12, mobileHidden: true },
    { top: "25%", left: "10%", size: "sm", opacity: 0.4, rotation: 45 },
    { bottom: "25%", left: "1rem", size: "sm", opacity: 0.5, rotation: -12 },
    {
      top: "70%",
      right: "15%",
      size: "sm",
      opacity: 0.3,
      rotation: 45,
      mobileHidden: true,
    },
    { bottom: "10%", right: "5%", size: "md", opacity: 0.6, rotation: -25 },
  ];

  return (
    <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[400px] bg-[#6f4a1c] overflow-hidden">
      {/* Dynamic Stars */}
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}

      {/* Background Pattern */}
      <div className="absolute ">
        <div className="absolute inset-0 bg-[#6f4a1c]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center  md:min-h-[500px] lg:min-h-[250px] px-20 sm:px-10 lg:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl text-center sm:text-left">
            {/* Title */}
            <h2 className="text-[48px] sm:text-2xl md:text-3xl py-15 lg:text-5xl xl:text-6xl font-bold text-white ">
              <span className="block sm:inline">
                Want To Transition Into Data?
              </span>
            </h2>

            {/* Description */}
            <p className="  sm:text-base md:text-xl lg:text-xl text-white font-normal mb-2 sm:mb-8 md:mb-10 leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto sm:mx-0">
              <p>
                "Camera shy? Let the pros hop in. Our team has <br />
                generated millions of views across different content <br />
                types.
              </p>
            
            </p>

            {/* CTA Button */}
            <div className="flex justify-center sm:justify-start">
              <button
                className="bg-[#191919] hover:bg-[#191919]/100 text-white font-semibold mb-8 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-amber-900 w-full sm:w-auto max-w-xs sm:max-w-none"
                onClick={heroData.onButtonClick}
              >
                {heroData.buttonText}
              </button>
            </div>

            {/* Mobile scroll indicator */}
            <div className="sm:hidden mt-8 flex justify-center">
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      {/* Bottom edge gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-amber-900 to-transparent pointer-events-none" />
    </div>
  );
};

export default DataTransitionHero;
