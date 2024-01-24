import type { ManifestOptions } from 'vite-plugin-pwa';

const PWA_CONFIG: Partial<ManifestOptions> = {
    name: 'Astro PWA + NextUI Starter', // Change this to your website's name.
    short_name: 'Astro PWA Starter', // Change this to your website's short name.
    description:
		'Astro PWA + NextUI Starter is an opionated Astro starter for building robust static websites.', // Change this to your websites description.
    theme_color: '#30E130',
    background_color: '#ffffff',
    display: 'minimal-ui',
    icons: [
        {
            src: '/favicons/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
        },
        {
            src: '/favicons/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
        },
        {
            src: '/favicons/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
        }
    ]
} as const;

export default PWA_CONFIG;