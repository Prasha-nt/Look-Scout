'use client'

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const companyLogos = [
  { src: "/clog1.png", alt: "Mailchimp" },
  { src: "/clog2.png", alt: "Pinterest" },
  { src: "/clog3.png", alt: "PayPal" },
  { src: "/clog4.png", alt: "Google" },
  { src: "/clog5.png", alt: "Slack" },
  { src: "/clog6.png", alt: "The Verge" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export const LogoDisplaySection = (): JSX.Element => {
  return (
    <section className="py-20 bg-gradient-to-b from-basewhite to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-none shadow-none bg-transparent max-w-4xl mx-auto">
            <CardContent className="p-0 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-700">
                Proud to Be Used By
              </h2>
              <p className="text-sm text-gray-50 leading-relaxed">
                Professionally cultivate one-to-one customer service with robust ideas. 
                Dynamically innovate resource-leveling customer service for state of the art customer service.
              </p>
            </CardContent>
          </Card>
        </motion.div>

{/* Logos Grid */}
<motion.div 
  className="px-4 md:px-6 lg:px-8"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
    {companyLogos.map((logo, index) => (
      <motion.div
        key={index}
        variants={logoVariants}
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <CardContent className="p-6 flex items-center justify-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={129}
            height={32}
            className="object-contain h-8 w-auto"
          />
        </CardContent>
      </motion.div>
    ))}
  </div>
</motion.div>


        
      </div>
    </section>
  )
}
