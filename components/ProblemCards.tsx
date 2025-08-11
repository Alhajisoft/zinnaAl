'use client'
import React from 'react';

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
            badge: "Burn out",
            title: "Unfinished",
            subtitle: "video-based courses",
            description: "Electronics, clothing, household item",
            bgColor: "bg-white",
            textColor: "text-[#343839]",
            badgeColor: "bg-[#343839] text-white",
            imageUrl: "./burn-out.png",
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
            imageUrl: "./app.png",
            imagePosition: "right",
            size: "medium"
        }
    ];

    return (
        <section className="py-8 md:py-16 bg-[#F8F5F3] ">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="mb-8 md:mb-12 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d1001] mb-2 md:mb-4">
                        Learning AI & ML Today
                    </h2>
                    <p className="text-lg md:text-xl text-[#6f4a1c] border-b-2 border-[#6f4a1c] inline-block pb-1">
                        without Zinna AI
                    </p>
                </div>

                {/* Problems Grid */}
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-12 md:gap-6 max-w-7xl mx-auto">
                    
                    {/* Card 1 - Unfinished Courses */}
                    <div className="md:col-span-1 lg:col-span-6 lg:col-start-7 order-1">
                        <div className={`${problemCards[0].bgColor} rounded-2xl p-4 sm:p-6 md:p-8 h-64 sm:h-72 md:h-80 relative overflow-hidden shadow-lg`}>
                            {/* Badge */}
                            <div className={`inline-flex items-center ${problemCards[0].badgeColor} px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 md:mb-4`}>
                                <span className='w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full mr-2'></span>
                                {problemCards[0].badge}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 max-w-[60%] sm:max-w-[65%] md:max-w-none">
                                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${problemCards[0].textColor} mb-1`}>
                                    {problemCards[0].title}
                                </h3>
                                <h4 className={`text-xl sm:text-2xl md:text-3xl font-bold ${problemCards[0].textColor} mb-2 md:mb-4`}>
                                    {problemCards[0].subtitle}
                                </h4>
                                <p className={`text-xs sm:text-sm ${problemCards[0].textColor} opacity-70 hidden sm:block`}>
                                    {problemCards[0].description}
                                </p>
                            </div>

                            {/* Character Image */}
                            <div className="absolute right-2 sm:right-4 top-4 sm:top-6 md:top-8 w-20 sm:w-24 md:w-32 h-32 sm:h-48 md:h-64 overflow-hidden rounded-xl md:rounded-2xl">
                                <img
                                    src={problemCards[0].imageUrl}
                                    alt="Burn out"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://via.placeholder.com/150x300/666/fff?text=Burnout';
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Lack of Structure */}
                    <div className="md:col-span-1 lg:col-span-7 order-3 lg:order-2">
                        <div className={`${problemCards[1].bgColor} rounded-2xl p-4 sm:p-6 md:p-8 h-48 sm:h-56 md:h-64 relative overflow-hidden shadow-lg`}>
                            {/* Badge */}
                            <span className={`inline-block ${problemCards[1].badgeColor} px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 md:mb-4`}>
                                {problemCards[1].badge}
                            </span>

                            {/* Content */}
                            <div className="relative z-10 max-w-[60%] sm:max-w-[65%] md:max-w-none">
                                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${problemCards[1].textColor} mb-2 md:mb-4`}>
                                    {problemCards[1].title}
                                </h3>
                                <p className={`text-xs sm:text-sm ${problemCards[1].textColor} opacity-70 hidden sm:block`}>
                                    {problemCards[1].description}
                                </p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute right-4 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 w-24 sm:w-32 md:w-40 h-16 sm:h-20 md:h-24 bg-gradient-to-r from-pink-200 to-orange-200 rounded-xl">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="grid grid-cols-3 gap-1 sm:gap-2 p-2 sm:p-3 md:p-4">
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-yellow-400 rounded"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-red-400 rounded"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-blue-400 rounded"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-400 rounded"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-400 rounded"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-pink-400 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - No Feedback */}
                    <div className="md:col-span-1 lg:col-span-5 order-2 lg:order-3">
                        <div className={`${problemCards[2].bgColor} rounded-2xl p-4 sm:p-5 md:p-6 h-48 sm:h-56 md:h-64 relative overflow-hidden shadow-lg`}>
                            {/* Badge */}
                            <span className={`inline-block ${problemCards[2].badgeColor} px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 md:mb-4`}>
                                {problemCards[2].badge}
                            </span>

                            {/* Content */}
                            <div className="relative z-10 max-w-[60%] sm:max-w-[65%] md:max-w-none">
                                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${problemCards[2].textColor} mb-1`}>
                                    {problemCards[2].title}
                                </h3>
                                <h4 className={`text-lg sm:text-xl md:text-2xl font-bold ${problemCards[2].textColor} mb-2 md:mb-4`}>
                                    {problemCards[2].subtitle}
                                </h4>
                                <p className={`text-xs sm:text-sm ${problemCards[2].textColor} opacity-70 hidden sm:block`}>
                                    {problemCards[2].description}
                                </p>
                            </div>

                            {/* Video placeholder */}
                            <div className="absolute right-0 bottom-0 w-20 sm:w-24 md:w-32 h-28 sm:h-32 md:h-40 bg-gradient-to-br from-orange-300 to-red-400 rounded-tl-2xl overflow-hidden">
                                <div className="w-full h-full relative">
                                    {/* Person silhouette */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 md:w-20 h-20 sm:h-24 md:h-32 bg-gray-700 rounded-t-full"></div>
                                    {/* Play button */}
                                    <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-white rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-2 sm:border-l-3 md:border-l-4 border-l-gray-800 border-t-1 sm:border-t-2 border-t-transparent border-b-1 sm:border-b-2 border-b-transparent ml-0.5"></div>
                                    </div>
                                    {/* Progress dots */}
                                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/50 rounded-full"></div>
                                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/50 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningProblemsSection;