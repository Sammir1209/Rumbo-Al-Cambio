import { CheckSquare, MapPin, Calendar } from 'lucide-react';
import CountdownTimer from '../../CountdownTimer';

const Step = ({ icon, title, children, stepNumber }: { icon: React.ReactNode; title: string; children: React.ReactNode; stepNumber: number }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-md text-2xl font-bold">
        {stepNumber}
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <div className="text-text-muted leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

export function ComoVotarPage() {
  return (
    <div className="bg-background">
      <header className="bg-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">¿Cómo Votar por Rumbo al Cambio?</h1>
          <p className="text-lg text-accent">Tu voto es el motor del cambio. ¡Asegúrate de que cuente!</p>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12 flex justify-center">
            <CountdownTimer />
          </section>

          <section id="pasos" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Sigue estos 3 Sencillos Pasos</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              <Step icon={<MapPin size={24} />} title="Ubica tu Centro de Votación" stepNumber={1}>
                Asegúrate de conocer la dirección de tu centro de votación asignado. Puedes consultarlo en el sitio web oficial del Consejo Nacional Electoral con tu número de cédula. ¡Planifica tu día!
              </Step>
              <Step icon={<Calendar size={24} />} title="Asiste el Día de las Elecciones" stepNumber={2}>
                Las elecciones se llevarán a cabo el 28 de Noviembre. Recuerda llevar tu documento de identidad. Las mesas estarán abiertas desde las 2 PM  hasta las 6 PM.
              </Step>
              <Step icon={<CheckSquare size={24} />} title="Marca Correctamente la Papeleta" stepNumber={3}>
                Busca el logo de nuestro partido, <strong>Rumbo al Cambio</strong>. Marca con una 'X' o un '✓' dentro del recuadro correspondiente a nuestra lista para asegurar que tu voto sea válido.
              </Step>
            </div>
          </section>

          <section id="ejemplo">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary">Ejemplo Visual de Votación</h2>
              <div className="flex flex-col items-center">
                <p className="text-center text-text-muted mb-6 max-w-lg">Así se verá la papeleta. Para votar por nosotros, busca nuestro logo y marca con una X dentro del recuadro dorado.</p>
                <img 
                  src="/votar/como-votar.png" 
                  alt="Ejemplo de cómo marcar la papeleta de votación por Rumbo al Cambio" 
                  className="rounded-lg border-4 border-secondary shadow-lg max-w-sm w-full"
                />
                <p className="text-center text-sm text-gray-500 mt-4">
                  *Esta es una imagen de referencia para facilitar el proceso de votación.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 text-center bg-primary/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-primary">¡Tu Voto Hace la Diferencia!</h3>
            <p className="text-text-muted mt-2">Cada voto cuenta para construir el futuro que queremos. ¡Contamos contigo!</p>
          </section>
        </div>
      </main>
    </div>
  );
}