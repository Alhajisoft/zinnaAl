"use client";
import React, { useState } from "react";
import VideoModal from "./VideoPlayer";

interface ProblemCard {
  id: number;
  badge: string;
  title: string;
  description: string;
  bgColor?: string; // Optional if using bgImage
  bgImage?: string; // New property
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
      // bgColor: 'bg-gray-900',
      bgImage: "./bg.png",
      textColor: "text-[#f8f5f3]",
      badgeColor: "bg-black text-white",
      // imageUrl: "/api/placeholder/250/200",
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
      <div className="container mx-auto px-4 md:px-6 max-w-7xl space-y-12">
        {/* Group 1: Header + Card 1 */}
        <div className="flex flex-col lg:flex-row items-start  gap-8">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d1001] mb-2 md:mb-4">
              Learning AI & ML Today
            </h2>
            <p className="text-[32px] font-bold md:text-xl text-[#896f50] border-b-2 border-[#896f50] inline-block pb-1">
              without Zinna AI
            </p>
          </div>

          {/* Card 1 */}
          <div className="flex-1 rounded-2xl overflow-hidden h-[320px] mt-20">
            <div className={`${problemCards[0].bgColor} p-6 relative h-full`}>
              {/* Badge */}
              <div
                className={`inline-flex items-center ${problemCards[0].badgeColor} px-4 py-1 rounded-full text-sm font-bold mb-4`}
              >
                <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                {problemCards[0].badge}
              </div>

              {/* Title */}
              <h3
                className={`text-[32px] font-bold ${problemCards[0].textColor} leading-tight mb-2`}
              >
                Unfinished
                <br /> video-based
                <br /> Courses
              </h3>

              {/* Description */}
              <p className={`text-sm ${problemCards[0].textColor} opacity-70`}>
                {problemCards[0].description}
              </p>

              {/* Image */}
              <img
                src={problemCards[0].imageUrl}
                alt="Burn out"
                className="absolute right-4 top-8 w-32 h-auto object-cover rounded-xl"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/150x300/666/fff?text=Burnout";
                }}
              />
            </div>
          </div>
        </div>

        {/* Group 2: Card 2 + Card 3 */}
        <div className="flex flex-col  lg:flex-row gap-8">
          {/* Card 2 */}
          {/* Card 2 */}
          <div className="flex-1  overflow-hidden h-[320px]">
            <div
              className={`p-6 relative h-full  flex gap-3 ${problemCards[1].bgColor}`}
              style={{
                backgroundImage: `url(${problemCards[1].bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full h-full rounded-2xl">
                <div
                  className={`inline-flex items-center ${problemCards[1].badgeColor} px-4 py-1 rounded-full text-sm font-bold mb-4`}
                >
                  <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                  {problemCards[1].badge}
                </div>
                <h3
                  className={`text-[28px] font-bold ${problemCards[1].textColor} mb-2`}
                >
                  Structured
                  <br />
                  Learning
                </h3>
                <p
                  className={`text-[10px] font-normal ${problemCards[1].textColor}`}
                >
                  You follow a structured, beginner-to-pro curriculum tailored
                  for
                  <br />
                  developers transitioning to ML & Agentic AI. You learn the
                  latest,
                  <br />
                  industry-ready tools and frameworks from expert instructors.
                </p>

                {/* Foreground image positioned on right */}
                {/* <img
                  src={problemCards[1].imageUrl}
                  alt="using the app"
                  className="absolute right-4 top-8 w-32 h-auto object-cover rounded-xl"
                /> */}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 rounded-2xl overflow-hidden h-[320px]">
            <div
              className={`${problemCards[2].bgColor} p-6 relative h-full flex gap-3`}
            >
              <div className="w-full h-full">
                <div
                  className={`inline-flex items-center ${problemCards[2].badgeColor} px-4 py-1 rounded-full text-sm font-bold mb-4`}
                >
                  <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                  {problemCards[2].badge}
                </div>
                <h3
                  className={`text-[28px] font-bold ${problemCards[2].textColor} mb-2`}
                >
                  No feedback on
                  <br /> your learning
                </h3>
                <p className={`text-sm ${problemCards[2].textColor}`}>
                  {problemCards[2].description}
                </p>
              </div>
              <div
                className="h-full w-full cursor-pointer "
                role="button"
                onClick={openModal}
              >
                <img
                  src={problemCards[2].imageUrl}
                  alt="Using the app"
                  className="w-full h-full object-cover rounded-lg"
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
        description="A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to squelch his happiness."
      />
    </section>
  );
};

export default LearningProblemsSection;
