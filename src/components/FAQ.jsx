import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus } from 'react-icons/hi';

const faqs = [
  {
    q: 'What is the typical turnaround time?',
    a: 'Most orders are delivered within 24 to 48 hours. Bulk wedding cards and 3D wallpapers may take 3 – 5 days depending on quantity and finish.',
  },
  {
    q: 'Do you provide design services?',
    a: 'Yes. Share your idea, photos, or rough sketch — our in-house designers will craft a proof for your approval before printing.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'There is no minimum for visiting cards, stickers and flex banners. Wedding cards have a minimum of 50 pieces for unit economics.',
  },
  {
    q: 'Do you offer home delivery?',
    a: 'Yes — within the city we offer same-day or next-day delivery. Outside the city, we ship via trusted courier (charges may apply).',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Cash, UPI, IMPS / NEFT, and all major debit/credit cards. A 50% advance is required to start production for custom orders.',
  },
  {
    q: 'Can you print in Punjabi, Hindi and English?',
    a: 'Absolutely. We routinely produce work in Punjabi (Gurmukhi), Hindi (Devanagari) and English with proper typography in each script.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <p className="section-eyebrow">Frequently Asked</p>
          <h2 className="section-title">Questions, answered.</h2>
          <p className="section-sub">
            Can't find what you're looking for? Just reach out — we usually reply within an hour.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-surface-high overflow-hidden rounded-lg bg-surface-lowest shadow-ambient ring-1 ring-surface-high">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-surface-low"
                  aria-expanded={isOpen}
                >
                  <span className="text-label-sm font-semibold text-ink md:text-body-md">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                      isOpen ? 'bg-primary text-primary-on' : 'bg-surface-low text-ink-variant'
                    }`}
                  >
                    <HiPlus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-body-md text-ink-variant">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
