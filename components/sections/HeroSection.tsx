'use client'

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navItems = [
  { label: "Home", hasDropdown: false },
  { label: "Our Products", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "Contacts", hasDropdown: false },
]

const partnerCompanies = [
  { name: "GitLab", logo: "/git.png" },
  { name: "Slack", logo: "/slack.png" },
  { name: "Netflix", logo: "/netflix.png" },
  { name: "PayPal", logo: "/paypal.png" },
]

const floatingElements = [
  { id: 1, delay: 0, duration: 6 },
  { id: 2, delay: 1, duration: 8 },
  { id: 3, delay: 2, duration: 7 },
  { id: 4, delay: 0.5, duration: 9 },
]

export const HeroSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSendNotification = async () => {
    if (!("Notification" in window)) {
      alert("❌ This browser does not support notifications.")
      return
    }

    const permission = await Notification.requestPermission()
    if (permission === "granted") {
      try {
        new Notification("🎉 Notification Sent!", {
          body: "Thanks for testing our platform. Your design workflow is now activated!",
          icon: "/logo.png"
        })
        alert("✅ Notification sent!")
      } catch (error) {
        alert("⚠️ Failed to send notification: " + error)
      }
    } else {
      alert("⚠️ Notification permission denied.")
    }
  }

  return (
    <section className="flex flex-col items-center justify-center relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 w-full min-h-screen overflow-hidden">

      {/* Floating Background */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((elem) => (
          <motion.div
            key={elem.id}
            className="absolute w-32 h-32 bg-primary-600/20 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              transition: {
                duration: elem.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: elem.delay
              }
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="w-full border-b-2 border-white/20 bg-[#2563eb] z-50 relative">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4 max-w-7xl mx-auto">
          <Image src="/logo.png" alt="Lookscout Logo" width={170} height={80} className="h-auto w-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Button key={index} variant="ghost" className="text-white flex items-center gap-1 hover:text-primary-200 hover:bg-primary-700/50">
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Button>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-4">
            <Button variant="ghost" className="text-white hover:text-primary-200 hover:bg-primary-700/50">Log in</Button>
            <Button className="bg-primary-600 hover:bg-primary-700 text-white">Sign up</Button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-nav"
              className="lg:hidden bg-primary-900/95 backdrop-blur-md border-t border-primary-700/50 px-4 py-6 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <Button key={index} variant="ghost" className="w-full justify-start text-white hover:text-primary-200 hover:bg-primary-700/50">
                  {item.label}
                </Button>
              ))}
              <div className="pt-4 border-t border-primary-700/50 space-y-2">
                <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white">Sign up</Button>
                <Button variant="ghost" className="w-full text-white hover:text-primary-200 hover:bg-primary-700/50">Log in</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 pt-24 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        {/* Left Content */}
        <motion.div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Supercharged Design Workflow
          </h1>
          <p className="text-lg text-primary-200 mb-8 max-w-xl">
            We've been told it is not possible to overachieve our customers' expectations. We have not reinvented the wheel, we decided to build upon it.
          </p>
          <Button onClick={handleSendNotification} className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg">
            Send Notification
          </Button>

          <div className="mt-12">
            <h3 className="text-sm font-medium text-white mb-4">Who supports us</h3>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              {partnerCompanies.map((company, index) => (
                <Image key={index} src={company.logo} alt={company.name} width={112} height={28} className="h-7 w-28 object-cover rounded opacity-70 hover:opacity-100 transition-opacity duration-300" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div className="flex-1 flex justify-end">
          <div className="relative w-full max-w-lg">
            <Image src="/Heropro.png" alt="Hero" width={500} height={500} className="rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
