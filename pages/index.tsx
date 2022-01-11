import { DocumentTextIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';

import { GithubIcon } from '../assets/SocialIcons';
import Container from '../components/Container';
import { socialLink } from '../data/socialLinks';

const Home: NextPage = () => {
	return (
		<Container>
			<span className='text-lg text-gray-600 dark:text-gray-300'>
				Hi There 👋, I&apos;m
			</span>
			<h1 className='font-bold text-3xl sm:text-5xl mt-2 mb-4 tracking-tight'>
				Ashirbad Behera
			</h1>
			<p className='text-gray-600 dark:text-gray-300/60 font-medium pb-6'>
				I&apos;m a CS Undergrad from bhubanaswer. I like exploring new
				Technologies and talk about them with like minded people. Currently
				i&apos;m building things for Web 🌟.
			</p>
			<div className='flex gap-4 -ml-2'>
				<a
					className='flex gap-2 items-center px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:ring-2 transition-all'
					href={socialLink.github}
					target='_blank'
					rel='noreferrer'
				>
					<GithubIcon className='h-5 w-5' /> Github
				</a>
				<a
					className='flex gap-2 items-center px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:ring-2 transition-all'
					href={socialLink.resume}
					target='_blank'
					rel='noreferrer'
				>
					<DocumentTextIcon className='h-5 w-5' /> Resume
				</a>
			</div>
		</Container>
	);
};

export default Home;
