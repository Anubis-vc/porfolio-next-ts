"use client";
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
		formState: { errors },
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		const subject = encodeURIComponent(formData.subject);
		const body = encodeURIComponent(
			`Hi, my name is ${formData.name} (${formData.email}). ${formData.message}`
		);
		const mailtoLink = `mailto:${pageInfo.email}?subject=${subject}&body=${body}`;
		window.location.assign(mailtoLink);
	}

	return (
		<div className='h-screen relative flex flex-col text-center overflow-hidden
		md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-16 md:top-24 uppercase tracking-[0.8rem] md:tracking-[1.25rem] 
			text-customGray text-xl md:text-2xl'>
				Contact Me
			</h3>

			<div className='w-11/12 flex flex-col space-y-5 h-full items-center justify-center shrink-0 max-h-96'>
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
						className='flex flex-col space-y-2 w-full mx-auto items-center z-10'
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							id="contact-name"
							className='contactInput py-2'
							placeholder="Name"
							type="text"
							aria-label="Name"
							aria-invalid={errors.name ? "true" : "false"}
							{...register('name', { required: "Name is required" })}
						/>
						{errors.name && (
							<p className='w-full max-w-[525px] text-sm text-left text-accent'>{errors.name.message}</p>
						)}
						<input
							id="contact-email"
							className='contactInput py-2'
							placeholder="Email"
							type="email"
							aria-label="Email"
							aria-invalid={errors.email ? "true" : "false"}
							{...register('email', {
								required: "Email is required",
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "Enter a valid email address",
								},
							})}
						/>
						{errors.email && (
							<p className='w-full max-w-[525px] text-sm text-left text-accent'>{errors.email.message}</p>
						)}
						<input
							id="contact-subject"
							className='contactInput py-2'
							placeholder="Subject"
							type="text" 
							aria-label="Subject"
							aria-invalid={errors.subject ? "true" : "false"}
							{...register('subject', { required: "Subject is required" })}
						/>
						{errors.subject && (
							<p className='w-full max-w-[525px] text-sm text-left text-accent'>{errors.subject.message}</p>
						)}
						<textarea
							id="contact-message"
							className='contactInput max-h-64'
							placeholder='Message'
							aria-label="Message"
							aria-invalid={errors.message ? "true" : "false"}
							{...register('message', {
								required: "Message is required",
								minLength: {
									value: 10,
									message: "Message must be at least 10 characters",
								},
							})}
						/>
						{errors.message && (
							<p className='w-full max-w-[525px] text-sm text-left text-accent'>{errors.message.message}</p>
						)}
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
