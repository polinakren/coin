import * as Yup from 'yup';

import i18n from '~services/localization/i18n';

export const ruLocale = {
  number: {
    max: 'Максимальное значение = ${max}',
    min: 'Минимальное значение = ${min}',
    integer: 'Введите целое число',
  },
};

export const enLocale = {
  number: {
    max: 'Maximum value = ${max}',
    min: 'Minimum value = ${min}',
    integer: 'Enter an integer',
  },
};

const selectedLocale = i18n.language === 'ru' ? ruLocale : enLocale;
Yup.setLocale(selectedLocale);

export * from 'yup';
