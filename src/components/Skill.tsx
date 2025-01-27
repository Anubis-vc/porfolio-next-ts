"use client";
import React from 'react'
import { motion } from "motion/react"
import { SkillType } from '../../typings';
import { urlFor } from '@/sanity/lib/image';

type Props = {
    directionLeft?: boolean;
    skill: SkillType;
};

function Skill({ skill, directionLeft }: Props) {
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
        <img
            src={urlFor(skill.image).url()}
            alt={skill.title}
            className='rounded-full border border-secondary object-cover object-center
            w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale 
            transition duration-200 ease-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition
        duration-200 ease-in-out group-hover:bg-white rounded-full z-0
        h-20 w-20 xl:w-24 xl:h-24'>
            <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Skill