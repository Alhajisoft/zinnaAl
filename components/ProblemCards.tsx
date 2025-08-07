import React from 'react';
// import { Dot } from "lucide-react";


// Types
interface ProblemCard {
    id: number;
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    bgColor: string;
    textColor: string;
    badgeColor: string;
    imageUrl: string;
    imagePosition: 'right' | 'bottom';
    size: 'large' | 'medium' | 'small';
}

const LearningProblemsSection: React.FC = () => {
    const problemCards: ProblemCard[] = [
        {
            id: 1,
            badge: "Get address",
            title: "Unfinished",
            subtitle: "video-based courses",
            description: "Electronics, clothing, household item",
            bgColor: "bg-white-70",
            textColor: "text-[#343839]",
            badgeColor: "bg-[#343839] text-white",
            imageUrl: "/api/placeholder/300/400",
            imagePosition: "right",
            size: "large"
        },
        {
            id: 2,
            badge: "Using the app",
            title: "Lack of structure",
            subtitle: "",
            description: "Gifts and personal care packages",
            bgColor: "bg-gray-900",
            textColor: "text-[#ffffff]",
            badgeColor: "bg-[#343839] text-white",
            imageUrl: "/api/placeholder/250/200",
            imagePosition: "right",
            size: "large"
        },
        {
            id: 3,
            badge: "Using the app",
            title: "No feedback on",
            subtitle: "your learning",
            description: "Gifts and personal care packages",
            bgColor: "bg-gray-100",
            textColor: "text-[#343839]",
            badgeColor: "bg-[#343839] text-white",
            imageUrl: "/api/placeholder/280/300",
            imagePosition: "right",
            size: "medium"
        }
    ];

    return (
        <section className="py-4 bg-[white-50]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1d1001] mb-4">
                        Learning AI & ML Today
                    </h2>
                    <p className="text-xl text-[#6f4a1c] border-b-2 border-[#6f4a1c] inline-block pb-1">
                        without Zinna AI
                    </p>
                </div>

                {/* Problems Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
                    {/* Card 1 - Unfinished Courses (Top Right) */}
                    <div className="lg:col-span-6 lg:col-start-7 order-1">
                        <div className={`${problemCards[0].bgColor} rounded-2xl p-8 h-80 relative overflow-hidden`}>
                            {/* Badge */}
                            <div className={`inline-block ${problemCards[0].badgeColor} px-3 py-1 rounded-full text-sm font-medium mb-4`}>
                                <span className='w-20 h-20 bg-white rounded-full mr-2'></span>
                                {problemCards[0].badge}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className={`text-3xl font-bold ${problemCards[0].textColor} mb-1`}>
                                    {problemCards[0].title}
                                </h3>
                                <h4 className={`text-3xl font-bold ${problemCards[0].textColor} mb-4`}>
                                    {problemCards[0].subtitle}
                                </h4>
                                <p className={`text-sm ${problemCards[0].textColor} opacity-70`}>
                                    {problemCards[0].description}
                                </p>
                            </div>

                            {/* Character Image */}
                            <div className="absolute right-4 top-8 w-32 h-64">
                                <div className="w-full h-full bg-gradient-to-b from-orange-200 to-orange-300 rounded-2xl flex items-end justify-center overflow-hidden">
                                    <div className="w-24 h-40 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-t-full relative">
                                        {/* Character representation */}
                                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-600 rounded-full"></div>
                                        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-pink-200 rounded-2xl"></div>
                                    </div>
                                </div>
                            </div>

                            {/* UI Elements */}
                            <div className="absolute top-4 right-20 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✕</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Lack of Structure (Bottom Left) */}
                    <div className="lg:col-span-7 order-3 lg:order-2">
                        <div className={`${problemCards[1].bgColor} rounded-2xl p-8 h-64 relative overflow-hidden`}>
                            {/* Badge */}
                            <span className={`inline-block ${problemCards[1].badgeColor} px-3 py-1 rounded-full text-sm font-medium mb-4`}>
                                {problemCards[1].badge}
                            </span>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className={`text-3xl font-bold ${problemCards[1].textColor} mb-4`}>
                                    {problemCards[1].title}
                                </h3>
                                <p className={`text-sm ${problemCards[1].textColor} opacity-70`}>
                                    {problemCards[1].description}
                                </p>
                            </div>

                            {/* Image placeholder */}
                            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-40 h-24 bg-gradient-to-r from-pink-200 to-orange-200 rounded-xl">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="grid grid-cols-3 gap-2 p-4">
                                        <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                                        <div className="w-4 h-4 bg-red-400 rounded"></div>
                                        <div className="w-4 h-4 bg-blue-400 rounded"></div>
                                        <div className="w-4 h-4 bg-green-400 rounded"></div>
                                        <div className="w-4 h-4 bg-purple-400 rounded"></div>
                                        <div className="w-4 h-4 bg-pink-400 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - No Feedback (Bottom Right) */}
                    <div className="lg:col-span-5 order-2 lg:order-3">
                        <div className={`${problemCards[2].bgColor} rounded-2xl p-6 h-64 relative overflow-hidden`}>
                            {/* Badge */}
                            <span className={`inline-block ${problemCards[2].badgeColor} px-3 py-1 rounded-full text-sm font-medium mb-4`}>
                                {problemCards[2].badge}
                            </span>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className={`text-2xl font-bold ${problemCards[2].textColor} mb-1`}>
                                    {problemCards[2].title}
                                </h3>
                                <h4 className={`text-2xl font-bold ${problemCards[2].textColor} mb-4`}>
                                    {problemCards[2].subtitle}
                                </h4>
                                <p className={`text-sm ${problemCards[2].textColor} opacity-70`}>
                                    {problemCards[2].description}
                                </p>
                            </div>

                            {/* Video placeholder */}
                            <div className="absolute right-0 bottom-0 w-32 h-40 bg-gradient-to-br from-orange-300 to-red-400 rounded-tl-2xl overflow-hidden">
                                <div className="w-full h-full relative">
                                    {/* Person silhouette */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gray-700 rounded-t-full"></div>
                                    {/* Play button */}
                                    <div className="absolute top-4 left-4 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-4 border-l-gray-800 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                                    </div>
                                    {/* Progress dots */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional decorative elements */}

            </div>
        </section>
    );
};

export default LearningProblemsSection;