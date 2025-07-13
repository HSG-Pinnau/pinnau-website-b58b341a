
export const navItems = [
  { name: 'Home', href: '/', icon: 'Home', internal: true },
  { name: 'Über uns', href: '/uber-uns', icon: 'Info', internal: true },
  { name: 'News', href: '/news', icon: 'Newspaper', internal: true },
  { name: 'Kontakt', href: '/kontakt', icon: 'Phone', internal: true },
  { name: 'Shop', href: 'https://hsg-pinnau.nordsport.store/vereinskollektion.html?p=2', icon: 'ShoppingBag', internal: false },
];

export const teamStructure = {
  erwachsene: {
    damen: [
      { name: 'Damen 1', href: '/teams/damen1' },
      { name: 'Damen 2', href: '/teams/damen2' },
      { name: 'Damen 3', href: '/teams/damen3' },
    ],
    herren: [
      { name: 'Herren 1', href: '/teams/herren1' },
      { name: 'Herren 2', href: '/teams/herren2' },
      { name: 'Herren 3', href: '/teams/herren3' },
    ]
  },
  jugend: {
    maennlich: [
      { name: 'A-Jugend 1', href: '/teams/a-jugend-m1' },
      { name: 'A-Jugend 2', href: '/teams/a-jugend-m2' },
      { name: 'B-Jugend 1', href: '/teams/b-jugend-m1' },
      { name: 'C-Jugend 1', href: '/teams/c-jugend-m1' },
      { name: 'D-Jugend 1', href: '/teams/d-jugend-m1' },
      { name: 'E-Jugend 1', href: '/teams/e-jugend-m1' },
    ],
    weiblich: [
      { name: 'A-Jugend 1', href: '/teams/a-jugend-w1' },
      { name: 'B-Jugend 1', href: '/teams/b-jugend-w1' },
      { name: 'C-Jugend 1', href: '/teams/c-jugend-w1' },
      { name: 'D-Jugend 1', href: '/teams/d-jugend-w1' },
      { name: 'E-Jugend 1', href: '/teams/e-jugend-w1' },
    ]
  },
  minis: [
    { name: 'Minis', href: '/teams/minis' }
  ],
  toppis: [
    { name: 'Toppis', href: '/teams/toppis' }
  ]
};
