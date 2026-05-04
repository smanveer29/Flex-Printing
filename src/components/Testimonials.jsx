import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Customer Voices</p>
          <h2 className="section-title">Loved by people across Punjab.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface flex flex-col p-6 hover:shadow-ambient-lg"
            >
              <div className="flex gap-0.5 text-yellow-500">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <HiStar key={j} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-body-md text-ink">
                "{t.quoteEn}"
              </blockquote>
              {t.quotePa && (
                <p className="mt-2 font-punjabi text-body-md text-ink-variant">{t.quotePa}</p>
              )}
              <figcaption className="mt-6 flex items-center gap-3 border-t border-surface-high pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-label-sm font-semibold text-primary">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-label-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-caption text-ink-variant">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
