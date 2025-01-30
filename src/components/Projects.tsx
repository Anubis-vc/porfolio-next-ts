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
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true, amount: 0.5 }}
			className='h-dvh w-screen relative flex flex-col overflow-hidden text-left max-w-full
			justify-evenly mx-auto items-center z-0 pt-10 md:pt-20'>

			<h3 className='absolute top-16 md:top-24 uppercase tracking-[0.8rem] md:tracking-[1.25rem] 
			text-customGray text-xl md:text-2xl'>
				Projects
			</h3>

			<div className='relative w-full h-[85%] flex overflow-x-scroll overflow-y-hidden
			snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#65737E]/20 
			scrollbar-thumb-secondary pt-10'>
				{projects.map((project, i) => (
					<div
						key={project._id}
						className='w-screen h-full flex-shrink-0 flex flex-col
						items-center justify-between px-7 md:px-20 snap-center'
					>
						<Link href={project.link} target='_blank' className='flex-none mb-4'>
							<Image
								src={urlFor(project?.image).url()}
								alt="project image"
								width={formatDimensions(project?.image.asset._ref).width}
								height={formatDimensions(project?.image.asset._ref).height}
								className='max-[425px]:h-40 max-[425px]:w-40 max-h-[200px] xl:max-h-[250px] w-auto 
								object-cover mx-auto shadow-lg rounded-lg 
								border-2 border-transparent hover:border-secondary transition-colors'
							/>
						</Link>
						<div className='flex flex-col flex-1 w-full overflow-y-auto scrollbar-thin
						space-y-3 md:space-y-5 lg:space-y-5 px-0 md:px-10 max-w-6xl'>
							<div className='space-y-3 md:space-y-5'>
								<h4 className='text-xl md:text-2xl xl:text-3xl font-semibold text-center'>
									{i + 1} of {projects?.length}: {project?.title}
								</h4>

								<div className='flex items-center space-x-2 md:space-x-3 justify-center'>
									{project?.technologies.map((tech) => (
										<Image
											key={tech._id}
											src={urlFor(tech.image).url()}
											alt={tech.title}
											width={formatDimensions(tech.image.asset._ref).width}
											height={formatDimensions(tech.image.asset._ref).height}
											className='h-7 w-7 xl:h-9 xl:w-9 rounded-full'
										/>
									))}
								</div>
							</div>

							<p className='text-sm md:text-md lg:text-lg xl:text-xl text-center md:text-left
							overflow-y-visible'>
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