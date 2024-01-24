// TODO: Replace
const SEO_CONFIG = {
    baseURL: 'https://app.rrios.dev',
    description:
        'A template generated with Astro and NextUI, also contains some features like: SEO, I18n, Dark Mode, and more.',
    type: 'website',
    image: {
        url: 'https://picsum.photos/1200/630',
        alt: 'OpenGraph thumbnail description.',
        width: 1200,
        height: 630
    },
    siteName: '(Astro + NextUI) template',
    twitter: {
        card: 'summary_large_image'
    }
} as const;

export default SEO_CONFIG;