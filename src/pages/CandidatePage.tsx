import { useMemo, ReactNode } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Mail, Briefcase, Award, Linkedin, Twitter, Github, Instagram, Link as LinkIcon, AlertCircle, UserRound } from 'lucide-react';
import { candidates, Candidate, Proposal } from '../db';

const SocialIcon = ({ platform, ...props }: { platform: string } & React.ComponentProps<typeof LinkIcon>) => {
  const lowerPlatform = platform.toLowerCase();
  if (lowerPlatform.includes('linkedin')) {
    return <Linkedin {...props} />;
  }
  if (lowerPlatform.includes('twitter')) {
    return <Twitter {...props} />;
  }
  if (lowerPlatform.includes('github')) {
    return <Github {...props} />;
  }
  if (lowerPlatform.includes('instagram')) {
    return <Instagram {...props} />;
  }
  return <LinkIcon {...props} />;
};

const SocialLinks = ({ links }: { links: Record<string, string> }) => {
  if (!links || Object.keys(links).length === 0) return null;

  return (
    <div className="mt-6 flex items-center gap-4">
      <p className="text-sm font-semibold text-gray-600">Sígueme:</p>
      <div className="flex gap-4">
        {Object.entries(links).map(([platform, url]) => (
          <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-900 transition-colors">
            <SocialIcon platform={platform} size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

const CandidateHero = ({ candidate }: { candidate: Candidate }) => {
  const lowerPosition = candidate.position.toLowerCase();
  const isFemale = lowerPosition.includes('regidora') || lowerPosition.includes('alcaldesa');

  return (
    <section className="bg-gradient-to-b from-background to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#001f3f] via-[#00385b] to-[#33abb6] flex items-center justify-center">
            <div
              className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center shadow-lg border-2 ${
                isFemale
                  ? 'bg-pink-50 border-pink-300 text-pink-600'
                  : 'bg-blue-50 border-blue-300 text-blue-600'
              }`}
            >
              <UserRound size={64} />
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">Candidato</p>
            <h1 className="text-4xl font-bold mb-2">{candidate.name}</h1>
            <p className="text-2xl text-secondary font-semibold mb-3">{candidate.position}</p>

            {candidate.grade_level && (
              <p className="text-gray-600 mb-3">
                <span className="font-semibold">Grado:</span> {candidate.grade_level}
              </p>
            )}

            {candidate.personal_message && (
              <div className="bg-blue-50 border-l-4 border-accent p-4 rounded mb-4">
                <p className="text-gray-800 italic">"{candidate.personal_message}"</p>
              </div>
            )}

            {candidate.social_links && <SocialLinks links={candidate.social_links} />}
          </div>
        </div>
      </div>
    </section>
  );
};

const CandidateSection = ({ title, icon, children, bgColor = 'bg-white' }: { title: string, icon: ReactNode, children: ReactNode, bgColor?: string }) => (
  <section className={`py-16 ${bgColor}`}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const ProposalCard = ({ proposal }: { proposal: Proposal }) => (
  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary shadow-md hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold mb-3 text-gray-800">{proposal.title}</h3>
    <p className="text-gray-700 mb-4">{proposal.description}</p>

    {proposal.problem_statement && (
      <div className="mb-4 pl-4 border-l-2 border-red-200">
        <h4 className="font-semibold text-red-600 mb-1">Problema</h4>
        <p className="text-gray-600 text-sm">{proposal.problem_statement}</p>
      </div>
    )}

    {proposal.solution_details && (
      <div className="pl-4 border-l-2 border-green-200">
        <h4 className="font-semibold text-green-600 mb-1">Solución</h4>
        <p className="text-gray-600 text-sm">{proposal.solution_details}</p>
      </div>
    )}
  </div>
);

const SkeletonLoader = () => (
  <div className="animate-pulse">
    {/* Skeleton Hero */}
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="aspect-square bg-gray-300 rounded-lg"></div>
          <div className="md:col-span-2 space-y-4">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-10 bg-gray-300 rounded w-3/4"></div>
            <div className="h-8 bg-gray-300 rounded w-1/2"></div>
            <div className="h-20 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
    {/* Skeleton Section */}
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 bg-gray-300 rounded w-1/3 mb-8"></div>
        <div className="space-y-6">
          <div className="h-24 bg-gray-200 rounded-lg"></div>
          <div className="h-24 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
);

const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <AlertCircle className="text-red-500 w-16 h-16 mb-4" />
    <h1 className="text-2xl font-bold text-gray-800 mb-2">Ocurrió un error</h1>
    <p className="text-gray-600 mb-6">{message}</p>
    <RouterLink to="/" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
      Volver al inicio
    </RouterLink>
  </div>
);

export function CandidatePage() {
  const { slug } = useParams<{ slug: string }>();
  
  const candidate = useMemo(() => {
    return candidates.find(c => c.slug === slug);
  }, [slug]);

  if (!candidate) {
    return <ErrorDisplay message="El candidato que buscas no fue encontrado." />;
  }

  const proposals = candidate.proposals || [];

  return (
    <div>
      <CandidateHero candidate={candidate} />

      {candidate.bio && (
        <CandidateSection title="Conóceme" icon={<span className="text-3xl">👋</span>} bgColor="bg-white">
          <div className="prose max-w-none text-gray-700 leading-relaxed text-lg">
            {candidate.bio}
          </div>
        </CandidateSection>
      )}

      {candidate.qualifications && candidate.qualifications.length > 0 && (
        <CandidateSection title="Mis Cualificaciones" icon={<Award className="text-primary" size={32} />} bgColor="bg-gray-50">
          <div className="grid md:grid-cols-2 gap-4">
            {candidate.qualifications.map((qual, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700">{qual}</p>
              </div>
            ))}
          </div>
        </CandidateSection>
      )}

      {proposals.length > 0 && (
        <CandidateSection title="Mis Propuestas" icon={<Briefcase className="text-secondary" size={32} />} bgColor="bg-white">
          <div className="space-y-8">
            {proposals.map((proposal) => (
              <ProposalCard key={proposal.id} proposal={proposal} />
            ))}
          </div>
        </CandidateSection>
      )}

      <section className="py-16 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">¿Preguntas?</h2>
          <p className="text-gray-700 mb-8">Contáctame para hablar sobre mis propuestas o el proyecto de Rumbo al Cambio.</p>
          <a
            href={`mailto:contacto@rumboacambio.com?subject=Pregunta para ${candidate.name}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Mail size={20} />
            Enviar Mensaje
          </a>
        </div>
      </section>
    </div>
  );
}
