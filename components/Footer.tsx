import Link from 'next/link';

import { socialLink } from '../data/socialLinks';
import ExternalLink from './misc/ExternalLink';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-2xl px-8 text-gray-400">
      <div className="flex gap-6 border-t border-gray-200 py-11 dark:border-gray-700">
        <ExternalLink href={socialLink.twitter}>Twitter</ExternalLink>
        <ExternalLink href={socialLink.github}>Github</ExternalLink>
        <ExternalLink href={socialLink.linkedin}>LinkedIn</ExternalLink>
        <Link href="/projects" passHref>
          <span className="cursor-pointer  transition-all hover:text-gray-500 dark:hover:text-gray-200">
            Projects
          </span>
        </Link>
        <Link href="/blogs" passHref>
          <span className="cursor-pointer  transition-all hover:text-gray-500 dark:hover:text-gray-200">
            Blogs
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
