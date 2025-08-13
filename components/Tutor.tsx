'use client'
import React from 'react';

// Types
interface Tutor {
    id: string;
    name: string;
    role: string;
    image: string;
    description: string;
    bgColor: 'orange' | 'gray' | 'yellow';
}

interface TutorCardProps {
    tutor: Tutor;
}

// Tutor Card Component
const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {

    return (
        <article className="group bg-[#F8F5F3] rounded-md overflow-hidden cursor-pointer">
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Role Badge */}
                <div className="inline-block">
                    <span className=" font-semibold text-[#6f4a1c] uppercase text-xs  ">
                        {tutor.role}
                    </span>
                </div>

                {/* Name */}
                <h3 className="text-[20px] font-bold text-[#1D1001] py-3 leading-tight">
                    {tutor.name}
                </h3>

                {/* Description */}
                <p className="text-[#1D1001] text-[15px] leading-relaxed transition-colors duration-300 ">
                    {tutor.description}
                </p>
            </div>
        </article>
    );
};

// Main Tutors Section Component
const TutorsSection: React.FC = () => {
    const tutorsData: Tutor[] = [
        {
            id: '1',
            name: 'Dr. Sarabjot Singh Anand',
            role: 'MENTOR',
            image: 'features-img1.png',
            bgColor: 'orange',
            description: 'Dr. Sarabjot Singh Anand has been involved in the field of Machine Learning since the early 1990s. He has published over 90 academic papers on machine learning while an Associate Professor at the University of Warwick and previous academic posts in the United Kingdom. His first startup in Ireland even won the European IST grand prize amongst other technology accolades.'
        },
        {
            id: '2',
            name: 'Chinyere James',
            role: 'DATA ENGINEER INSTRUCTOR',
            image: 'features-img2.png',
            bgColor: 'gray',
            description: 'Chinenye is currently serving as an Epidemiological Data Analyst Specialist at the World Health Organization (WHO) AFRO Dakar Hub, where she works at the forefront of public health surveillance and outbreak intelligence across Africa. In this role, she leads critical work on geospatial data integration, disease tracking, and predictive analytics using tools such as PostgreSQL, SQL, PostGIS, Python, and GeoDjango.'
        },
        {
            id: '3',
            name: 'Chidi Henry',
            role: 'CEO/ ML INSTRUCTOR',
            image:'features-img3.png',
            bgColor: 'yellow',
            description: 'Chinenye is currently serving as an Epidemiological Data Analyst Specialist at the World Health Organization (WHO) AFRO Dakar Hub, where she works at the forefront of public health surveillance and outbreak intelligence across Africa. In this role, she leads critical work on geospatial data integration, disease tracking, and predictive analytics using tools such as PostgreSQL, SQL, PostGIS, Python, and GeoDjango.'
        }
    ];

    return (
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#141414] tracking-tight leading-tight">
                        Meet some of our Tutors
                    </h1>

                    <p className="text-[#5e5d6f] text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                        Meet our leadership team at Surest! We are passionate professionals dedicated to simplifying utility
                        payments and innovation, bringing diverse expertise in technology, finance, and business to our
                        platform.
                    </p>

                    {/* Decorative element
                    <div className="flex justify-center items-center space-x-2 mt-4 sm:mt-6 lg:mt-8">
                        <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full animate-pulse"></div>
                        <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                    </div> */}
                </div>

                {/* Tutors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                    {tutorsData.map((tutor, index) => (
                        <div
                            key={tutor.id}
                            className="opacity-0 animate-fade-in-up"
                            style={{
                                animationDelay: `${index * 150}ms`,
                                animationFillMode: 'forwards'
                            }}
                        >
                            <TutorCard tutor={tutor} />
                        </div>
                    ))}
                </div>

                {/* Mobile scroll indicator */}
                <div className="sm:hidden text-center mt-6">
                    <p className="text-xs text-gray-500">
                        Swipe cards to explore more →
                    </p>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }

                /* Line clamp utility for mobile description truncation */
                .line-clamp-4 {
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                @media (min-width: 640px) {
                    .line-clamp-4 {
                        display: block;
                        -webkit-line-clamp: unset;
                        -webkit-box-orient: unset;
                        overflow: visible;
                    }
                }
            `}</style>
        </section>
    );
};

export default TutorsSection;