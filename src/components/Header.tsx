'use client';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "motion/react";
import Link from 'next/link';
import { Social } from '../../typings';

type Props = {
	socials: Social[];
}

export default function Header({ socials }: Props) {
	const iconBounceVariants = {
		initial: {
			y: 0
		},
		animate: {
			y: [-50, 0],
			transition: {
				duration: 0.5,
				ease: "easeOut",
			}
		}
	};

	const containerVariants = {
		initial: {
			opacity: 1
		},
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25
			}
		}
	};

	return (
		<header className='sticky flex items-center justify-center top-0 bg-primary h-12 md:h-16 z-20'>
			<div className='flex justify-between max-w-7xl mx-auto w-full p-2 sm:p-5 xl:items-center'>
				<motion.div
					variants={containerVariants}
					initial="intial"
					animate="animate"
					transition= {{
						type: "spring",
    					duration: 0.5,
    					bounce: 0.25
					}}
					className="flex flex-row items-center sm:gap-2 md:gap-4"
				>
					{socials.map((social => (
						<motion.div
							key={social._id}
							variants={iconBounceVariants}>
							<SocialIcon
								target="_blank"
								className='hover:scale-105 transition duration-200 ease-in-out'
								url={social.url}
								fgColor="black"
								bgColor="transparent"
							/>
						</motion.div>
					)))}
				</motion.div>

				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
				>
					<Link href="#contact">
						<div className='flex flex-row items-center cursor-pointer
							hover:scale-105 transition duration-200 ease-in-out'
						>
							<SocialIcon
							as="span"
							target="_blank"
							network="email"
							fgColor="black"
							bgColor="transparent"
							/>
							<p className="uppercase hidden md:inline-flex text-sm text-black-400">
								Contact Me
							</p>
						</div>
					</Link>
				</motion.div>
			</div>
		</header>
	);
}