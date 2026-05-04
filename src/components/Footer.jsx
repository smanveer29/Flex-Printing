import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import { business } from '../data/business';

export default function Footer() {
  const wa = `https://wa.me/${business.whatsapp}`;
  return (
    <footer className="border-t border-surface-high bg-surface-lowest">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-body-md text-ink-variant">
            Quality printing with quiet confidence. We deliver excellence in every order.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <SocialLink href={business.social.facebook} label="Facebook"><FaFacebook /></SocialLink>
            <SocialLink href={business.social.instagram} label="Instagram"><FaInstagram /></SocialLink>
            <SocialLink href={wa} label="WhatsApp"><FaWhatsapp /></SocialLink>
          </div>
        </div>

        <div>
          <p className="text-label-sm font-semibold text-ink">Quick Links</p>
          <ul className="mt-3 space-y-2 text-body-md text-ink-variant">
            <li><a className="hover:text-primary" href="#services">Services</a></li>
            <li><a className="hover:text-primary" href="#portfolio">Portfolio</a></li>
            <li><a className="hover:text-primary" href="#about">About</a></li>
            <li><a className="hover:text-primary" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-label-sm font-semibold text-ink">Our Commitment</p>
          <p className="mt-3 text-body-md text-ink-variant">
            Providing the best printing solutions with state-of-the-art technology and personalised service since 2014.
          </p>
        </div>
      </div>
      <div className="border-t border-surface-high">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-caption text-ink-variant md:flex-row">
          <p>© {new Date().getFullYear()} {business.nameEn} {business.nameSuffixEn}. All rights reserved.</p>
          <p>Crafted with precision in Punjab, India.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-md bg-surface-low text-ink-variant transition hover:bg-primary hover:text-primary-on"
    >
      {children}
    </a>
  );
}
