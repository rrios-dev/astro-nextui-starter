import { Locale } from './interfaces';
import TRANSLATIONS, { Translations } from './translations';

function useTranslations(locale: Locale) {
    return function t(key: keyof Translations['en']) {
        return TRANSLATIONS[locale][key];
    };
}

export default useTranslations;