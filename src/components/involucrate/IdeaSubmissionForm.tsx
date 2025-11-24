import { useState, FormEvent } from 'react';
import { Send, MessageSquare } from 'lucide-react';

interface IdeaSubmissionFormProps {
  onSubmit?: (idea: { title: string; description: string }) => void;
}

export function IdeaSubmissionForm({ onSubmit }: IdeaSubmissionFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Simulación de envío (podrías guardar en localStorage o enviar a un backend en el futuro)
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (onSubmit) {
        onSubmit({ title, description });
      }

      setTitle('');
      setDescription('');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 2500);
    } catch (error) {
      console.error('Error al enviar la idea:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 rounded-lg">
          <MessageSquare className="text-blue-600" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Comparte tu idea</h3>
      </div>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
          <p className="flex items-center gap-2">
            <span className="inline-block h-4 w-4 rounded-full bg-green-500" />
            ¡Gracias por tu idea! La tendremos en cuenta.
          </p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Título de la idea
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ej: Más áreas verdes en el colegio"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            disabled={isSubmitting}
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Describe tu propuesta
          </label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Explica el problema y cómo tu idea puede ayudar a mejorarlo..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-vertical"
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting || !title.trim() || !description.trim()}
            className={`inline-flex items-center px-5 py-2 rounded-lg text-sm font-medium text-white shadow-sm transition-colors ${
              isSubmitting || !title.trim() || !description.trim()
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
          >
            {isSubmitting ? (
              <span className="text-xs">Enviando...</span>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar idea
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
