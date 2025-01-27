"use client";
import { motion } from 'motion/react';
import React from 'react'
import { Experience } from '../../typings';
import { urlFor } from '@/sanity/lib/image';
import { formatDate, formatDimensions } from '../../utils/formatUtils';
import Image from 'next/image';

type Props = {
	experience: Experience;
}

function ExpCard({ experience }: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
	w-[400px] md:w-[500px] xl:w-[700px] snap-center border-2 border-primary p-3
	opacity-80 hover:opacity-100 hover:shadow-slate-500/50 hover:shadow 
	cursor-pointer transition-all duration-200 max-h-[475px] lg:max-h-[500px]
	overflow-y-scroll scrollbar-thin scrollbar-thumb-customGray scrollbar-track-[#65737E]/20'>
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className='w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px]'
			>
				<Image
					src={urlFor(experience.companyImg).url()}
					width={formatDimensions(experience.companyImg.asset._ref).width}
					height={formatDimensions(experience.companyImg.asset._ref).height}
					alt="state farm logo"
					className='w-full h-full rounded-full object-cover object-center'
				/>
			</motion.div>

			<div className='px-0 md:px-10'>
				<h4 className='text-3xl'>
					{experience.jobTitle}
				</h4>
				<p className='font-bold text-2xl mt-1'>{experience.company}</p>
				<div className='flex space-x-2 my-2'>
					{experience.technologies.map((tech) => (
						<Image
							key={tech._id}
							src={urlFor(tech.image).url()}
							width={formatDimensions(tech.image.asset._ref).width}
							height={formatDimensions(tech.image.asset._ref).height}
							alt={tech.title}
							className='h-7 w-7 rounded-full'
						/>
					))}
				</div>
				<p className='uppercase py-2 text-customGray'>
					{formatDate(new Date(experience.dateStarted))} - {" "}
					{experience.isCurrentJob
						? "Present"
						: formatDate(new Date(experience.dateEnded))}
				</p>

				<ul className='list-disc space-y-2 ml-5 text-lg'>
					{experience?.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default ExpCard