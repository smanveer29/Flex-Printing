import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { featured } from '../data/featured';

const toneMap = {
  secondary: 'bg-secondary-container text-secondary-on-container',
  tertiary: 'bg-tertiary-fixed text-tertiary',
};

export default function Featured() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="section-eyebrow">Wedding Collections</p>
            <h2 className="section-title">Ethereal designs, heritage printing.</h2>
            <p className="section-sub">For your most cherished moments — invitations crafted to be remembered.</p>
          </div>
          <a href="#portfolio" className="inline-flex items-center gap-2 text-label-sm font-medium text-primary hover:gap-3 transition-all">
            View Catalog <HiArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative col-span-2 overflow-hidden rounded-xl ring-1 ring-surface-high lg:col-span-2 lg:row-span-2"
          >
            <img
              src={featured.hero.image}
              alt={featured.hero.title}
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ minHeight: 360 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-h3 font-semibold">{featured.hero.title}</h3>
              <p className="mt-1 text-body-md text-white/80">{featured.hero.desc}</p>
            </div>
          </motion.div>

          {featured.cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className={`flex flex-col justify-between rounded-xl p-7 ring-1 ring-surface-high ${toneMap[c.tone]}`}
            >
              <span className="text-3xl">{c.icon}</span>
              <div className="mt-8">
                <h3 className="text-h3 font-semibold">{c.title}</h3>
                <p className="mt-2 text-body-md opacity-90">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
