"use client"

import { useState, type MouseEventHandler, type ReactNode } from "react"
import {
  Mail,
  MapPin,
  Calendar,
  Send,
  Linkedin,
  Instagram,
  Globe,
  Tablet,
  Contact,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { CustomCursor } from "./CustomerCursor"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10 bg-background/20 text-primary-foreground hover:bg-background/30 hover:text-primary-foreground"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

const DigitalBusinessCard = () => {
  const title = encodeURIComponent("Meeting with Zuhair Bin Redha")
  const details = encodeURIComponent("Meeting scheduled via Digital Business Card")
  const location = encodeURIComponent("JAN-1 Building, Suite 4th Floor,Al Hisn Street, Bur Dubai,Dubai,U.A.E")
  const [showPortfolio, setShowPortfolio] = useState(false)

  const scheduleCalendarMeeting = () => {
    window.open(
      `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&details=${details}&location=${location}`,
    )
  }

  const openLocation = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${location}`)
  }

  const togglePortfolio = () => {
    setShowPortfolio(!showPortfolio)
  }

  return (
    <>
      <CustomCursor />
      <div className="max-w-md mx-auto min-h-screen bg-gradient-to-b from-primary via-primary/90 to-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-primary-foreground/10 blur-xl" />
          <div className="absolute top-40 -right-20 w-60 h-60 rounded-full bg-primary-foreground/5 blur-xl" />
          <div className="absolute bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-foreground/10 blur-xl" />
        </div>

        {/* Content container */}
        <div className="relative z-10">
          {/* Top Section with Gradient */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-6 pb-16 px-6"
          >
            {/* Header */}
            <div className="flex justify-between mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center align-middle gap-2"
              >
                 <div className="w-12 h-12 border-2 border-primary-foreground/30 rounded-full overflow-hidden shadow-lg bg-white flex items-center justify-center">
                  <Image
                    src="/Goldman-Properties.png"
                    alt="Goldman Properties Logo"
                    className="w-10 h-10 object-contain"
                    width={50}
                    height={50}
                  />
                </div>
              </motion.div>
              <ThemeToggle />
            </div>

            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-primary-foreground/30 overflow-hidden shadow-xl">
                <Image
                  src="/zuhair.png"
                  width={200}
                  height={200}
                  alt="Zuhair Bin Redha"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1 text-primary-foreground">Zuhair Bin Redha</h2>
              <p className="text-sm text-primary-foreground/80 mb-2">
                Visionary CEO | Expert Engineer | Real Estate Leader
              </p>
              <p className="text-sm font-semibold text-primary-foreground mb-4">Goldman Properties</p>
            </motion.div>
          </motion.div>

          {/* Main Card Section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card px-6 pt-8 pb-12 -mt-8 rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_30px_rgba(0,0,0,0.3)]"
          >
            {/* Save Contact Button */}
            <Link href="tel:+971542222033">
              <Button className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-6 text-sm w-full mb-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                <Contact className="h-5 w-5" />
                <span>Save Contact</span>
              </Button>
            </Link>

            {/* Action Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mb-10"
            >
              <ActionButton icon={<Tablet size={24} />} label="Mobile" link="tel:+971542222033" />
              <ActionButton icon={<Mail size={24} />} label="Email" link="mailto:zuhair@goldman.ae" />
              <ActionButton icon={<Send size={24} />} label="SMS" link="sms:+971542222033" />
              <ActionButton
                icon={<Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />}
                label="WhatsApp"
                link="https://wa.me/+971542222033"
              />
              <ActionButton icon={<Calendar size={24} />} label="Calendar" click={scheduleCalendarMeeting} />
              <ActionButton icon={<MapPin size={24} />} label="Location" click={openLocation} />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center gap-4"
            >
              <SocialButton
                href="https://www.linkedin.com/company/bpmgdubai/posts/?feedView=all"
                icon={<Linkedin />}
                variant="primary"
              />
              <SocialButton
                href="https://www.instagram.com/zuhair.binredha?igsh=MW9ua2tvbWl5cndubA=="
                icon={<Instagram />}
                variant="secondary"
              />
              <SocialButton href="http://goldmanproperties.ae" icon={<Globe />} variant="accent" />
            </motion.div>
          </motion.div>

          {/* Portfolio Toggle Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center -mt-6 mb-4"
          >
            <Button
              onClick={togglePortfolio}
              variant="outline"
              className="rounded-full bg-card shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <span>{showPortfolio ? "Hide Portfolio" : "View Portfolio"}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${showPortfolio ? "rotate-180" : ""}`}
              />
            </Button>
          </motion.div>

          {/* Portfolio Section */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: showPortfolio ? "auto" : 0,
              opacity: showPortfolio ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <Card className="mx-4 mb-8 shadow-lg border-none overflow-hidden">
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: showPortfolio ? 1 : 0, y: showPortfolio ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h1 className="text-2xl text-primary font-bold text-center mb-2">Portfolio</h1>
                  <h2 className="text-lg text-muted-foreground font-medium text-center mb-4">
                    Visionary CEO | Expert Engineer | Real Estate Leader
                  </h2>
                  <p className="mt-4 text-md text-card-foreground leading-relaxed">
                    With over 35 years of pioneering experience, I have played a pivotal role in shaping the UAE's
                    dynamic real estate landscape. As the board Member of Goldman Group and CEO of Goldman Properties, I
                    drive strategic growth, innovation, and high-value investments across a diverse portfolio spanning
                    Dubai, Abu Dhabi, Ajman, and Ras Al Khaimah.
                  </p>
                  <p className="mt-4 text-md text-card-foreground leading-relaxed">
                    Recognized as a Court-Appointed Expert Engineer by the Abu Dhabi Society of Engineers, I bring deep
                    technical expertise, strategic foresight, and market intelligence to every project. My leadership is
                    defined by a commitment to sustainable development, value-driven investments, and delivering
                    exceptional real estate solutions in an ever-evolving market.
                  </p>
                  <p className="mt-4 text-md text-card-foreground leading-relaxed">
                    Passionate about real estate transformation, engineering excellence, and fostering innovation, I
                    continue to build landmark projects that redefine urban living and commercial landscapes in the UAE.
                  </p>
                  <p className="mt-4 text-md text-card-foreground leading-relaxed">
                    Let's connect to explore opportunities in real estate development, strategic investments, and
                    engineering leadership.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center py-6 text-xs text-primary-foreground/70"
          >
            Powered By SMART CARD
          </motion.div>
        </div>
      </div>
    </>
  )
}

const ActionButton = ({
  icon,
  label,
  link,
  click,
}: { icon: ReactNode; label: string; link?: string; click?: MouseEventHandler }) => {
  return (
    <Link href={link || ""} target={link?.startsWith("http") ? "_blank" : undefined}>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center gap-2 cursor-pointer"
        onClick={click || undefined}
      >
        <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:bg-accent">
          {icon}
        </div>
        <span className="text-xs font-medium text-card-foreground">{label}</span>
      </motion.div>
    </Link>
  )
}

const SocialButton = ({
  href,
  icon,
  variant = "primary",
}: {
  href: string
  icon: ReactNode
  variant?: "primary" | "secondary" | "accent"
}) => {
  const getButtonClass = () => {
    switch (variant) {
      case "primary":
        return "bg-primary hover:bg-primary/90 text-primary-foreground"
      case "secondary":
        return "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      case "accent":
        return "bg-accent hover:bg-accent/90 text-accent-foreground"
      default:
        return "bg-primary hover:bg-primary/90 text-primary-foreground"
    }
  }

  return (
    <Link href={href} target="_blank">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-12 h-12 rounded-full ${getButtonClass()} flex items-center justify-center cursor-pointer shadow-md transition-all duration-300 hover:shadow-lg`}
      >
        {icon}
      </motion.div>
    </Link>
  )
}

export default DigitalBusinessCard

