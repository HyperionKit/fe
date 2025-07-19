"use client"
import type React from "react"
import { motion, Variants } from "framer-motion"
import HeroSection from "@/components/hero-section"
import WalletDemo from "@/components/wallet-demo"
import HyperkitRoadmap from "@/components/hyper-roadmap"
import HyperkitRewards from "@/components/hyper-rewards"
import HyperRoles from "@/components/hyper-roles"
import HyperEarnPoints from "@/components/hyper-earn"
import HyperToMeta from "@/components/hyper-meta"
import HyperMetrics from "@/components/hyper-metrics"
import Footer from "@/components/footer"

const HomePage: React.FC = () => {
  const fadeInAnimationVariants: Variants = {
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
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: "some" }}
          variants={fadeInAnimationVariants}
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
