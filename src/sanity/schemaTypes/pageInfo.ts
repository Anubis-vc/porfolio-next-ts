import { defineType, defineField } from 'sanity';

export const pageInfo = defineType({
	name: 'pageInfo',
	title: 'Page Info',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'role',
			title: 'Role',
			type: 'string',
		}),
		defineField({
			name: 'heroImage',
			title: 'Hero Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'backgroundInfo',
			title: 'Background Info',
			type: 'string',
		}),
		defineField({
			name: 'profilePic',
			title: 'Profile Picture',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'phoneNumber',
			title: 'Phone Number',
			type: 'string',
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
		}),
		defineField({
			name: 'address',
			title: 'Address',
			type: 'string',
		}),
		defineField({
			name: 'socials',
			title: 'Socials',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'social' } }],
		}),
	],
});