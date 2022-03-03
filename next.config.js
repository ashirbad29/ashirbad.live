/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
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
			{
				source: '/twitter',
				destination: 'https://twitter.com/ashirbad_29',
				permanent: true,
			},
			{
				source: '/notes',
				destination:
					'https://ashirbad.notion.site/ashirbad/Notes-dc16f34eba3e40d29f29acde35167a2e',
				permanent: true,
			},
		];
	},
};
