import Head from 'next/head';
import { useEffect, useState } from 'react';

import Footer from './Footer';
import Nav from './Nav';

const Container = (props: any) => {
  const [mounted, setMounted] = useState(false);

  const { children } = props;

  // After Component mounting we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-gray-50 font-sans dark:bg-gray-900">
      <Head>
        <title>Ashirbad Behera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-2xl flex-col bg-gray-50 px-8 dark:bg-gray-900">
        <Nav mounted={mounted} />
        <div className="flex flex-1 flex-col">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Container;
