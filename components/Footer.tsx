import React from "react";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

interface ContactInfo {
  email: string;
  phone: string;
  address: string[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const CreativeFooter: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Platforms",
      links: [
        { label: "Creators", href: "#" },
        { label: "Brands", href: "#" },
        { label: "Hackathon", href: "#" },
      ],
    },
    {
      title: "Features",
      links: [
        { label: "Talent Pipeline", href: "#" },
        { label: "Hackathon", href: "#" },
        { label: "Payout", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "#" },
        { label: "Privacy policy", href: "#" },
        { label: "Term of use", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Newsletter", href: "#" },
        { label: "Community", href: "#" },
        { label: "Press release", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
  ];

  const contactInfo: ContactInfo = {
    email: "Support@rumorhq.com",
    phone: "+2348101832699",
    address: ["Applewood Estate1, Orchid Road", "Lekki Lagos"],
  };

  const socialLinks: SocialLink[] = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden px-4">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="geometric"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="50,0 100,25 100,75 50,100 0,75 0,25"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <polygon
                points="25,12.5 75,12.5 87.5,37.5 75,62.5 25,62.5 12.5,37.5"
                fill="none"
                stroke="white"
                strokeWidth="0.3"
              />
              <circle
                cx="50"
                cy="50"
                r="8"
                fill="none"
                stroke="white"
                strokeWidth="0.4"
              />
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                stroke="white"
                strokeWidth="0.2"
              />
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="100"
                stroke="white"
                strokeWidth="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric)" />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/70 to-gray-800/50"></div>

      {/* Content */}
      <div className="relative z-10 px-8">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="text-[20px] font-font mb-6 text-[#ffffff] relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 "></div>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[16px] font-normal text-[#cbcbcc] hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Section */}
            <div className="lg:col-span-2">
              <h3 className="text-[20px] font-bold mb-6 text-[#ffffff] relative">
                Contact
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 "></div>
              </h3>
              <div className="space-y-4">
                <div className="group">
                  <p className="text-[cbcbcc] font-normal text-[16px] group-hover:text-white transition-colors duration-300">
                    {contactInfo.email}
                  </p>
                </div>
                <div className="group">
                  <p className="text-[cbcbcc] font-normal text-[16px] group-hover:text-white transition-colors duration-300">
                    {contactInfo.phone}
                  </p>
                </div>
                <div className="group">
                  {contactInfo.address.map((line, index) => (
                    <p
                      key={index}
                      className="text-[cbcbcc] font-normal text-[16px] group-hover:text-white transition-colors duration-300"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Copyright */}
              <div className="flex  items-center space-x-4">
                <p className="text-gray-400 justify-center text-center text-sm">
                  © 2025 <span className="font-bold text-white">RumorHq</span>
                </p>
              </div>

              {/* Follow Us & Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-white-400 text-sm font-medium">
                  Follow Us
                </span>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 border border-white rounded-full flex items-center justify-center  transition-all duration-300 transform hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
    </footer>
  );
};

export default CreativeFooter;
