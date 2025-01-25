import { defineType, defineField } from 'sanity';

export const skill = defineType({
	name: 'skill',
	title: 'Skill',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			description: 'Title of Skill',
			type: 'string',
		}),
		defineField({
			name: 'progress',
			title: 'Progress',
			type: 'number',
			description: 'Progress of skill from 0 to 100',
			validation: rule => rule.required().min(0).max(100),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
});