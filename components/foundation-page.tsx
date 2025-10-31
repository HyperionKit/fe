'use client';

import React from 'react';
import { OptimizedImage, OptimizedIcon } from '@/components/ui/optimized-image';
import PixelBlast from './libraries/PixelBlast';

// Team Section Component
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Aaron Jay Sopeña",
      role: "Co-founder",
      title: "CTO",
      image: "/Profile/Aaron jay Sopeña.jpeg",
      alt: "Aaron Jay Sopeña, Co-founder & CTO"
    },
    {
      name: "Justine Lupasi", 
      role: "Co-founder",
      title: "CPOO",
      image: "/Profile/Justine Lupasi.jpeg",
      alt: "Justine Lupasi, Co-founder & CPOO"
    },
    {
      name: "Tristan Triñanes",
      role: "Co-founder",
      title: "CMFO", 
      image: "/Profile/Tristan Triñanes.jpeg",
      alt: "Tristan Triñanes, Co-founder & CMFO"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{fontFamily: 'Be Vietnam Pro'}}>
            Team Behind
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="group flex flex-col items-center text-center team-member-card">
                <div className="relative mb-4 team-avatar">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-transparent flex items-center justify-center overflow-hidden">
                      <OptimizedImage
                        src={member.image}
                        alt={member.alt}
                        width={96}
                        height={96}
                        className="w-full h-full rounded-full profile-image"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1" style={{fontFamily: 'Inter'}}>
                  {member.name}
                </h3>
                <p className="text-sm text-gray-300" style={{fontFamily: 'Inter'}}>
                  {member.role}
                </p>
                <p className="text-xs text-gray-400" style={{fontFamily: 'Inter'}}>
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Vision & Mission Section Component
const VisionMissionSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Column */}
          <div className="bg-gray-900/50 rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{fontFamily: 'Be Vietnam Pro'}}>
              Our Vision
            </h2>
            <div className="space-y-4 text-white/90" style={{fontFamily: 'Inter'}}>
              <p className="text-sm sm:text-base leading-relaxed">
                We envision a decentralized future where financial tools are accessible, interoperable, and driven by open collaboration. Our vision is to break down the barriers between different blockchain ecosystems, creating a unified platform where developers can build without limitations.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                By fostering open-source development and community-driven innovation, we aim to create an inclusive environment where anyone can participate in the DeFi revolution, regardless of their technical background or geographical location.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Our ultimate goal is to empower individuals and organizations worldwide with the tools they need to build, deploy, and scale decentralized applications that truly serve the needs of their communities.
              </p>
            </div>
          </div>

          {/* Mission Column */}
          <div className="bg-gray-900/50 rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{fontFamily: 'Be Vietnam Pro'}}>
              Our Mission
            </h2>
            <div className="space-y-4 text-white/90" style={{fontFamily: 'Inter'}}>
              <p className="text-sm sm:text-base leading-relaxed">
                Our mission is to build modular, reliable DeFi infrastructure that enables seamless cross-chain connectivity and empowers developers to create innovative financial applications. We are committed to providing the foundational tools and services that make decentralized finance accessible to everyone.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                We believe in community-driven growth and actively support developers through comprehensive documentation, developer tools, and educational resources. Our platform is designed to be developer-friendly, with clear APIs and extensive support to reduce the complexity of building on blockchain networks.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Through continuous innovation and refinement of our protocols, we strive to enable secure, scalable, and open financial systems that can serve as the backbone for the next generation of decentralized applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Investors Section Component
const InvestorsSection = () => {
  const investors = [
    {
      name: "Elena Sinelnikova",
      role: "Co-founder of Metis",
      image: "/Profile/Elena Sinelnikova.png",
      alt: "Elena Sinelnikova, Co-founder of Metis"
    },
    {
      name: "Natalia Ameline", 
      role: "Co-founder of Metis",
      image: "/Profile/Natalia Ameline.png",
      alt: "Natalia Ameline, Co-founder of Metis"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Investors Column */}
          <div className="bg-gray-900/50 rounded-2xl p-8 sm:p-10">
            <div className="text-left mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>
                Backed by incredible investors
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed" style={{fontFamily: 'Inter'}}>
                We're proud to build with some of the brightest minds in web3 and AI. Chances are, you're already using tools influenced by our partners and contributors.
              </p>
            </div>
            
            <div className="space-y-6">
              {investors.map((investor, index) => (
                <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                  <div className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                        <OptimizedImage
                          src={investor.image}
                          alt={investor.alt}
                          width={64}
                          height={64}
                          className="w-full h-full rounded-full profile-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1" style={{fontFamily: 'Inter'}}>
                      {investor.name}
                    </h3>
                    <p className="text-sm text-gray-300" style={{fontFamily: 'Inter'}}>
                      {investor.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trusted By Column */}
          <div className="bg-gray-900/50 rounded-2xl p-8 sm:p-10">
            <div className="text-left mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>
                Trusted by
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-6 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                <OptimizedImage
                  src="/logo/brand/metis/metis-blue-white-horizontal.svg"
                  alt="METIS"
                  width={120}
                  height={48}
                  className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center gap-4 p-6 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                <OptimizedImage
                  src="/logo/brand/hyperion/hyperion-logo-white.svg"
                  alt="Hyperion"
                  width={120}
                  height={48}
                  className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// Blog Section Component
const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building the Future of DeFi with HyperKit",
      date: "Oct 7, 2024",
      image: "/blog/post-1.jpg", // Placeholder
      alt: "Blog post about DeFi future"
    },
    {
      title: "Cross-Chain Interoperability: A Developer's Guide",
      date: "Oct 5, 2024", 
      image: "/blog/post-2.jpg", // Placeholder
      alt: "Blog post about cross-chain development"
    },
    {
      title: "Community-Driven Development: Lessons Learned",
      date: "Oct 3, 2024",
      image: "/blog/post-3.jpg", // Placeholder
      alt: "Blog post about community development"
    },
    {
      title: "The Modular Approach to DeFi Infrastructure",
      date: "Oct 1, 2024",
      image: "/blog/post-4.jpg", // Placeholder
      alt: "Blog post about modular DeFi"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900/50 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8" style={{fontFamily: 'Be Vietnam Pro'}}>
            From our blog
          </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {blogPosts.map((post, index) => (
                <article key={index} className="group bg-gray-800/50 rounded-xl overflow-hidden blog-card">
                  {/* Placeholder instead of image */}
                  <div className="aspect-video bg-gradient-to-br from-slate-600 via-slate-800 to-gray-900 rounded-t-xl flex items-center justify-center relative overflow-hidden">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blog-placeholder-shimmer"></div>
                    {/* Placeholder content */}
                    <div className="flex flex-col items-center gap-2 z-10">
                      <div className="w-16 h-2 bg-slate-700 rounded opacity-40"></div>
                      <div className="w-12 h-2 bg-slate-700 rounded opacity-30"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-200" style={{fontFamily: 'Inter'}}>
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400" style={{fontFamily: 'Inter'}}>
                      {post.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

// Main Foundation Page Component
export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-black text-white" role="main">
      {/* Hero Section */}
      <section className="flex flex-col items-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
        {/* PixelBlast Background */}
        <div className="absolute inset-0 z-0">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>
        
        <div className="relative flex flex-col items-center w-full max-w-4xl z-10">
          <p className="max-w-lg text-center mt-4 text-base sm:text-lg text-white/80 leading-relaxed relative z-10" style={{fontFamily: 'Inter'}}>
            Empowers developers with modular DeFi tools and sparking innovation and community-driven growth in the Hyperion ecosystem.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* PixelBlast Background */}
        <div className="absolute inset-0 z-0">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>
                Our Story
              </h2>
              <div className="w-16 h-0.5 bg-blue-400 mx-auto"></div>
            </div>
            
            <div className="space-y-6 text-center">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed" style={{fontFamily: 'Inter'}}>
                HyperKit was born from a bold vision: to create powerful DeFi tools that work seamlessly across different blockchain networks. We believe that the future of decentralized finance lies in interoperability, modularity, and community-driven innovation.
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed" style={{fontFamily: 'Inter'}}>
                Our journey began when we recognized the fragmented nature of the DeFi ecosystem. Developers were struggling with complex integrations, limited cross-chain functionality, and a lack of standardized tools. We saw an opportunity to build something different – a platform that would make DeFi development accessible, efficient, and truly decentralized.
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed" style={{fontFamily: 'Inter'}}>
                Today, we're building an ecosystem where developers can create, deploy, and scale decentralized applications without the traditional barriers. Our commitment to open-source development, transparent governance, and community participation drives everything we do. We're not just building tools; we're building the foundation for a more inclusive and innovative financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Vision & Mission Section */}
      <VisionMissionSection />

      {/* Investors Section */}
      <InvestorsSection />

      {/* Blog Section */}
      <BlogSection />
    </main>
  );
}
