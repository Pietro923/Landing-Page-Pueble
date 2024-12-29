import { Building2, Phone, MessageCircle } from "lucide-react";

// Footer Section
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-red-800 to-red-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nosotros</h3>
            <p className="text-gray-200 text-sm">
              Pueble S.A. es líder en maquinaria agrícola, ofreciendo soluciones confiables y de calidad para el campo.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start text-gray-200">
                <Building2 className="w-5 h-5 text-white mr-2" />
                Parque Industrial Aut. Circunvalación Km 1294, San Miguel de Tucumán 4000
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-200">
                <Phone className="w-5 h-5 text-white mr-2" />
                +54 9 381 661 8632
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-200">
                <MessageCircle className="w-5 h-5 text-white mr-2" />
                info@pueblesa.com
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suscríbete</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-red-500"
              />
              <button className="w-full bg-red-700 hover:bg-red-600 text-white py-2 rounded-md transition">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-red-700 mt-8 pt-4 text-center text-sm text-gray-300">
          &copy; 2024 Pueble S.A. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
