import { defineType, defineField } from 'sanity';

export const experience = defineType({
	name: 'experience',
	title: 'Experience',
	type: 'document',
	fields: [
		defineField({
			name: 'jobTitle',
			title: 'Job Title',
			type: 'string',
		}),
		defineField({
			name: 'companyImg',
			title: 'Company Image',
			type: 'image',
			options: {
				hotspot: true,
			}
		}),
		defineField({
			name: 'company',
			title: 'Company',
			type: 'text',
		}),
		defineField({
			name: 'dateStarted',
			title: 'Date Started',
			type: 'date',
		}),
		defineField({
			name: 'dateEnded',
			title: 'Date Ended',
			type: 'date',
		}),
		defineField({
			name: 'isCurrentJob',
			title: 'Is Current Job',
			type: 'boolean',
		}),
		defineField({
			name: 'technologies',
			title: 'Technologies',
			type: 'array',
			of: [{ type: "reference", to: { type: "skill" }}],
		}),
		defineField({
			name: 'points',
			title: 'Points',
			type: 'array',
			of: [{ type: 'string' }],
		}),
	],
});