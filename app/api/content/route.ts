import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

const posts = [
  {
    title: 'Randonnée en montagne : Vue à couper le souffle',
    slug: 'randonnee-en-montagne-vue-couper-souffle',
    content:
      'La randonnée en montagne aujourd\'hui m\'a offert une vue incroyable. La nature est vraiment magnifique!',
  },
  {
    title: 'Défi lecture : Livre du mois',
    slug: 'defi-lecture-livre-du-mois',
    content:
      'Je me lance dans un défi lecture et je viens de commencer le livre du mois. L\'intrigue est captivante!',
  },
  {
    title: 'Séance photo urbaine',
    slug: 'seance-photo-urbaine',
    content:
      'Exploration urbaine avec mon appareil photo aujourd\'hui. Les paysages urbains offrent une esthétique unique.',
  },
  {
    title: 'Nouvelle passion : Jardinage',
    slug: 'nouvelle-passion-jardinage',
    content:
      'Je découvre une nouvelle passion pour le jardinage. Cultiver des plantes apporte une telle sérénité.',
  },
  {
    title: 'Rencontre avec un artiste local',
    slug: 'rencontre-artiste-local',
    content:
      'J\'ai eu la chance de rencontrer un artiste local incroyable. Son travail est inspirant et plein de créativité!',
  },
  {
    title: 'Cours de cuisine : Pâtisserie française',
    slug: 'cours-cuisine-patisserie-francaise',
    content:
      'Participé à un cours de pâtisserie française et c\'était à la fois amusant et délicieux! Les desserts étaient divins.',
  },
  {
    title: 'Entraînement intensif : Course à pied',
    slug: 'entrainement-intensif-course-a-pied',
    content:
      'Une séance d\'entraînement intensif de course à pied aujourd\'hui. La sensation de dépassement de soi est gratifiante.',
  },
  {
    title: 'Exploration de la culture japonaise',
    slug: 'exploration-culture-japonaise',
    content:
      'Plongée dans la culture japonaise avec ses traditions fascinantes et sa cuisine délicieuse. Une expérience enrichissante!',
  },
  {
    title: 'Projet d\'écriture : Nouveau chapitre',
    slug: 'projet-ecriture-nouveau-chapitre',
    content:
      'Je me lance dans un nouveau chapitre de mon projet d\'écriture. Chaque mot écrit est une aventure en soi.',
  },
  {
    title: 'Atelier d\'art plastique',
    slug: 'atelier-art-plastique',
    content:
      'J\'ai participé à un atelier d\'art plastique aujourd\'hui. Les possibilités créatives sont infinies!',
  },
  {
    title: 'Soirée cinéma : Films classiques',
    slug: 'soiree-cinema-films-classiques',
    content:
      'Une soirée cinéma à regarder des films classiques. Ces chefs-d\'œuvre intemporels ne cessent de m\'émerveiller.',
  },
  {
    title: 'Discussion philosophique : Socrate et la sagesse',
    slug: 'discussion-philosophique-socrate-sagesse',
    content:
      'Une discussion profonde sur les enseignements de Socrate et leur pertinence dans nos vies modernes. Fascinant!',
  },
  {
    title: 'Nouvelle routine matinale',
    slug: 'nouvelle-routine-matinale',
    content:
      'Je teste une nouvelle routine matinale pour démarrer la journée avec énergie et positivité. Un pas vers le changement!',
  },
  {
    title: 'Journée de bénévolat : Aider la communauté',
    slug: 'journee-benevolat-aider-communaute',
    content:
      'Une journée enrichissante passée à aider la communauté locale. Chaque action compte pour faire une différence!',
  },
];

export async function GET() {
  const session = await getServerSession();

  return NextResponse.json(posts);
}
