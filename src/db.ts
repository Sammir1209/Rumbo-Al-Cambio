export interface Proposal {
  id: string;
  title: string;
  description:string;
  problem_statement?: string | null;
  solution_details?: string | null;
}

export interface Candidate {
  id: string;
  slug: string;
  name: string;
  position: string;
  grade_level: string | null;
  photo_url: string | null;
  bio: string | null;
  personal_message: string | null;
  qualifications: string[];
  social_links: Record<string, string> | null;
  proposals: Proposal[];
}

export const candidates: Candidate[] = [
  {
    id: '1',
    slug: 'brijith-araceli',
    name: 'Brijith Araceli',
    position: 'Alcaldesa',
    grade_level: '4to C',
    photo_url: '/team/brijith.png',
    bio: 'Líder apasionada con un fuerte compromiso por el bienestar estudiantil. Brijith tiene experiencia en la organización de eventos y proyectos escolares, y su principal objetivo es crear un ambiente escolar más inclusivo, participativo y lleno de oportunidades para todos.',
    personal_message: '¡Juntos podemos lograr un cambio real! Mi compromiso es con ustedes, para que nuestra voz sea escuchada y nuestras ideas se hagan realidad.',
    qualifications: [
      'Delegada de clase por 2 años consecutivos.',
      'Ganadora del concurso de debate escolar 2026.',
      'Organizadora principal de la Semana Cultural 2023.',
    ],
    social_links: {
      instagram: 'https://instagram.com/brijith',
      whatsapp: 'https://wa.me/51999999991',
    },
    proposals: [
      {
        id: 'p1',
        title: 'Programa de Tutorías "Compañero Mayor"',
        description: 'Crear un sistema donde estudiantes de grados superiores ayuden académicamente a los de grados inferiores.',
        problem_statement: 'Muchos estudiantes tienen dificultades en ciertas materias y no siempre pueden recibir ayuda en casa.',
        solution_details: 'Se abrirán inscripciones para tutores voluntarios. Se asignará un tutor por cada 2-3 estudiantes, con reuniones semanales supervisadas.'
      },
      {
        id: 'p2',
        title: 'Buzón de Sugerencias Digital y Físico',
        description: 'Instalar buzones físicos y crear un formulario en línea para que todos los estudiantes puedan dejar sus ideas y preocupaciones de forma anónima.',
      }
    ]
  },
  {
    id: '2',
    slug: 'danier-sammir',
    name: 'Danier Sammir',
    position: 'Teniente Alcalde',
    grade_level: '4to C',
    photo_url: '/team/sammir.png',
    bio: 'Danier es un estudiante proactivo y organizado, conocido por su capacidad para llevar ideas a la práctica. Su enfoque está en la mejora de la infraestructura y los recursos disponibles para los estudiantes.',
    personal_message: 'Mi meta es trabajar para que tengamos un colegio con mejores herramientas para todos. ¡Cuento con su apoyo para hacerlo posible!',
    qualifications: [
      'Presidente del club de Sistemas.',
      'Coordinador de logística en eventos deportivos.'
    ],
    social_links: {
      instagram: 'https://instagram.com/danier-sammir',
      whatsapp: 'https://wa.me/51999999992',
    },
    proposals: [
       {
        id: 'p3',
        title: 'Mejora de las Áreas Verdes',
        description: 'Organizar jornadas de voluntariado para sembrar y cuidar nuevas áreas verdes en el colegio, creando espacios más agradables para el descanso.',
      }
    ]
  },
  {
    id: '3',
    slug: 'pepe-gabriel',
    name: 'Pepe Gabriel',
    position: 'Regidor de Educación, Cultura, Recreación y Deporte',
    grade_level: '4to C',
    photo_url: '/team/pepe.png',
    bio: 'Pepe es un entusiasta del arte y el deporte. Su misión es fomentar más actividades que permitan a los estudiantes expresar sus talentos y mantenerse activos.',
    personal_message: '¡Más cultura y más deporte para un colegio más feliz!',
    qualifications: ['Organizador de torneos inter-clases.', 'Miembro del club de música.'],
    social_links: {
      instagram: 'https://instagram.com/pepe-gabriel',
      whatsapp: 'https://wa.me/51999999993',
    },
    proposals: []
  },
  {
    id: '4',
    slug: 'jhoselyn-contreras',
    name: 'Jhoselyn Contreras',
    position: 'Regidora de Salud y Ambiente',
    grade_level: '1ro D',
    photo_url: '/team/jhoselyn.png',
    bio: 'Jhoselyn se preocupa profundamente por el bienestar de sus compañeros y la sostenibilidad de nuestro entorno escolar. Quiere promover hábitos saludables y un colegio más ecológico.',
    personal_message: 'Un ambiente sano para una mente sana. ¡Cuidemos nuestro colegio y a nosotros mismos!',
    qualifications: ['Líder de la brigada ecológica escolar.'],
    social_links: {
      instagram: 'https://instagram.com/jhoselyn-contreras',
      whatsapp: 'https://wa.me/51999999994',
    },
    proposals: []
  },
  {
    id: '5',
    slug: 'kiara-meilyn',
    name: 'Kiara Meilyn',
    position: 'Regidora de Emprendimientos y Actividades Productivas',
    grade_level: '3ro A',
    photo_url: '/team/kiara.png',
    bio: 'Kiara es una estudiante creativa y con visión de futuro. Su objetivo es crear oportunidades para que los estudiantes desarrollen sus habilidades de emprendimiento a través de ferias y talleres.',
    personal_message: '¡Apoyemos el talento y las ideas de nuestros compañeros!',
    qualifications: ['Ganadora de la feria de ciencias con un proyecto de negocio.'],
    social_links: {
      instagram: 'https://instagram.com/kiara-meilyn',
      whatsapp: 'https://wa.me/51999999995',
    },
    proposals: []
  },
  {
    id: '6',
    slug: 'fender-condor',
    name: 'Fender Cóndor del Águila',
    position: 'Regidor de Derechos del Niño, Niña y Adolescente',
    grade_level: '2do B',
    photo_url: '/team/fender.png',
    bio: 'Fender es un defensor de la justicia y la equidad. Su principal misión es asegurar que los derechos de todos los estudiantes sean respetados y que exista un canal seguro para reportar cualquier problema.',
    personal_message: 'Tu voz y tus derechos importan. ¡Lucharé para que siempre sean escuchados!',
    qualifications: ['Mediador escolar certificado por el programa de convivencia.'],
    social_links: {
      instagram: 'https://instagram.com/fender-condor',
      whatsapp: 'https://wa.me/51999999996',
    },
    proposals: []
  },
  {
    id: '7',
    slug: 'jeremy-joel',
    name: 'Jeremy Joel',
    position: 'Regidor de Comunicación y Tecnología',
    grade_level: '2do D',
    photo_url: '/team/jeremy.png',
    bio: 'Apasionado por la tecnología, Jeremy quiere modernizar la forma en que nos comunicamos en el colegio, utilizando herramientas digitales para mantener a todos informados de manera rápida y eficiente.',
    personal_message: '¡Información al instante para todos! Modernicemos la comunicación escolar.',
    qualifications: ['Administrador de la página de noticias del colegio.'],
    social_links: {
      instagram: 'https://instagram.com/jeremy-joel',
      whatsapp: 'https://wa.me/51999999997',
    },
    proposals: []
  }
];

export interface Department {
  id: string;
  name: string;
  slug: string;
  icon_name: string | null;
}

export const departments: Department[] = [
    { id: '1', name: 'Bienestar Estudiantil', slug: 'bienestar', icon_name: 'Heart' },
    { id: '2', name: 'Cultura y Deporte', slug: 'cultura-deporte', icon_name: 'Activity' },
    { id: '3', name: 'Academia e Innovación', slug: 'academia', icon_name: 'BookOpen' },
];