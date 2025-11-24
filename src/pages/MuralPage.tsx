import { Brush } from 'lucide-react';

export function MuralPage() {
  return (
    <div className="bg-background">
      <header className="bg-gradient-to-b from-primary/10 to-background py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block p-4 bg-secondary/20 rounded-xl mb-4">
            <Brush className="text-secondary" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">Mural Interactivo</h1>
          <p className="text-lg text-text-muted">Un espacio para la creatividad y la expresión de todos.</p>
        </div>
      </header>

      <main className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-primary mb-4">Próximamente</h2>
          <p className="text-xl text-text-muted">Este proyecto es una de nuestras grandes promesas para el colegio.</p>
          <p className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md text-left"><strong>Nota importante:</strong> Si ganamos las elecciones, haremos este mural una realidad. Si no ganamos, este proyecto no se podrá llevar a cabo. ¡Tu voto decide!</p>
        </div>
      </main>
    </div>
  );
}