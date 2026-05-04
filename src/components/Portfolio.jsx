import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { categories, portfolio } from '../data/portfolio';

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const items = useMemo(
    () => (active === 'all' ? portfolio : portfolio.filter((p) => p.category === active)),
    [active]
  );

  const slides = items.map((p) => ({ src: p.src, title: p.title }));

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="section-eyebrow">Our Creative Portfolio</p>
            <h2 className="section-title">Work that speaks for itself.</h2>
            <p className="section-sub">
              A glimpse into some of our recently completed premium projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-4 py-2 text-label-sm transition ${
                  active === c.id
                    ? 'bg-primary text-primary-on shadow-ambient'
                    : 'bg-surface-lowest text-ink-variant ring-1 ring-surface-high hover:text-primary'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.button
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className={`group relative overflow-hidden rounded-lg bg-surface-lowest shadow-ambient ring-1 ring-surface-high ${
                  i % 5 === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-label-sm font-semibold text-white">{p.title}</p>
                  <p className="text-caption uppercase tracking-wider text-white/80">
                    {p.category}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{ container: { backgroundColor: 'rgba(25, 28, 29, 0.92)' } }}
      />
    </section>
  );
}
