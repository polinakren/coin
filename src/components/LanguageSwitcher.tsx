import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button } from 'antd';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const isRussian = i18n.language === 'ru';
  const isEnglish = i18n.language === 'en';

  const englishButtonType = isEnglish ? 'primary' : 'default';
  const russianButtonType = isRussian ? 'primary' : 'default';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button type={englishButtonType} onClick={() => changeLanguage('en')}>
        English
      </Button>
      <Button type={russianButtonType} onClick={() => changeLanguage('ru')}>
        Русский
      </Button>
    </div>
  );
};
