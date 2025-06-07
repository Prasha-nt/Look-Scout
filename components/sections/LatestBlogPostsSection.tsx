'use client'

import React from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    image: "/rectangle3.png",
    title: "Organize your digital assets with a new methodology here.",
    content: "Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.",
    author: {
      name: "Andrew Miller",
      role: "CEO",
      avatar: "/Avatara.png",
    },
    date: "25 Apr",
  },
  {
    id: 2,
    image: "/rectangle1.png",
    title: "Organize your digital assets with a new methodology here.",
    content: "Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.",
    author: {
      name: "David Munsan",
      role: "UX",
      avatar: "/Avatara.png",
    },
    date: "25 Apr",
  },
  {
    id: 3,
    image: "/rectangle2.png",
    title: "Organize your digital assets with a new methodology here.",
    content: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C.",
    author: {
      name: "Andrew Meller",
      role: "UI",
      avatar: "/Avatara.png",
    },
    date: "25 Apr",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const cardVariants = {
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

export const LatestBlogPostsSection = (): JSX.Element => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-50 max-w-4xl mx-auto">
            Completely synergize resource taxing relationships via premier niche markets. 
            Professionally cultivate one-to-one customer service with robust ideas.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={post.image}
                      alt="Blog post featured image"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-semibold text-gray-700 line-clamp-2 group-hover:text-primary-600 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    {post.title}
                  </motion.h3>

                  {/* Content */}
                  <motion.p 
                    className="text-gray-50 leading-relaxed line-clamp-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    {post.content}
                  </motion.p>

                  {/* Author */}
                  <motion.div 
                    className="flex items-center justify-between pt-4 border-t border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Avatar className="w-10 h-30">
                          <AvatarImage
                            src={post.author.avatar}
                            alt={post.author.name}
                          />
                          <AvatarFallback>
                            {post.author.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>

                      <div>
                        <div className="font-medium text-gray-700 text-sm">
                          {post.author.name}
                        </div>
                        <div className="text-gray-50 text-xs flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author.role}
                        </div>
                      </div>
                    </div>

                    {/* Read more button */}
                    <motion.button
                      className="text-gray-50 leading-relaxed line-clamp-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {post.date}
                    </motion.button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}