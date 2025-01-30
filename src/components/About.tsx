'use client';
import React from 'react'
import { motion } from "motion/react";
import { PageInfo } from '../../typings';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { formatDimensions } from '../../utils/formatUtils';

// this component struggles with resizing on narrow screens, 
// come back and fix.

type Props = {
	pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			viewport={{ once:true, amount:0.5 }}
			className='flex flex-col relative h-dvh text-center max-w-7xl px-5 md:px-10 justify-evenly
			mx-auto items-center md:text-left md:flex-row pt-5 md:pt-10'
		>
			<h3 className='absolute top-16 md:top-24 uppercase tracking-[0.8rem] md:tracking-[1.25rem]
			text-customGray text-xl md:text-2xl'>
				About
			</h3>

			<motion.div
				initial={{ 
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				viewport={{ once: true }}
				className='-mb-24 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover
					md:rounded-lg md:w-64 md:h-96 md:object-right xl:w-96'
			>
				<Image
					src={urlFor(pageInfo?.profilePic).url()}
					width={formatDimensions(pageInfo.profilePic.asset._ref).width}
					height={formatDimensions(pageInfo.profilePic.asset._ref).height}
					alt="Profile Picture" 
					className='w-full h-full rounded-full md:rounded-lg object-cover md:object-right'
				/>
			</motion.div>

			<div className='space-y-2 mt-2 md:space-y-5 px-0 md:pl-10'>
				<h4 className='text-xl max-[360px]:opacity-0
				lg:text-3xl font-semibold xl:text-4xl'>
					More about me
				</h4>
				<p className='text-[0.9rem] md:text-lg xl:text-2xl'>
					{pageInfo?.backgroundInfo}
				</p>
			</div>
		</motion.div>
	)
}