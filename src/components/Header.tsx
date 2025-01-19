import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
	<header className='sticky flex items-center justify-center top-0 bg-slateBlue h-16'>
		<div className='flex justify-between max-w-7xl mx-auto z-20 w-full px-4'>
			<div className="flex flex-row items-center gap-2">
				{/* Social Icons */}
				<SocialIcon 
					target="_blank"
					className='hover:scale-105 transition duration-200 ease-in-out'
					url="https://twitter.com/notved"
					fgColor="black" 
					bgColor="transparent"
				/>
				<SocialIcon
					target="_blank"
					className='hover:scale-105 transition duration-200 ease-in-out'
					url="https://www.instagram.com/ved.dchugh/"
					fgColor="black"
					bgColor="transparent"
				/>
				<SocialIcon
					target="_blank"
					className='hover:scale-105 transition duration-200 ease-in-out'
					url="https://www.linkedin.com/in/vedchugh"
					fgColor="black"
					bgColor="transparent"
				/>
				<SocialIcon
					target="_blank"
					className='hover:scale-105 transition duration-200 ease-in-out'
					url="https://github.com/Anubis-vc"
					fgColor="black"
					bgColor="transparent"
				/>
				<SocialIcon
					target="_blank"
					className='hover:scale-105 transition duration-200 ease-in-out'
					url="https://letterboxd.com/vedchugh/"
					fgColor="black"
					bgColor="transparent"
				/>
			</div>

			<div className='flex flex-row items-center text-black-300 cursor-pointer mr-2.5
				hover:scale-105 transition duration-200 ease-in-out'>
				<SocialIcon
					target="_blank"
					network="email"
					fgColor="black"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-black-400">Contact Me</p>
			</div>
		</div>
	</header>
  );
}