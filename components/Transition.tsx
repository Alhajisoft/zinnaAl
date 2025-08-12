'use client'
import React from 'react';
import { ChevronRight } from 'lucide-react';

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
const MockMarquee: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return (
        <div className={`flex animate-scroll ${className}`} style={{
            animation: 'scroll 20s linear infinite'
        }}>
            <div className="flex space-x-8 min-w-full">
                {children}
                {children} {/* Duplicate for seamless loop */}
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
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
            name: 'open-ai',
            src: '/open-ai.png',
            alt: 'open',
            bgColor: 'bg-white'
        },
        {
            id: 2,
            name: 'love-ai',
            src: '/love-ai.png',
            alt: 'LoveAI',
            bgColor: 'bg-white'
        },
        {
            id: 3,
            name: 'agent',
            src: '/agent.png',
            alt: 'Agent',
            bgColor:'bg-white'
        },
        {
            id: 4,
            name: 'Claude',
            src: '/cluade.png',
            alt: 'Claude',
            bgColor:'bg-white'
        }
    ];

    // Company logos data for marquee
    const companyLogos: CompanyLogo[] = [
        {
            id: 1,
            name: 'msword',
            src: '/msword.png',
            alt: 'Microsoft'
        },
        {
            id: 2,
            name: 'amaazon',
            src: '/amaazon.png',
            alt: 'Amazon'
        },
        {
            id: 3,
            name: 'google',
            src: '/google.png',
            alt: 'Google'
        },
        {
            id: 4,
            name: 'shoopify',
            src: '/shoopify.png',
            alt: 'Shopify'
        }
    ];

    return (
        <section className="mb-8 md:mb-16 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">
                    Transition into AI today
                </h2>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
                {/* Left Column - Learning with Zinna AI */}
                <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-xl lg:rounded-2xl p-6 md:p-8 space-y-6 md:space-y-8">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">
                            Learning with Zinna AI
                        </h3>
                        <p className="text-amber-100 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
                            Stay engaged & learn by doing. Actually learn via live discussions. Apply 
                            what you learn through activities, and get instant feedback from peers.
                        </p>

                        {/* Platform Logos Grid - Responsive */}
                        <div className="flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md">
                                {platformLogos.map((logo) => (
                                    <div
                                        key={logo.id}
                                        className={`${logo.bgColor || 'bg-white/10'} border border-white/20 rounded-lg p-3 md:p-4 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-200 aspect-video`}
                                    >
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            className="max-w-full max-h-8 md:max-h-12 object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Work with real team */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl lg:rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                                 <img
                                src="/AI.png"
                                alt="Ai"
                                className="w-full h-full object-contain"
                            />
                            </div>
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                Work with real team
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                Collaborate with cross-discipline team members in a real technical 
                                work environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Trusted by Global Brands */}
            <div className="mt-12 md:mt-16 text-center">
                <div className="mb-6 md:mb-8">
                    
                        <div  className="mx-auto mb-4 max-w-35 max-h-35 object-contain">
                            <img
                        src="/globe.png"
                        alt="globe"
                       
                    />
                    </div>
                
                    <p className="text-gray-600 font-regular text-md max-w-2xl mx-auto px-4">
                        Tired of asking family abroad to help you ship? Now you don't have to.
                    </p>
                </div>

                {/* Company Logos - Responsive Marquee */}
                <div className="overflow-hidden rounded-xl py-4 md:py-6">
                    <MockMarquee className="py-2">
                        {companyLogos.map((logo) => (
                            <div
                                key={logo.id}
                                className="mx-4 md:mx-6 lg:mx-8 opacity-60 hover:opacity-100  flex items-center justify-center flex-shrink-0"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-8 sm:max-h-10 md:max-h-12 max-w-16 sm:max-w-20 md:max-w-32 object-contain  hover:grayscale-0 transition-all duration-300"
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