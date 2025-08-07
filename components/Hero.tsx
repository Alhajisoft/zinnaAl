import React from 'react';
import { Phone } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <main className="container mx-auto px-4">
            {/* Hero Content */}
            <section className="py-3 md:py-24 text-center">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-[#f8f5f3] rounded-full px-4 py-2 mb-8">
                    <span className="text-sm text-[#6f4a1c]  rounded bg-white">World best 2025 youth agenda</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d1001]mb-6 max-w-4xl mx-auto leading-tight">
                    Real World LLM & Agentic AI training for tech talents to scale their career
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-[#6f4a1c] mb-12 max-w-3xl mx-auto leading-relaxed">
                    We empower students to apply Data Science to address real-world challenges and collaborate with citizens,
                    governments and NGOs to drive tangible societal impact.
                </p>

                {/* CTA Buttons */}
                <div className="  sm:flex-row items-center  space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                    <button className="bg-[#6f4a1c] text-white px-8 py-4 rounded-lg hover:bg-[#6f4a1c]/80 transition-colors text-lg font-medium">
                        View Programs
                    </button>
                    <button className="text[#6f4a1c] hover:text[#6f4a1c]/90 transition-colors text-lg font-medium underline">
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
