"use client";
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form"
import { PageInfo } from '../../typings';

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
		<div className='h-screen relative flex flex-col text-center pt-16
	md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[1.25rem] 
		text-customGray text-2xl'>
				Contact Me
			</h3>

			<div className='flex flex-col space-y-5 h-full justify-center flex-shrink-0 max-h-96'>
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
					className='flex flex-col space-y-2 w-fit mx-auto items-center'
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='space-x-2'>
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
					</div>
					<input
						className='contactInput w-full py-3'
						placeholder="Subject"
						type="text" 
						{...register('subject')}
					/>
					<textarea
						className='contactInput w-full max-h-64'
						placeholder='Message'
						{...register('message')}
					/>
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