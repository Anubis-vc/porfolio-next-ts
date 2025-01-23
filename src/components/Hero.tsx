"use client";
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import WaveAnimation from './WaveAnimation';
import profilePic from "../assets/IMG_6954_square.jpeg";
import Image from "next/image";
import Link from "next/link";

type Props = {}

function Hero({ }: Props) {
	const [text, count] = useTypewriter({
		words: [
			"Fullstack Development",
			"Machine Learning",
			"Film",
			"whatever you need",
		],
		loop: true,
		delaySpeed: 3000,
	});

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center
			text-center overflow-visible relative'>
			<WaveAnimation />
			<Image 
				className="rounded-full h-48 w-48 mx-auto object-cover"
				src={profilePic} 
				alt="picture of me" 
			/>

			<div className='z-10'>
				<h2 className='text-sm uppercase text-customGray pb-2 tracking-[10px]'>Software Engineer</h2>
				<h1 className='text-4xl lg:text-5xl font-semibold mb-3'>Hello, I am Ved Chugh</h1>
				<h2 className='text-2xl lg:text-3xl text-customGray font-semibold'>
					<span>I do {text}</span>
					<Cursor cursorColor="#65737E" />
				</h2>

				<div className='flex flex-row gap-2 items-center justify-center pt-5'>
					<Link href="#about">
						<button className='heroButton'>About</button>
					</Link>
					<Link href="#experience">
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href="#skills">
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href="#projects">
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;