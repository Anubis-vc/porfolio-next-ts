'use client';
import React from 'react'
import { motion } from "motion/react";
import aboutPic from "../assets/DSC02379.jpeg";

// this component struggles with resizing on narrow screens, 
// come back and fix.

type Props = {}

export default function About({ }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			viewport={{ once:true, amount:0.5 }}
			className='flex flex-col relative h-screen text-center max-w-7xl px-10 
			justify-evenly mx-auto items-center md:text-left md:flex-row pt-10 flex-shrink-0'
		>
			<h3 className='absolute top-24 uppercase tracking-[1.25rem] text-customGray text-2xl'>
				About
			</h3>

			<motion.img
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
				src={aboutPic.src}
				className='-mb-24 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover
					md:rounded-lg md:w-64 md:h-96 md:object-right'
			/>

			<div className='space-y-5 md:space-y-10 px-0 md:pl-10'>
				<h4 className='text-4xl font-semibold'>
					A bit more about me
				</h4>
				<p className='text-base md:text-lg'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut est blandit, 
				imperdiet magna sit amet, mattis urna. In tincidunt lorem vitae massa congue 
				fringilla. Sed dignissim rutrum pretium. Proin egestas magna varius, bibendum 
				nunc in, egestas dui. Ut elementum viverra dui vitae venenatis. Vivamus ultrices 
				ligula id porta congue. Proin dapibus elit in odio ultricies, et maximus enim 
				imperdiet. Quisque at ligula id eros molestie hendrerit eu sodales urna. Nunc 
				tincidunt, elit akrwugh;oar aooairsgaoirjgo aoisrgoaijrgoia aoirsgjaiojg aoirsgjaio
				kaushgua aosuehfoajf oaisgoiasjg oairgoiajs gpoiargoiaopg aoigoai asigohg
				</p>
			</div>
		</motion.div>
	)
}