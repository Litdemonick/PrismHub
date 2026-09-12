import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { useLang } from '../lib/i18n';

const copy = {
  es: {
    title: 'Licencia',
    version: 'Freeware · Copyright © 2026',
    project: 'PrismHub',
    desc: 'Aplicación multiplataforma gratuita para anime, manga, series y películas.',
    copyright: 'Copyright © 2026 Soul_Of_The_sun',
    permission:
      'Este programa se distribuye como freeware: se puede descargar y usar sin costo. El código fuente no es público y esta licencia no otorga derechos sobre él.',
    sections: [
      {
        title: 'Qué está permitido',
        content:
          'Descargar, instalar y usar la aplicación, en cualquiera de sus plataformas, de forma gratuita y para uso personal. Compartir el instalador oficial tal como se publica, sin modificarlo.',
      },
      {
        title: 'Qué no está permitido',
        content:
          'Modificar, decompilar, aplicar ingeniería inversa o redistribuir una versión alterada de la aplicación. Vender el acceso a la aplicación o a su instalador. Usar el nombre, el logo o la marca "PrismHub" para otro producto sin permiso.',
      },
      {
        title: 'Las extensiones son otra cosa',
        content:
          'El catálogo de extensiones (prism+) es un proyecto aparte, público y bajo licencia MIT: sí se puede leer, modificar y redistribuir. Es la parte del sistema que decide qué sitio se consulta y cómo — y es la que queda abierta a propósito.',
      },
      {
        title: 'Sin garantía',
        content:
          'La aplicación se entrega "tal cual", sin garantía de ningún tipo, expresa ni implícita. El autor no es responsable por daños derivados de su uso.',
      },
      {
        title: 'Contenido de terceros',
        content:
          'PrismHub no aloja, produce ni distribuye contenido propio: cada extensión lee un sitio público de terceros. El autor no tiene control sobre la disponibilidad, legalidad o contenido de esos sitios en la jurisdicción de cada usuario.',
      },
    ],
    fullTextTitle: 'Alguna duda puntual',
    fullTextDesc: 'Para cualquier caso que esta página no cubra, el contacto está en la sección de abajo de la página de inicio.',
  },
  en: {
    title: 'License',
    version: 'Freeware · Copyright © 2026',
    project: 'PrismHub',
    desc: 'A free cross-platform app for anime, manga, series and movies.',
    copyright: 'Copyright © 2026 Soul_Of_The_sun',
    permission:
      'This program is distributed as freeware: it can be downloaded and used at no cost. The source code is not public, and this license grants no rights over it.',
    sections: [
      {
        title: 'What is allowed',
        content:
          'Downloading, installing and using the app, on any of its platforms, free of charge and for personal use. Sharing the official installer as published, unmodified.',
      },
      {
        title: 'What is not allowed',
        content:
          'Modifying, decompiling, reverse-engineering or redistributing an altered version of the app. Selling access to the app or its installer. Using the "PrismHub" name, logo or brand for another product without permission.',
      },
      {
        title: 'Extensions are a different thing',
        content:
          'The extensions catalog (prism+) is a separate project, public and under the MIT license: it can be read, modified and redistributed. It is the part of the system that decides which site gets queried and how — and it stays open on purpose.',
      },
      {
        title: 'No warranty',
        content:
          'The app is provided "as is", without warranty of any kind, express or implied. The author is not liable for damages arising from its use.',
      },
      {
        title: 'Third-party content',
        content:
          "PrismHub doesn't host, produce or distribute any content of its own: each extension reads a public third-party site. The author has no control over the availability, legality or content of those sites in each user's jurisdiction.",
      },
    ],
    fullTextTitle: 'Any specific question',
    fullTextDesc: "For anything this page doesn't cover, contact info is in the section at the bottom of the home page.",
  },
} as const;

export default function License() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <Layout>
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 text-center">
            <h1 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-4xl">{c.title}</h1>
            <p className="text-sm" style={{ color: 'var(--text-faint)' }}>{c.version}</p>
            <div className="surface mt-4 rounded-2xl px-5 py-4 text-left">
              <p className="mb-1 text-sm font-semibold" style={{ color: 'var(--accent)' }}>{c.project}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {c.desc}
                <br />
                {c.copyright} (
                <a href="https://github.com/Litdemonick" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>
                  github.com/Litdemonick
                </a>
                )
              </p>
              <p className="mt-3 text-xs leading-relaxed" style={{ color: 'var(--text-faint)' }}>{c.permission}</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {c.sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.24) }}
                className="surface rounded-2xl px-6 py-5"
              >
                <h2 className="mb-3 text-base font-semibold">{section.title}</h2>
                <p className="text-xs leading-relaxed md:text-sm" style={{ color: 'var(--text-muted)' }}>{section.content}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="surface rounded-2xl px-6 py-5"
            >
              <h2 className="mb-3 text-base font-semibold">{c.fullTextTitle}</h2>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-faint)' }}>{c.fullTextDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
