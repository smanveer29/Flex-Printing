import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineLightningBolt, HiOutlineCurrencyRupee, HiOutlineLocationMarker } from 'react-icons/hi';

const pillars = [
  {
    icon: HiOutlineSparkles,
    titleEn: 'Uncompromising Quality',
    titlePa: 'ਉੱਚ ਗੁਣਵੱਤਾ',
    desc: 'We use industry-leading machines and premium materials to ensure every print is a masterpiece.',
  },
  {
    icon: HiOutlineLightningBolt,
    titleEn: 'Fast Turnaround',
    titlePa: 'ਜਲਦ ਡਿਲੀਵਰੀ',
    desc: 'We respect your timelines and deliver most orders within 24 – 48 hours without compromising quality.',
  },
  {
    icon: HiOutlineCurrencyRupee,
    titleEn: 'Affordable Pricing',
    titlePa: 'ਵਾਜਬ ਕੀਮਤ',
    desc: 'Get premium printing results at prices that fit your budget, ensuring value for every penny.',
  },
  {
    icon: HiOutlineLocationMarker,
    titleEn: 'Local Presence',
    titlePa: 'ਸਥਾਨਕ ਭਰੋਸਾ',
    desc: 'Being local allows us to provide personalised consultation and easy pick-up or delivery.',
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative bg-surface-low py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="section-eyebrow">Why Partner With Us?</p>
          <h2 className="section-title">Crafted with intent.<br />Printed with care.</h2>
          <p className="section-sub max-w-lg">
            We blend traditional craftsmanship with modern precision — delivering prints that feel as great as they look.
          </p>

          <ul className="mt-8 space-y-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.li
                  key={p.titleEn}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-label-sm font-semibold text-ink">
                      {p.titleEn}{' '}
                      <span className="font-punjabi font-normal text-ink-variant">· {p.titlePa}</span>
                    </p>
                    <p className="mt-1 text-body-md text-ink-variant">{p.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-yellow-400 to-amber-300 p-6 shadow-ambient-lg ring-1 ring-surface-high">
            <div className="flex h-full flex-col gap-3">
              <div className="rounded-md bg-red-700 px-4 py-3 text-center font-punjabi text-2xl font-bold text-white">
                ਹੁਕਮ ਸਿੰਘ <span className="text-yellow-300">ਪ੍ਰਿੰਟਿੰਗ ਪ੍ਰੈਸ</span>
              </div>
              {['ਫਲੈਕਸ ਪੇਪਰ', 'ਡਿਜੀਟਲ ਪ੍ਰਿੰਟ', 'ਸ਼ਾਦੀ ਕਾਰਡ', 'ਪੋਸਟਰ', 'ਸਟਿੱਕਰ', '3D ਵਾਲਪੇਪਰ'].map((t) => (
                <div key={t} className="grid place-items-center rounded-md bg-red-700 py-2 font-punjabi text-lg font-bold text-white">
                  {t}
                </div>
              ))}
              <div className="mt-auto rounded-md bg-red-700 py-2 text-center text-2xl font-bold text-white tracking-wider">
                98148-46040
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
