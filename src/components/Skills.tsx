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
	className='h-screen min-h-screen flex relative flex-col max-h-[1000px] px-5
	justify-center xl:space-y-0 mx-auto items-center pt-24 overflow-x-scroll'>
		<h3 className='absolute top-24 uppercase tracking-[1.25rem] 
		text-customGray text-2xl'>
			Skills
		</h3>

		<h3 className='absolute top-36 uppercase tracking-[3px] text-customGray text-sm'>
			Hover over skill for proficiency
		</h3>

		<div className='grid grid-cols-5 gap-5'>
			{skills?.slice(0, skills.length / 2).map((skill) => (
				<Skill key={skill._id} skill={skill}/>
			))}

			{skills?.slice(skills.length / 2, skills.length).map((skill) => (
				<Skill key={skill._id} skill={skill} directionLeft/>
			))}
		</div>
	</motion.div>
  )
}

export default Skills;