import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock, HiOutlineChatAlt2, HiOutlinePaperClip, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { business } from '../data/business';
import { services } from '../data/services';
import { sendContactForm, isEmailConfigured } from '../lib/email';

const initialErrors = { name: '', phone: '', message: '' };

export default function Contact() {
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [fileName, setFileName] = useState('');
  const wa = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`;

  const validate = (form) => {
    const e = { ...initialErrors };
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (name.length < 2) e.name = 'Please enter your name.';
    if (!/^[+\d\s-]{8,}$/.test(phone)) e.phone = 'Enter a valid phone number.';
    if (message.length < 10) e.message = 'Please tell us a little more (10+ characters).';

    setErrors(e);
    return Object.values(e).every((v) => !v);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!validate(form)) return;

    setSubmitting(true);
    setStatus(null);
    try {
      await sendContactForm(form);
      setStatus('success');
      form.reset();
      setFileName('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section id="contact" className="bg-surface-low py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Have a project in mind?</h2>
          <p className="section-sub">
            We'd love to hear from you. Visit us or reach out — we usually reply within an hour.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-surface flex flex-col gap-5 p-6 md:p-8 lg:col-span-2"
          >
            <InfoRow Icon={HiOutlineLocationMarker} label="Our Location" value={business.address} />
            <InfoRow Icon={HiOutlinePhone} label="Call Us" value={business.phone} href={`tel:${business.phoneRaw}`} />
            <InfoRow Icon={HiOutlineMail} label="Email Us" value={business.email} href={`mailto:${business.email}`} />
            <InfoRow Icon={HiOutlineClock} label="Working Hours" value={business.hours} />

            <a href={wa} target="_blank" rel="noreferrer" className="btn-primary mt-2">
              <HiOutlineChatAlt2 className="h-5 w-5" /> Chat on WhatsApp
            </a>

            <div className="mt-4 overflow-hidden rounded-md ring-1 ring-surface-high">
              <iframe
                src={business.mapEmbed}
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shop location"
              />
            </div>
          </motion.aside>

          <motion.form
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-surface space-y-4 p-6 md:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Enter your name" error={errors.name} />
              <Field label="Phone Number" name="phone" type="tel" placeholder="+91 00000 00000" error={errors.phone} />
            </div>

            <div>
              <label className="text-label-sm font-medium text-ink">Service Needed</label>
              <select name="service" className="input-base mt-2" defaultValue="">
                <option value="" disabled>Choose a service</option>
                {services.map((s) => (
                  <option key={s.id} value={s.titleEn}>{s.titleEn}</option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-label-sm font-medium text-ink">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your requirements…"
                className={`input-base mt-2 resize-none ${errors.message ? 'ring-2 ring-danger' : ''}`}
              />
              {errors.message && <p className="mt-1 text-caption text-danger">{errors.message}</p>}
            </div>

            <div>
              <label className="text-label-sm font-medium text-ink">Upload Design (Optional)</label>
              <label className="mt-2 flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-outline-variant bg-surface-low px-4 py-3 text-body-md text-ink-variant transition hover:border-primary hover:text-primary">
                <HiOutlinePaperClip className="h-5 w-5" />
                <span className="truncate">{fileName || 'Drop or browse a design / inspiration file'}</span>
                <input
                  type="file"
                  name="file"
                  className="sr-only"
                  accept="image/*,.pdf,.ai,.psd"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
                />
              </label>
            </div>

            <button type="submit" className="btn-primary w-full" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send Message'}
            </button>

            {!isEmailConfigured && (
              <p className="text-caption text-ink-variant">
                <span className="font-medium text-tertiary">Heads up:</span> EmailJS keys not set —
                form will simulate success in dev. Add them in <code className="rounded bg-surface-low px-1.5 py-0.5">.env</code> for production.
              </p>
            )}

            {status === 'success' && (
              <p className="flex items-center gap-2 rounded-md bg-secondary-container px-4 py-3 text-label-sm text-secondary-on-container">
                <HiCheckCircle className="h-5 w-5" /> Thanks! We'll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 rounded-md bg-danger-container px-4 py-3 text-label-sm text-danger-on-container">
                <HiExclamationCircle className="h-5 w-5" /> Something went wrong. Please try again or WhatsApp us.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ Icon, label, value, href }) {
  const Wrap = href ? 'a' : 'div';
  return (
    <Wrap href={href} className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-label-sm font-semibold text-ink">{label}</p>
        <p className="mt-0.5 text-body-md text-ink-variant">{value}</p>
      </div>
    </Wrap>
  );
}

function Field({ label, name, type = 'text', placeholder, error }) {
  return (
    <div>
      <label className="text-label-sm font-medium text-ink">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input-base mt-2 ${error ? 'ring-2 ring-danger' : ''}`}
      />
      {error && <p className="mt-1 text-caption text-danger">{error}</p>}
    </div>
  );
}
