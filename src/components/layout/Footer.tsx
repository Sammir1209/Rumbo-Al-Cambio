import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Rumbo al Cambio</h3>
            <p className="text-gray-400 text-sm">
              Lideramos con hechos, no con palabras. Transformando el gobierno estudiantil.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition">Inicio</a></li>
              <li><a href="/equipo" className="hover:text-white transition">Equipo</a></li>
              <li><a href="/propuestas" className="hover:text-white transition">Propuestas</a></li>
              <li><a href="/involucrarse" className="hover:text-white transition">Involúcrate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} /> contacto@rumboacambio.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +1 (555) 123-4567
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Rumbo al Cambio. Todos los derechos reservados.</p>
          <p className="mt-4 sm:mt-0">Lideramos con hechos, no con palabras.</p>
        </div>
      </div>
    </footer>
  );
}
