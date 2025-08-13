import React from "react";

const WhoIsThisFor: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f5f3]">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
          Who is this for?
        </h1>
      </div>

      {/* Two Container Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Container - Software engineers */}
        <div className="bg-[#ffe7d6] rounded-2xl lg:rounded-3xl p-8 lg:p-12 min-h-[400px] flex flex-col justify-center">
          <div className="space-y-6">
            <h2 className="text-[39px] font-bold lg:text-4xl  text-[#141011]">
              Software engineers
            </h2>
            <div className="space-y-2 text-gray-600">
              <p className="text-[#18px] leading-relaxed font-normal text[5e5d6f]">
                Backend, frontend, or full-stack devs
              </p>
              <p className="text-[#18px] leading-relaxed font-normal text[5e5d6f]">
                ready to move into AI.
              </p>
            </div>
          </div>
        </div>

        {/* Right Container - Learn from the Best */}
        <div className="bg-[#ffe7d6] rounded-2xl lg:rounded-3xl p-8 lg:p-12 min-h-[400px] flex flex-col justify-center">
          <div className="space-y-6">
            <h2 className="text-[39px] font-bold lg:text-4xl  text-[#141011]">
              Learn from the Best
            </h2>
            <div className="space-y-2 text-[5e5d6f]">
              <p className="text-[#18px] leading-relaxed font-normal ">
                Stay engaged & learn by doing
              </p>
              <p className="text-[#18px]  leading-relaxed">
                Actively learn via live discussions.
              </p>
              <p className="text-[#18px]  leading-relaxed">
                Practical, industry-focused AI training
              </p>
              <p className="text-[#18px]  leading-relaxed">
                designed with input from global tech
              </p>
              <p className="text-[#18px]  leading-relaxed">
                leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
