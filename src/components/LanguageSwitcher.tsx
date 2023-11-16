import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button } from 'antd';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isRussian = i18n.language === 'ru';
  const isEnglish = i18n.language === 'en';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button type={isEnglish ? 'primary' : 'default'} onClick={() => changeLanguage('en')}>
        English
      </Button>
      <Button type={isRussian ? 'primary' : 'default'} onClick={() => changeLanguage('ru')}>
        Русский
      </Button>
    </div>
  );
};
