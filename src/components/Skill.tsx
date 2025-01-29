"use client";
import React from 'react'
import { motion } from "motion/react"
import { SkillType } from '../../typings';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { formatDimensions } from '../../utils/formatUtils';

type Props = {
    index: number;
    skill: SkillType;
};

function Skill({ skill, index }: Props) {
  return (
    <motion.div
        initial={{ 
            opacity: 0,
        }}
        transition={{
            duration: 0.75,
            delay: index * 0.075,
        }}
        whileInView={{
            opacity: 1,
        }}
        viewport={{
            once: true,
            amount: 0.9,
        }}
        className='group relative flex cursor-pointer flex-shrink-0'
    >
        <Image
            src={urlFor(skill.image).url()}
            alt={skill.title}
			width={formatDimensions(skill.image.asset._ref).width}
			height={formatDimensions(skill.image.asset._ref).height}
            className='rounded-full border border-secondary object-cover object-center
            w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale 
            transition duration-200 ease-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition
        duration-200 ease-in-out group-hover:bg-white rounded-full z-0
        w-14 h-14 md:h-20 md:w-20 xl:w-24 xl:h-24'>
            <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Skill