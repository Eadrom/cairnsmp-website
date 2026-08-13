import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://cairnsmp.com',
  output: 'static',
  integrations: [
    starlight({
      title: 'Cairn SMP',
      description: 'The player handbook for Cairn SMP, a small Java Edition survival community.',
      disable404Route: true,
      favicon: '/favicon.svg',
      logo: {
        src: './public/branding/cairnsmp-icon.png',
        alt: 'Cairn SMP',
        replacesTitle: false,
      },
      customCss: ['./src/styles/starlight.css'],
      components: {
        SocialIcons: './src/components/StarlightNav.astro',
        Footer: './src/components/StarlightFooter.astro',
      },
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://cairnsmp.com/og-default.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#18231d' } },
      ],
      markdown: {
        processedDirs: ['./src/content/changelog/'],
      },
      sidebar: [
        { label: 'Start here', items: ['play', 'rules', 'faq', 'about'] },
        {
          label: 'Features',
          items: [{ autogenerate: { directory: 'features' } }],
        },
        { label: 'Reference', items: ['commands', { label: 'Changelog', link: '/changelog/' }] },
      ],
      lastUpdated: true,
      credits: false,
    }),
    sitemap(),
  ],
});
