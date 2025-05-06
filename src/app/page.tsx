import React from 'react'
import { HowToUseCard } from '@/components/howtouse-card'
import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import SparklesText from '@/components/ui/sparkles-text'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { DATA } from '@/data/resume'
import Link from 'next/link'
// import Markdown from 'react-markdown'
import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'
import { ReviewCard } from '@/components/ui/review-card'
import Image from 'next/image'

const BLUR_FADE_DELAY = 0.04
const firstRow = DATA.reviews.slice(0, DATA.reviews.length / 2)
const secondRow = DATA.reviews.slice(DATA.reviews.length / 2)

export default function Page() {
	return (
		<main className='flex flex-col items-center min-h-[100dvh] space-y-10'>
			<section id='hero' className='w-full'>
				<div className='mx-auto w-full max-w-2xl space-y-8'>
					<div className='gap-2 flex justify-between'>
						<div className='flex-col flex flex-1 space-y-1.5'>
							<BlurFadeText
								delay={BLUR_FADE_DELAY}
								className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
								yOffset={8}
								text={`Hi, Welcome to`}
							/>
							<BlurFade
								delay={BLUR_FADE_DELAY}
								// className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
								yOffset={8}
							>
								<SparklesText
									sparklesCount={4}
									className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
									text={`${DATA.name} 🤫`}
								/>
							</BlurFade>
						</div>
						{/* <BlurFade delay={BLUR_FADE_DELAY}>
							<Avatar className='size-28 border'>
								<AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
								<AvatarFallback>{DATA.initials}</AvatarFallback>
							</Avatar>
						</BlurFade> */}
					</div>
				</div>
			</section>

			<section id='about'>
				{/* <BlurFade delay={BLUR_FADE_DELAY * 3}>
					<h2 className='text-xl font-bold'>About</h2>
				</BlurFade> */}
				{/* <BlurFade delay={BLUR_FADE_DELAY * 4}>
					<Markdown className=' max-w-full font-sans text-sm '>
						{DATA.description}
					</Markdown>
				</BlurFade> */}

				{DATA.description.split('\n').map((line, index) => (
					<BlurFadeText
						key={line}
						className='max-w-[600px] my-1'
						delay={BLUR_FADE_DELAY + index * 0.05}
						text={line}
					/>
				))}
			</section>

			<section id='feature'>
				<div className='space-y-12 w-full py-12'>
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									My Special Features
								</h2>
							</div>
						</div>
					</BlurFade>
					<div className='grid grid-cols-1 max-w-[800px] mx-auto'>
						{DATA.features.map((feature, id) => (
							<BlurFade
								key={feature.desc + id}
								delay={BLUR_FADE_DELAY * 12 + id * 0.05}
								className='my-2'
							>
								{id % 2 === 0 ? (
									<div className='flex flex-row justify-center '>
										<Image
											src={feature.image}
											alt='feature'
											width={375}
											height={812}
											className='object-cover object-top border rounded-lg overflow-hidden shrink-0 max-w-[210px] '
										/>
										<p className='flex justify-center items-center text-grey text-sm ml-2 flex-1'>
											{feature.desc}
										</p>
									</div>
								) : (
									<div className='flex flex-row justify-center '>
										<p className='flex justify-center items-center text-grey text-sm mr-2 flex-1'>
											{feature.desc}
										</p>
										<Image
											src={feature.image}
											alt='feature'
											width={375}
											height={812}
											className='object-cover  object-top border rounded-lg overflow-hidden shrink-0 max-w-[210px] '
										/>
									</div>
								)}
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id='how-to-use'>
				<div className='space-y-12 w-full py-12'>
					<BlurFade delay={BLUR_FADE_DELAY * 13}>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									How it works
								</h2>
							</div>
						</div>
					</BlurFade>
					<BlurFade delay={BLUR_FADE_DELAY * 14}>
						<ul className='mb-4 ml-4 divide-y divide-dashed border-l'>
							{DATA.howtouse.map((step, id) => (
								<BlurFade
									key={step.title}
									delay={BLUR_FADE_DELAY * 15 + id * 0.05}
								>
									<HowToUseCard
										index={id + 1}
										title={step.title}
										description={step.description}
										image={step.image}
									/>
								</BlurFade>
							))}
						</ul>
					</BlurFade>
				</div>
			</section>

			{/* <section id='reviews' className='max-w-screen overflow-hidden'>
				<div className='relative flex h-[500px]  flex-col items-center justify-center'>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl mb-3'>
						What Players Say
					</h2>
					<Marquee pauseOnHover className='[--duration:20s]'>
						{firstRow.map(review => (
							<ReviewCard key={review.username} {...review} />
						))}
					</Marquee>
					<Marquee reverse pauseOnHover className='[--duration:20s]'>
						{secondRow.map(review => (
							<ReviewCard key={review.username} {...review} />
						))}
					</Marquee>
				</div>
			</section> */}

			<section id='contact'>
				<div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12'>
					<BlurFade delay={BLUR_FADE_DELAY * 16}>
						<div className='space-y-3'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Get in Touch
							</h2>
							<div className='mt-4 text-muted-foreground'>
								<div className='mb-2'>
									<h3 className='text-lg font-semibold inline-block mr-2'>Company:</h3>
									<p className='font-medium inline-block'>Onesoft Technology Limited</p>
								</div>
								<div className='mb-2'>
									<h3 className='text-lg font-semibold inline-block mr-2'>Address:</h3>
									<p className='text-sm inline-block'>
										RM DO7,8/F KAI TAK FTY BLDG NO 99 KING FUK ST SAN PO KONG,HONG KONG
									</p>
								</div>
								<div>
									<h3 className='text-lg font-semibold inline-block mr-2'>Email:</h3>
									<p className='text-sm inline-block'>
										<Link
											href='mailto:dxhong1230@gmail.com'
											className='text-blue-500 hover:underline'
										>
											dxhong1230@gmail.com
										</Link>
									</p>
								</div>
							</div>
						</div>
					</BlurFade>
				</div>
			</section>
		</main>
	)
}
