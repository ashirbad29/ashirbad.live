import Head from 'next/head';
import { useState, useEffect } from 'react';
import Nav from './Nav';

const Container = (props: any) => {
	const [mounted, setMounted] = useState(false);

	const { children } = props;

	// After Component mounting we have access to the theme
	useEffect(() => setMounted(true), []);

	return (
		<div className='font-sans bg-gray-50 dark:bg-gray-900'>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='min-h-screen max-w-2xl mx-auto flex flex-col bg-gray-50 dark:bg-gray-900'>
				<Nav mounted={mounted} />
				<div className='ml-3 flex-1 flex flex-col'>{children}</div>
			</main>
		</div>
	);
};

export default Container;
