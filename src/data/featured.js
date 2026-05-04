const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const featured = {
  hero: {
    title: 'The Heritage Suite',
    desc: 'Hand-pressed gold foiling on premium textured paper.',
    image: u('photo-1519741497674-611481863552', 1400),
  },
  cards: [
    {
      title: 'Custom Emboss',
      desc: 'Tactile depth that speaks volumes.',
      tone: 'secondary',
      icon: '✨',
    },
    {
      title: 'Bespoke Colors',
      desc: 'Pantone-perfect matching for your theme.',
      tone: 'tertiary',
      icon: '🎨',
    },
  ],
};
