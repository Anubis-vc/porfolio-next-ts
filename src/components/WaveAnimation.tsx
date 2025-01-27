"use client";
import React from 'react'
import { motion } from "motion/react";

export default function WaveAnimation() {
	return (
		<motion.div
		initial={{
			opacity: 0,
		}}
		animate={{
			opacity: 0.5,
		}}
		transition={{
			duration: 7,
		}}
		className="absolute bottom-[15%] left-1/3 transform rotate-[80deg]">
			<div className="absolute w-[1500px] h-[1300px] -ml-[150px] -mt-[250px] rounded-[43%]
	  	opacity-80 bg-light animate-[rotate_13s_linear_infinite]" />
			<div className="absolute w-[1500px] h-[1300px] -ml-[150px] -mt-[250px] rounded-[43%]
	  	opacity-5 bg-black animate-[rotate_6s_linear_infinite]" />
			<div className="absolute w-[1500px] h-[1300px] -ml-[150px] -mt-[250px] rounded-[43%]
	  	opacity-20 bg-secondary animate-[rotate_15s_linear_infinite]" />
		</motion.div>
	);
}