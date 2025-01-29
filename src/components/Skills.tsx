"use client";
import React from 'react'
import { motion } from "motion/react";
import Skill from './Skill';
import { SkillType } from '../../typings';

type Props = {
	skills: SkillType[];
}

function Skills({ skills }: Props) {
  return (
	<motion.div
	initial={{ opacity: 0 }}
	whileInView={{ opacity: 1 }}
	transition={{ duration: 1.5 }}
	viewport={{ once: true, amount: 0.5 }}
	className='min-h-screen flex relative flex-col px-5 justify-center mx-auto items-center'>
		<h3 className='absolute top-16 md:top-24 uppercase tracking-[0.8rem] md:tracking-[1.25rem] 
		text-customGray text-xl md:text-2xl'>
			Skills
		</h3>

		<h3 className='absolute top-24 md:top-36 uppercase tracking-[1px] md:tracking-[3px] text-customGray text-sm'>
			Hover over skill for proficiency
		</h3>

		<div className='grid grid-cols-4 gap-3 md:grid-cols-5 lg:grid-cols-6
		md:gap-5 max-w-6xljustify-items-center md:pt-20'>
			{skills?.map((skill, index) => (
				<Skill key={skill._id} skill={skill} index={index}/>
			))}
		</div>
	</motion.div>
  )
}

export default Skills;