"use client";

import RoadmapTimeline from "@/components/RoadmapTimeline";
import FeatureGrid from "@/components/FeatureGrid";


export default function HyperkitRoadmap() {
  return (
    <section className="text-center px-4 md:pb-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-black">
        Launch DeFi, Connect Chains, Ignite Hyperion!
      </h1>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
        HyperKit empowers developers with modular DeFi tools and seamless cross-chain bridging, sparking innovation and
        community-driven growth in the Hyperion ecosystem.
      </p>
        <RoadmapTimeline/>
        <FeatureGrid/>
    </section>
  )
}
