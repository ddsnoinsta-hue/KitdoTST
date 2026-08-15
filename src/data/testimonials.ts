import { Testimonial, RecentBuyerNotification } from '../types';

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos Eduardo Santos',
    role: 'Técnico em Segurança do Trabalho',
    city: 'Curitiba - PR',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    text: 'Economizei meses de trabalho! Os modelos de PGR e as apresentações em PowerPoint para os treinamentos da NR-35 são excepcionais. Aplico os DDS do drive todos os dias com a equipe de obras.',
    rating: 5,
    badge: 'Comprador Verificado'
  },
  {
    id: 't2',
    name: 'Engª. Amanda Rodrigues',
    role: 'Engenheira de Segurança do Trabalho',
    city: 'Belo Horizonte - MG',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    text: 'Por R$ 35,00 é um presente. Só a planilha automatizada de gestão de EPIs e as APRs editáveis já valem mais de R$ 300,00. O material é muito organizado e fácil de encontrar.',
    rating: 5,
    badge: 'Comprador Verificado'
  },
  {
    id: 't3',
    name: 'Lucas Pires',
    role: 'Estudante & Concurseiro SST',
    city: 'Campinas - SP',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: 'Estou estudando para o concurso da Petrobras em SST e as apostilas de resumos das NRs ajudaram demais na fixação do conteúdo. Recebi o link no meu e-mail em menos de 1 minuto.',
    rating: 5,
    badge: 'Comprador Verificado'
  },
  {
    id: 't4',
    name: 'Mariana Castro',
    role: 'Coordenadora de EHS',
    city: 'Recife - PE',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    text: 'Acompanho a página @ddsnoinsta há anos e sabia que o material seria de altíssima qualidade. Usamos os vídeos e os DDS em todas as nossas filiais.',
    rating: 5,
    badge: 'Comprador Verificado'
  }
];

export const recentBuyersData: RecentBuyerNotification[] = [
  { id: 'b1', name: 'Marcos V.', location: 'São Paulo - SP', timeAgo: 'há 2 minutos', role: 'Técnico de SST' },
  { id: 'b2', name: 'Juliana M.', location: 'Goiânia - GO', timeAgo: 'há 5 minutos', role: 'Engenheira de Segurança' },
  { id: 'b3', name: 'Fernando R.', location: 'Porto Alegre - RS', timeAgo: 'há 8 minutos', role: 'Consultor SST' },
  { id: 'b4', name: 'Patrícia S.', location: 'Salvador - BA', timeAgo: 'há 12 minutos', role: 'Técnica em SST' },
  { id: 'b5', name: 'Rodrigo A.', location: 'Manaus - AM', timeAgo: 'há 15 minutos', role: 'Estudante de TST' }
];
