import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import useDelayedRender from 'use-delayed-render';

const navItems = [
  {
    key: 'home',
    label: 'Home',
    to: '/'
  },
  {
    key: 'projects',
    label: 'Projects',
    to: '/projects'
  },
  {
    key: 'blog',
    label: 'Blog',
    to: '/blog'
  }
];

const Nav = ({ mounted }: { mounted: boolean }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <nav className="relative flex items-center pt-8 pb-8 sm:pb-16">
      <div className="md:-ml-3">
        <MobileNav />
        <div className="hidden items-center gap-6 md:visible md:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={clsx(
                'rounded-lg py-2 px-3 text-gray-500 transition-all hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700',
                {
                  'font-semibold text-gray-800 dark:text-gray-100':
                    router.asPath === item.to
                }
              )}>
              <Link href={item.to}>{item.label}</Link>
            </button>
          ))}
        </div>
      </div>

      {/* Theme Toggler */}
      {mounted && (
        <button
          className="ml-auto flex items-center justify-center self-start rounded-lg bg-gray-200 p-2 ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600"
          onClick={() =>
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }>
          {resolvedTheme === 'light' ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
      )}
    </nav>
  );
};

export const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // another thing to extract is rendered removing for unused vars warning
  const { mounted: isMenuMounted } = useDelayedRender(isMenuOpen, {
    enterDelay: 20,
    exitDelay: 300
  });

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative h-10 w-10 transition-all md:hidden">
        <MenuAlt1Icon
          className={clsx(
            'absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 transition-all',
            isMenuOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
            'h-5 w-5'
          )}
        />
        <XIcon
          className={clsx(
            'absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 transition-all',
            isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
            'h-5 w-5'
          )}
        />
      </button>
      {isMenuMounted && (
        <ul
          className={clsx(
            'visible absolute left-0 z-40 mt-2 h-screen w-full bg-gray-50 pt-6 opacity-0 transition-all duration-300 ease-in-out dark:bg-gray-900 md:hidden',
            { '!opacity-100 transition-opacity': isMenuMounted },
            'flex flex-col gap-5'
          )}>
          {navItems.map((item, idx) => (
            <li
              key={item.key}
              className={clsx(
                '-translate-x-4 border-b border-gray-300/70 pb-4 text-sm font-semibold text-gray-900 opacity-0 transition-all dark:border-gray-300/20 dark:text-gray-100',
                {
                  'w-full translate-x-0 border-gray-300/70 opacity-100 dark:border-gray-300/20':
                    isMenuOpen
                }
              )}
              style={{ transitionDelay: `${150 + 50 * idx}ms` }}>
              <Link href={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Nav;
