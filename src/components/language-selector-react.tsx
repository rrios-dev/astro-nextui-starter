import { useTranslation } from 'react-i18next';

import esFlag from '@/icons/flags/es.svg';
import frFlag from '@/icons/flags/fr.svg';
import enFlag from '@/icons/flags/gb.svg';
import ptFlag from '@/icons/flags/pt.svg';

const FLAGS = {
    es: esFlag.src,
    en: enFlag.src,
    pt: ptFlag.src,
    fr: frFlag.src,
} as const;

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const getProperURL = (lang: string) => {
        if (typeof window === 'undefined') return '';

        const pathname = window.location.pathname.replace(/^\/\w{2}/, '');

        return lang === 'en' ? pathname : `/${lang}${pathname}`;
    };
    return (
        <div className='flex gap-4 justify-center items-center'>
            {Object.entries(FLAGS).map(([lang, src]) => {
                return (
                    lang !== i18n.language && (
                        <a
                            onClick={() => i18n.changeLanguage(lang)}
                            href={getProperURL(lang)}
                            key={lang}
                        >
                            <img
                                className='h-5 rounded-lg shadow-sm shadow-gray-500'
                                src={src}
                                alt={lang}
                            />
                        </a>
                    )
                );
            })}
        </div>
    );
};

export default LanguageSelector;
