import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '~locales/English/common.json';

import ruCommon from '~locales/Russian/common.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['common'],
    partialBundledLanguages: true,
    debug: true,
    returnNull: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: enCommon,
      },
      ru: {
        common: ruCommon,
      },
    },
  });

export default i18n;
