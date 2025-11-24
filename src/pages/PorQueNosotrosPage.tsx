import { CheckCircle, Users, Zap, Lock, Microscope, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    title: "Propuestas Concretas",
    description: "A diferencia de otros, no hacemos promesas vagas. Cada propuesta incluye presupuesto, cronograma y métricas de éxito específicas.",
    icon: CheckCircle,
    color: "blue"
  },
  {
    title: "Equipo Diverso y Capacitado",
    description: "Representamos múltiples perspectivas, grados y experiencias. Juntos comprendemos diferentes necesidades estudiantiles.",
    icon: Users,
    color: "purple"
  },
  {
    title: "Acción Inmediata",
    description: "Nos comprometemos a implementar al menos 3 propuestas importantes en el primer semestre. No esperas resultados, los ves.",
    icon: Zap,
    color: "orange"
  },
  {
    title: "Transparencia Total",
    description: "Reportes mensuales públicos, presupuesto abierto, y acceso directo a nuestros datos. Tu confianza es nuestro recurso más importante.",
    icon: Lock,
    color: "green"
  },
  {
    title: "Investigación Seria",
    description: "Recopilamos más de 200 encuestas estudiantiles. Nuestras propuestas se basan en datos reales de necesidades reales.",
    icon: Microscope,
    color: "red"
  },
  {
    title: "Experiencia Relevante",
    description: "15+ posiciones de liderazgo, 20+ eventos organizados, y $5,000+ recaudados en iniciativas estudiantiles previas.",
    icon: Target,
    color: "indigo"
  }
];

export function PorQueNosotrosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Por Qué Rumbo al Cambio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            10 razones por las que somos la mejor opción para el gobierno estudiantil.
          </p>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              const colorClasses: Record<string, { bg: string; text: string }> = {
                blue: { bg: "bg-blue-100", text: "text-blue-600" },
                purple: { bg: "bg-purple-100", text: "text-purple-600" },
                orange: { bg: "bg-orange-100", text: "text-orange-600" },
                green: { bg: "bg-green-100", text: "text-green-600" },
                red: { bg: "bg-red-100", text: "text-red-600" },
                indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
              };
              const colors = colorClasses[reason.color];

              return (
                <div key={idx} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
                  <div className={`inline-block p-3 ${colors.bg} rounded-lg mb-4`}>
                    <Icon className={colors.text} size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nosotros vs. Gobierno Estudiantil Tradicional</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary-900">
                  <th className="px-4 py-3 text-left font-bold">Aspecto</th>
                  <th className="px-4 py-3 text-left font-bold text-blue-600">Rumbo al Cambio</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-600">Gobierno Tradicional</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-semibold">Planificación</td>
                  <td className="px-4 py-3 text-green-700">Propuestas detalladas con cronogramas</td>
                  <td className="px-4 py-3 text-gray-600">Promesas genéricas</td>
                </tr>
                <tr className="border-b bg-gray-100">
                  <td className="px-4 py-3 font-semibold">Transparencia</td>
                  <td className="px-4 py-3 text-green-700">Reportes públicos mensuales</td>
                  <td className="px-4 py-3 text-gray-600">Sin reportes regulares</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-semibold">Investigación</td>
                  <td className="px-4 py-3 text-green-700">200+ encuestas estudiantiles</td>
                  <td className="px-4 py-3 text-gray-600">Basado en intuición</td>
                </tr>
                <tr className="border-b bg-gray-100">
                  <td className="px-4 py-3 font-semibold">Resultados</td>
                  <td className="px-4 py-3 text-green-700">Compromiso de 3+ proyectos en semestre 1</td>
                  <td className="px-4 py-3 text-gray-600">Resultados variables</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-3 font-semibold">Comunicación</td>
                  <td className="px-4 py-3 text-green-700">Acceso directo, oficinas abiertas</td>
                  <td className="px-4 py-3 text-gray-600">Comunicación limitada</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-4 py-3 font-semibold">Compromiso</td>
                  <td className="px-4 py-3 text-green-700">Equipo con experiencia demostrada</td>
                  <td className="px-4 py-3 text-gray-600">Experiencia variable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Otros Estudiantes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Rumbo al Cambio está mostrando un nivel de seriedad que no había visto antes. Sus propuestas tienen sentido y son realistas."
              </p>
              <p className="font-semibold">- María, 11vo Grado</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Finalmente, un equipo que habla nuestro idioma. Creen en hacer cosas, no solo en hablar de hacerlas."
              </p>
              <p className="font-semibold">- Carlos, 10mo Grado</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "He visto a estos candidatos realmente trabajar. No es solo campaña, es quiénes son todos los días."
              </p>
              <p className="font-semibold">- Ana, Maestra</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Su énfasis en transparencia me da confianza de que seguirán siendo honestos después de ganar."
              </p>
              <p className="font-semibold">- Jorge, 9no Grado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Listo para El Cambio</h2>
          <p className="text-xl mb-8">Únete a cientos de estudiantes votando por un gobierno real.</p>
          <Link to="/propuestas">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-bold text-lg">
              Conoce Nuestras Propuestas
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
