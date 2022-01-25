import Link from 'next/link';

import { socialLink } from '../data/socialLinks';
import ExternalLink from './misc/ExternalLink';

const Footer = () => {
	return (
		<footer className='max-w-2xl mx-auto px-8 text-gray-400'>
			<div className='border-t border-gray-200 dark:border-gray-700 py-11 flex gap-6'>
				<ExternalLink href={socialLink.twitter}>Twitter</ExternalLink>
				<ExternalLink href={socialLink.github}>Github</ExternalLink>
				<ExternalLink href={socialLink.linkedin}>LinkedIn</ExternalLink>
				<Link href='/projects' passHref>
					<span className='hover:text-gray-500  dark:hover:text-gray-200 transition-all cursor-pointer'>
						Projects
					</span>
				</Link>
				<Link href='/blogs' passHref>
					<span className='hover:text-gray-500  dark:hover:text-gray-200 transition-all cursor-pointer'>
						Blogs
					</span>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
