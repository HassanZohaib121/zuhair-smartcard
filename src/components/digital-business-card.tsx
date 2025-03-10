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
import { useMobile } from "@/hooks/use-mobile"


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

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const DigitalBusinessCard = () => {
  const title = encodeURIComponent("Meeting with Zuhair Bin Redha")
  const details = encodeURIComponent("Meeting scheduled via Digital Business Card")
  const location = encodeURIComponent("JAN-1 Building, Suite 4th Floor,Al Hisn Street, Bur Dubai,Dubai,U.A.E")
  const [showPortfolio, setShowPortfolio] = useState(false)
  const isMobile = useMobile()

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
      {!isMobile || window.innerWidth <= 768 && <CustomCursor />}
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
                    src="./Goldman-Properties.png"
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
                  src="./zuhair.png"
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
              <ActionButton icon={<WhatsAppIcon size={24} />} label="WhatsApp" link="https://wa.me/+971542222033"/>
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
            Created By Hassan Zohaib
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

