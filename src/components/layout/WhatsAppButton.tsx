"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { useState } from "react"
  import { Phone, MessageSquare, Settings, ChevronRight } from "lucide-react"
  
  export function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false)
    
    const options = [
      {
        title: "Servicio de Guardia",
        description: "Respuesta 24/7",
        phone: "5493814901111",
        message: "Hola, necesito asistencia del servicio de guardia.",
        icon: <Phone className="w-5 h-5 text-green-600" />
      },
      {
        title: "Servicio de Repuestos",
        description: "Respuesta 24/7 - Consultas sobre disponibilidad y precios",
        phone: "543815821998",
        message: "Hola, estoy en la página web y quiero consultar sobre repuestos.",
        icon: <Settings className="w-5 h-5 text-green-600" />
      },
      {
        title: "Recepción / Consultas",
        description: "Información general y atención al cliente",
        phone: "543814901111",
        message: "Hola, estoy en la página web y quiero hacer una consulta general.",
        icon: <MessageSquare className="w-5 h-5 text-green-600" />
      }
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
              Contáctanos
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
            <h3 className="font-bold text-lg">Contacto <span className="italic">Pueble S.A</span></h3>
            <p className="text-green-100 text-sm">Seleccione una opción para contactarnos vía WhatsApp</p>
          </div>
          <div className="divide-y divide-gray-100">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.phone, option.message)}
                className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-start group"
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
          <div className="p-3 bg-gray-50 rounded-b-xl text-xs text-center text-gray-500">
            Lunes-Viernes 8:00-18:00
          </div>
        </PopoverContent>
      </Popover>
    )
  }