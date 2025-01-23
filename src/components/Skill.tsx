"use client";
import React from 'react'
import { motion } from "motion/react"
import pythonImg from "../assets/python-logo.svg.png"
import Image from 'next/image';

type Props = {
	directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
	<motion.div
		initial={{ 
			x: directionLeft ? -200 : 200,
			opacity: 0,
		}}
		transition={{ duration: 1 }}
		whileInView={{
			x: 0,
			opacity: 1,
		}}
		viewport={{ once: true }}
		className='group relative flex cursor-pointer'
	>
		<Image
			src={pythonImg.src}
			alt="skill image"
			width={640}
			height={703}
			className='rounded-full border border-secondary object-cover object-center
			w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale 
			transition duration-200 ease-out'
		/>
		<div className='absolute opacity-0 group-hover:opacity-80 transition
		duration-200 ease-in-out group-hover:bg-white rounded-full z-0
		h-20 w-20 xl:w-24 xl:h-24'>
			<div className='flex items-center justify-center h-full'>
				<p className='text-3xl font-bold text-black opacity-100'>100%</p>
			</div>
		</div>
	</motion.div>
  )
}

export default Skill