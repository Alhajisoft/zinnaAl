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
    const backgroundVariants = {
        orange: 'from-orange-400 to-orange-500',
        gray: 'from-gray-300 to-gray-400',
        yellow: 'from-yellow-400 to-yellow-500',
    };

    return (
        <article className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 cursor-pointer">
            {/* Image Container */}
            <div className={`relative overflow-hidden aspect-square`}>
                <img
                    src={tutor.image}
                    alt={tutor.name}
                    
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Role Badge */}
                <div className="inline-block">
                    <span className="text-xs font-semibold text-[6f4a1c] uppercase  bg-amber-50 px-3 py-1 ">
                        {tutor.role}
                    </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-[#1d1001] transition-colors duration-300 group-hover:text-amber-700">
                    {tutor.name}
                </h3>

                {/* Description */}
                <p className="text-[1d1001] text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {tutor.description}
                </p>

                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 group-hover:w-full"></div>
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
            image: '/features-img1.png',
            bgColor: 'orange',
            description: 'Dr. Sarabjot Singh Anand has been involved in the field of Machine Learning since the early 1990s. He has published over 90 academic papers on machine learning while an Associate Professor at the University of Warwick and previous academic posts in the United Kingdom. His first startup in Ireland even won the European IST grand prize amongst other technology accolades.'
        },
        {
            id: '2',
            name: 'Chinyere James',
            role: 'DATA ENGINEER INSTRUCTOR',
            image: './features-img2.png',
            bgColor: 'gray',
            description: 'Chinenye is currently serving as an Epidemiological Data Analyst Specialist at the World Health Organization (WHO) AFRO Dakar Hub, where she works at the forefront of public health surveillance and outbreak intelligence across Africa. In this role, she leads critical work on geospatial data integration, disease tracking, and predictive analytics using tools such as PostgreSQL, SQL, PostGIS, Python, and GeoDjango.'
        },
        {
            id: '3',
            name: 'Chidi Henry',
            role: 'CEO/ ML INSTRUCTOR',
            image: '/features-img3.png',
            bgColor: 'yellow',
            description: 'Chinenye is currently serving as an Epidemiological Data Analyst Specialist at the World Health Organization (WHO) AFRO Dakar Hub, where she works at the forefront of public health surveillance and outbreak intelligence across Africa. In this role, she leads critical work on geospatial data integration, disease tracking, and predictive analytics using tools such as PostgreSQL, SQL, PostGIS, Python, and GeoDjango.'
        }
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#141414] tracking-tight">
                        Meet some of our Tutors

                    </h1>

                    <p className="text-[#5e5d6f] text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                        Meet our leadership team at Surest! We are passionate professionals dedicated to simplifying utility
                        payments and innovation, bringing diverse expertise in technology, finance, and business to our
                        platform.
                    </p>

                    {/* Decorative element
                    <div className="flex justify-center items-center space-x-2 mt-8">
                        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                    </div> */}
                </div>

                {/* Tutors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    {tutorsData.map((tutor, index) => (
                        <div
                            key={tutor.id}
                            className="opacity-0 animate-fade-in-up"
                            style={{
                                animationDelay: `${index * 200}ms`,
                                animationFillMode: 'forwards'
                            }}
                        >
                            <TutorCard tutor={tutor} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
        </section>
    );
};

export default TutorsSection;