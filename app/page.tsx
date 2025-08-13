import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemCards from "@/components/ProblemCards";
import Transition from "@/components/Transition";
import Testimonies from "@/components/Testimonies";
import Tutor from "@/components/Tutor";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import CourseList from "@/components/CourseList";
import Learn from "@/components/Learn";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <ProblemCards />
      <Transition />
      <Learn />
      <CourseList />
      <Testimonies />
      <Tutor />
      <Team />
      <Footer />
    </main>
  );
};

export default page;
