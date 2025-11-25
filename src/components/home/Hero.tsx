import { Link } from 'react-router-dom';
import { ChevronRight, MessageSquare } from 'lucide-react';

const testimonials = [
  'Al fin un equipo que explicó cada propuesta con claridad. Mi voto va por Rumbo al Cambio.',
  'Se nota que escucharon a los estudiantes, varias ideas del plan salieron de nuestras encuestas.',
  'Me gustó que hablen de resultados y no solo de promesas. Quiero verlos en el municipio escolar.',
  'Sus propuestas de bienestar y apoyo académico son justamente lo que necesitamos en el colegio.',
  'Dan confianza, se les ve organizados y con ganas de trabajar de verdad por todos los grados.',
];

// Duplicamos para un efecto de scroll infinito y suave
const duplicatedTestimonials = [...testimonials, ...testimonials];

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary/5 to-background overflow-hidden pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="text-center">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Municipio Escolar 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-4 sm:mb-6 leading-tight">
            Rumbo al
            <span className="block bg-gradient-to-r from-[#001f3f] to-[#c4a661] bg-clip-text text-transparent">
              Cambio
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-primary font-semibold mb-4 sm:mb-6">
            Lideramos con hechos, no con palabras
          </p>

          <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-lg mb-8 sm:mb-10">
            Transformando el municipio escolar en una fuerza real de cambio. Propuestas concretas, resultados medibles, y un equipo comprometido con tu futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/propuestas"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold bg-[#001f3f] text-white shadow-md shadow-black/10 hover:bg-[#002b63] transition-colors duration-200 w-full sm:w-auto"
            >
              Conoce Nuestras Propuestas
              <ChevronRight size={20} />
            </Link>
            <Link
              to="/equipo"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold border border-[#c4a661] text-[#c4a661] bg-white/0 hover:bg-[#c4a661]/5 shadow-sm shadow-black/5 transition-colors duration-200 w-full sm:w-auto"
            >
              Conoce El Equipo
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Scrolling Testimonials */}
      <div className="group w-full inline-flex flex-nowrap overflow-hidden py-4 bg-gradient-to-r from-transparent via-blue-50/60 to-transparent [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] border-t border-blue-50">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 animate-infinite-scroll group-hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((text, index) => (
            <li
              key={index}
              className="flex items-center gap-3 whitespace-nowrap bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 shadow-sm text-xs sm:text-sm"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary/10 text-secondary">
                <MessageSquare size={16} />
              </span>
              <span className="font-medium text-text-muted">
                {text}
              </span>
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-6 animate-infinite-scroll group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {duplicatedTestimonials.map((text, index) => (
            <li
              key={index}
              className="flex items-center gap-3 whitespace-nowrap bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 shadow-sm text-xs sm:text-sm"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary/10 text-secondary">
                <MessageSquare size={16} />
              </span>
              <span className="font-medium text-text-muted">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
