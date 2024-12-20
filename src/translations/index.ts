import { hu } from './hu';
import { en } from './en';
import { ro } from './ro';
import type { Language, TranslationKeys } from './types';

export const translations: Record<Language, TranslationKeys> = {
  hu,
  en,
  ro
};

export type { Language, TranslationKeys };
