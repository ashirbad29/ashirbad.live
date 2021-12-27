import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import useDelayedRender from 'use-delayed-render';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';

const navItems = [
	{
		key: 'home',
		label: 'Home',
		to: '/',
	},
	{
		key: 'projects',
		label: 'Projects',
		to: '/projects',
	},
	{
		key: 'blog',
		label: 'Blog',
		to: '/blog',
	},
];

const Nav = ({ mounted }: { mounted: boolean }) => {
	const { resolvedTheme, setTheme } = useTheme();
	const router = useRouter();

	return (
		<nav className='relative pt-8 pb-8 sm:pb-16 flex items-center'>
			<div className='md:-ml-3'>
				<MobileNav />
				<div className='hidden md:visible md:flex gap-6 items-center'>
					{navItems.map(item => (
						<button
							key={item.key}
							className={clsx(
								'hover:bg-gray-200 text-gray-500 dark:hover:bg-gray-700 py-2 px-3 dark:text-gray-300 rounded-lg transition-all',
								{
									'font-semibold text-gray-800 dark:text-gray-100':
										router.asPath === item.to,
								}
							)}
						>
							<Link href={item.to}>{item.label}</Link>
						</button>
					))}
				</div>
			</div>

			{/* Theme Toggler */}
			{mounted && (
				<button
					className='self-start ml-auto bg-gray-200 dark:bg-gray-600 flex items-center justify-center rounded-lg p-2 hover:ring-2 ring-gray-300 transition-all'
					onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
				>
					{resolvedTheme === 'light' ? (
						<SunIcon className='h-5 w-5' />
					) : (
						<MoonIcon className='h-5 w-5' />
					)}
				</button>
			)}
		</nav>
	);
};

export const MobileNav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
		isMenuOpen,
		{
			enterDelay: 20,
			exitDelay: 300,
		}
	);

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
			<button onClick={toggleMenu} className='md:hidden'>
				<MenuAlt1Icon
					className={clsx(isMenuOpen ? 'hidden' : 'visible', 'h-5 w-5')}
				/>
				<XIcon className={clsx(isMenuOpen ? 'visible' : 'hidden', 'h-5 w-5')} />
			</button>
			{isMenuMounted && (
				<ul className='w-full h-screen absolute left-0 md:hidden z-40 pt-6 mt-2 bg-gray-100 dark:bg-gray-900'>
					{navItems.map(item => (
						<li key={item.key}>
							<Link href={item.to}>{item.label}</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Nav;
