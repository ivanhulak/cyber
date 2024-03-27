import { ThemeSwitcher } from '@/app/[locale]/ThemeSwitcher';
import Link from 'next/link';
import LocaleSwitcher from './LocaleSwitcher';
import { Locale } from '@/i18n.config';

export const Header = ({ locale }: { locale: Locale }) => {
  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${locale}`}>Home</Link>
          </li>
          <li>
            <Link href={`/${locale}/about`}>About</Link>
          </li>
        </ul>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </nav>
    </header>
  );
};
