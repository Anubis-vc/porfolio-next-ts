import { defineType, defineField } from 'sanity';

export const project = defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			description: 'Title of the project',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'summary',
			title: 'Summary',
			type: 'text',
		}),
		defineField({
			name: 'technologies',
			title: 'Technologies',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'skill' }}],
		}),
		defineField({
			name: 'link',
			title: 'Link',
			type: 'url',
		}),
		defineField({
			name: 'priority',
			title: 'priority',
			type: 'number'
		})
	],
});