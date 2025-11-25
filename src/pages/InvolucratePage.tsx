import { useState, useEffect } from 'react';
import { Send, MessageSquare, Share2, X } from 'lucide-react';

// 1. EXTRACCIÓN DE CONSTANTES: Sacamos los datos estáticos fuera del componente.
// Esto evita que se redeclaren en cada renderizado, mejorando el rendimiento.
const statItems = [
  { value: '200+', label: 'Encuestas Recopiladas', color: 'text-[#00385b]' },
  { value: '50+', label: 'Horas de Planificación', color: 'text-[#33abb6]' },
  { value: '25+', label: 'Propuestas Finales', color: 'text-green-600' },
  { value: '100%', label: 'Compromiso Nuestro', color: 'text-[#c4a661]' },
];

const RESPONSES_SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/1rKb54u_MrBD7eRRd57CMiWnwGDdLlYsTOHghxmBEWr0/export?format=csv';

const RATING_QUESTION_HEADER =
  '¿Qué te parece el equipo Rumbo al Cambio y sus propuestas hasta ahora?';

// 2. COMPONENTES FUNCIONALES PEQUEÑOS: Creamos componentes pequeños y reutilizables
// para cada sección. Esto sigue el Principio de Responsabilidad Única.
const InvolvementHero = () => (
  <section className="bg-gradient-to-b from-[#e0eafc]/30 to-white py-10 sm:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-block p-2.5 sm:p-3 bg-[#c4a661]/20 rounded-lg mb-3 sm:mb-4">
        <Share2 className="text-[#c4a661]" size={28} />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Involúcrate</h1>
      <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
        Tu voz importa. Comparte tus ideas, aporta feedback, y sé parte del movimiento.
      </p>
    </div>
  </section>
);

const WaysToGetInvolved = () => (
  <div>
    <h2 className="text-3xl font-bold mb-4">Otras Formas de Involucrarte</h2>
    <p className="text-sm text-gray-600 mb-6">
      Además del formulario, hay muchas maneras de sumar tu voz y energía al proyecto Rumbo al Cambio.
    </p>
    <div className="space-y-5">
      <div className="bg-[#e0eafc]/40 p-5 rounded-xl border border-[#00385b]/20">
        <div className="flex gap-4">
          <MessageSquare className="text-[#00385b] flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-base mb-1">Comparte Feedback Directo</h3>
            <p className="text-gray-700 text-sm mb-2">
              Cuéntanos qué propuestas te gustan, qué mejorarías y qué nuevas ideas tienes para el colegio.
            </p>
            <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
              <li>Comenta en nuestras publicaciones.</li>
              <li>Escríbenos por mensaje directo si prefieres algo más personal.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="font-semibold text-base mb-1">Participa en las Actividades</h3>
        <p className="text-gray-700 text-sm mb-2">
          Asiste a las dinámicas, encuestas presenciales y espacios de diálogo que organizamos en el colegio.
        </p>
        <p className="text-xs text-gray-500">
          Mientras más participes, mejor podremos ajustar nuestras propuestas a lo que realmente necesita la comunidad.
        </p>
      </div>

      <div className="bg-[#33abb6]/10 p-5 rounded-xl border border-[#33abb6]/30">
        <h3 className="font-semibold text-base mb-1">Comparte el Proyecto</h3>
        <p className="text-gray-700 text-sm mb-2">
          Si te gusta lo que estamos construyendo, cuéntaselo a tus amigos, compañeros y profesores.
        </p>
        <p className="text-xs text-gray-600">
          Un simple “oye, mira estas propuestas” puede inspirar a más personas a sumarse al cambio.
        </p>
      </div>

      <div className="bg-[#c4a661]/10 p-5 rounded-xl border border-[#c4a661]/30">
        <h3 className="font-semibold text-base mb-1">Habla con el Equipo</h3>
        <p className="text-gray-700 text-sm mb-2">
          Acércate a cualquiera de los candidatos o integrantes del equipo para conversar cara a cara.
        </p>
        <p className="text-xs text-gray-700">
          Ninguna duda es pequeña. Queremos escucharte y explicarte cómo pensamos llevar a cabo cada propuesta.
        </p>
      </div>
    </div>
  </div>
);

const ImpactStats = () => {
  const [totalResponses, setTotalResponses] = useState<number | null>(null);
  const [rating5Percent, setRating5Percent] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchStats = async () => {
      try {
        const res = await fetch(RESPONSES_SHEET_CSV_URL);
        const text = await res.text();

        const lines = text
          .split('\n')
          .map((l) => l.trim())
          .filter((l) => l.length > 0);

        if (lines.length <= 1) return;

        const headerLine = lines[0];
        const headers = headerLine.split(',').map((h) => h.replace(/^"|"$/g, '').trim());

        const ratingIndex = headers.findIndex((h) => h === RATING_QUESTION_HEADER);
        if (ratingIndex === -1) return;

        let total = 0;
        let rating5 = 0;

        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(',').map((c) => c.replace(/^"|"$/g, '').trim());
          if (cols.length <= ratingIndex) continue;

          const value = cols[ratingIndex];
          if (!value) continue;

          total += 1;
          if (value === '5') {
            rating5 += 1;
          }
        }

        if (cancelled) return;

        setTotalResponses(total);
        setRating5Percent(total > 0 ? Math.round((rating5 / total) * 100) : 0);
      } catch (error) {
        console.error('No se pudieron cargar las estadísticas del formulario:', error);
      }
    };

    fetchStats();

    return () => {
      cancelled = true;
    };
  }, []);

  const items = [...statItems];

  if (totalResponses !== null) {
    items[0] = { ...items[0], value: String(totalResponses) };
  }

  if (rating5Percent !== null) {
    items[3] = { ...items[3], value: `${rating5Percent}%` };
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Tu Impacto hasta Ahora</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {items.map((item) => (
            <div key={item.label}>
              <div className={`text-4xl font-bold ${item.color} mb-2`}>
                {totalResponses === null && item.label === 'Encuestas Recopiladas'
                  ? '...'
                  : rating5Percent === null && item.label === 'Compromiso Nuestro'
                  ? '...'
                  : item.value}
              </div>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section className="bg-[#00385b] text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">¿Preguntas?</h2>
      <p className="text-xl mb-8">Contáctanos directamente en cualquier momento</p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a href="mailto:contacto@rumboacambio.com" className="px-6 py-3 bg-white text-[#00385b] rounded-lg font-semibold hover:bg-gray-100 transition">
          Email
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#33abb6] hover:bg-[#2da1ac] rounded-lg font-semibold transition">
          Instagram
        </a>
      </div>
    </div>
  </section>
);

// 3. COMPONENTE PRINCIPAL LIMPIO: Ahora la página principal es declarativa.
// Simplemente compone las secciones, sin lógica de estado compleja.
export function InvolucrarsePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      <InvolvementHero />
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Send className="text-blue-600" size={22} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base sm:text-xl font-semibold text-gray-900">Formulario de Ideas</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Haz clic en el botón para abrir el formulario de Google y compartir tus propuestas.
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                Abrir formulario de participación
              </button>
            </div>
            <WaysToGetInvolved />
          </div>
        </div>
      </section>
      <ImpactStats />
      <ContactSection />

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-auto h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 sm:px-6 py-3 bg-white/90 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-sm font-medium text-gray-800">Formulario de participación - Rumbo al Cambio</p>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="inline-flex items-center justify-center rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Cerrar formulario"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute inset-0 pt-10">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc1MCu30NFDzIPriLRRHLE_zunEzoNsQxueUe86iBql1j2qXg/viewform?usp=header"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Formulario de participación Rumbo al Cambio"
              >
                Cargando…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
