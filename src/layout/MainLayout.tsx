import type { FC, ReactNode } from 'react';
import { Header } from './mainLayout/Header';
import { Footer } from './mainLayout/Footer';

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
