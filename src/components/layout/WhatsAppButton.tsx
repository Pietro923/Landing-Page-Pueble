"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { useState } from "react"
  import { Phone, MessageSquare, Settings, ChevronRight } from "lucide-react"
  import { useTranslation } from "react-i18next";

  export function WhatsAppButton() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)
    
    const options = [
      {
        title: t('wsp.op.title1'),
        description: t('wsp.op.title1.desc'),
        phone: "543814901111",
        message: t('wsp.op.title1.men'),
        icon: <MessageSquare className="w-5 h-5 text-green-600" />
      },
      {
        title: t('wsp.op.title2'),
        description:t('wsp.op.title2.desc'),
        phone: "5493814901111",
        message: t('wsp.op.title2.men'),
        icon: <Phone className="w-5 h-5 text-green-600" />
      },
      {
        title: t('wsp.op.title3'),
        description: t('wsp.op.title3.desc'),
        phone: "543815821998",
        message: t('wsp.op.title3.men'),
        icon: <Settings className="w-5 h-5 text-green-600" />
      },
    ]
    
    const handleOptionClick = (phone: string, message: string) => {
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
      setIsOpen(false)
    }
    
    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button 
            className="fixed bottom-6 right-6 z-40 p-3 md:p-4 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg flex items-center justify-center group"
            aria-label="Contactar por WhatsApp"
          >
            <div className="relative">
              <img src="/imagenes/logos/whatsapp.svg" className="w-6 h-6 md:w-7 md:h-7" alt="WhatsApp" />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 md:h-5 md:w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 md:h-5 md:w-5 bg-green-300"></span>
              </span>
            </div>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap text-sm md:text-base font-medium">
             {t('wsp.button')}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 p-0 bg-white rounded-xl shadow-xl border-0" 
          side="top" 
          sideOffset={16}
          align="end"
        >
          <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-xl">
            <h3 className="font-bold text-lg">{t('wsp.title')} <span className="italic">Pueble S.A</span></h3>
            <p className="text-green-100 text-sm">{t('wsp.desc')}</p>
          </div>
          <div className="divide-y divide-gray-100">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.phone, option.message)}
                className="w-full p-4 text-left hover:bg-gray-50 hover:rounded-b-xl transition-colors flex items-start group"
              >
                <div className="mr-3 mt-1 bg-green-50 p-2 rounded-full">
                  {option.icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">
                    {option.title}
                  </div>
                  <div className="text-sm text-gray-500">{option.description}</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors self-center transform group-hover:translate-x-1 duration-200" />
              </button>
            ))}
          </div>

        </PopoverContent>
      </Popover>
    )
  }