import { locales, type Locale } from '$lib/paraglide/runtime';
export const match = (param) => locales.includes(param as Locale);
