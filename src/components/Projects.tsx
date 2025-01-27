"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from "motion/react";
import { Project } from '../../typings';
import { urlFor } from '@/sanity/lib/image';
import { formatDimensions } from '../../utils/formatUtils';
import Link from 'next/link';

type Props = {
	projects: Project[];
}

function Projects({ projects }: Props) {
  return (
	<motion.div
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1}}
		transition={{ duration: 1.5 }}
		viewport={{ once: true, amount: 0.5 }}
		className='h-screen max-w-full relative flex flex-col overflow-hidden text-left 
		md:flex-row justify-evenly mx-auto items-center z-0 pt-24'>
		
		<h3 className='absolute top-24 uppercase tracking-[1.25rem] 
		text-customGray text-2xl'>
			Projects
		</h3>

		<div className='relative w-screen flex overflow-x-scroll overflow-y-hidden 
		snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#65737E]/20 
		scrollbar-thumb-secondary'>
			{projects.map((project, i) => (
				<div
					key={project._id}
					className='w-screen h-screen flex-shrink-0 flex flex-col overflow-y-scroll
					items-center justify-center px-10 md:px-20 snap-center space-y-5'
				>
					<Link href={project.link} target='_blank'>
						<Image
							src={urlFor(project?.image).url()}
							alt="project image"
							width={formatDimensions(project?.image.asset._ref).width}
							height={formatDimensions(project?.image.asset._ref).height}
							className='max-h-[200px] w-auto object-cover mx-auto shadow-lg rounded-lg'
						/>
					</Link>
					<div className='space-y-5 px-0 md:px-10 max-w-6xl overflow-y-scroll'>
						<h4 className='text-2xl md:text-3xl font-semibold text-center'>
							{i + 1} of {projects?.length}: {project?.title}
						</h4>

						<div className='flex tems-center space-x-2 justify-center'>
							{project?.technologies.map((tech) => (
								<Image
									key={tech._id}
									src={urlFor(tech.image).url()}
									alt={tech.title}
									width={formatDimensions(tech.image.asset._ref).width}
									height={formatDimensions(tech.image.asset._ref).height}
									className='h-7 w-7 rounded-full'
								/>
							))}
						</div>
						

						<p className='text-center md:text-left'>
							{project?.summary}
						</p>
					</div>
				</div>
			))}
		</div>

		<div className='w-full absolute top-[30%] bg-[#59709C]/20 left-0 h-[400px]
		-skew-y-12' />

	</motion.div>
  )
}

export default Projects