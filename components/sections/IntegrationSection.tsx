'use client'

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const features = [
  {
    image: "/Icon placeholder6.png",
    title: "Explore ideas together",
    description: "Engage audience segments and finally create actionable insights. Amplify vertical integration."
  },
  {
    image: "/Icon placeholder7.png",
    title: "Bring those ideas to life",
    description: "Engage audience segments and finally create actionable insights. Amplify vertical integration."
  },
  {
    image: "/Icon placeholder8.png",
    title: "Ship better outcomes",
    description: "Engage audience segments and finally create actionable insights. Amplify vertical integration."
  }
]

export const IntegrationSection = (): JSX.Element => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Desktop Image */}
              <div className="hidden lg:block">
                <Image
                  src="/Photores.png"
                  alt="Product features illustration"
                  width={560}
                  height={560}
                  className="rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-transparent border-0 shadow-none group hover:bg-gray-800/30 transition-all duration-300 rounded-xl p-6">
                  <CardContent className="flex items-start gap-6 p-0">
                    {/* Icon Image */}
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
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
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-800 leading-relaxed group-hover:text-neutral-300 transition-colors">
                        {feature.description}
                      </p>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary-600 font-medium hover:text-primary-400 group"
                        >
                          Learn more
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
