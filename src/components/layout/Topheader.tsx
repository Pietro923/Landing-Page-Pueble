import { Mail, Facebook, Instagram, Linkedin, Clock } from "lucide-react"

const TopHeader = () => {
  return (
    <div className="bg-gray-800 text-white text-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-2 py-2">
        {/* Información de contacto */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center gap-2">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:contacto@pueble.com" className="text-white hover:text-red-300">
              contacto@pueble.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Lun-Vie: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Síguenos en Facebook"
            className="text-white hover:text-blue-600"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Síguenos en Instagram"
            className="text-white hover:text-pink-500"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Síguenos en LinkedIn"
            className="text-white hover:text-blue-800"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
