import React from 'react'
import BuildHeroPage from '@/components/build-hero-page'
import BuildAboutPage from '@/components/build-about-page'
import BuildCards from '@/components/build-cards'

const page = () => {
  return (
    <div className="w-full">
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <BuildHeroPage/>
        <BuildAboutPage/>
        <BuildCards/>
      </div>
    </div>
  )
}
export default page