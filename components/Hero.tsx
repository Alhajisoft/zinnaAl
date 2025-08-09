import React from 'react';
import { Phone } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <main className="container mx-auto px-4 md:px-6 lg:px-8">
            {/* Hero Content */}
            <section className="py-12 md:py-20 lg:py-24 text-center">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-[#f8f5f3] rounded-full px-3 md:px-4 py-2 mb-6 md:mb-8">
                    <span className="text-xs md:text-sm text-[#6f4a1c] px-2 py-1 rounded bg-white">
                        World best 2025 youth agenda
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1d1001] mb-4 md:mb-6 max-w-4xl mx-auto leading-tight px-2">
                    Real World LLM & Agentic AI training for tech talents to scale their career
                </h1>

                {/* Subheading */}
                <p className="text-base md:text-lg lg:text-xl text-[#6f4a1c] mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                    We empower students to apply Data Science to address real-world challenges and collaborate with citizens,
                    governments and NGOs to drive tangible societal impact.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-8 md:mb-12 px-4">
                    <button className="w-full sm:w-auto bg-[#6f4a1c] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#6f4a1c]/80 transition-colors text-base md:text-lg font-medium">
                        View Programs
                    </button>
                    <button className="w-full sm:w-auto text-[#6f4a1c] hover:text-[#6f4a1c]/90 transition-colors text-base md:text-lg font-medium underline">
                        Download Brochure
                    </button>
                </div>
            </section>

            {/* Learning Section Preview */}
            <section className="mb-4">
                <div className="flex items-center justify-between mb-8">
                    {/* <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Learning AI & ML Today
                        </h2>
                        <p className="text-orange-500 text-lg">without Zinna AI</p>
                    </div> */}
                </div>
                {/* You can add cards/previews here */}
            </section>
        </main>
    );
};

export default Hero;