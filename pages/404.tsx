import Link from 'next/link';

import Container from '../components/Container';

const NotFoundPage = () => {
  return (
    <Container>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex gap-5">
          <span className="inline-block border-r-2 border-gray-400/50 pr-5 text-xl font-bold text-orange-500">
            404
          </span>
          <span className="text-gray-700 dark:text-gray-300">
            This Page doesn&apos;t exists
          </span>
        </div>

        <p className="mt-6 text-gray-700 dark:text-gray-300">
          I am guessing you spelled somethign wrong. Can you double check that
          URL?
        </p>
        <button className="mt-6 rounded-lg bg-gray-700 px-3 py-2 text-sm text-gray-200 ring-gray-400 transition-all hover:ring-2">
          <Link href="/">Go back to Home</Link>
        </button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
