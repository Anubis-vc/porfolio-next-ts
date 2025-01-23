import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {}

const Contact = (props: Props) => {
  return (
	<div className='h-screen relative flex flex-col text-center pt-32
	md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
		<h3 className='absolute top-24 uppercase tracking-[1.25rem] 
		text-customGray text-2xl'>
			Contact Me
		</h3>

		<div className='flex flex-col space-y-5'>
			<div className='space-y-3'>
				<div className='flex items-center space-x-3 justify-center'>
					<PhoneIcon className='text-customGray animate-pulse h-6 w-6'/>
					<p className='text-lg'>+123456789</p>
				</div>

				<div className='flex items-center space-x-3 justify-center'>
					<EnvelopeIcon className='text-customGray animate-pulse h-6 w-6'/>
					<p className='text-lg'>vchugh@umd.edu</p>
				</div>

				<div className='flex items-center space-x-3 justify-center'>
					<MapPinIcon className='text-customGray animate-pulse h-6 w-6'/>
					<p className='text-lg'>Princeton, NJ</p>
				</div>
			</div>

			<form className='flex flex-col space-y-2 w-fit mx-auto items-center'>
				<div className='space-x-2'>
					<input className='contactInput' placeholder="Name"type="text" />
					<input className='contactInput' placeholder="Email" type="email" />
				</div>
				<input className='contactInput w-full' placeholder="Subject" type="text" />
				<textarea className='contactInput w-full' placeholder='Message'/>
				<button className='w-1/2 bg-primary py-2 px-8 rounded-md text-black 
				font-bold text-lg border-2 border-transparent hover:border-accent' 
				type="submit">
					Submit
				</button>
			</form>
		</div>
	</div>
  )
}

export default Contact