/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	redirects: [
		{
			source: '/resume',
			destination:
				'https://drive.google.com/file/d/1rOMp6fXTgDJZOsvZqU38dzhUQxs0MbeJ/view?usp=sharing',
			permanent: true,
		},
		{
			source: '/github',
			destination: 'https://github.com/ashirbad29',
			permanent: true,
		},
	],
};
