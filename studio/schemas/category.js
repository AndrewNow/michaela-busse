import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Content category types',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: "Define a sortable section here. These can be referenced in other areas of the CMS, such as the news or posts sections.",
      type: 'string',
    }),
  ],
})
