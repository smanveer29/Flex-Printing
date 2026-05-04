import { motion } from 'framer-motion';
import { services } from '../data/services';

const accentMap = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary-container text-secondary-on-container',
  tertiary: 'bg-tertiary-fixed text-tertiary',
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-sub">
            We offer a comprehensive range of printing solutions tailored to your personal and business needs with unmatched quality.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="card-surface group relative overflow-hidden p-6 hover:-translate-y-1 hover:shadow-ambient-lg"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-md ${accentMap[s.accent]}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-h3 text-ink">{s.titleEn}</h3>
                <p className="mt-1 font-punjabi text-body-md text-primary">{s.titlePa}</p>
                <p className="mt-3 text-body-md text-ink-variant">{s.descEn}</p>
                <span className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
