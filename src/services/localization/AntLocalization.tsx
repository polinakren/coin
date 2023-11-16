import { ConfigProvider } from 'antd';
import en_Us from 'antd/es/locale/en_US';
import ru_Ru from 'antd/es/locale/ru_RU';
import { FC, ReactNode } from 'react';

const locales = {
  en: en_Us,
  ru: ru_Ru,
};

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: FC<LocalizationProviderProps> = ({ children }) => {
  const localizationKey = (localStorage.getItem('i18nextLng') as keyof typeof locales) || 'en';

  return <ConfigProvider locale={locales[localizationKey]}>{children}</ConfigProvider>;
};
