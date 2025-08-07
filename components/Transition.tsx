import React from 'react';
import Marquee from 'react-fast-marquee';

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

const Transition: React.FC = () => {
    // Platform logos data
    const platformLogos: PlatformLogo[] = [
        {
            id: 1,
            name: 'WooCommerce',
            src: '/woo.png',
            alt: 'woo',
            bgColor: 'bg-white'
        },
        {
            id: 2,
            name: 'eBay',
            src: '/ebay.png',
            alt: 'ebay',
            bgColor: 'bg-white'
        },
        {
            id: 3,
            name: 'Walmart',
            src: '/walmart.png',
            alt: 'walmart'
        },
        {
            id: 4,
            name: 'Amazon',
            src: '/amazon.png',
            alt: 'amazon'
        }
    ];

    // Company logos data for marquee
    const companyLogos: CompanyLogo[] = [
        {
            id: 1,
            name: 'Microsoft',
            src: '/msword.png',
            alt: 'msword'
        },
        {
            id: 2,
            name: 'Amazon',
            src: '/amazon.png',
            alt: 'amazon'
        },
        {
            id: 3,
            name: 'Google',
            src: '/google.png',
            alt: 'google'
        },
        {
            id: 4,
            name: 'Shopify',
            src: '/shopify.png',
            alt: 'shopify'
        }
    ];

    return (
        <section className="mb-16">
            <div className="flex items-center space-x-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Transition into AI today
                </h2>
            </div>

            <div className="bg-[#f8f5f3] grid lg:grid-cols-2 gap-12 items-start p-8">
                {/* Left Column - Learning with Zinna AI */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-[#141011] mb-4">
                            Learning with Zinna AI
                        </h3>
                        <p className="text-[#5e5d6f] mb-6">
                            Stay engaged & learn by doing.<br />
                            Actually learn via live discussions. Apply<br />
                            what you learn through activities, and<br />
                            get instant feedback from peers.
                        </p>

                        {/* Platform Logos Grid */}
                        <div className="flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 max-w-md">
                                {platformLogos.map((logo) => (
                                    <div
                                        key={logo.id}
                                        className={`${logo.bgColor || ''} border border-transparent rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow`}
                                    >
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            className="max-w-full max-h-12 object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Work with real team */}
                <div className=" bg-[eaebff] lg:pt-8">
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                            <img
                                src="/shopify.png"
                                alt="shopify"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#141011] mb-2">
                                Work with real team
                            </h3>
                            <p className="text-[#5e5d6f]">
                                Collaborate with cross-discipline<br />
                                team members in a real technical<br />
                                work environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Trusted by Global Brands */}
            <div className="mt-16 text-center">
                <div className="mb-8">
                    <img
                        src="/globe.png"
                        alt="globe"
                        className="mx-auto mb-4 max-w-24 max-h-24 object-contain"
                    />
                    <p className="text-[#5e5d6f] text-lg">
                        Tired of asking family abroad to help you ship? Now you don't have to.
                    </p>
                </div>

                {/* Company Logos Marquee */}
                <div className="overflow-hidden">
                    <Marquee
                        gradient={true}
                        gradientWidth={50}
                        speed={30}
                        pauseOnHover={true}
                        className="py-4"
                    >
                        {companyLogos.map((logo) => (
                            <div
                                key={logo.id}
                                className="mx-8 opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-12 max-w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Alternative: Static Company Logos (if you prefer without marquee) */}
                {/*
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {companyLogos.map((logo) => (
                        <div
                            key={logo.id}
                            className="opacity-70 hover:opacity-100 transition-opacity"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-h-12 max-w-32 object-contain"
                            />
                        </div>
                    ))}
                </div>
                */}
            </div>
        </section>
    );
};

export default Transition;