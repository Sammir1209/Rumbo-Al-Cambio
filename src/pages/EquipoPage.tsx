import { Link } from 'react-router-dom';
import { candidates } from '../db';
import { Users } from 'lucide-react';

export function EquipoPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 rounded-full mb-4 text-xs font-semibold text-secondary uppercase tracking-wide justify-center">
            <Users size={18} />
            <span>Equipo Rumbo al Cambio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Conoce a Nuestro Equipo</h1>
          <p className="text-base md:text-lg text-text-muted max-w-3xl mx-auto">
            Estudiantes de distintos grados y secciones unidos por una misma idea: convertir el municipio escolar en un espacio que realmente funcione para todos.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {candidates.map((member) => (
              <Link
                key={member.id}
                to={`/equipo/${member.slug}`}
                className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-2 border border-gray-100 hover:border-primary/40"
              >
                <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
                  <img
                    src={member.photo_url || ''}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-start gap-1">
                    <h3 className="text-xl font-bold text-white tracking-tight line-clamp-2">{member.name}</h3>
                    <p className="text-secondary font-semibold text-sm bg-white/10 px-2 py-0.5 rounded-full">
                      {member.position}
                    </p>
                    {member.grade_level && (
                      <span className="mt-1 inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-black/40 text-gray-100">
                        {member.grade_level}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Mission Statement */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Nuestra Filosofía</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-primary">Misión</h3>
              <p className="text-text-muted">
                Transformar el municipio escolar de una institución simbólica en una fuerza activa de cambio positivo. Nos comprometemos con la comunicación transparente, resultados medibles, y priorizar las necesidades estudiantiles sobre la política.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-secondary">Visión</h3>
              <p className="text-text-muted">
                Una escuela donde cada voz estudiantil es escuchada, donde los recursos se distribuyen equitativamente, y donde el municipio escolar entrega mejoras tangibles a la vida diaria de cada estudiante.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
