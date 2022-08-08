import { DocumentTextIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';

import { GithubIcon } from '../assets/SocialIcons';
import Container from '../components/Container';
import { socialLink } from '../data/socialLinks';

const Home: NextPage = () => {
  return (
    <Container>
      <span className="text-lg text-gray-600 dark:text-gray-300">
        Hi There 👋, I&apos;m
      </span>
      <h1 className="mt-2 mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Ashirbad Behera
      </h1>
      <p className="pb-6 font-medium text-gray-400 dark:text-gray-300/60">
        I&apos;m a CS Undergrad from bhubanaswer. I like exploring new
        Technologies and talk about them with like minded people. Currently
        i&apos;m building things for Web 🌟.
      </p>
      <div className="-ml-2 flex gap-4">
        <a
          className="flex items-center gap-2 rounded-md bg-gray-200 px-2 py-1 transition-all hover:ring-2 dark:bg-gray-700"
          href={socialLink.github}
          target="_blank"
          rel="noreferrer">
          <GithubIcon className="h-5 w-5" /> Github
        </a>
        <a
          className="flex items-center gap-2 rounded-md bg-gray-200 px-2 py-1 transition-all hover:ring-2 dark:bg-gray-700"
          href={socialLink.resume}
          target="_blank"
          rel="noreferrer">
          <DocumentTextIcon className="h-5 w-5" /> Resume
        </a>
      </div>
    </Container>
  );
};

export default Home;
