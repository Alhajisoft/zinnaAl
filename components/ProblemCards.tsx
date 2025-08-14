"use client";
import React, { useState } from "react";
import VideoModal from "./VideoPlayer";

interface ProblemCard {
  id: number;
  badge: string;
  title: string;
  description: string;
  bgColor?: string;
  bgImage?: string;
  textColor: string;
  badgeColor: string;
  imageUrl?: string;
  imagePosition: "right" | "bottom";
  size: "large" | "medium" | "small";
}

const LearningProblemsSection: React.FC = () => {
  const problemCards: ProblemCard[] = [
    {
      id: 1,
      badge: "Burn out",
      title: "Unfinished video-based courses",
      description: "Electronics, clothing, household item",
      bgColor: "bg-white",
      textColor: "text-[#343839]",
      badgeColor: "bg-[#343839] text-white",
      imageUrl: "./burn-out.png",
      imagePosition: "right",
      size: "large",
    },
    {
      id: 2,
      badge: "Using the app",
      title: "Structured Learning",
      description:
        "You follow a structured, beginner-to-pro curriculum tailored for developers transitioning to ML & Agentic AI. You learn the latest, industry-ready tools and frameworks from expert instructors.",
      bgImage: "./bg.png",
      textColor: "text-[#f8f5f3]",
      badgeColor: "bg-black text-white",
      imagePosition: "right",
      size: "large",
    },
    {
      id: 3,
      badge: "Using the app",
      title: "No feedback on your learning",
      description: "Gifts and personal care packages",
      bgColor: "bg-[#ffffff]",
      textColor: "text-[#343839]",
      badgeColor: "bg-[#343839] text-white",
      imageUrl: "./app.png",
      imagePosition: "right",
      size: "medium",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-8 md:py-16 bg-[#F8F5F3]">
      <div className="container mx-auto px-6 lg:px-4 max-w-7xl lg:space-y-8 space-y-6">
        {/* Group 1: Header + Card 1 */}
        <div className="flex flex-col lg:flex-row items-start lg:gap-8 gap-6">
          {/* Header */}
          <div className="mb-4 lg:mb-8 text-center lg:text-left w-full lg:w-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d1001] mb-2 md:mb-4">
              Learning AI & ML Today
            </h2>
            <p className="text-lg lg:text-[32px] font-bold text-[#896f50] border-b-2 border-[#896f50] inline-block pb-1">
              without Zinna AI
            </p>
          </div>

          {/* Card 1 */}
          <div className="flex-1 rounded-2xl overflow-hidden h-auto lg:h-[280px] lg:ml-10 lg:mt-20">
            <div className="bg-white p-6 relative h-full min-h-[200px]">
              {/* Badge */}
              <div className="inline-flex items-center bg-[#343839] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                Burn out
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-[32px] font-bold text-[#343839] leading-tight mb-2">
                Unfinished
                <br />
                video-based
                <br />
                Courses
              </h3>

              {/* Description */}
              <p className="text-sm text-[#343839] opacity-70 mb-4 lg:mb-0">
                Electronics, clothing, household item
              </p>

              {/* Image - Creative mobile positioning */}
              <div className="lg:absolute   lg:right-4 lg:top-4 mt-4 lg:mt-0">
                <img
                  src="./burn-out.png"
                  alt="Burn out"
                  className="w-full  lg:w-auto lg:max-w-none h-auto lg:h-60 object-cover rounded-xl mx-auto lg:mx-0"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/150x300/666/fff?text=Burnout";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Group 2: Card 2 + Card 3 */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Card 2 */}
          <div className="flex-1 overflow-hidden rounded-2xl lg:rounded-[45px] h-auto lg:h-[320px]">
            <div
              className="p-6 relative h-full min-h-[250px] lg:min-h-0 rounded-2xl lg:rounded-[45px] flex gap-3"
              style={{
                backgroundImage: `url(./bg.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full h-full rounded-lg">
                <div className="inline-flex items-center bg-black text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                  Using the app
                </div>
                <h3 className="text-2xl lg:text-[28px] font-bold text-[#f8f5f3] mb-2">
                  Structured
                  <br />
                  Learning
                </h3>
                <p className="text-sm lg:text-[10px] font-normal text-[#f8f5f3] leading-relaxed">
                  You follow a structured, beginner-to-pro curriculum tailored
                  for
                  <br className="hidden lg:block" />
                  developers transitioning to ML & Agentic AI. You learn the
                  latest,
                  <br className="hidden lg:block" />
                  industry-ready tools and frameworks from expert instructors.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 rounded-2xl overflow-hidden h-auto lg:h-[320px]">
            <div className="bg-white p-6 relative h-full min-h-[200px] flex flex-col lg:flex-row gap-4 lg:gap-3">
              <div className="flex-1 lg:w-full lg:h-full">
                <div className="inline-flex items-center bg-[#343839] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                  Using the app
                </div>
                <h3 className="text-xl lg:text-[28px] font-bold text-[#343839] mb-2">
                  No feedback on
                  <br />
                  your learning
                </h3>
                <p className="text-sm text-[#343839] lg:block">
                  Gifts and personal care packages
                </p>
              </div>
              <div
                className="w-full lg:w-auto lg:h-full cursor-pointer flex-shrink-0"
                role="button"
                onClick={openModal}
              >
                <img
                  src="./app.png"
                  alt="Using the app"
                  className="w-full lg:w-auto h-32 lg:h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title="Big Buck Bunny"
        description="A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to squelch her happiness."
      />
    </section>
  );
};

export default LearningProblemsSection;
