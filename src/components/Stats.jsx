import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '5,000+', label: 'Happy Customers' },
  { value: '12,000+', label: 'Projects Delivered' },
  { value: '24h', label: 'Avg Turnaround' },
];

const badges = ['EcoPrint Verified', 'ISO-Style Quality', 'Pantone Matched', 'On-time Delivery'];

export default function Stats() {
  return (
    <section className="border-y border-surface-high bg-surface-lowest py-12">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-center"
            >
              <dt className="text-h2 font-semibold text-primary md:text-h1">{s.value}</dt>
              <dd className="mt-1 text-caption uppercase tracking-[0.14em] text-ink-variant">
                {s.label}
              </dd>
            </motion.div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-surface-high pt-8 text-label-sm text-ink-variant">
          {badges.map((b) => (
            <span key={b} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
