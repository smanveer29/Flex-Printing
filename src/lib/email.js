import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export async function sendContactForm(formEl) {
  if (!isEmailConfigured) {
    // No keys yet → simulate success in dev.
    await new Promise((r) => setTimeout(r, 700));
    return { ok: true, simulated: true };
  }
  await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, { publicKey: PUBLIC_KEY });
  return { ok: true };
}
