import { ThemeSwitcher } from '@/app/ThemeSwitcher';
import Link from 'next/link';

export const Header = async () => {
  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};
