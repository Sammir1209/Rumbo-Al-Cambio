import { Link } from 'react-router-dom';
import { Hero } from '@/components/home/Hero';
import { CheckCircle, Users, Zap, Target } from 'lucide-react';
import { departments, candidates } from '@/db';
export function HomePage() {
  return (
    <div>
      <Hero />

      {/* Why Vote For Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 mb-3 uppercase tracking-wide">
              Por qué elegir Rumbo al Cambio
            </span>
            <h2 className="text-4xl font-bold mb-3">Por Qué Votar por Nosotros</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              No se trata solo de ganar una elección, sino de demostrar que un municipio escolar puede trabajar con seriedad, transparencia y resultados reales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-blue-100 rounded-xl mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Proyectos Realizables</h3>
              <p className="text-gray-600 text-sm">
                Iniciativas viables y enfocadas en el bienestar estudiantil, con pasos claros y medibles.
              </p>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-orange-100 rounded-xl mb-4">
                <Users className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Liderazgo Inclusivo</h3>
              <p className="text-gray-600 text-sm">
                Representamos a todos los grados y secciones para que ninguna voz se quede fuera.
              </p>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-green-100 rounded-xl mb-4">
                <Zap className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Gestión Eficiente</h3>
              <p className="text-gray-600 text-sm">
                Compromiso de iniciar proyectos clave desde el primer mes de gestión, con seguimiento.
              </p>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-red-100 rounded-xl mb-4">
                <Target className="text-red-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Comunicación Abierta</h3>
              <p className="text-gray-600 text-sm">
                Reuniones periódicas, canales de sugerencias y presencia constante en el colegio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      {departments.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#00385b]/5 text-[#00385b] mb-3 uppercase tracking-wide">
                Ejes de trabajo
              </span>
              <h2 className="text-4xl font-bold mb-3">Nuestras Áreas de Enfoque</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Organizamos nuestras propuestas en áreas claras para que veas rápidamente dónde impactará cada acción.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {departments.map((dept) => (
                <Link
                  key={dept.id}
                  to={`/propuestas?dept=${dept.slug}`}
                  className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-200 transition group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">{dept.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Descubre las acciones concretas que proponemos para esta área.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 group-hover:underline inline-flex items-center justify-end">
                    Ver propuestas
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Conoce a algunas de las personas que están detrás de Rumbo al Cambio: estudiantes con experiencia real en liderazgo y servicio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {candidates.slice(0, 3).map((member) => (
              <Link
                key={member.id}
                to={`/equipo/${member.slug}`}
                className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white"
              >
                <div className="aspect-square bg-gray-200 overflow-hidden relative">
                  <img
                    src={member.photo_url || ''}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#00385b] to-[#33abb6]" style={{ zIndex: -1 }}>
                    <span className="text-6xl font-bold text-white opacity-50">{member.name.charAt(0)}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-semibold">Ver Perfil</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00385b] transition-colors">{member.name}</h3>
                  <p className="text-[#c4a661] font-semibold">{member.position}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/equipo"
              className="inline-block px-8 py-3 bg-[#00385b] text-white rounded-lg hover:bg-[#004a75] transition font-semibold"
            >
              Ver Equipo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">¿Listo para el Cambio?</h2>
          <p className="text-lg md:text-xl mb-6 text-blue-100">
            Cada respuesta al formulario y cada conversación cuenta. Tu participación puede inclinar la balanza.
          </p>
          <p className="text-sm text-blue-100/80 mb-8">
            Tardarás menos de 3 minutos en completar el formulario y ayudarnos a construir un mejor colegio.
          </p>
          <Link
            to="/involucrarse"
            className="inline-block px-10 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition font-bold text-lg shadow-lg shadow-orange-900/30"
          >
            Involúcrate Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
