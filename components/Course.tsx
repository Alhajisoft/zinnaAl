import React from 'react';
import { Check } from 'lucide-react';

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
    features: CourseFeature[];
}

const Course: React.FC = () => {
    // Course data array
    const courses: CourseData[] = [
        {
            id: 1,
            title: "Machine Learning",
            startDate: "Starting Jan 25, 2025",
            description: "An accelerator that helps creators build skills, a portfolio, and get hired by brands.",
            duration: 15,
            durationType: "Weeks",
            features: [
                {
                    id: 1,
                    text: "How to shoot clean videos using your phone",
                    isIncluded: true
                },
                {
                    id: 2,
                    text: "Framing, lighting, and setting as your content space",
                    isIncluded: true
                },
                {
                    id: 3,
                    text: "Intro to video storytelling for social media",
                    isIncluded: true
                },
                {
                    id: 4,
                    text: "Working with brand guidelines & moodboards",
                    isIncluded: true
                },
                {
                    id: 5,
                    text: "Personal Branding & Niche Clearly\nPosition yourself as a credible, memorable creator with a niche that stands out",
                    isIncluded: true
                },
                {
                    id: 6,
                    text: "Monetizing Your Skillset\nExplore career paths agency work, influencer deals, or starting your own business",
                    isIncluded: true
                }
            ]
        },
        {
            id: 2,
            title: "Deep Learning",
            startDate: "Starting Feb 15, 2025",
            description: "An advanced accelerator that helps creators build skills, a portfolio, and get hired by brands.",
            duration: 10,
            durationType: "Weeks",
            features: [
                {
                    id: 1,
                    text: "How to shoot clean video using your phone",
                    isIncluded: true
                },
                {
                    id: 2,
                    text: "Framing, lighting, and setting as your content space",
                    isIncluded: true
                },
                {
                    id: 3,
                    text: "Intro to video storytelling for social media",
                    isIncluded: true
                },
                {
                    id: 4,
                    text: "Working with brand guidelines & moodboards",
                    isIncluded: true
                },
                {
                    id: 5,
                    text: "Personal Branding & Niche Clearly\nPosition yourself as a credible, memorable creator with a niche that stands out",
                    isIncluded: true
                },
                {
                    id: 6,
                    text: "Monetizing Your Skillset\nExplore career paths against work, influencer deals, or starting your own business",
                    isIncluded: true
                }
            ]
        }
    ];

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

                        {/* Register Button */}
                        <button className="w-full bg-amber-800 text-white py-3 sm:py-3.5 px-6 rounded-lg sm:rounded-xl hover:bg-amber-900 active:bg-amber-950 transition-colors font-medium mb-4 sm:mb-6 text-sm sm:text-base focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                            Register Now
                        </button>

                        {/* Features List */}
                        <div className="space-y-2 sm:space-y-3">
                            {course.features.map((feature) => (
                                <div 
                                    key={feature.id} 
                                    className="flex items-start space-x-3"
                                >
                                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                        {feature.isIncluded ? (
                                            <div className="flex-shrink-0 mt-0.5">
                                        <img src="/check.png" className="h-5 w-5 " />
                                    </div>
                                        ) : (
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-300 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                                            </div>
                                        )}
                                    </div>
                                    <span 
                                        className={`text-xs sm:text-sm whitespace-pre-line leading-relaxed ${
                                            feature.isIncluded ? 'text-gray-700' : 'text-gray-500'
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
};

export default Course;