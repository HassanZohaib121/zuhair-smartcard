'use client'
import React, { MouseEventHandler, ReactNode } from 'react';
import { Mail, MapPin, Calendar, Send, Linkedin, Instagram, Globe, Tablet, Contact } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



const DigitalBusinessCard = () => {
    // const [isSaving, setIsSaving] = useState<boolean>(false)
    const title = encodeURIComponent("Meeting with Zuhair Bin Redha")
    const details = encodeURIComponent("Meeting scheduled via Digital Business Card")
    const location = encodeURIComponent("JAN-1 Building, Suite 4th Floor,Al Hisn Street, Bur Dubai,Dubai,U.A.E")
  
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
          <div className="flex items-center align-middle gap-2 ">
            <div className="w-10 h-10 border-1 rounded-full">
                <Image src="./Goldman-Properties.png" alt='Goldman Properties Logo' className='' width={50} height={50} />
            </div>
            {/* <span className="text-sm  text-white">Goldman Properties</span> */}
          </div>
        </div>

        {/* Profile Section */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full mb-4">
            <Image src='./zuhair.png' width={200} height={200} alt='zuhair Bin redha' className='rounded-full' />
            </div>
          <h2 className="text-xl font-semibold mb-1 text-white">Zuhair Bin Redha</h2>
          <p className="text-sm text-gray-100 mb-4">Visionary CEO | Expert Engineer | Real Estate Leader
          </p>
          <p className="text-sm font-semibold text-gray-100 mb-4">Goldman Properties</p>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white px-6 pt-8 pb-12 -mt-8 rounded-t-3xl rounded-b-3xl">
        {/* Save Contact Button */}
        <Link href="tel:+971542222033">
        <button className="flex justify-center align-middle gap-2 bg-blue-600 text-white rounded-full px-6 py-2 text-sm w-full mb-8">
          <Contact /> Save Contact
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
      <div className='bg-white px-6 pt-8 pb-12 mt-8 rounded-t-3xl rounded-b-3xl'>
        <h1 className='text-2xl text-black font-bold text-center'>Portfolio</h1>
        <h2 className='text-xl text-black font-semibold text-center'>Visionary CEO | Expert Engineer | Real Estate Leader
        </h2>
        <p className="text-center mt-4 text-md text-black">With over 35 years of pioneering experience, I have played a pivotal role in shaping the UAE’s dynamic real estate landscape. As the board Member of Goldman Group and CEO of Goldman Properties, I drive strategic growth, innovation, and high-value investments across a diverse portfolio spanning Dubai, Abu Dhabi, Ajman, and Ras Al Khaimah.
        </p>
        <p className="text-center mt-8 text-md text-black">Recognized as a Court-Appointed Expert Engineer by the Abu Dhabi Society of Engineers, I bring deep technical expertise, strategic foresight, and market intelligence to every project. My leadership is defined by a commitment to sustainable development, value-driven investments, and delivering exceptional real estate solutions in an ever-evolving market.
        </p>
        <p className="text-center mt-8 text-md text-black">Passionate about real estate transformation, engineering excellence, and fostering innovation, I continue to build landmark projects that redefine urban living and commercial landscapes in the UAE.
        </p>
        <p className="text-center mt-8 text-md text-black">Let’s connect to explore opportunities in real estate development, strategic investments, and engineering leadership.</p>
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