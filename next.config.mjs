/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'avatar.vercel.sh',
			'https://oopy.lazyrockets.com',
			'https://avatars.githubusercontent.com',
		],

		// 关闭图片优化
		unoptimized: true,
	},
}

export default nextConfig
