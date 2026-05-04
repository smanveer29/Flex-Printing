// Placeholder images sourced from Unsplash. Replace `src` with your own portfolio shots in /public/portfolio.
export const categories = [
  { id: 'all', label: 'All' },
  { id: 'flex', label: 'Flex' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'wallpaper', label: '3D Wallpaper' },
  { id: 'visiting', label: 'Visiting Cards' },
  { id: 'stickers', label: 'Stickers' },
];

const u = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const portfolio = [
  { id: 1, category: 'flex', title: 'Festive Flex Banner', src: u('photo-1561070791-2526d30994b8') },
  { id: 2, category: 'wedding', title: 'Royal Wedding Invite', src: u('photo-1519741497674-611481863552') },
  { id: 3, category: 'wallpaper', title: 'Living Room 3D Wall', src: u('photo-1560448204-e02f11c3d0e2') },
  { id: 4, category: 'visiting', title: 'Premium Business Card', src: u('photo-1586281380349-632531db7ed4') },
  { id: 5, category: 'stickers', title: 'Custom Brand Stickers', src: u('photo-1611162616475-46b635cb6868') },
  { id: 6, category: 'flex', title: 'Shop Front Flex', src: u('photo-1542744173-8e7e53415bb0') },
  { id: 7, category: 'wedding', title: 'Modern Wedding Card', src: u('photo-1527529482837-4698179dc6ce') },
  { id: 8, category: 'wallpaper', title: 'Bedroom Mural', src: u('photo-1505693416388-ac5ce068fe85') },
  { id: 9, category: 'visiting', title: 'Foil Stamped Cards', src: u('photo-1606857521015-7f9fcf423740') },
];
