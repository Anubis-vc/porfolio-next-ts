"use client";
import { motion } from 'motion/react';
import React from 'react'
import stateFarm from "../assets/stateFarm.png";

type Props = {}

function ExpCard({}: Props) {
  return (
	<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
	w-[400px] md:w-[500px] xl:w-[700px] snap-center border-2 border-primary p-5
	opacity-80 hover:opacity-100 hover:shadow-slate-500/50 hover:shadow 
	cursor-pointer transition-all duration-200 max-h-[500px] overflow-y-scroll'>
		<motion.img
			initial={{ x: -100, opacity: 0}}
			transition={{ duration: 1.2 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			src={stateFarm.src}
			alt="state farm logo"
			className='w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px]
			object-cover object-center'
		/>

		<div className='px-0 md:px-10'>
			<h4 className='text-4xl font-white'>
				Job Title at Company
			</h4>
			<p className='font-bold text-2xl mt-1'>STATE FARM</p>
			<div className='flex space-x-2 my-2'>
				{/* tech used */}
				{/* tech used */}
				{/* tech used */}
			</div>
			<p className='uppercase py-2 text-customGray'>
				Started work... Ended ...
			</p>

			<ul className='list-disc space-y-2 ml-5 text-lg'>
				<li>summary points and i can add to it and lets see what happens</li>
				<li>summary points and i can add to it and lets see what happens</li>
				<li>summary points and i can add to it and lets see what happens</li>
				<li>summary points and i can add to it and lets see what happens</li>
			</ul>
		</div>
	</article>
  )
}

export default ExpCard