import { motion } from 'framer-motion';
import { HiOutlineChatAlt2, HiOutlinePhone, HiChevronDown, HiOutlineBadgeCheck } from 'react-icons/hi';
import { business } from '../data/business';

export default function Hero() {
  const wa = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`;

  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      {/* Soft tonal background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-surface to-surface" />
      <div className="absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-20 top-40 -z-10 h-96 w-96 rounded-full bg-secondary-container/40 blur-3xl" />

      <div className="container-page grid items-center gap-12 pb-16 md:grid-cols-2 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="chip">
            <HiOutlineBadgeCheck className="h-4 w-4" /> Premium Printing Studio
          </span>
          <h1 className="mt-5 font-punjabi text-h2 font-semibold text-ink md:text-h1 md:leading-[1.1]">
            ਤੁਹਾਡੀ ਹਰ ਪ੍ਰਿੰਟਿੰਗ
            <br />
            ਜ਼ਰੂਰਤ ਲਈ
          </h1>
          <h2 className="mt-3 text-h3 font-medium text-primary md:text-h2">
            For Every Printing Need
          </h2>
          <p className="mt-5 max-w-xl text-body-md text-ink-variant md:text-body-lg">
            Quality Flex Printing · Wedding Cards · 3D Wallpapers · Invitation Cards · Visiting Cards · And more. We bring your vision to life with precision.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">
              <HiOutlineChatAlt2 className="h-5 w-5" /> WhatsApp Us
            </a>
            <a href={`tel:${business.phoneRaw}`} className="btn-ghost">
              <HiOutlinePhone className="h-5 w-5" /> Call Now
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div>
              <p className="text-h3 font-semibold text-ink">10+</p>
              <p className="text-caption text-ink-variant">Years of Craft</p>
            </div>
            <div className="h-10 w-px bg-surface-high" />
            <div>
              <p className="text-h3 font-semibold text-ink">5,000+</p>
              <p className="text-caption text-ink-variant">Happy Customers</p>
            </div>
            <div className="hidden h-10 w-px bg-surface-high sm:block" />
            <div className="hidden sm:block">
              <p className="text-h3 font-semibold text-ink">8</p>
              <p className="text-caption text-ink-variant">Print Services</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-xl bg-surface-lowest p-3 shadow-ambient-lg ring-1 ring-surface-high">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gradient-to-br from-yellow-400 via-yellow-300 to-amber-400 p-6">
              <div className="flex h-full flex-col">
                <div className="rounded-md bg-red-700 px-4 py-3 text-center font-punjabi text-2xl font-bold text-white shadow-ambient md:text-3xl">
                  ਹੁਕਮ ਸਿੰਘ <span className="text-yellow-300">ਪ੍ਰਿੰਟਿੰਗ ਪ੍ਰੈਸ</span>
                </div>
                <div className="mt-4 grid flex-1 grid-cols-2 gap-3">
                  {[
                    'ਫਲੈਕਸ ਪ੍ਰਿੰਟਿੰਗ',
                    'ਵਿਆਹ ਕਾਰਡ',
                    'ਪੋਸਟਰ',
                    'ਸਟਿੱਕਰ',
                    '3D ਵਾਲਪੇਪਰ',
                    'ਮੋਹਰ',
                  ].map((t) => (
                    <div
                      key={t}
                      className="grid place-items-center rounded-md bg-red-700 text-center font-punjabi text-base font-bold text-white shadow-sm md:text-lg"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-md bg-red-700 px-4 py-2 text-center text-2xl font-bold text-white tracking-wider">
                  98148-46040
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 hidden rounded-lg bg-surface-lowest p-4 shadow-ambient-lg ring-1 ring-surface-high md:block"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                <HiOutlineBadgeCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-label-sm font-semibold text-ink">Trusted Quality</p>
                <p className="text-caption text-ink-variant">Since 2014</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#services"
        className="mx-auto -mt-4 mb-10 grid h-10 w-10 place-items-center rounded-full bg-surface-lowest text-primary shadow-ambient transition hover:shadow-ambient-lg"
        aria-label="Scroll to services"
      >
        <HiChevronDown className="h-5 w-5 animate-float-slow" />
      </a>
    </section>
  );
}
