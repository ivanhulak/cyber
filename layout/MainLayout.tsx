import type { ReactNode } from 'react';
import { Header } from './mainLayout/Header';
import { Footer } from './mainLayout/Footer';
import { Locale } from '@/i18n.config';

interface MainLayout {
  children: ReactNode;
  locale: Locale;
}

export const MainLayout = ({ children, locale }: MainLayout) => {
  return (
    <div className="container">
      <Header locale={locale} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
