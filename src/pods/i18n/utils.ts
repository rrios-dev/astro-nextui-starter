import { DEFAULT_LOCALE } from './constants';
import { Locale } from './interfaces';

export function getLangFromUrl(url: URL): Locale {
    const [, lang] = url.pathname.split('/');

    return Object.values(Locale).includes(lang as Locale) ? lang as Locale : DEFAULT_LOCALE;
}

