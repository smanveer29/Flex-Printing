import { motion } from 'framer-motion';
import { HiOutlineChatAlt2, HiOutlinePencilAlt, HiOutlinePrinter, HiOutlineTruck } from 'react-icons/hi';

const steps = [
  {
    num: '01',
    icon: HiOutlineChatAlt2,
    titleEn: 'Inquire',
    titlePa: 'ਪੁੱਛੋ',
    desc: 'Reach out via WhatsApp, phone or our form. Share what you need and your timeline.',
  },
  {
    num: '02',
    icon: HiOutlinePencilAlt,
    titleEn: 'Design & Approve',
    titlePa: 'ਡਿਜ਼ਾਈਨ',
    desc: 'Get a custom design proof. We refine until it matches your vision exactly.',
  },
  {
    num: '03',
    icon: HiOutlinePrinter,
    titleEn: 'Print',
    titlePa: 'ਪ੍ਰਿੰਟ',
    desc: 'Premium materials, calibrated machines, careful quality control on every piece.',
  },
  {
    num: '04',
    icon: HiOutlineTruck,
    titleEn: 'Deliver',
    titlePa: 'ਡਿਲੀਵਰੀ',
    desc: 'Pick up at our shop or get it delivered — typically within 24 – 48 hours.',
  },
];

export default function Process() {
  return (
    <section className="bg-surface-low py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">How We Work</p>
          <h2 className="section-title">A simple, transparent process.</h2>
          <p className="section-sub">From idea to printed piece in four calm, considered steps.</p>
        </div>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-surface relative p-6"
              >
                <span className="text-h3 font-semibold text-primary/30">{s.num}</span>
                <span className="mt-3 grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-label-sm font-semibold uppercase tracking-wider text-ink">
                  {s.titleEn} <span className="font-punjabi font-normal normal-case tracking-normal text-ink-variant">· {s.titlePa}</span>
                </h3>
                <p className="mt-2 text-body-md text-ink-variant">{s.desc}</p>
                {i < steps.length - 1 && (
                  <span className="absolute right-0 top-1/2 hidden h-px w-5 -translate-y-1/2 translate-x-2.5 bg-outline-variant lg:block" />
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
