'use client'
import React, { MouseEventHandler, ReactNode, useState } from 'react';
import { Mail, MapPin, Calendar, Send, Linkedin, Instagram, Globe, Tablet } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



const DigitalBusinessCard = () => {
    // const [isSaving, setIsSaving] = useState<boolean>(false)
    const title = encodeURIComponent("Meeting with Zuhair bin Redha")
    const details = encodeURIComponent("Meeting scheduled via Digital Business Card")
    const location = encodeURIComponent("JAN-1 Building, Suite 4th Floor,Al Hisn Street, Bur Dubai,Dubai,U.A.E")

    // const saveContact = async () => {
    //   setIsSaving(true)
    //   try {
    //     // Create vCard content
    //     const vCardContent = `BEGIN:VCARD
    //     VERSION:3.0
    //     FN:Zuhair bin Redha
    //     TITLE:CEO
    //     ORG:Goldman Properties
    //     TEL;TYPE=WORK,VOICE:+971542222033
    //     ADR:;;JAN-1 Building, Suite 4th Floor,Al Hisn Street, Bur Dubai;Dubai;;U.A.E
    //     END:VCARD`
        

    //     // Create a Blob with the vCard content
    //     const blob = new Blob([vCardContent], { type: "text/vcard;charset=utf-8" })
  
    //     // Create a download link
    //     const link = document.createElement("a")
    //     link.href = URL.createObjectURL(blob)
    //     link.download = "Zuhair bin Redha.vcf"
  
    //     // Append the link to the body, click it, and remove it
    //     document.body.appendChild(link)
    //     link.click()
    //     document.body.removeChild(link)
  
    //     // toast({
    //     //   title: "Contact Saved",
    //     //   description: "The contact information has been downloaded as a vCard file.",
    //     // })
    //   } catch (error) {
    //     console.error("Error saving contact:", error)
    //     // toast({
    //     //   title: "Error",
    //     //   description: "Failed to save contact information. Please try again.",
    //     //   variant: "destructive",
    //     // })
    //   } finally {
    //     setIsSaving(false)
    //   }
    // }
  
    const scheduleCalendarMeeting = () => {
      window.open(`https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&details=${details}&location=${location}`)
    }
  
    const openLocation = () => {
      window.open(`https://www.google.com/maps/search/?api=1&query=${location}`)
    }
  return (
    <div className="max-w-sm mx-auto min-h-screen bg-blue-600">
      {/* Top Section with Blue Gradient */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-500 pt-6 pb-16 px-6">
        {/* <div className='bg-gradient-to-b from-gray-900 to-slate-200'> */}
        {/* Header */}
        <div className="flex justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-1">
                <Image src="./Goldman-Properties.png" alt='Goldman Properties Logo' className='' width={50} height={50} />
            </div>
            <span className="text-sm text-white">Goldman Properties</span>
          </div>
          {/* <div className="flex gap-4 text-white">
            <span className="cursor-pointer">↗</span>
            <span className="cursor-pointer">☰</span>
          </div> */}
        </div>

        {/* Profile Section */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full mb-4">
            <Image src='./zuhair.png' width={200} height={200} alt='zuhair bin redha' className='rounded-full' />
            </div>
          <h2 className="text-xl font-semibold mb-1 text-white">Zuhair bin Redha</h2>
          <p className="text-sm text-gray-100 mb-4">Chief Executive Officer</p>
          <p className="text-sm text-gray-100 mb-4">Goldman Properties</p>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white px-6 pt-8 pb-12 -mt-8 rounded-t-3xl rounded-b-3xl">
        {/* Save Contact Button */}
        <Link href="tel:+971542222033">
        <button className="bg-blue-600 text-white rounded-full px-6 py-2 text-sm w-full mb-8">
          Save Contact
        </button>
        </Link>

        {/* Action Grid */}
        <div className="grid grid-cols-3 gap-6 mb-10">      
          <ActionButton icon={<Tablet size={24} />} label="Mobile" link='tel:+971542222033' />
          <ActionButton icon={<Mail size={24} />} label="Email" link='mailto:zuhair@goldman.ae' />
          {/* <ActionButton icon={<Phone size={24} />} label="Call" link='tel:' /> */}
          <ActionButton icon={<Send size={24} />} label="SMS" link='sms:+971542222033' />
          <ActionButton icon={<Image src="./whatsapp.svg" alt="WhatsApp" width={24} height={24} />} label="WhatsApp" link='https://wa.me/+971542222033' />
          <ActionButton icon={<Calendar size={24} />} label="Calendar" click={scheduleCalendarMeeting} />
          <ActionButton icon={<MapPin size={24} />} label="Location" click={openLocation} />
          {/* <ActionButton icon={<WebcamIcon size={24} />} label="Skype" link='' /> */}
          {/* <ActionButton icon={<MessageCircle size={24} />} label="Messenger" link='https://m.me/' /> */}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
        <Link target='_blank' href='https://www.linkedin.com/company/bpmgdubai/posts/?feedView=all'>
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer text-white">
            <Linkedin />
          </div>
        </Link>
        <Link target='_blank' href='https://www.instagram.com/zuhair.binredha?igsh=MW9ua2tvbWl5cndubA=='>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer text-white">
            <Instagram />
          </div>
        </Link>
        <Link target='_blank' href='http://goldmanproperties.ae'>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer text-white">
            <Globe />
          </div>
        </Link>        
        </div>

        {/* Footer */}
        {/* <div className="text-center mt-8 text-xs text-gray-500">
          Powered By SMART CARD
        </div> */}
      </div>
      <div className='bg-gradient-to-b from-blue-600 to-blue-900 pt-6 pb-8 px-6'>
        <h1 className='text-xl font-bold'>Portfolio</h1>
        <p className="text-center mt-4 text-sm text-white">As the CEO of Goldman Properties, I lead one of the UAE's most prestigious real estate firms, established in 1971. With over five decades of excellence, we have built a legacy of innovation, integrity, and unmatched expertise in the real estate industry. My leadership is driven by a vision to shape the future of real estate through sustainable development, cutting-edge design, and customer-centric solutions.</p>
        <p className="text-center mt-8 text-sm text-white">Goldman Properties is committed to delivering world-class real estate solutions, and I am honored to lead this journey towards excellence.</p>
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label, link, click }:{icon:ReactNode, label:string, link?:string , click?:MouseEventHandler}) => {
  return (
    <Link target='_blank' href={link || ''}>
    <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={click || undefined}>
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
        {icon}
      </div>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
    </Link>
  );
};

export default DigitalBusinessCard;