import React from 'react';

const ExternalLink = (props: { children: React.ReactNode; href: string }) => {
	const { children, href } = props;

	return (
		<a
			href={href}
			target='_blank'
			rel='noreferrer'
			className='hover:text-gray-500  dark:hover:text-gray-200 hover:underline transition-all'
		>
			{children}
		</a>
	);
};

export default ExternalLink;
