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
    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width={size} height={size} viewBox="0 0 24 24" className="text-black dark:text-white" >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  //   <svg fill={isDarkMode?"#fff":"#000000"} height={size} width={size} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	//  viewBox="0 0 308 308">
  //   <g id="XMLID_468_">
  //     <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
  //       c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
  //       c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
  //       c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
  //       c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
  //       c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
  //       c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
  //       c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
  //       c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
  //       C233.168,179.508,230.845,178.393,227.904,176.981z"/>
  //     <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
  //       c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
  //       c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
  //       M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
  //       l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
  //       c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
  //       C276.546,215.678,222.799,268.994,156.734,268.994z"/>
  //   </g>
  //   </svg>
  )
}

const DigitalBusinessCard = () => {
  const [showPortfolio, setShowPortfolio] = useState(false)
  const isMobile = useMobile()

  const title = encodeURIComponent("Meeting with Zuhair Bin Redha")
  const details = encodeURIComponent("Meeting scheduled via Digital Business Card")
  const location = encodeURIComponent("JAN-1 Building, Suite 4th Floor,Al Hisn Street, Bur Dubai,Dubai,U.A.E")

  const scheduleCalendarMeeting = () => {
    window.open(
      `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&details=${details}&location=${location}`,
    )
  }

  const openLocation = () => {
    // window.open(`https://www.google.com/maps/search/?api=1&query=${location}`)
    window.open(`https://www.google.com/maps/place/JAN-1+Building/@25.2613783,55.2941546,17z/data=!4m14!1m7!3m6!1s0x3e5f43934a173b9d:0xbdb41a14e5e45012!2sJAN-1+Building!8m2!3d25.2620091!4d55.295603!16s%2Fg%2F11mgq7d9qz!3m5!1s0x3e5f43934a173b9d:0xbdb41a14e5e45012!8m2!3d25.2620091!4d55.295603!16s%2Fg%2F11mgq7d9qz?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D`, "_blank")
  }

  const togglePortfolio = () => {
    setShowPortfolio(!showPortfolio)
  }

  return (
    <>
      {!isMobile && <CustomCursor />}
      <div className="max-w-md mx-auto min-h-screen bg-gradient-to-b from-primary via-primary/70 to-primary relative overflow-hidden">
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
                 <div className="w-12 h-12 border-2 border-primary-foreground/30 rounded-full overflow-hidden shadow-lg bg-[#1C1C1C] flex items-center justify-center">
                  <Image
                    src="./Goldman.png"
                    alt="Goldman Group Logo"
                    className="w-10 h-10 object-contain"
                    // placeholder="blur"
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
                  // placeholder="blur"
                  className="w-full h-full bg-white dark:bg-white object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1 text-primary-foreground">Zuhair Bin Redha</h2>
              <p className="text-sm text-primary-foreground/80 mb-2">
                Visionary CEO | Expert Engineer | Real Estate Leader
              </p>
              <p className="text-sm font-semibold text-primary-foreground mb-4">Goldman Group</p>
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
                variant="primary"
              />
              <SocialButton href="http://goldman.ae" icon={<Globe />} variant="primary" />
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

          {/* Logos */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex justify-center gap-4 mt-6"
            >
              <Link href='https://goldmanproperties.ae/' 
                className="w-20 h-20 border-primary-foreground/30 bg-white dark:bg-white border-black shadow-black rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                <Image 
                  src="./Goldman-Properties.png" 
                  width={50} 
                  height={50} 
                  alt="Goldman Properties Logo" 
                  className="w-18 h-20 bg-secondary dark:bg-white object-contain cursor-pointer" 
                />
              </Link>
              <Link href='https://arabarch.ae/' 
                className="w-20 h-20 border-primary-foreground/30 bg-white dark:bg-white border-black shadow-black rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                <Image 
                  src="./ArabArch.png" 
                  width={50} 
                  height={50} 
                  alt="ArabArch Logo" 
                  className="w-28 h-10 bg-secondary dark:bg-white object-contain cursor-pointer" 
                />
              </Link>
              <Link href='https://goldman.ae/al-fahidi-services/' 
                className="w-20 h-20 border-primary-foreground/30 bg-white dark:bg-white border-black shadow-black rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                <Image 
                  src="./alfahidi.png" 
                  width={50} 
                  height={50} 
                  alt="Alfahidi Logo"
                  className="w-28 h-10 bg-secondary dark:bg-white object-contain cursor-pointer" 
                />
              </Link>
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

