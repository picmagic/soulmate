import { Icons } from '@/components/icons'
import { HomeIcon, NotebookIcon, BookLock, Handshake } from 'lucide-react'

export const DATA = {
	name: 'Soulmate',
	initials: 'Soulmate',
	url: 'https://dillion.io',
	location: 'San Francisco, CA',
	locationLink: 'https://www.google.com/maps/place/sanfrancisco',
	description: `
		Have you ever fantasized about becoming lovers with your favorite character?

		What would it feel like if that character listened to your heart every day and comforted you when you were sad?

		Through the AI chat application Soulmate, make all your imagination come true! Create or add your own exclusive character and chat freely with your beloved lifelike character every day.
	`,
	avatarUrl:
		'https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5ec332b8-4253-4bc1-b246-0b475ff1256f%2Fc3e50e03-2f2f-49bf-bbc1-1dd2d7d90668%2FHome.png&blockId=16cbeda6-e490-80d9-8224-f460837d966c&width=256',

	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		// { href: '/app', icon: DownloadIcon, label: 'App' },
		// { href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '/privacy', icon: BookLock, label: 'Privacy Policy' },
		{ href: '/terms', icon: Handshake, label: 'Terms of Service' },
	],
	contact: {
		email: 'DeridderKoehn@gmail.com',
		tel: '+123456789',
		social: {
			TikTok: {
				name: 'Soulmate',
				url: 'https://tiktok.com/@soulmate',
				icon: Icons.tiktok,
				navbar: true,
			},
		},
	},

	features: [
		{
			image: '/affection.png',
			desc: 'Gradual increase in affection',
		},
		{
			image: '/memory.png',
			desc: 'Record your memories',
		},
		{
			image: '/thoughts.png',
			desc: "Peek into your character's inner thoughts",
		},
		{
			image: '/mode.png',
			desc: 'Multiple chat modes',
		},
	],
	howtouse: [
		{
			title: 'Create or Find a Character',
			description:
				'Create your own character customizing your own appearance, voice, and personality or find a character that suits you.',
			image: '/create.png',
		},
		// {
		// 	title: 'Chat with your Character',
		// 	description:
		// 		'24 hours a day, 7 days a week, your character will be there for you.',
		// 	image: '/chat.png',
		// },
		// {
		// 	title: 'View Character Inner Thoughts',
		// 	description:
		// 		'View your character inner thoughts and feelings, and how they react to your messages.',
		// 	image: '/thoughts.png',
		// },
		{
			title: 'Increase Affection, and Get Married',
			description:
				'Increase your character affection through chatting, and finally get married.',
			image: '/affection.png',
		},
		{
			title: 'Record Our Memories',
			description:
				'Record your memories with your character, and cherish them forever.',
			image: '/memory.png',
		},
	],

	reviews: [
		{
			name: 'Jack',
			username: '@jack',
			body: "I've never seen anything like this before. It's amazing. I love it.",
			img: 'https://avatar.vercel.sh/jack',
		},
		{
			name: 'Jill',
			username: '@jill',
			body: "I don't know what to say. I'm speechless. This is amazing.",
			img: 'https://avatar.vercel.sh/jill',
		},
		{
			name: 'John',
			username: '@john',
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: 'https://avatar.vercel.sh/john',
		},
		{
			name: 'Jane',
			username: '@jane',
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: 'https://avatar.vercel.sh/jane',
		},
		{
			name: 'Jenny',
			username: '@jenny',
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: 'https://avatar.vercel.sh/jenny',
		},
		{
			name: 'James',
			username: '@james',
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: 'https://avatar.vercel.sh/james',
		},
	],
} as const
