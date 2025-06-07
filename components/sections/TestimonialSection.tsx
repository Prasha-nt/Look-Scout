'use client'

import React from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonialData = {
  logo: "/logo.png",
  quote:
    "Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!",
  author: {
    avatar: "/avatar.png",
    name: "Lisa Smith",
    title: "CEO Company",
  },
}

export const TestimonialSection = (): JSX.Element => {
  return (
    <section className="py-20 bg-gradient-to-b from-basewhite to-neutral-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <CardContent className="p-12 relative">
              {/* Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                  What Our Customers Say
                </h2>
                <p className="text-lg text-gray-50 max-w-2xl mx-auto">
                  Organically grow the holistic world view of disruptive
                  innovation via workplace diversity and empowerment. Bring to
                  the table win-win strategies to ensure domination.
                </p>
              </motion.div>

              <div className="relative z-10 space-y-8">
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="mb-6 flex justify-start md:justify-center">
                    <Image
                      src={testimonialData.logo}
                      alt="LookScout Logo"
                      width={140}
                      height={40}
                      className="object-contain filter brightness-0 invert-0"
                    />
                  </div>
                </motion.div>

                {/* Quote */}
                <motion.p
                  className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  "{testimonialData.quote}"
                </motion.p>

                {/* Author */}
                <motion.div
                  className="flex items-center gap-4 mt-6 justify-start md:justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Avatar className="w-16 h-16 border-4 border-white shadow-lg">
                      <AvatarImage
                        src={testimonialData.author.avatar}
                        alt={testimonialData.author.name}
                      />
                      <AvatarFallback className="text-lg font-semibold">
                        {testimonialData.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>

                  <div>
                    <div className="font-semibold text-gray-700 text-lg">
                      {testimonialData.author.name}
                    </div>
                    <div className="text-gray-50">
                      {testimonialData.author.title}
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
