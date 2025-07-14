"use client"
import type React from "react"
import { motion } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import WalletDemo from "@/components/WalletDemo"
import HyperkitRoadmap from "@/components/HyperkitRoadmap"
import HyperkitRewards from "@/components/HyperkitRewards"
import HyperRoles from "@/components/HyperRoles"
import HyperEarnPoints from "@/components/HyperEarnPoints"
import HyperToMeta from "@/components/HyperToMeta"
import HyperMetrics from "@/components/HyperMetrics"
import Footer from "@/components/footer"

const HomePage: React.FC = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <main className="flex flex-col items-center bg-white min-h-screen">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: "some" }}
          className="w-full"
        >
          <HeroSection />
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: "some" }}
          className="min-h-screen w-full bg-white"
        >
          <div className="max-w-6xl mx-auto px-8">
            <WalletDemo />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: "some" }}
          className="w-full"
        >
          <HyperkitRoadmap />
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: "some" }}
          className="w-full"
        >
          <HyperkitRewards />
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: "some" }}
          className="w-full"
        >
          <HyperRoles />
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: "some" }}
          className="w-full"
        >
          <HyperEarnPoints />
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: "some" }}
          className="w-full"
        >
          <HyperMetrics />
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: "some" }}
          className="w-full"
        >
          <HyperToMeta />
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: "some" }}
          className="w-full"
        >
          <Footer />
        </motion.div>
      </main>
    </>
  )
}

export default HomePage
