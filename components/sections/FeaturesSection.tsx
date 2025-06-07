'use client'

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const features = [
  {
    title: "Easier Work Organization",
    description: "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.",
    image: "/Icon placeholder.png"
  },
  {
    title: "Fast Connection",
    description: "Completely pursue scalable customer cross-media through potentialities. Holistically quickly installed portals.",
    image: "/Icon placeholder1.png"
  },
  {
    title: "Streamlined Processes",
    description: "Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.",
    image: "/Icon placeholder2.png"
  },
  {
    title: "Easier Integrations",
    description: "Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.",
    image: "/Icon placeholder3.png"
  },
  {
    title: "Marketing Analytics",
    description: "Phosfluorescently engage worldwide methodologies with web-enabled Interactively coordinate.",
    image: "/Icon placeholder4.png"
  },
  {
    title: "Global Reach",
    description: "Collaboratively administrate turnkey service channels whereas virtual e-tailers. This is objectively scalable metrics whereas.",
    image: "/Icon placeholder5.png"
  }
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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const FeaturesSection = (): JSX.Element => {
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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Messaging for all
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-50 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            User generated content in real-time will have multiple touchpoints for offshoring.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  
                  {/* Icon Image */}
                  <motion.div
                    className="inline-flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">
                      {feature.title}
                    </h3>
                    <p className="text-gray-50 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <motion.button 
                    className="inline-flex items-center gap-2 mt-6 text-primary-600 font-medium hover:text-primary-700 transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
