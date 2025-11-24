import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Nuestro Equipo', href: '/equipo' },
  { name: 'Propuestas', href: '/propuestas' },
  { name: '¿Por qué nosotros?', href: '/por-que-nosotros' },
  { name: '¿Cómo Votar?', href: '/como-votar' },
  { name: 'Mural', href: '/mural' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <NavLink to="/" className="flex items-center gap-4 flex-shrink-0">
            <img
              src="/logo/logo.png"
              alt="Rumbo al Cambio Logo"
              className="h-24 w-24 object-contain"
            />
            <span className="text-3xl font-bold text-primary hidden sm:inline">Rumbo al Cambio</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-main hover:bg-gray-200/50 hover:text-primary'
                  }`
                }
                end={item.href === '/'}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/involucrarse"
              className="ml-4 bg-secondary text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
            >
              Involúcrate
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={24} className="text-text-main" /> : <Menu size={24} className="text-text-main" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <nav className="md:hidden pb-4 border-t border-gray-200/80">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-text-main hover:bg-gray-100'
                }`}
                end={item.href === '/'}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/involucrarse"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-2 px-4 py-3 bg-secondary text-white rounded-lg font-semibold"
            >
              Involúcrate
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
