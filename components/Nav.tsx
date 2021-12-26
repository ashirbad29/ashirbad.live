import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import clsx from 'clsx';

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
		<nav className='flex gap-6 items-center pt-8 pb-8 sm:pb-16'>
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

			{/* Theme Toggler */}
			{mounted && (
				<button
					className='ml-auto bg-gray-200 dark:bg-gray-600 flex items-center justify-center rounded-lg p-2 hover:ring-2 ring-gray-300 transition-all'
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

export default Nav;
