"use client";
import React from 'react'
import { motion } from "motion/react";
import Skill from './Skill';

type Props = {}

function Skills({}: Props) {
  return (
	<motion.div
	initial={{ opacity: 0 }}
	whileInView={{ opacity: 1 }}
	transition={{ duration: 1.5 }}
	viewport={{ once: true, amount: 0.5 }}
	className='h-screen min-h-screen flex relative flex-col
	text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 
	justify-center xl:space-y-0 mx-auto items-center pt-24'>
		<h3 className='absolute top-24 uppercase tracking-[1.25rem] 
		text-customGray text-2xl'>
			Skills
		</h3>

		<h3 className='absolute top-36 uppercase tracking-[3px] text-customGray text-sm'>
			Hover over skill for proficiency
		</h3>

		<div className='grid grid-cols-4 gap-5'>
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
			<Skill />
		</div>
	</motion.div>
  )
}

export default Skills;