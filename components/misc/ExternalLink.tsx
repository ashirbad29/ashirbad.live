import React from 'react';

const ExternalLink = (props: { children: React.ReactNode; href: string }) => {
  const { children, href } = props;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="transition-all  hover:text-gray-500 hover:underline dark:hover:text-gray-200">
      {children}
    </a>
  );
};

export default ExternalLink;
