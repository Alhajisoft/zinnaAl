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
            title: "Machine Learning",
            startDate: "Starting Jan 25, 2025",
            description: "An accelerator that helps creators build skills, a portfolio, and get hired by brands.",
            duration: 10,
            durationType: "Weeks",
            features: [
                {
                    id: 1,
                    text: "How to shoot clean video using your phone",
                    isIncluded: false
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
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-[#141011]">{course.title}</h3>
                            <span className="bg-[#191919] text-white px-3 py-1 rounded-full text-sm">
                                {course.startDate}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-[#5esd6f] mb-6 leading-relaxed">
                            {course.description}
                        </p>

                        {/* Duration */}
                        <div className="mb-6">
                            <div className="flex items-baseline space-x-2">
                                <span className="text-4xl font-bold text-[#ffda43]">{course.duration}</span>
                                <span className="text-[#ffda43]">{course.durationType}</span>
                            </div>
                        </div>

                        {/* Register Button */}
                        <button className="w-full bg-[#6f4a1c] text-white py-3 px-6 rounded-lg hover:bg-[#6f4a1c] transition-colors font-medium mb-6">
                            Register
                        </button>

                        {/* Features List */}
                        <div className="space-y-3">
                            {course.features.map((feature) => (
                                <div key={feature.id} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <img src="/check.png" className="h-5 w-5 " />
                                    </div>
                                    <span className="text-sm text-gray-700 whitespace-pre-line">
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