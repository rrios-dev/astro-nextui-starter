
import en from '@/locale/en';
import es from '@/locale/es';
import { Locale } from './interfaces';

const TRANSLATIONS = {
    [Locale.English]: en,
    [Locale.Spanish]: es,
} as const;

export type Translations = typeof TRANSLATIONS;

export default TRANSLATIONS;