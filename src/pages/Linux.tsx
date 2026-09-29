import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { LinuxIcon } from '../components/PlatformIcons';
import { useLang } from '../lib/i18n';

// Linux está SIN VERIFICAR: todavía no se probó que la app funcione ahí, así
// que esta página no ofrece el .tar.gz ni los comandos de instalación. Se
// vuelven a poner cuando esté verificado.
const copy = {
  es: {
    title: 'PrismHub en Linux',
    badge: 'Sin verificar',
    body:
      'Todavía no se probó que PrismHub funcione en Linux, así que por ahora no se puede instalar. Cuando esté verificado, acá van a aparecer la descarga y el comando de instalación.',
    back: 'Ver las otras plataformas',
  },
  en: {
    title: 'PrismHub on Linux',
    badge: 'Not verified',
    body:
      "PrismHub hasn't been tested on Linux yet, so it can't be installed for now. Once it's verified, the download and the install command will show up here.",
    back: 'See the other platforms',
  },
} as const;

export default function Linux() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <Layout>
      <section className="px-5 py-16 md:px-10 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="surface mx-auto max-w-xl rounded-2xl p-8 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <span style={{ color: 'var(--text-faint)' }}>
              <LinuxIcon className="h-6 w-6" />
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">{c.title}</h1>
          </div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
            style={{ background: 'var(--surface-2)', color: 'var(--text-faint)' }}
          >
            <Lock className="h-3.5 w-3.5" />
            {c.badge}
          </span>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {c.body}
          </p>
          <Link
            to="/#descargar"
            className="mt-7 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            {c.back}
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
}
