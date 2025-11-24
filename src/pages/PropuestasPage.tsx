import { useSearchParams } from 'react-router-dom';
import { Lightbulb } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

interface Proposal {
  id: string;
  title: string;
  description: string;
  problem_statement: string | null;
  solution_details: string | null;
  expected_impact: string | null;
  timeline: string | null;
  budget_estimate: string | null;
  department_slug: string;
}

// Datos locales de departamentos y propuestas (sin Supabase)
const departments: Department[] = [
  {
    id: '1',
    name: 'Bienestar Estudiantil',
    slug: 'bienestar',
    description:
      'Propuestas enfocadas en la salud mental, el clima escolar y el apoyo entre estudiantes.',
  },
  {
    id: '2',
    name: 'Cultura y Deporte',
    slug: 'cultura-deporte',
    description:
      'Iniciativas para más arte, música, deporte y espacios donde los talentos puedan brillar.',
  },
  {
    id: '3',
    name: 'Academia e Innovación',
    slug: 'academia',
    description:
      'Ideas para mejorar el aprendizaje, la tecnología y las oportunidades académicas.',
  },
];

const proposals: Proposal[] = [
  {
    id: 'p1',
    title: 'Programa de Tutorías "Compañero Mayor"',
    description:
      'Estudiantes de grados superiores apoyan académicamente a quienes lo necesiten mediante tutorías organizadas.',
    problem_statement:
      'Muchos estudiantes se quedan atrás en cursos clave y no siempre cuentan con apoyo en casa o academias.',
    solution_details:
      'Crear parejas o grupos de tutoría entre grados, con horarios fijos en recreos o después de clases y seguimiento por parte del municipio escolar.',
    expected_impact:
      'Reducción de desaprobaciones, más confianza en clase y un ambiente de colaboración entre grados.',
    timeline: 'Inicio del piloto en el primer bimestre, expansión al resto de grados en el segundo.',
    budget_estimate: 'Materiales impresos y reconocimientos simbólicos para tutores (diplomas, constancias).',
    department_slug: 'academia',
  },
  {
    id: 'p2',
    title: 'Buzón de Sugerencias Digital y Físico',
    description:
      'Canales permanentes para que cualquier estudiante pueda dejar ideas, quejas o propuestas de manera segura.',
    problem_statement:
      'Muchos problemas del día a día no llegan a la dirección o al municipio porque los estudiantes no saben dónde reportarlos.',
    solution_details:
      'Instalar buzones físicos en puntos visibles y habilitar un formulario digital. El equipo se compromete a revisar y responder de forma periódica.',
    expected_impact:
      'Mayor sensación de escucha, soluciones más rápidas a problemas concretos y más ideas para mejorar el colegio.',
    timeline: 'Instalación de buzones en el primer mes de gestión y reportes quincenales de respuestas.',
    budget_estimate: 'Implementación de buzones físicos sencillos y difusión del formulario digital.',
    department_slug: 'bienestar',
  },
  {
    id: 'p3',
    title: 'Mejora de Áreas Verdes y Zonas de Descanso',
    description:
      'Recuperar y embellecer espacios del colegio para que sean lugares agradables donde descansar y convivir.',
    problem_statement:
      'Las áreas comunes están deterioradas o poco aprovechadas, lo que afecta el bienestar y el orgullo por nuestra escuela.',
    solution_details:
      'Jornadas de limpieza, siembra de plantas, creación de murales y colocación de bancas en puntos estratégicos.',
    expected_impact:
      'Un colegio más bonito, cuidado por todos y con espacios que inviten a quedarse y compartir.',
    timeline: 'Planificación en el primer mes, primeras jornadas en el segundo y mantenimiento constante.',
    budget_estimate: 'Coordinación con dirección, apoyo de voluntariado y materiales básicos para jardinería y pintura.',
    department_slug: 'bienestar',
  },
  {
    id: 'p4',
    title: 'Liga Deportiva y Jornadas Recreativas',
    description:
      'Organizar campeonatos internos y días temáticos deportivos y culturales para fortalecer la integración.',
    problem_statement:
      'Muchos estudiantes quieren participar en más actividades deportivas y culturales, pero no existen espacios organizados durante el año.',
    solution_details:
      'Calendario de torneos por grados, equipos mixtos, días de talentos y presentaciones artísticas.',
    expected_impact:
      'Mayor participación estudiantil, trabajo en equipo y orgullo por representar a cada sección.',
    timeline: 'Primer torneo en el segundo mes de gestión, con eventos mensuales posteriores.',
    budget_estimate: 'Premios simbólicos, actualización de materiales deportivos y coordinación de espacios.',
    department_slug: 'cultura-deporte',
  },
];

export function PropuestasPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedDept = searchParams.get('dept') || '';

  const filteredProposals = selectedDept
    ? proposals.filter((p) => p.department_slug === selectedDept)
    : proposals;

  const currentDept = departments.find((d) => d.slug === selectedDept);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#e0eafc]/30 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-[#c4a661]/20 rounded-lg mb-4">
            <Lightbulb className="text-[#c4a661]" size={32} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Nuestras Propuestas</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Propuestas concretas, accionables y medibles para transformar tu experiencia estudiantil.
          </p>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSearchParams({});
              }}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                !selectedDept
                  ? 'bg-[#00385b] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Todas las Propuestas
            </button>
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => {
                  setSearchParams({ dept: dept.slug });
                }}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedDept === dept.slug
                    ? 'bg-[#00385b] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Proposals List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentDept && (
            <div className="mb-12 bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-2">{currentDept.name}</h2>
              {currentDept.description && (
                <p className="text-gray-600">{currentDept.description}</p>
              )}
            </div>
          )}

          {filteredProposals.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-600 text-lg">No hay propuestas disponibles en esta categoría.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProposals.map((proposal) => (
                <div key={proposal.id} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{proposal.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{proposal.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {proposal.problem_statement && (
                      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                        <h4 className="font-bold text-red-800 mb-2">El Problema</h4>
                        <p className="text-gray-700">{proposal.problem_statement}</p>
                      </div>
                    )}
                    {proposal.solution_details && (
                      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                        <h4 className="font-bold text-green-800 mb-2">Nuestra Solución</h4>
                        <p className="text-gray-700">{proposal.solution_details}</p>
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {proposal.expected_impact && (
                      <div className="bg-[#e0eafc]/50 p-4 rounded">
                        <p className="text-sm font-semibold text-[#00385b] mb-1">Impacto Esperado</p>
                        <p className="text-gray-700">{proposal.expected_impact}</p>
                      </div>
                    )}
                    {proposal.timeline && (
                      <div className="bg-purple-50 p-4 rounded">
                        <p className="text-sm font-semibold text-purple-800 mb-1">Cronograma</p>
                        <p className="text-gray-700">{proposal.timeline}</p>
                      </div>
                    )}
                    {proposal.budget_estimate && (
                      <div className="bg-[#c4a661]/10 p-4 rounded">
                        <p className="text-sm font-semibold text-[#c4a661] mb-1">Presupuesto</p>
                        <p className="text-gray-700">{proposal.budget_estimate}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
