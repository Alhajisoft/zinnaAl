"use client"
import React from 'react';

interface StarProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  rotation?: number;
}

interface HeroData {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Star: React.FC<StarProps> = ({ 
  top, left, right, bottom, 
  size = 'md', 
  opacity = 1, 
  rotation = 0 
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl', 
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const positionStyle = {
    top,
    left, 
    right,
    bottom,
    opacity,
    transform: `rotate(${rotation}deg)`
  };

  return (
    <div 
      className={`absolute text-white ${sizeClasses[size]} pointer-events-none select-none`}
      style={positionStyle}
    >
      ✦
    </div>
  );
};

const DataTransitionHero: React.FC = () => {
  const heroData: HeroData = {
    title: "Want To Transition Into Data?",
    description: "Camera shy? Let the pros hop in. Our team has generated millions of views across different content types.",
    buttonText: "Speak to our Team",
    onButtonClick: () => console.log('Contact team initiated')
  };

  const stars: StarProps[] = [
    { top: '2rem', right: '4rem', size: 'xl', rotation: 45 },
    { top: '50%', right: '8rem', size: 'lg', rotation: 12 },
    { top: '25%', left: '25%', size: 'sm', opacity: 0.3, rotation: 45 },
    { bottom: '33%', left: '4rem', size: 'md', opacity: 0.4, rotation: -12 },
    { top: '75%', right: '25%', size: 'sm', opacity: 0.25, rotation: 45 }
  ];

  return (
    <div className="relative h-70 bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 overflow-hidden">
      
      {/* Dynamic Stars */}
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-[300px] lg:min-h-[30vh]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-6xl font-bold text-white mb-8  leading-tight">
              {heroData.title}
            </h1>
            
            <p className="text-white text-lg lg:text-xl mb-10 leading-relaxed opacity-90 max-w-lg">
              {heroData.description}
            </p>
            
            <button 
              className="bg-[#191919] hover:bg-[#191919]/100 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={heroData.onButtonClick}
            >
              {heroData.buttonText}
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default DataTransitionHero;