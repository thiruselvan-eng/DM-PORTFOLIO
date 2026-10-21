import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0B1020] text-white min-h-screen selection:bg-[#A3E635] selection:text-[#0B1020] font-sans antialiased overflow-x-hidden">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* 7 Core Services Section */}
        <Services />

        {/* About Thiruselvan & Creative Approach */}
        <About />

        {/* 4-Step Process: Understand → Plan → Create → Launch */}
        <Workflow />

        {/* Direct Contact & Enquiry Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
