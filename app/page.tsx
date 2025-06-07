'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ProductFeaturesSection } from '@/components/sections/ProductFeaturesSection'
import { IntegrationSection } from '@/components/sections/IntegrationSection'
import { TestimonialSection } from '@/components/sections/TestimonialSection'
import { LatestBlogPostsSection } from '@/components/sections/LatestBlogPostsSection'
import { LogoDisplaySection } from '@/components/sections/LogoDisplaySection'
import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { FooterSection } from '@/components/sections/FooterSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Home() {
  return (
    <motion.main 
      className="flex flex-col w-full bg-basewhite overflow-x-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <FeaturesSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <ProductFeaturesSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <IntegrationSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <TestimonialSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <LatestBlogPostsSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <LogoDisplaySection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <CallToActionSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <FooterSection />
      </motion.div>
    </motion.main>
  )
}