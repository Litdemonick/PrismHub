import { motion } from 'motion/react';
import Layout from '../components/Layout';
import ConsoleCommand from '../components/ConsoleCommand';
import { useLang } from '../lib/i18n';

const apiRows: [string, string, string][] = [
  ["this.request('/ruta')", "this.request('/path')", 'HTTP al webSite base — incluye UA y cookies'],
  ['fetch(url, options)', 'fetch(url, options)', 'HTTP a cualquier URL externa'],
  ['this.querySelector(html, sel)', 'this.querySelector(html, sel)', 'Selector CSS sobre HTML'],
  ['this.queryXPath(html, xpath)', 'this.queryXPath(html, xpath)', 'XPath sobre HTML'],
  ['CryptoJS', 'CryptoJS', 'Librería CryptoJS pre-cargada'],
  ['md5(str)', 'md5(str)', 'Hash MD5'],
];

const extensionSample = `// ==PrismHubExtension==
// @name         MiExtension
// @version      1.0.0
// @author       TuNombre
// @lang         es
// @license      MIT
// @package      com.tudominio.miextension
// @type         bangumi
// @webSite      https://sitio.com
// ==/PrismHubExtension==

export default class extends Extension {
  async latest(page) { /* [{title, url, cover}] */ }
  async search(kw, page) { /* [{title, url, cover}] */ }
  async detail(url) { /* {title, cover, desc, episodes} */ }
  async watch(url) { /* {type:'hls'|'mp4', url, headers} */ }
}`;

const copy = {
  es: {
    title: 'Documentación',
    subtitle: 'PrismHub · Freeware',
    sections: {
      s1: '1. ¿Qué es PrismHub?',
      s1p1:
        'Una aplicación multiplataforma de streaming y lectura para anime, manga y series/películas. Su arquitectura se basa en extensiones JavaScript que permiten agregar cualquier fuente de contenido sin modificar la app.',
      s1p2: 'Es gratuita y se mantiene activamente. El repositorio oficial de extensiones (prism+) sí es público y auditable.',
      repoLink: 'El proyecto en GitHub →',
      s2: '2. Instalación',
      androidNote: 'Android: descargá el APK desde',
      releasesLink: 'Releases →',
      s3: '3. Formato de extensión',
      s4: '4. API disponible en extensiones',
      apiMethod: 'Método',
      apiDesc: 'Descripción',
      s5: '5. Repositorios de extensiones',
      officialRepo: 'prism+ — el único repositorio, configurado por defecto',
      ownRepo: 'PrismHub no instala extensiones de otro lado: todo el catálogo sale de prism+, y el equipo es quien lo arma y lo firma.',
    },
  },
  en: {
    title: 'Documentation',
    subtitle: 'PrismHub · Freeware',
    sections: {
      s1: '1. What is PrismHub?',
      s1p1:
        'A cross-platform streaming and reading app for anime, manga and series/movies. Its architecture is built on JavaScript extensions that let you add any content source without touching the app.',
      s1p2: 'Free to use, actively maintained. The official extensions repository (prism+) is public and auditable.',
      repoLink: 'The project on GitHub →',
      s2: '2. Installation',
      androidNote: 'Android: download the APK from',
      releasesLink: 'Releases →',
      s3: '3. Extension format',
      s4: '4. API available inside extensions',
      apiMethod: 'Method',
      apiDesc: 'Description',
      s5: '5. Extension repositories',
      officialRepo: 'prism+ — the only repository, configured by default',
      ownRepo: "PrismHub doesn't install extensions from anywhere else: the whole catalog comes from prism+, built and signed by its own team.",
    },
  },
} as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="surface rounded-2xl px-6 py-5"
    >
      <h2 className="mb-4 font-[family-name:var(--font-display)] text-base font-semibold md:text-lg">{title}</h2>
      <div className="text-xs leading-relaxed md:text-sm" style={{ color: 'var(--text-muted)' }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Docs() {
  const { lang } = useLang();
  const s = copy[lang].sections;

  return (
    <Layout>
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 text-center">
            <h1 className="mb-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">{copy[lang].title}</h1>
            <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
              {copy[lang].subtitle} ·{' '}
              <a href="https://github.com/Litdemonick/PrismHub" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                GitHub
              </a>
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            <Section title={s.s1}>
              <div className="space-y-3">
                <p>{s.s1p1}</p>
                <p>{s.s1p2}</p>
                <a
                  href="https://github.com/Litdemonick/PrismHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block underline"
                  style={{ color: 'var(--accent)' }}
                >
                  {s.repoLink}
                </a>
              </div>
            </Section>

            <Section title={s.s2}>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 font-mono text-xs" style={{ color: 'var(--text-faint)' }}>Linux</p>
                  <ConsoleCommand command="curl -fsSL https://raw.githubusercontent.com/Litdemonick/PrismHub/main/install/install.sh | bash" />
                </div>
                <div>
                  <p className="mb-2 font-mono text-xs" style={{ color: 'var(--text-faint)' }}>Windows (PowerShell)</p>
                  <ConsoleCommand command="irm https://raw.githubusercontent.com/Litdemonick/PrismHub/main/install/install.ps1 | iex" />
                </div>
                <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
                  {s.androidNote}{' '}
                  <a href="https://github.com/Litdemonick/PrismHub/releases/latest" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>
                    {s.releasesLink}
                  </a>
                </p>
              </div>
            </Section>

            <Section title={s.s3}>
              <pre className="code-block scrollbar-thin overflow-x-auto rounded-xl px-4 py-3 text-xs leading-relaxed" style={{ color: 'var(--accent)' }}>{extensionSample}</pre>
            </Section>

            <Section title={s.s4}>
              <div className="scrollbar-thin overflow-x-auto">
                <table className="w-full min-w-[420px] text-left text-xs md:text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                      <th className="py-2 pr-4 font-medium" style={{ color: 'var(--text-faint)' }}>{s.apiMethod}</th>
                      <th className="py-2 font-medium" style={{ color: 'var(--text-faint)' }}>{s.apiDesc}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiRows.map(([fn, , desc]) => (
                      <tr key={fn} className="border-b" style={{ borderColor: 'var(--border)' }}>
                        <td className="whitespace-nowrap py-2 pr-4 font-mono text-xs" style={{ color: 'var(--accent)' }}>{fn}</td>
                        <td className="py-2 text-xs">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title={s.s5}>
              <div className="space-y-3">
                <p className="mb-1 font-mono text-xs" style={{ color: 'var(--accent)' }}>{s.officialRepo}</p>
                <pre className="code-block scrollbar-thin overflow-x-auto rounded-xl px-4 py-2 text-xs">https://raw.githubusercontent.com/Litdemonick/prism-plus/main/index.json</pre>
                <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{s.ownRepo}</p>
              </div>
            </Section>

          </div>
        </div>
      </section>
    </Layout>
  );
}
