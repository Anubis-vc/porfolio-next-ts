"use client";
import React from 'react';
import { motion } from "motion/react";
import ExpCard from './ExpCard';
import { Experience } from '../../typings';

type Props = {
	experiences: Experience[];
}

function Experiences({ experiences }: Props) {
  return (
	<motion.div
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		transition={{ duration: 1.5 }}
		viewport={{ once: true, amount: 0.5 }}
		className='h-dvh flex relative overflow-hidden text-left
		md:flex-row max-w-full px-3 md:px-10 justify-evenly mx-auto items-center pt-12 md:pt-24'
	>

		<h3 className='absolute top-16 md:top-24 uppercase tracking-[0.8rem] md:tracking-[1.25rem] 
		text-customGray text-xl md:text-2xl'>
			Experience
		</h3>

		<div className='w-full h-[83%] flex space-x-3 md:space-x-7 overflow-x-scroll p-5 md:p-10 snap-x snap-mandatory
		2xl:justify-center scrollbar-thin scrollbar-track-[#65737E]/20 scrollbar-thumb-secondary'>
			{experiences?.map((exp => (
				<ExpCard
					key={exp._id}
					experience={exp}	
				/>
			)))}
		</div>
	</motion.div>
  )
}

export default Experiences;