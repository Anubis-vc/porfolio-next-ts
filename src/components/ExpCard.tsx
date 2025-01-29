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
		<article className='flex flex-col rounded-lg items-center space-y-4 md:space-y-6 flex-shrink-0
	w-[95%] md:w-[500px] xl:w-[800px] snap-center border-2 border-primary p-3
	md:opacity-80 hover:opacity-100 hover:shadow-slate-500/50 hover:shadow-md
	cursor-pointer transition-all duration-200 max-[375px]:max-h-[500px] overflow-y-scroll 
	scrollbar-thin scrollbar-thumb-customGray scrollbar-track-[#65737E]/20'>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='flex flex-row w-full items-center justify-center space-x-4 md:space-x-7'
			>
				<Image
					src={urlFor(experience.companyImg).url()}
					width={formatDimensions(experience.companyImg.asset._ref).width}
					height={formatDimensions(experience.companyImg.asset._ref).height}
					alt="state farm logo"
					className='w-24 h-24 md:w-28 md:h-28 xl:w-[150px] xl:h-[150px] rounded-full object-cover object-center'
				/>
				<div>
					<h4 className='text-xl md:text-3xl xl:text-4xl'>
						{experience.jobTitle}
					</h4>
					<p className='text-lg font-bold md:text-2xl xl:text-3xl mt-1'>{experience.company}</p>
				</div>
				
			</motion.div>

			<div className='px-0 md:px-10'>
				<div className='flex space-x-2 xl:space-x-4 my-2'>
					{experience.technologies.map((tech) => (
						<Image
							key={tech._id}
							src={urlFor(tech.image).url()}
							width={formatDimensions(tech.image.asset._ref).width}
							height={formatDimensions(tech.image.asset._ref).height}
							alt={tech.title}
							className='h-5 w-5 md:h-7 md:w-7 xl:h-10 xl:w-10 rounded-full'
						/>
					))}
				</div>
				<p className='uppercase py-2 text-customGray text-base lg:text-lg'>
					{formatDate(new Date(experience.dateStarted))} - {" "}
					{experience.isCurrentJob
						? "Present"
						: formatDate(new Date(experience.dateEnded))}
				</p>

				<ul className='list-disc space-y-2 ml-5 text-base md:text-lg xl:text-xl xl:space-y-4'>
					{experience?.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default ExpCard