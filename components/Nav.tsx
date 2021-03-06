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
	// another thing to extract is rendered removing for unused vars warning
	const { mounted: isMenuMounted } = useDelayedRender(isMenuOpen, {
		enterDelay: 20,
		exitDelay: 300,
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
				className='md:hidden w-10 h-10 transition-all relative'
			>
				<MenuAlt1Icon
					className={clsx(
						'transition-all absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4',
						isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100',
						'h-5 w-5'
					)}
				/>
				<XIcon
					className={clsx(
						'transition-all absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4',
						isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
						'h-5 w-5'
					)}
				/>
			</button>
			{isMenuMounted && (
				<ul
					className={clsx(
						'w-full h-screen absolute left-0 visible md:hidden z-40 pt-6 mt-2 bg-gray-50 dark:bg-gray-900 opacity-0 transition-all ease-in-out duration-300',
						{ '!opacity-100 transition-opacity': isMenuMounted },
						'flex flex-col gap-5'
					)}
				>
					{navItems.map((item, idx) => (
						<li
							key={item.key}
							className={clsx(
								'border-b opacity-0 transition-all -translate-x-4 border-gray-300/70 dark:border-gray-300/20 text-gray-900 dark:text-gray-100 text-sm font-semibold pb-4',
								{
									'opacity-100 w-full translate-x-0 border-gray-300/70 dark:border-gray-300/20':
										isMenuOpen,
								}
							)}
							style={{ transitionDelay: `${150 + 50 * idx}ms` }}
						>
							<Link href={item.to}>{item.label}</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Nav;
