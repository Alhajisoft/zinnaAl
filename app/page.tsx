import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemCards from '@/components/ProblemCards';
import Transition from '@/components/Transition';
import Course from "@/components/Course";
import Testimonies from '@/components/Testimonies';
import Tutor from '@/components/Tutor';
import Team from '@/components/Team';
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemCards />
      <Transition />
      <Course />
      <Testimonies />
      <Tutor />
      <Team/>
      <Footer/>
    </>


  )
}

export default page