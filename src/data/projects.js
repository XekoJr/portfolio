// Dados estruturais dos projetos. Textos (descrições/destaques) vivem nos
// ficheiros de i18n, keyed por `id`. `liveUrl` são os subdomínios previstos —
// `live: false` mostra "Live soon" até o Tunnel/Caddy estar montado; basta
// mudar para `true` quando cada plataforma for para o ar.

export const platforms = [
  {
    id: 'voltexchange',
    name: 'VoltExchange',
    repo: 'https://github.com/XekoJr/voltexchange',
    liveUrl: 'https://volt.andrepacheco.pt',
    live: false,
    image: '/thumbs/voltexchange.png',
    stack: ['Node.js', 'Express', 'PostgreSQL 16', 'Vue 3', 'Tailwind', 'Docker'],
    demo: { user: 'alice@voltexchange.com', pass: 'senha123' },
  },
  {
    id: 'travel',
    name: 'Travel Companion',
    repo: 'https://github.com/XekoJr/travel-companion',
    liveUrl: 'https://travel.andrepacheco.pt',
    live: false,
    image: '/thumbs/travel-companion.png',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
  },
  {
    id: 'folio',
    name: 'Folio',
    repo: 'https://github.com/XekoJr/folio-product',
    liveUrl: 'https://folio.andrepacheco.pt',
    live: false,
    image: '/thumbs/folio.png',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Resend', 'Docker'],
  },
  {
    id: 'millionaire',
    name: 'Millionaire Game',
    repo: 'https://github.com/XekoJr/millionaire-game',
    liveUrl: 'https://millionaire.andrepacheco.pt',
    live: false,
    image: '/thumbs/game-page.jpg',
    stack: ['Laravel', 'PHP', 'SQLite', 'JavaScript', 'Docker'],
  },
  {
    id: 'gamelobby',
    name: 'GameLobby',
    repo: 'https://github.com/XekoJr/gamelobby-platform',
    liveUrl: 'https://gamelobby.andrepacheco.pt',
    live: false,
    image: '/thumbs/gamelobby.jpg',
    stack: ['PHP', 'MySQL', 'IGDB API', 'Docker'],
  },
  {
    id: 'kits',
    name: 'Kits',
    repo: 'https://github.com/XekoJr/Kits',
    liveUrl: 'https://kits.andrepacheco.pt',
    live: false,
    image: '/thumbs/kits.png',
    stack: ['Laravel', 'Svelte', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'ecofuturo',
    name: 'EcoFuturo',
    repo: 'https://github.com/XekoJr/ecofuturo',
    liveUrl: 'https://ecofuturo.andrepacheco.pt',
    live: false,
    image: '/thumbs/ecofuturo.jpg',
    stack: ['PHP', 'MySQL', 'Docker'],
  },
];

export const games = [
  {
    id: 'netherfall',
    name: 'MCG: Netherfall',
    repo: 'https://github.com/XekoJr/mcg-netherfall',
    image: '/thumbs/netherfall.png',
    // Vídeo local (re-comprimido para 720p/12MB), aberto numa modal;
    // original: NetherfallTrailerAndrePacheco-compressed.mp4 no repo do jogo
    trailer: '/trailers/netherfall.mp4',
    stack: ['Python', 'Pygame'],
  },
];

// O primeiro projeto "a sério" — HTML/CSS vanilla, não é um jogo, fica
// numa categoria própria para mostrar a progressão desde o início
export const firstProject = {
  id: 'f1page',
  name: 'F1: Drive to Survive',
  repo: 'https://github.com/XekoJr/f1-drive-to-survive',
  liveUrl: 'https://xekojr.github.io/f1-drive-to-survive/F1DriveToSurvive.html',
  live: true,
  image: '/thumbs/f1-page.jpg',
  stack: ['HTML', 'CSS'],
};

export const systems = [
  {
    id: 'repairflow',
    name: 'RepairFlow / RepairFlow-UI',
    repo: 'https://github.com/XekoJr/RepairFlow',
    stack: ['Java', 'Swing', 'Service/DAO'],
  },
  {
    id: 'healthcenter',
    name: 'Health Center',
    repo: 'https://github.com/XekoJr/health-center',
    stack: ['Java'],
  },
  {
    id: 'repairshop',
    name: 'Repair Shop',
    repo: 'https://github.com/XekoJr/Repair-Shop',
    stack: ['C', 'Linked lists', 'Binary files'],
  },
  {
    id: 'gamestore',
    name: 'Game Store',
    repo: 'https://github.com/XekoJr/game-store-java',
    stack: ['Java'],
  },
  {
    id: 'storec',
    name: 'Store Management',
    repo: 'https://github.com/XekoJr/store-c',
    stack: ['C'],
  },
];

export const mobile = [
  {
    id: 'androidapps',
    name: 'Android Apps',
    repo: 'https://github.com/XekoJr/android-apps',
    image: '/thumbs/android-apps.png',
    stack: ['Kotlin', 'Android Studio'],
  },
  {
    id: 'qrscanner',
    name: 'QR Safe Scanner',
    repo: null, // produto privado — sem link de código
    image: null,
    stack: ['Kotlin', 'Android', 'Stripe'],
    privateProject: true,
  },
];
