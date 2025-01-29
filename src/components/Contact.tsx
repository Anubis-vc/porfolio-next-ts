"use client";
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form"
import { PageInfo } from '../../typings';
import WaveAnimation from './WaveAnimation';

type Props = {
	pageInfo: PageInfo;
}

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const Contact = ({ pageInfo }: Props) => {
	const {
		register,
		handleSubmit,
	} = useForm<Inputs>()



	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:vchugh@umd.edu?subject=${formData.subject}
		&body=Hi, my name is ${formData.name}. ${formData.message}`
	}

	return (
		<div className='h-screen relative flex flex-col text-center overflow-hidden
	md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-16 md:top-24 uppercase tracking-[0.8rem] md:tracking-[1.25rem] 
		text-customGray text-xl md:text-2xl'>
				Contact Me
			</h3>

			<div className='w-11/12 flex flex-col space-y-5 h-full items-center justify-center flex-shrink-0 max-h-96'>
				<div className='space-y-2'>
					<div className='flex items-center space-x-3 justify-center'>
						<PhoneIcon className='text-customGray animate-pulse h-6 w-6' />
						<p className='text-lg'>{pageInfo.phoneNumber}</p>
					</div>

					<div className='flex items-center space-x-3 justify-center'>
						<EnvelopeIcon className='text-customGray animate-pulse h-6 w-6' />
						<p className='text-lg'>{pageInfo.email}</p>
					</div>

					<div className='flex items-center space-x-3 justify-center'>
						<MapPinIcon className='text-customGray animate-pulse h-6 w-6' />
						<p className='text-lg'>{pageInfo.address}</p>
					</div>
				</div>

				<form 
					className='flex flex-col space-y-2 w-full mx-auto items-center'
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className='contactInput py-2'
						placeholder="Name"
						type="text"
						{...register('name')}
					/>
					<input
						className='contactInput py-2'
						placeholder="Email"
						type="email"
						{...register('email')}
					/>
					<input
						className='contactInput py-2'
						placeholder="Subject"
						type="text" 
						{...register('subject')}
					/>
					<textarea
						className='contactInput max-h-64'
						placeholder='Message'
						{...register('message')}
					/>
					<button className='bg-primary py-2 px-8 rounded-md text-black 
				font-semibold text-lg border-2 border-transparent hover:border-accent'
						type="submit">
						Submit
					</button>
				</form>
			</div>
			<WaveAnimation />
		</div>
	)
}

export default Contact