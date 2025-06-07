'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const featureItems = [
  { id: 1, text: "Fully Secure", icon: "/Vertical container.png" },
  { id: 2, text: "24/7 Support", icon: "/Vertical container.png" },
  { id: 3, text: "Done Deal", icon: "/Vertical container.png" },
]

export const CallToActionSection = (): JSX.Element => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="space-y-6">
            <motion.span 
              className="inline-block text-sm font-semibold text-primary-600 tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              1% OF THE INDUSTRY
            </motion.span>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Welcome to your new digital reality that will rock your world truly at all throughout.
            </motion.h2>
          </div>

          {/* Email Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 text-lg border-2 border-gray-200 focus:border-primary-600 transition-colors"
                        required
                        animated
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        type="submit"
                        className="h-12 px-8 text-lg bg-primary-600 hover:bg-primary-700 text-white shadow-glow hover:shadow-glow-lg transition-all duration-300"
                        disabled={isSubmitted}
                      >
                        {isSubmitted ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-5 h-5" />
                            Submitted!
                          </motion.div>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feature Items */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {featureItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex items-center gap-3 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg group-hover:shadow-glow transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </motion.div>
                <span className="font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
