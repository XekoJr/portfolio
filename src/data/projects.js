// Dados estruturais dos projetos. Textos (descrições/destaques) vivem nos
// ficheiros de i18n, keyed por `id`. `liveUrl` são os subdomínios reais —
// `live: false` mostra "Brevemente" até o Tunnel/Caddy estar montado; volta
// a `false` se alguma plataforma precisar de sair do ar temporariamente.

// `theme` — cor de destaque por plataforma, usada para tingir o painel da
// tab respetiva (deixa claro que cada tab é uma plataforma diferente)
export const platforms = [
  {
    id: 'voltexchange',
    name: 'VoltExchange',
    repo: 'https://github.com/XekoJr/voltexchange',
    liveUrl: 'https://volt.andrepacheco.pt',
    live: true,
    image: '/thumbs/voltexchange.png',
    theme: '#22d3ee',
    stack: ['Node.js', 'Express', 'PostgreSQL 16', 'Vue 3', 'Tailwind', 'Docker'],
    demo: { user: 'alice@voltexchange.com', pass: 'senha123' },
  },
  {
    id: 'travel',
    name: 'Travel Companion',
    repo: 'https://github.com/XekoJr/travel-companion',
    liveUrl: 'https://travel.andrepacheco.pt',
    live: true,
    image: '/thumbs/travel-companion.png',
    theme: '#38bdf8',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
  },
  {
    id: 'folio',
    name: 'Folio',
    repo: 'https://github.com/XekoJr/folio-product',
    liveUrl: 'https://folio.andrepacheco.pt',
    live: true,
    image: '/thumbs/folio.png',
    theme: '#34d399',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Resend', 'Docker'],
  },
  {
    id: 'millionaire',
    name: 'Millionaire Game',
    repo: 'https://github.com/XekoJr/millionaire-game',
    liveUrl: 'https://millionaire.andrepacheco.pt',
    live: true,
    image: '/thumbs/game-page.jpg',
    theme: '#eab308',
    stack: ['Laravel', 'PHP', 'SQLite', 'JavaScript', 'Docker'],
  },
  {
    id: 'gamelobby',
    name: 'GameLobby',
    repo: 'https://github.com/XekoJr/gamelobby-platform',
    liveUrl: 'https://gamelobby.andrepacheco.pt',
    live: true,
    image: '/thumbs/gamelobby.jpg',
    theme: '#f97316',
    stack: ['PHP', 'MySQL', 'IGDB API', 'Docker'],
  },
  {
    id: 'kits',
    name: 'Kits',
    repo: 'https://github.com/XekoJr/Kits',
    liveUrl: 'https://kits.andrepacheco.pt',
    live: true,
    image: '/thumbs/kits.png',
    theme: '#ef4444',
    stack: ['Laravel', 'Svelte', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'ecofuturo',
    name: 'EcoFuturo',
    repo: 'https://github.com/XekoJr/ecofuturo',
    liveUrl: 'https://ecofuturo.andrepacheco.pt',
    live: true,
    image: '/thumbs/ecofuturo.jpg',
    theme: '#4ade80',
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
    // Build pygbag (WebAssembly) servida pelo próprio site
    runUrl: '/apps/netherfall/index.html',
    runLabel: 'play',
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
    runUrl: '/apps/repairflow/index.html', // versão terminal, CheerpJ + H2
    stack: ['Java', 'SQL', 'Swing', 'Service/DAO'],
  },
  {
    id: 'healthcenter',
    name: 'Health Center',
    repo: 'https://github.com/XekoJr/health-center',
    runUrl: '/apps/health-center/index.html', // CheerpJ (JVM em WASM)
    stack: ['Java'],
  },
  {
    id: 'repairshop',
    name: 'Repair Shop',
    repo: 'https://github.com/XekoJr/Repair-Shop',
    runUrl: '/apps/repair-shop/index.html', // Emscripten + xterm
    stack: ['C', 'Linked lists', 'Binary files'],
  },
  {
    id: 'gamestore',
    name: 'Game Store',
    repo: 'https://github.com/XekoJr/game-store-java',
    runUrl: '/apps/game-store/index.html', // CheerpJ (JVM em WASM)
    stack: ['Java'],
  },
  {
    id: 'storec',
    name: 'Store Management',
    repo: 'https://github.com/XekoJr/store-c',
    runUrl: '/apps/store-c/index.html', // Emscripten + xterm
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
    image: '/thumbs/qr-scanner.png', // banner composto a partir do ícone real do produto
    stack: ['React Native', 'Stripe'],
    privateProject: true,
  },
];
