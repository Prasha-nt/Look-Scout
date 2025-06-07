'use client'

import React from "react"
// import { motion } from "framer-motion"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
// import { Card, CardContent } from "@/components/ui/card"

const footerData = {
  resources: {
    title: "Resources",
    links: ["Community", "Events", "Help Center", "Partners"],
  },
  products: {
    title: "Products",
    links: ["Integrations", "Solutions", "Features", "Enterprise"],
  },
}

const socialIcons = [
  { src: "/gi1.png", alt: "Facebook" },
  { src: "/gi2.png", alt: "Google" },
  { src: "/gi3.png", alt: "Apple" },
  { src: "/gi4.png", alt: "Instagram" },
]

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="LookScout Logo"
              width={140}
              height={40}
              className="object-contain"
            />
            <p className="text-sm text-gray-400 max-w-xs">
              Generate outside the box thinking with the possibility to target the low.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{footerData.resources.title}</h3>
            <ul className="space-y-2">
              {footerData.resources.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{footerData.products.title}</h3>
            <ul className="space-y-2">
              {footerData.products.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Get Email Notifications</h3>
            <p className="text-sm text-gray-400">
              Generate outside the box thinking with the possibility to target the low
            </p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Enter email...."
                className="bg-[#1F2937] text-sm text-white placeholder:text-gray-400 rounded-l-md"
              />
              <Button className="rounded-l-none bg-[#437EF7] text-white text-sm px-5">
                Submit
              </Button>
            </form>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-6">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2023 LookScout. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {socialIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="filter invert brightness-0"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
