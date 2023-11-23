import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'generalInfo',
  title: 'General info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      initialValue: "Michaela Büsse",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: "Researching postnatural landscapes",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      description: "Define a biography here.",
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
