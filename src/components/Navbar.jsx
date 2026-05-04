import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from './Logo';
import { business } from '../data/business';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const wa = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled
          ? 'bg-surface-lowest/85 backdrop-blur-md shadow-ambient'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-label-sm text-ink-variant transition hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">
            Order Now
          </a>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-md text-ink md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-surface-high bg-surface-lowest md:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-label-sm text-ink-variant hover:bg-surface-low hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a href={wa} target="_blank" rel="noreferrer" className="btn-primary mt-2">
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
