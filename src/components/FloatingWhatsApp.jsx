import { FaWhatsapp } from 'react-icons/fa';
import { business } from '../data/business';

export default function FloatingWhatsApp() {
  const wa = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`;
  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-ambient-lg transition hover:scale-105 hover:shadow-[0_12px_32px_rgba(37,211,102,0.4)]"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
