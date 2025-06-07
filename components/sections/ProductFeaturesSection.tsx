'use client'

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const features = [
  {
    title: "Explore ideas together",
    description: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    image: "/Icon placeholder6.png"
  },
  {
    title: "Bring those ideas to life",
    description: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    image: "/Icon placeholder7.png"
  },
  {
    title: "Ship better outcomes",
    description: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    image: "/Icon placeholder8.png"
  },
]

export const ProductFeaturesSection = (): JSX.Element => {
  return (
    <section className="py-20 bg-basewhite">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
       <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
  Redefining Product Features
</h2>
<p className="text-lg text-gray-50 max-w-2xl mx-auto">
  Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
</p>

        </motion.div>

        {/* Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center ...">

          {/* Features List */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 10 }}
              >
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
                  <h3 className="text-xl font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-50 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary-600 font-medium group-hover:text-primary-700"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

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
                  src="/photo.png"
                  alt="Product features illustration"
                  width={560}
                  height={560}
                  className="rounded-2xl"
                />
              </div>

              {/* Mobile/Tablet Image */}
<div className="block lg:hidden w-full">
  <Image
    src="/Photores.png"
    alt="Responsive product image"
    width={0}
    height={0}
    sizes="100vw"
    className="w-full h-auto rounded-2xl"
  />
</div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
